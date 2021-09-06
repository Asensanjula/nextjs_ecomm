import React from 'react';
import {getData} from "../Utility/fetchData";

const Home = ({productProps, result }) => {
    const [products, setProducts] = useState(productProps);
    return (
        <div>
          Home
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
