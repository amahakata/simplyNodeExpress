const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/products',productRoute)

//DB connection

mongoose.connect('mongodb+srv://narkterminal1:BcGzms8C7ihCMhyo@cluster0.ahospuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {console.log('Connected!');

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      })
})
.catch(()=> {console.log('Connection failed')});