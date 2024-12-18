"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
const port = process.env.PORT || 9000;
let count = 0;
server.on("request", (req, res) => {
    const rstream = fs_1.default.createReadStream("./src/assets/demo.txt");
    rstream.on("open", () => {
        res.writeHead(200, "success");
    });
    rstream.on("data", (chunksdata) => {
        res.write(chunksdata);
        console.log(count);
        count++;
    });
    rstream.on("error", (err) => {
        if (!res.headersSent) {
            res.writeHead(404);
        }
        console.log(res.statusCode);
        res.end(`${res.statusCode} ${res.statusMessage}`);
    });
    rstream.on("finish", () => {
        res.end();
    });
});
server.listen(port, () => {
    console.log("server listening to port", port);
});
