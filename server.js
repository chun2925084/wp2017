const express = require('express')
const app = express()
const port = 10000
app.use(express.static(__dirname + '/public'))
app.get('/get_data',function(req, res){
    res.send("Hello , "+req.query.username+" ! Your student id is " + req.query.studentId + ".")
    })

app.get("/a_data", function(req, res) {
            res.send("Ajax!")
                })
                 

app.listen(port)
