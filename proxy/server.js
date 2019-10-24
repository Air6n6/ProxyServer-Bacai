const express = require('express');
const path = require('path')

const app = express()
const port = 9000

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/air6n6/*/listing', express.static(path.join(__dirname, './public'))) //proxy endpoint putting this in read me for client to put in url
app.use(express.json())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/getAll', (req, res) => {
//   res.redirect('localhost:9001/getAll');
// });

