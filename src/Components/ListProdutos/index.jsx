import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { getProdutos, deleteProdutos } from "../../Service/ProdutoService";
import RefreshLista from "../../App"; // Corrigido: importando o RefreshLista corretamente
import "./listaprodutos.css"; // Corrigido: importando o CSS corretamente

function ProdutoLista({ onEdit }) { // Corrigido: props devem estar entre chaves {}
//   const [produtos, setProdutos] = useState(localStorage.getItem('produtos') ? localStorage.getItem('produtos') : []); // Corrigido: inicializando com o valor correto
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    loadProdutos();
  }, [RefreshLista]); // <- Agora ele recarrega a cada mudança


  const loadProdutos = () => {
    const savedProdutos = getProdutos();
    setProdutos(savedProdutos);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Deseja realmente excluir este produto?");
    if (confirmDelete) {
      deleteProdutos(id);
      loadProdutos();
    }
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <h2 className="text-center mb-4">Produtos cadastrados</h2>
        {produtos.length === 0 ? (
          <p className="text-center">Nenhum produto cadastrado.</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.categoria}</td>
                  <td>R$ {parseFloat(produto.preco).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => onEdit(produto)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(produto.id)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}  

export default ProdutoLista;
