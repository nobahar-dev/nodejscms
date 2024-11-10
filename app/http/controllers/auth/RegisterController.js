class RegisterController {
    showRegisterPage(request, response) {
        response.render('register.ejs')
    }

    registerProcess(request, response) {
        // Check name input
        request.checkBody('name', 'فیلد نام نمی تواند خالی باشد').notEmpty()
        request.checkBody('name', 'فیلد نام کمتر از 5 حرف نباشد').isLength(5)
        // Check email input
        request.checkBody('email', 'فیلد ایمیل نمی تواند خالی بماند').notEmpty()
        request.checkBody('email', 'ایمیل معتبر نمی باشد').isEmail()
        // Check password input
        request.checkBody('password', 'فیلد پسورد نمی تواند خالی بماند').isEmpty()
        request.checkBody('password', 'گذرواژه کمتر از 8 کاراکتر نباشد').isLength(8)

        request.getValidationResult()
    }
}

module.exports = new RegisterController()