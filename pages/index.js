import React, {useState} from 'react';
import {getData} from "../Utility/fetchData";
import Head from "next/head";
import ProductItem from "../Components/product/ProductItem";
import {Col, Row} from "react-bootstrap";

const Home = ({productProps, result }) => {
    const [products, setProducts] = useState(productProps);
    return (
        <div>
         <Head>
             <title>Home | The Shopper</title>
         </Head>
            <Row>
            {
                products.length === 0
                ? <h2>No Products Found!</h2> :
                    products.map((product)=> (
                        <Col className="d-flex my-2" xs={12} sm={6} md={4} lg={3} key={product._id}>
                            <ProductItem product={product}/>
                        </Col>
                    ))
            }
            </Row>
        </div>
    );
};


export async function getServerSideProps() {

    const res = await getData('product');
    console.log("product > ", res);
    return {
        props: {
            productProps:res.products,
            result: res.result
        },
    }
}

export default Home;
