import { useState } from "react";
import axios from "axios";
import ProductsAll from "./productsAll";

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div>
                <h2>Product Manager</h2>
                <form onSubmit={submitHandler}>
                    <p className="form-control bg-light ">
                        <label className="form-label col-sm-3">Title</label>
                        <input className="col-sm-3" type="text" onChange={(e) => setTitle(e.target.value)}></input>
                    </p>
                    <p className="form-control bg-light">
                        <label className="form-label col-sm-3">Price</label>
                        <input className="col-sm-3" type="number" onChange={(e) => setPrice(e.target.value)}></input>
                    </p>
                    <p className="form-control bg-light">
                        <label className="form-label col-sm-3">Description</label>
                        <input className="col-sm-3" type="text" onChange={(e) => setDescription(e.target.value)}></input>
                    </p>
                    <button type="submit">Create</button>
                </form>
            </div>
            <ProductsAll />
        </div>
    );
}

export default ProductForm;