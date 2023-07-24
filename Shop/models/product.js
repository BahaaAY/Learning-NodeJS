const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');
const dataPath = path.join(rootDir,'data','savedData.json');
const getSavedData =(callBack) =>
    {
        
        fs.readFile(dataPath,(err, fileContent)=>{
            let products =[]
            if(!err)
            {
                callBack(products = JSON.parse(fileContent));

            }else
        {
            callBack([]);
        }});
    }
 module.exports = class Product{
    constructor(title)
    {
        this.title = title;
    }

    
     save() {
        getSavedData(products =>{
            products.push(this);
            fs.writeFile(dataPath,JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
        
        
    }
    static fetchAll(callBack) 
    {
        getSavedData(callBack);
    }
 }