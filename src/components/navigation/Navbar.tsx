import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import logoDayro from "../../assets/logoDAYRO_importaciones.png";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
function Navbar() {
    //Para los iconos del menu
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-[#340132]">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <Link to="/">
                        <img
                            src={logoDayro}
                            alt="Logo de la empresa Dayro"
                            className="md:cursor-pointer h-24"
                        />
                    </Link>
                    <div
                        className="text-3xl md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <GrClose /> : <AiOutlineMenu />}
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-sans text-white z-50 ">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="py-7 px-3 inline-block">
                            Productos
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <div className="flex pt-3">
                    <div className="md:block hidden relative cursor-pointer">
                        <Link to="/cart">
                            <AiOutlineShoppingCart className="text-3xl text-white" />
                            <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] pb-5 rounded-full grid place-items-center text-white">
                                0
                            </span>
                        </Link>
                    </div>
                    <div className="md:block hidden ms-5">
                        <button className="bg-teal-600 px-6 py-2 rounded-full">
                            <Link to="/login">Iniciar sesión</Link>
                        </button>
                    </div>
                </div>

                {/* Mobile nav */}
                <ul
                    className={`md:hidden bg-[#340132] absolute w-full h-full bottom-0 py-32 pl-4 text-white duration-500 ${
                        open ? "left-0" : "left-[-100%]"
                    }`}
                >
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                    <div className="pt-4">
                        <div className="relative cursor-pointer mt-5 mx-2">
                            <Link to="/cart">
                                <AiOutlineShoppingCart className="text-3xl text-white" />
                                <span className="absolute -top-2 left-5 text-[13px] bg-red-600 h-[18px] w-[18px] pb-5 rounded-full grid place-items-center text-white">
                                    0
                                </span>
                            </Link>
                        </div>
                        <div className="py-5">
                            <button className="bg-teal-600 px-6 py-2 rounded-full">
                                <Link to="/login">Iniciar sesión</Link>
                            </button>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
