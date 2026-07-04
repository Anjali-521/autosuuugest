const express = require('express')
const app = express()
const port = process.env.PORT || 3002
//console.log("frontend");
app.use(express.static("frontend"))
app.listen(port, function(){
    console.log("succeefully running at http://localhost:"+port)
})
//web server:

