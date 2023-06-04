import React from "react";
import logoDayro from "../assets/logoDAYRO.png";
import icongoogle from "../icons/icon-google.svg";
import { Button, Input, useInput } from "@nextui-org/react";

function Login() {
    //Para validar el email
    const { value, reset, bindings } = useInput("");

    const validateEmail = (value: string): boolean => {
        return (
            value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) !== null
        );
    };

    //Para validar el email
    interface Helper {
        text: string;
        color: "success" | "error" | "default";
    }
    //

    const helper = React.useMemo<Helper>(() => {
        if (!value) {
            return {
                text: "",
                color: "default",
            };
        }
        const isValid = validateEmail(value);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [value]);
    //
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="h-screen hidden bg-blue-200 md:w-1/2 xl:w-2/3 lg:block">
                <img
                    src={logoDayro}
                    alt="Logo de la empresa Dayro"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-white items-center justify-center flex md:mx-auto md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold mt-12">
                        Iniciar sesión en tu cuenta
                    </h1>
                    <form className="mt-6" action="#">
                        <div className="">
                            <label className="block text-gray-700 ps-1 mb-2">
                                Correo Electrónico
                            </label>
                            <Input
                                fullWidth={true}
                                clearable
                                size="lg"
                                shadow={false}
                                onClearClick={reset}
                                status={helper.color}
                                color={helper.color}
                                helperColor={helper.color}
                                helperText={helper.text}
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 ps-1 mb-2">
                                Contraseña
                            </label>
                            <Input.Password
                                fullWidth={true}
                                size="lg"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">¿Olvidaste tu contraseña?</a>
                        </div>
                        <Button
                            className="mt-4 m-auto"
                            size="lg"
                            fullWidth={true}
                            color="gradient"
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>

                        <hr className="my-6 border-gray-300 w-full" />

                        <button className="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border">
                            <div className="flex items-center justify-center">
                                <img src={icongoogle} alt="Icono de Google" className="w-[32px] h-[32px]" />
                                <span className="ml-4 text-md">
                                    Iniciar sesión con Google
                                </span>
                            </div>
                        </button>
                        <p className="mt-8">
                            Necesita una cuenta?
                            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold"> Crea una cuenta aqui</a>
                        </p>

                        <p className="text-sm text-gray-500 mt-12">
                            &copy; 2021 Dayro Importaciones. Todos los derechos
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
