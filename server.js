var express = require('express')
var app = express()

app.get("/", (request, response) => {
    response.send("send get request to /ascii/{string} where string is the string you want to convert to ascii")
})

app.get("/ascii/:string", (request, response) => {
    var string = request.params.string
    var endstring = ""

    // found
    if(string.indexOf('<') >= 0){
        response.redirect('/error')
    }else{
        function convertToAscii(str) {
            for (var i = 0; i < str.length; i++) {
                endstring += str.charCodeAt(i) + " "
            }
        }
        convertToAscii(string)
        response.send(endstring)
    }
})

app.get('/error' , (request,response) => {
    response.send('sneaky ass mofo!')
})

app.listen(4000)