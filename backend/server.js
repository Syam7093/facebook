const mongoose = require("mongoose")
const cors = requre("cors")
let name = "sai"

const randomFunction = (type) => {
    if (type == "true")
    {
        console.log('this is true condition')
        }
    else {
        console.log('this is fasle condition')
        console.log("this is sai")
        }
}


randomFunction()