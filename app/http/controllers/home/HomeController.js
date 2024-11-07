class HomeController {
    index(request, response) {
        response.json(this.homeMessage())
    }

    homeMessage() {
        return "Home Message"
    }
}

module.exports = new HomeController()