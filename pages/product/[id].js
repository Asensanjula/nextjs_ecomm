import React, {useState} from 'react';
import {getData} from "../../Utility/fetchData";
import Head from "next/head";

const ProductDetails = ({product}) => {

    const [detailProduct, setDetailProduct] = useState(product);
    return (
        <div>
            <Head>
                <title>{product.title} | The Shopper</title>
            </Head>
            Product Details
        </div>
    );
};

export async function getServerSideProps({params: {id}}) {

    const res = await getData(`product/${id}`);
    console.log("product > ", res);
    return {
        props: {
            product: res.product
        },
    }
}
export default ProductDetails;
