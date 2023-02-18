// const  products =[];

const fs =require("fs");
const path =require("path");


module.exports = class Product{

    constructor(title){
        this.title = title;
    }

    save(){
        // products.push(this);
        const p =path.join(path.dirname(__dirname) , "data" ,"products.json");


        fs.readFile(p , (err , fileContent)=>{
            let products =[];
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p , JSON.stringify(products) , (err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        // return procbducts;
        const p =path.join(path.dirname(__dirname) , "data" ,"products.json");

        fs.readFile(p, (err , fileContent)=>{
            if(err){
                // return [];
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
    }
}