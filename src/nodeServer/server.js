const { createServer } = require('http')

const port = 8000

const app = createServer((req, res) => {
    const { path } = req
    console.log('path ===', req.headers)
    res.end('node demo =====', path)
})

app.listen(port, () => console.log('running on http://localhost:' + port))