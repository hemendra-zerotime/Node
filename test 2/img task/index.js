const fs = require("fs")
const fl = require("fs/promises")
const folder = "./output1"
const folder2 = "./output2"


function usingCallback() {
    fs.readFile("./asset/Image.jpeg", (err, img) => {
        if (err) throw err;
        if (fs.existsSync(folder)) 
            {
            console.log("folder available")
            fs.writeFile(`${folder}/out.jpeg`, img, (err) => {
                if (err) throw err
                console.log('image stored')
            })

        }
        else {
            console.log("folder not available")
            fs.mkdir(folder, (err) => {
                if (err) throw err
                console.log("folder created")
                fs.writeFile(`${folder}/out.jpeg`, img, (err) => {
                    if (err) throw err
                    console.log('image stored')
                })
            })
        }
    })
}


async function usingPromise() {
    try {
        const imgs = await fl.readFile("./asset/Image.jpeg")
        await fl.writeFile(`${folder2}/res.jpeg`, imgs)
    } catch (error) {
        if (error.errno) {
            try {
                await fl.mkdir(folder2)
            } catch (error) {
                console.log(error)
            }
            usingPromise()
        }
    }

}

usingCallback()

// usingPromise()