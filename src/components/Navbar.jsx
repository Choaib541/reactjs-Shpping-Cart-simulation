import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import CartContext from "../store/CartContext";

const Navbar = () => {
    const [items_number, setItems_number] = useState(0);
    const cont = useContext(CartContext);

    useEffect(() => {
        setItems_number(cont.items.length);
    }, [cont.items]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Camado
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link
                            to="/cart"
                            className="m-0 text-white p-0 m-0 d-flex"
                        >
                            <div
                                className="position-relative "
                                style={{
                                    width: "40px",
                                }}
                            >
                                <h4>
                                    <BsFillBasketFill />
                                </h4>
                                <span
                                    className="position-absolute bottom-0 end-0  d-flex align-items-center justify-content-center bg-success rounded-circle"
                                    style={{
                                        height: "23px",
                                        width: "23px",
                                        fontSize: "14px",
                                    }}
                                >
                                    {items_number}
                                </span>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
