const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoutes=require('./routes/product.routes.js');

app.use(express.json());
//to use forms
app.use(express.urlencoded({extended:false})); 

//routes
app.use('/api/products',productRoutes);

app.get('/', function (req, res) {
    res.send('Hello World updated');
  })

//Node-API -- collection
mongoose.connect('mongodb+srv://admin:seanrahman@backenddb.mwaoi57.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then ( () => {
  console.log('Connected to database.');
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
})
.catch( ()=>{
  console.log('Connection Failed!');
});


//Commented Out
/*
app.get('/api/products', async(req,res) =>  {
    try{
      //more than 1 product
      const products= await Product.find({});
      res.status(200).json(products);
    }
    catch(error)
    {
      res.status(500).json({message:message.error});
    }
});

app.get('/api/product/:id', async(req,res) =>  {
  try{
    const { id } =req.params;
    const product= await Product.findById(id);
    res.status(200).json(product);
  }
  catch(error)
  {
    res.status(500).json({message:error.message});
  }
});


app.post('/api/products', async(req,res) =>
{
  try{
    const product= await Product.create(req.body);
    res.status(200).json(product);
  }
  catch(error)
  {
    res.status(500).json({message:error.message});
  }
});


//--update--
app.put('/api/product/:id', async(req,res) =>
  {
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body);
      
      if(!product)
      {
          return res.status(404).json({message:"Product not found."});
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    }
    catch(error)
    {
      res.status(500).json({message:error.message});
    }
  });


//--delete--
app.delete('/api/product/:id', async(req,res) =>
  {
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      
      if(!product)
      {
          return res.status(404).json({message:"Product not found."});
      }
      res.status(200).json({message:"deleted successfully."});
    }
    catch(error)
    {
      res.status(500).json({message:error.message});
    }
  });
  */
