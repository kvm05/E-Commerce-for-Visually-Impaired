import Product from "./products";
import FilterPane from "./filterpane";
import { Link, useNavigate } from "react-router-dom";
import "./container.css"
import {readData, filterByBrand, getBrands, search, getAllProducts} from "./firebaseservices";
import {UserContext} from "../App";
import React, {useState, useContext, useEffect} from "react";

function Container(props){
    
    const image=[]
    for(let i=11;i<=20;i++){
        image.push(`/images/prod${i}.png`);
    }
    // console.log(image);
    const {user} = useContext(UserContext);

    const [allProducts, setAllProducts ] = useState([])

    const [ name, setName ] = useState(props.name.toLowerCase());

    let displayProducts = [];

    async function filterBrand(brand){
        // console.log(brand);
        // const temp = await filterByBrand(brand);
        // console.log(temp);
        // setProducts(temp);
        setName(brand);
        display();
    }

    // console.log(props.valueToBeSearched);
    display();
    // useEffect(filterBrand, [])

    async function get(){
        setAllProducts(await getAllProducts());
    //     if(props.valueToBeSearched){
    //         if(props.valueToBeSearched.indexOf(" ") ===-1){
    //             setProducts(await search(props.valueToBeSearched));
    //         }
    //         else{
    //             const valuesToBeSearched = props.valueToBeSearched.split(" ");
    //             let temp = [];
    //             valuesToBeSearched.forEach(async (value) =>{
    //                 temp += await search(value);
    //             })
    //             temp = [...new Set(temp)];
    //             setProducts(temp);
    //         }
    //     }
    //     else{
    //         setProducts(await readData("products", name, user));

    //     }
    }

    useEffect(get, [])
    
    function display(){
        let filteredProducts = [];
        console.log('Value: ' + props.valueToBeSearched)
        if (props.valueToBeSearched){
            console.log("search");
            filteredProducts = allProducts.filter((product) =>{
                return product.name.toLowerCase().indexOf(props.valueToBeSearched.toLowerCase()) !==-1;
            })
        }
        else{
            console.log("hi")
            console.log(allProducts);
            filteredProducts = allProducts.filter((product) =>{
                return product.category.indexOf(name) !== -1;
            })
        }
        displayProducts = filteredProducts.map((product) =>{
        return <Product name = {product.name}
        price = {product.price}
        image = {image}
        description = {product.description}
        rating = {product.rating}
        category = {product.category}
        isHighContrast = {props.isHighContrast}></Product>
    })
    }
    

    const [ brands, setBrands ] = useState([]);

    // async function get(){
        
    // }

    useEffect(async () =>{
        setBrands(await getBrands(props.name.toLowerCase()));
    }, []);

    
        
    
    
    return ( 
        <div className="container">
            {/* <FilterPane brands = {brands} filterBrand = {filterBrand} price = {maxPrice} rating = {5}/> */}
            <FilterPane category = {props.name} filterBrand = {filterBrand} brands = {brands}></FilterPane>
            <div className="prod">
                <div className="category">
                    <h1>{props.name}</h1>
                    <div  className="icons">
                        <Link to = '/cart'>
                            <img src={props.isHighContrast?"/images/viewcart-wheat.png":"/images/view cart.png"} alt="view cart"></img>
                        </Link>
                        <a href="wishlist"><img src={props.isHighContrast?"/images/wishlist-wheat.png" :"/images/wishlist.png"} alt="wishlist"></img></a>
                    </div>
                </div>
                {/* <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product>
                <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product>
                <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product>
                <Product name="Product 1" price="45" image={image} description="The Nike Mercurial Dream Speed Superfly 8 Elite embodies Cristiano Ronaldo's greatest self-proclaimed strength: the power of the mind and meditation. Calming shades of green work together with energising tones of purple and yellow, creating a boot that radiates positivity."
                rating="5" isHighContrast={props.isHighContrast}></Product> */}
                {displayProducts}
            </div>
        </div>
      );
}

export default Container; 