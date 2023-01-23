import { useState } from "react";
import axios from "axios";

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
            <h2>Product Manager</h2>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)}></input>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default ProductForm;