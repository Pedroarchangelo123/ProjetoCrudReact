import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ProdutoForm() {
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
        console.log({ nome, categoria, preco });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <Form.Control
                    type="text"
                    placeholder="Digite a categoria do produto"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <Form.Control
                    type="number"
                    placeholder="Digite o preço do produto"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Salvar Produto
            </Button>
        </Form>
    );
}

export default ProdutoForm;