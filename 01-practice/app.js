const http = require("node:http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
      res.setHeader("Content-Type", "text-html");
      res.write("<html>");
      res.write("<head><title>Enter User</title></head>");
      res.write(
        '<body><form action="/create-user" method="POST"><input input name = "username" type = "text" ><button>send</button></input ></form ></body > '
      );
    }

    if (url === "/create-user" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        // console.log(parsedBody);
        const username = parsedBody.split("=")[1];
        fs.writeFile("username.txt", username, (error) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
        return res.end();
      });
    }
  })
  .listen(9000);
