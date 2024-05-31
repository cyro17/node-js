const fs = require("fs");

const requesthandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text-html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input input name = "message" type = "text" > <button>send</button></input ></form ></body > '
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text-html");
  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Hello node !!</h1></body>");
  res.write("</html>");
  res.end();
};

// some different methods to export module

// module.exports = requesthandler;

// module.exports = {
//   handler: requesthandler,
//   someText: "some hard coded text",
// };

// module.exports.handler = requesthandler;
// module.exports.someText = "some hard coded text";

exports.handler = requesthandler;
// exports.someTexts = "Some hard coded texts";
