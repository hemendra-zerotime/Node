import { error } from "console";
import fs from "fs"
import http from "http"
import { setDefaultHighWaterMark } from "stream";


const server = http.createServer();
const port = process.env.PORT || 9000
let count: number = 0
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("./src/assets/dem.txt")
    rstream.on("open", () => {
        res.writeHead(200, "success")
    })
    rstream.on("data", (chunksdata) => {
        res.write(chunksdata)
        console.log(count)
        count++

    })

    rstream.on("error", (err: Error) => {

        if (!res.headersSent) {
            res.writeHead(404, "No data found")
        }

        res.end(`${res.statusCode} ${res.statusMessage}`)
    })

    rstream.on("finish", () => {
        res.end()
    })


})


server.listen(port, () => {
    console.log("server listening to port", port)
})