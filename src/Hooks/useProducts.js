import { useEffect, useState } from "react"

const useProducts = (id) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://lit-mountain-23720.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [id]);

    return [products];
}
export default useProducts;