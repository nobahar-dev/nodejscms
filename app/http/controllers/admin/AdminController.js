class AdminController {
    dashboard(request, response) {
        response.json('dashboard page')
    }

    courses(request, response) {
        response.json('course page')
    }
}

module.exports = new AdminController()