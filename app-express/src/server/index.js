
const http = require("http");

const app = require("./app");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, error => {

    if (error) {
        return console.log(error);
    }

    console.log("🚀 Server started on port " + PORT);

});
