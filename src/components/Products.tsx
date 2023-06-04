import React, { useEffect, useState } from "react";
import { Button, Card, Col, Grid, Input, Row, Text } from "@nextui-org/react";
import Navbar from "./navigation/Navbar";
import SearchIcon from "../icons/SearchIcon";
import ProductoModel from "../models/producto";

function Products() {
    const [producto, setData] = useState<ProductoModel[]>([]);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        const data = await fetch("http://localhost:3800/dayro/products");
        const users = await data.json();
        setData(users);
    };
    return (
        <div className="h-screen bg-cover font-sans md:bg-top bg-center">
            <div className="bg-gray-100 h-screen mx-6 mt-5">
                <div className="flex">
                    <div className="flex flex-col px-7">
                        <h1 className="text-3xl text-center font-bold p-3">
                            CATEGORIAS
                        </h1>
                        <Input
                            className="w-full"
                            contentLeft={
                                <SearchIcon
                                    fill="var(--nextui-colors-accents6)"
                                    size={16}
                                />
                            }
                            clearable
                            bordered
                            placeholder="Buscar"
                        />
                        <hr className="separator" />
                        <div className="flex flex-col gap-5 text-xl">
                            <button>Hombres</button>
                            <button>Mujeres</button>
                            <button>Niños</button>
                            <button>Accesorios</button>
                        </div>
                    </div>
                    <Grid.Container gap={2} justify="flex-start">
                        {producto?.map((item) => (
                            <Grid xs={12} sm={4} lg={3} key={item.id}>
                                <Card isPressable>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                            src={item.imagen}
                                            objectFit="contain"
                                            width="100%"
                                            height={140}
                                            alt={item.nombre}
                                        />
                                        <Row
                                            wrap="wrap"
                                            justify="space-between"
                                            align="center"
                                            css={{ pb: "$5",
                                          px: "$6" }}
                                        >
                                            <Text className="text-lg" b>{item.nombre}</Text>
                                            <Text
                                                css={{
                                                    color: "$accents7",
                                                    fontWeight: "$semibold",
                                                    fontSize: "$xl",
                                                }}
                                            >
                                                <span>S/.</span>
                                                {item.precioUnidad}
                                            </Text>
                                        </Row>
                                        <Row css={{ py: "$5",
                                      px:"$8" }}>
                                            <Col>
                                                <Text className="text-justify" color="#000" size={14}>
                                                    {item.descripcion}
                                                </Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer
                                        css={{ justifyItems: "flex-start" }}
                                    >
                                        <Col>
                                            <Card.Divider />

                                            <Row css={{ py: "$5" }}>
                                                <Button
                                                    flat
                                                    auto
                                                    rounded
                                                    color="secondary"
                                                >
                                                    <Text
                                                        css={{
                                                            color: "inherit",
                                                        }}
                                                        size={12}
                                                        weight="bold"
                                                        transform="uppercase"
                                                    >
                                                        Agregar al carrito
                                                    </Text>
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                        ))}
                    </Grid.Container>
                </div>
            </div>
        </div>
    );
}

export default Products;
