import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsAll = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                console.log(response.data.product);
                setData(response.data.product);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="m-5">
            {
                data.map(products => (
                    <p key={products._id}>
                        <Link className="p-1" to={`/oneproduct/${products._id}`}>{products.title}</Link>
                        <Link className="p-1" to={`/${products._id}/edit`}>Edit</Link>
                        <Link className="p-1" to={`/${products._id}/delete/`}>Delete</Link>
                    </p>
                ))
            }
        </div>
    )
};

export default ProductsAll;