import "./AddProduct.css"
import "./Sign"

function AddProduct(props){
    return(
        <div className = "AddProduct">
            <h2>Add Product</h2>
            <form>
                <div>
                    <label for = "AddProductName">Name:</label>
                    <input type = "text" id = "AddProductName" placeholder = "Enter product name:" onInput = {(event) =>{
                        props.storeProductInfo("name", event.target.value);
                    }}></input>
                </div>
                <div>
                    <label for = "AddProductDescription">Description:</label>
                    <input type = "text" id = "AddProductDescription" placeholder = "Enter product description:" onInput = {(event) =>{
                        props.storeProductInfo("description", event.target.value);
                    }}></input>
                </div>
                <div>
                    <label for = "AddProductPrice">Price:</label>
                    <input type = "text" id = "AddProductPrice" placeholder = "Enter product price:" onInput = {(event) =>{
                        props.storeProductInfo("price", Number(event.target.value));
                    }}></input>
                </div>
                <div>
                    <label for = "AddProductRating">Rating:</label>
                    <input type = "text" id = "AddProductRating" placeholder = "Enter product rating:" onInput = {(event) =>{
                        props.storeProductInfo("rating", Number(event.target.value));
                    }}></input>
                </div>
                <div>
                    <label for = "AddProductCategory">Category:</label>
                    <input type = "text" id = "AddProductCategory" placeholder = "Enter product category:" onInput = {(event) =>{
                        props.storeProductInfo("category", event.target.value);
                    }}></input>
                </div>
                <div>
                    <label for = "AddProductSubcategory">Subcategory:</label>
                    <input type = "text" id = "AddProductSubcategory" placeholder = "Enter product subcategory:" onInput = {(event) =>{
                        props.storeProductInfo("subcategory", event.target.value);
                    }}></input>
                </div>
                <div>
                    <label for = "AddProductBrand">Brand:</label>
                    <input type = "text" id = "AddProductBrand" placeholder = "Enter product brand:" onInput = {(event) =>{
                        props.storeProductInfo("brand", event.target.value);
                    }}></input>
                </div>
            </form>
            <button onClick = {() =>{
                props.addProduct();
            }}>Add Product</button>
        </div>
    )
}

export default AddProduct;