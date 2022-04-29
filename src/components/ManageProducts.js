import { getAllProducts } from "./firebaseservices";
import { useState, useEffect } from "react";
import { removeProduct, addNewProduct } from "./firebaseservices";
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
import "./ManageProducts.css"
import { async } from "@firebase/util";

function ManageProducts(){

    const [allProducts, setAllProducts] = useState([]);
    async function get(){
        const tempProducts = await getAllProducts();
        setAllProducts(tempProducts);
    }

    useEffect(get, []);

    async function deleteProduct(name){
        const tempProducts = allProducts.filter((product) =>{
            return product.name !== name;
        })
        await removeProduct(name);
        setAllProducts(tempProducts);
    }

    const image=[]
    for(let i=11;i<=20;i++){
        image.push(`/images/prod${i}.png`);
    }

    const newProductInfo = {};
    newProductInfo.category = ["", "", ""];
    newProductInfo.image = image;

    function storeProductInfo(field, value){
        if(field === "category"){
            newProductInfo.category[0] = value;
        }
        else if(field === "subcategory"){
            newProductInfo.category[1] = value;
        }
        else if(field === "brand"){
            newProductInfo.category[2] = value;
        }
        else{
            newProductInfo[field] = value;
        }
    }

    async function addProduct(){
        await addNewProduct(newProductInfo);
    }

    
    return(
        <div className = "ManageProducts">
            <h1>Manage Products</h1>
            <ProductTable products = {allProducts} deleteProduct = {deleteProduct}></ProductTable>
            <AddProduct storeProductInfo = {storeProductInfo} addProduct = {addProduct}></AddProduct>
        </div>
    )
}

export default ManageProducts;