// https://expressjs.com/en/guide/using-middleware.html

const express = require('express')
const app = express()
express.Router(['strict', 'caseSensitive'])

const app_route = express()

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()


})

app.use('/user/:userid/session/:sessionId', function (req, res, next) {
    console.log('Request Type:', req.method)
    console.log('Request url:', req.path)
    console.log('Request userid:', req.params.userid)
    console.log('Request sessionId:', req.params.sessionId)
    console.log('Request params:', req.params)
    next()
})

app.get('/user/*', function (req,res, next) {
    console.log(('start'))
    console.log(req.route)
    res.send()

})

app.listen(4000, () => {
    console.log('lisening on port 4000')
});

app_route.listen(4100,() => {
    console.log('app_route lisen on port 4100')
})
