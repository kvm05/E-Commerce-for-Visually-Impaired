import React from "react";
import "./filterpane.css"
import { readData, getBrands } from "./firebaseservices";
import { useEffect, useState, useContext } from "react";
import { UserContext, TTSContext } from "../App"
import { useSpeechSynthesis } from 'react-speech-kit';

function FilterPane(props){
    const {speak, cancel} = useSpeechSynthesis();
    const {screenReader} = useContext(TTSContext);
    // const { user } = useContext(UserContext)
    // const [products, setProducts ] = useState([]);  
    // const brands = [];
    // let maxPrice = 0;

    // async function get(){
    //     console.log(props.category);
    //     const temp = await readData("products", props.category, "");
    //     console.log(temp);
    //     setProducts(temp);
    // }

    // useEffect(() =>{
    //     get();
    // }, [])

    //     products.forEach((product) =>{
    //         if(brands.indexOf(product.category[2]) === -1){
    //             brands.push(product.category[2]);
    //         }
    //         if(product.price > maxPrice){
    //             maxPrice = product.price;
    //         }
    //     })

    // console.log(products);
    // console.log(brands);


    // React.memo();

    // const [ brands, setBrands ] = useState([]);

    // // async function get(){
        
    // // }

    // useEffect(async () =>{
    //     setBrands(await getBrands(props.category));
    // }, []);

    // const displayBrand = brands.map((brand) =>{
    //     return(
    //         <li key = {brand}><a onClick = {() =>{
    //             console.log(brand);
    //             props.filterBrand(brand);
    //         }}>{brand}</a></li> 
    //     )
    // })

    const displayBrand = props.brands.map((brand) =>{
        return(
            <li key = {brand}  onMouseEnter={() => screenReader?speak({text: brand}):cancel()} onMouseLeave={() => cancel()}><a onClick = {() =>{
                console.log(brand);
                props.filterBrand(brand);
            }}>{brand[0].toUpperCase() + brand.slice(1)}</a></li> 
        )
    })

    return(
        <div className="filter">
            <h2 onMouseEnter={() => screenReader?speak({text: "Filter By"}):cancel()} onMouseLeave={() => cancel()}>Filter by:-</h2>
            <div>
            <h3 onMouseEnter={() => screenReader?speak({text: "Brand"}):cancel()} onMouseLeave={() => cancel()}>Brand</h3>
            <ul>{displayBrand}</ul>
            </div>
                {/* <p>Ad consequat pariatur dolore ex anim aute ea officia velit irure aliquip laborum ipsum cillum. Pariatur velit deserunt dolore anim tempor tempor pariatur elit magna. Cupidatat adipisicing laboris ea elit enim amet pariatur. Est ex aliquip mollit ut proident mollit Lorem do aliquip occaecat irure officia minim.
                Dolor sit quis sit ipsum enim elit Lorem mollit sint dolor mollit cupidatat quis. Anim aliqua ex qui dolore fugiat et ullamco minim laborum. Eiusmod ullamco commodo incididunt ad qui et et exercitation cupidatat.

Ipsum aute nostrud cupidatat non adipisicing. Est commodo excepteur mollit nisi exercitation ad. Nisi consectetur fugiat aliquip minim enim dolore. Nisi et occaecat ut fugiat.
                </p> */}

                {/* <li><h3>Price</h3>
                <p>Ad consequat pariatur dolore ex anim aute ea officia velit irure aliquip laborum ipsum cillum. Pariatur velit deserunt dolore anim tempor tempor pariatur elit magna. Cupidatat adipisicing laboris ea elit enim amet pariatur. Est ex aliquip mollit ut proident mollit Lorem do aliquip occaecat irure officia minim.
                Dolor sit quis sit ipsum enim elit Lorem mollit sint dolor mollit cupidatat quis. Anim aliqua ex qui dolore fugiat et ullamco minim laborum. Eiusmod ullamco commodo incididunt ad qui et et exercitation cupidatat.

Ipsum aute nostrud cupidatat non adipisicing. Est commodo excepteur mollit nisi exercitation ad. Nisi consectetur fugiat aliquip minim enim dolore. Nisi et occaecat ut fugiat.
                </p>
                </li>

                <li><h3>Rating</h3>
                <p>Ad consequat pariatur dolore ex anim aute ea officia velit irure aliquip laborum ipsum cillum. Pariatur velit deserunt dolore anim tempor tempor pariatur elit magna. Cupidatat adipisicing laboris ea elit enim amet pariatur. Est ex aliquip mollit ut proident mollit Lorem do aliquip occaecat irure officia minim.
                Dolor sit quis sit ipsum enim elit Lorem mollit sint dolor mollit cupidatat quis. Anim aliqua ex qui dolore fugiat et ullamco minim laborum. Eiusmod ullamco commodo incididunt ad qui et et exercitation cupidatat.

Ipsum aute nostrud cupidatat non adipisicing. Est commodo excepteur mollit nisi exercitation ad. Nisi consectetur fugiat aliquip minim enim dolore. Nisi et occaecat ut fugiat.
                </p>
                </li> */}
        </div>    
    );
}

export default FilterPane;
