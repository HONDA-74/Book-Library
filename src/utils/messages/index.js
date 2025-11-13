export const generateMessages= (entity) => {
        return {
            notFound : `${entity} not found`,
            alreadyExist : `${entity} already exist`,
            Created : `${entity} created successfully`,
            sent : `${entity} sent successfully`,
            verified : `${entity} verified successfully`,
            found : `${entity} found successfully`,
            Deleted : `${entity} deleted successfully`,
            Freezed : `${entity} freezed successfully`,
            Updated : `${entity} updated successfully`,
            notCreated : `${entity} create failed`,
            notDeleted : `${entity} delete failed`,
            notUpdated : `${entity} update failed`,
            notSent : `${entity} send failed`,
            notAllowed :`${entity} not allowed` ,
            invalidCrad : `Invalid cradinials`, 
            emailActivate : `Email not activated yet please activate it first and try again`,
            emailVerify : `Email verified successfully`,
            emailAlreadyExist : `Email already exist`,
        }
}
export const messages = {
    user : generateMessages("User"),
    book : generateMessages("Book"),
    borrow_book :generateMessages("Borrowed book")
}