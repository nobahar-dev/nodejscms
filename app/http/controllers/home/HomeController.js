class HomeController {
    renderHomePage(request, response) {
        response.render('home.ejs')
    }
}

module.exports = new HomeController()