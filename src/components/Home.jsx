import React from "react";
import StyledHome from "./styles/Home.styled";
import Pcard from "./Pcard";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

const Home = () => {
    const products = [
        {
            id: 1,
            img: pic1,
            title: "HP bundle",
            price: 99,
        },
        {
            id: 2,
            img: pic2,
            title: "Macbook pro-5",
            price: 16,
        },
        {
            id: 3,
            img: pic3,
            title: "White Mug",
            price: 39,
        },
        {
            id: 4,
            img: pic4,
            title: "Drums",
            price: 49,
        },
    ];

    return (
        <StyledHome className="row  py-5">
            {products.map((e) => (
                <div className="col-lg-6 mb-3">
                    <Pcard
                        img={e.img}
                        title={e.title}
                        price={e.price}
                        id={e.id}
                    />
                </div>
            ))}
        </StyledHome>
    );
};

export default Home;
