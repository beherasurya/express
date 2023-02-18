const Product =require("../models/product");


exports.getAddProduct = (req, res, next)=>{
    // res.sendFile(path.join(__dirname ,"../","views" ,"add-product.html"));
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/add-product",
        formsCSS: true,
        products: true,
        activeAddProduct: true
    });

}

exports.postAddProduct = (req , res, next)=>{
    const product =new Product(req.body.title);
    product.save();
    res.redirect("/");
    // products.push({title :req.body.title});


}

exports.getProducts =(req, res, next)=>{
    // console.log(adminData.products);
    // const products =adminData.products;
    // res.sendFile(path.join(__dirname ,"../", "views" , "shop.html"));
    // const products = 
    Product.fetchAll((products) =>{
        res.render("shop" ,{
            // prods : adminData.products,
            prods: products,
            pageTitle: "Shop",
            path: "/",
            hasProducts: products.length >0,
            activeShop: true,
            productCSS: true
        });
    });
    };
    