const express = require('express');


const port = 5000;
const app = express();




app.use(require('./router/auth'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})