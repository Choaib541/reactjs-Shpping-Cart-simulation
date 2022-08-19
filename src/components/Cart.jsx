import React from "react";
import StyledCart from "./styles/Cart.styled";
import Button from "@mui/material/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import Pcard from "./Pcard";
import { Link } from "react-router-dom";

const Cart = () => {
    const cont = useContext(CartContext);

    function handle_empty() {
        cont.empty();
    }

    return (
        <StyledCart>
            <div className="row pt-3">
                {cont.items.map((e) => (
                    <div className="col-md-3 mb-3">
                        <Pcard
                            title={e.title}
                            price={e.price}
                            img={e.img}
                            delete={true}
                            id={e.id}
                        />
                    </div>
                ))}
            </div>
            {cont.items.length > 0 ? (
                <Button
                    onClick={() => {
                        handle_empty();
                    }}
                    className="bg-danger text-white"
                >
                    Empty
                </Button>
            ) : (
                <>
                    <span className="form-text h6 py-3">The Cart Is Empty</span>
                    <Link to="/">
                        <Button className="bg-success text-white">
                            Go Shopping
                        </Button>
                    </Link>
                </>
            )}
        </StyledCart>
    );
};

export default Cart;
