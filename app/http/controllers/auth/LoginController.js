class LoginController {
    showLoginPage(request, response) {
        response.render('login.ejs')
    }
}

module.exports = new LoginController()