import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";

const ProductDelete = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => {
                navigate(`/`)
            })
    })
}

export default ProductDelete