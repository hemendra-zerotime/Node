const fl = require("fs/promises")
const folder = "./output1"

async function readWrite() {
    try {
        const file = await fl.readFile("./file/intro.txt", "utf-8")
        await fl.writeFile(`${folder}/output.txt`, file)
    } catch (error) {
        if (error.errno === -2) {
            try {
                await fl.mkdir(folder)
                readWrite()
            } catch (error) {
                console.log(error)
            }
        }
    }

}
readWrite()