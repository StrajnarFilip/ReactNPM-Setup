const express = require("express")
const fs = require("fs")
const static_options = require("./options.js")
const sendFile_options = require("./sendfile_options.js")

const app = express();

const port = 3001

app.use(express.static("./static", static_options))

app.get('/', (req: any, res: any) => {
    res.sendFile("index.html", sendFile_options, (err: any) => { console.log(err); })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})