var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

var Product = require('../model/product');

var diskStorage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null,'./public/images/uploads')
  },
  filename: (req, file, cb)=>{
    cb(null, file.fieldname +'-'+Date.now() + '.jpeg')
  }
});
var fileFilter = (req, file, cb)=> {
  (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') ? cb(null, true) : cb(null, false)
}

var upload = multer({
  storage: diskStorage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**Products section */

/** Product Add - POST */

router.post('/products/add-product', upload.single('image'), (req,res,next)=>{
   var imagePath = fs.readFileSync(__dirname + '/../public/images/uploads/'+req.file.filename);
   var nProduct  = new Product();

   nProduct.title = req.body.title;
   nProduct.price = req.body.price;
   nProduct.description = req.body.description;
   nProduct.productImage.name = req.file.filename;
   nProduct.productImage.contentType = 'image/jpeg';
   nProduct.productImage.data = imagePath;


   nProduct.save().then(result=>{
     res.status(201).send({
    message: "upload image successfully",
    product: {
        doc: result,
        _id: result._id,
        request: {
            type: 'GET',
            url: "http://localhost:3000/products/" + result._id
        }
    }
  });
   });
     
});


/** Product  - GET */


router.get('/products', (req,res,next)=>{
  Product.find().exec().then(doc=>{
    if(doc.length>0){
    
      res.status(201).json({
        products: {
          prod: doc,
        }
      });
    }
    else{
      res.status(201).send({products: 'Empty products'});

    }
  }).catch(err=>{
    res.status(501).send({'err': 'Internal error in fetching products'});
  })
})


router.get('/products/:id', (req,res,next)=>{
  const id = req.params.id;
  Product.findById(id).exec().then(doc=>{
    if(doc){
    
      res.status(201).json({
        product:{
          id: doc._id,
          title: doc.title,
          description: doc.description,
          url: 'http://localhost:3000/static/images/uploads/'+ doc.productImage.name,
          price: doc.price
        }        
      });
    }
    else{
      res.status(201).send({product: 'Product not found'});

    }
  }).catch(err=>{
    res.status(501).send({'err': 'Internal error in fetching product'});
  })
})


module.exports = router;












