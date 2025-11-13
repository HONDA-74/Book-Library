import { Book } from "../../../db/models/book.model.js"
import { BorrowedBook } from "../../../db/models/borrowedBook.model.js"
import { Library } from "../../../db/models/library.model.js"
import { roles } from "../../../db/models/user.model.js"
import { authenticate } from "../../../graphQl/auth.graphQl.js"
import { isAuthorized } from "../../../graphQl/authorization.graphQl.js"
import { validation } from "../../../graphQl/validation.graphQl.js"
import { messages } from "../../../utils/index.js"
import { addBookSchema, borrowBookSchema } from "./book.validation.js"

export const addBook = async (_ , args , context) =>{
    const { title, author, publishedYear , genre , availableCopies } = args
    const {authorization} = context
    let authUser =await authenticate(authorization)
    isAuthorized(roles.USER , authUser )
    validation(addBookSchema , args)

    const newBook = new Book({
        title,
        author,
        publishedYear,
        genre,
        availableCopies
    })

    await newBook.save()
    return {success : true , data : newBook}
}

export const borrowBook = async (_, args , context) => {
    const { id } = args
    const {authorization} = context

    let authUser = await authenticate(authorization)
    isAuthorized(roles.USER, authUser)
    validation(borrowBookSchema, args)

    const book = await Book.findById(id)
    if (!book) {
        throw new Error("Book not found")
    }

    if (book.availableCopies <= 0) {
        throw new Error("No copies available to borrow")
    }

    book.availableCopies -= 1
    await book.save()

    const borrowedAt = new Date() 
    const dueDate = new Date()      
    dueDate.setDate(borrowedAt.getDate() + 2);

    const borrowedBook = new BorrowedBook({
        userId: authUser._id,
        bookId: book._id,
        dueDate,
        borrowedAt
    })

    await borrowedBook.save()

    if (!borrowedBook) {
        throw new Error("Book not found")
    }
    
    return {success : true , data : borrowedBook}
}

export const markBookAvailable = async (_, args, context) => {
    const { id } = args
    const { authorization } = context

    let authUser = await authenticate(authorization)
    isAuthorized(roles.USER, authUser)
    validation(borrowBookSchema, args)

    const book = await Book.findById(id)
    if (!book) {
        throw new Error("Book not found")
    }

    const borrowedBook = await BorrowedBook.findOne({
        bookId: id,
        userId: authUser._id,
        returned: false,
    })

    if (!borrowedBook) {
        throw new Error("No active borrowed record found for this book")
    }

    borrowedBook.returned = true
    await borrowedBook.save()

    book.availableCopies += 1
    await book.save()

    return { success: true, message: "Book returned successfully", data: borrowedBook }
}

export const getAllBooks = async () => {
    const books =await Book.find()

    if(books.length == 0) throw new Error(messages.book.notFound)

    return {success:true , data : books }
}

export const getBookByID = async (_,args) => {
    const {id} = args
    const book = await Book.findById(id)

    if(!book) throw new Error(messages.book.notFound)

    return {success : true , data : book}
}

export const getLibrary = async () =>{
    const libraries =await Library.find()

    if(libraries.length == 0) throw new Error(messages.book.notFound)

    return {success:true , data : libraries }
}

export const getOverDueBorowedBooks = async () => {
    const overdueBooks = await BorrowedBook.find({ dueDate: { $lt: new Date() }, returned: false })
    
    return {success : true , data : overdueBooks}
}
