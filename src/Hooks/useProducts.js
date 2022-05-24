import { useEffect, useState } from "react"

const useProducts = (id) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [id]);

    return [products];
}
export default useProducts;