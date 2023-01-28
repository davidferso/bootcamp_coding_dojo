import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductOne = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data.product)
                setData(res.data.product)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <>
            <div key={data._id}>
                <p>{data.title}</p>
                <p>Price: ${data.price}</p>
                <p>Description: {data.description}</p>
                <Link to={`/${data._id}/delete/`}>Delete</Link>
            </div>
        </>
    )
}

export default ProductOne;