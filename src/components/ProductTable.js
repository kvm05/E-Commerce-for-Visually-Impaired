import "./ProductTable.css"
import { useState, useEffect } from "react";

function ProductTable(props){

    const [productToBeSearched, setProductToBeSearched] = useState("");
    const [currentProducts, setCurrentProducts]  = useState(props.products);

    useEffect(() =>{
        setCurrentProducts(props.products);
    }, [props.products])

    // useEffect(() =>{
    //     console.log(userToBeSearched)
    //     displayUsers = currentUsers.filter((user) =>{
    //         return user.name.toLowerCase().indexOf(userToBeSearched.toLowerCase()) === 0;
    //     }).map((user) =>{
    //         return <tr>
    //             <td>{user.name}</td>
    //             <td>{user.uid}</td>
    //             <td>{user.email}</td>
    //             <td><button className = "removeUser" onClick = {() =>{
    //                 props.deleteUser(props.uid);
    //             }}><i class="fa-solid fa-trash"></i></button></td>
    //         </tr>
    //     })
    //     console.log(displayUsers)
    // }, [userToBeSearched]);

    const displayProducts = currentProducts.map((product) =>{
        return <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category[0]}</td>
            <td><button className = "removeProduct" onClick = {() =>{
                props.deleteProduct(product.name);
            }}><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    })

    return(
        <div className = "ProductTable">
            <h2>Products</h2>
            <div className = "searchProduct">
                <input type = "text" placeholder = "Search Product" onInput = {(event) =>{
                    setProductToBeSearched(event.target.value);
                    if(event.target.value.length == 0){
                        setCurrentProducts(props.products);
                    }
                    else{
                        const tempProducts = currentProducts.filter((product) =>{
                        return product.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
                    })
                    setCurrentProducts(tempProducts);
                    }
                }}></input>
                <button className = "searchButton">{productToBeSearched ? <i class="fa-solid fa-xmark" onClick = {() =>{
                    setProductToBeSearched("");
                    setCurrentProducts(props.products);
                }}></i> : <i class="fa-solid fa-magnifying-glass"></i>}</button>
            </div>
            <div className = "table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    {displayProducts}
                </table>
            </div>
        </div>
    )
}

export default ProductTable;