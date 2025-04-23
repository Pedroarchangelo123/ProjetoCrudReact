import React from "react";
import {v4, uuidv4} from 'uuid'

const STRORAGE_KEY = 'produtos';

export const getProdutos = () => {
    return JSON.parse(localStorage.getItem(STRORAGE_KEY)) || [];
}

export const saveProdutos = (produtos) => {
localStorage.setItem(STRORAGE_KEY, JSON.stringify(produtos));
}


export const addProdutos = (produtos) => {
    const produtos = getProdutos();
    const newProduto = {id: uuidv4(), ...produtos}
    produtos.push(newProduto);
    saveProdutos(produtos);
}

export const updateProdutos = (updateProdutos) => {
    const produtos = getProdutos().map(p => p.id === updateProdutos.id ? updateProdutos: p)
    saveProdutos(produtos);
}

export const deleteProdutos = (id) => {
    const produtos = getProdutos().filter(p => p.id !== id);
    saveProdutos(produtos);
}