const { createServer } = require('http')

const port = 8010

const app = createServer((req, res) => {
    const { url } = req
    console.log('path ===', url, req.headers)
    res.end(JSON.stringify(req.headers))
})

app.listen(port, () => console.log('running on http://localhost:' + port))