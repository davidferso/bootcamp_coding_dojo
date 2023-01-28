import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductEdit = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data.product.title, res.data.product.price, res.data.product.description)
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            }).catch((err) => {
                console.log(err)
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/update/${id}`, {
            title,
            price,
            description
        })
            .then(response => {
                console.log(response);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={submitHandler}>
                <p className="form-control bg-light ">
                    <label className="form-label col-sm-3">Title</label>
                    <input className="col-sm-3" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </p>
                <p className="form-control bg-light">
                    <label className="form-label col-sm-3">Price</label>
                    <input className="col-sm-3" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </p>
                <p className="form-control bg-light">
                    <label className="form-label col-sm-3">Description</label>
                    <input className="col-sm-3" type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </p>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default ProductEdit;