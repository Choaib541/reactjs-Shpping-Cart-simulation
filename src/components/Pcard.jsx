import React, { useContext } from "react";
import StyledPcart from "./styles/Pcard.styled";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import CartContext from "../store/CartContext";

const Pcard = (props) => {
    const cont = useContext(CartContext);

    function handle_click() {
        cont.add({
            id: props.id,
            img: props.img,
            title: props.title,
            price: props.price,
        });
    }

    function handle_delete() {
        cont.destroy({
            id: props.id,
            img: props.img,
            title: props.title,
            price: props.price,
        });
    }

    return (
        <StyledPcart elevation={3} className="text-white bg-transparent">
            <img src={props.img} alt="" />
            <div className="p-3  bg-dark ">
                <h5>{props.title}</h5>
                <p className="form-text h-6 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo voluptatum placeat tempora quisquam? Quod nihil
                    culpa .
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">
                        {props.price} $
                    </span>
                    <span>
                        {props.delete ? (
                            <IconButton
                                onClick={() => {
                                    handle_delete();
                                }}
                                aria-label="delete"
                                size="small"
                            >
                                <FaTrash className="text-danger  fw-bold" />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    handle_click();
                                }}
                                aria-label="delete"
                                size="small"
                            >
                                <FaShoppingCart className="text-success  fw-bold" />
                            </IconButton>
                        )}
                    </span>
                </div>
            </div>
        </StyledPcart>
    );
};

export default Pcard;
