import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import EntradaForm from "../layout/EntradaForm";
import Loading from "../layout/Loading";
import Message from "../layout/Message";

import styles from "./Fechamento.module.css";

function Fechamento() {
  const { id } = useParams();
  const [fechamento, setFechamento] = useState([]);
  const [showEntradaForm, setShowEntradaForm] = useState(false);
  const [message, setMessage] = useState(``);
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/entry/${id}`, {
        method: "GET",
        hearders: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setFechamento(data);
        })
        .catch((error) => console.log(error));
    }, 3000);
  }, [id]);

  function editEntry(fechamento) {
    setMessage(``)
    
    fetch(`http://localhost:5000/entry/${fechamento.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fechamento),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setFechamento(data);
        setShowEntradaForm(false);
        setMessage(`Fechamento de caixa atualizado com sucesso!`);
        setType(`sucess`);
      })
      .catch((error) => console.log(error));
  }

  function toggleEntradaForm() {
    setShowEntradaForm(!showEntradaForm);
  }

  return (
    <>
      {fechamento.id ? (
        <div className={styles.fechamento_details}>
          {message && <Message type={type} msg={message} />}
          <h1>Fechamento de Caixa</h1>
          <div className={styles.fechamento_container}>
            <h3>
              {fechamento.data}, {fechamento.vendedor.name}
            </h3>
            <button
              onClick={toggleEntradaForm}
              className={styles.fechamento_btn}
            >
              {!showEntradaForm ? "Editar Fechamento" : "Fechar"}
            </button>
          </div>
          {!showEntradaForm ? (
            <div>
              <div className={styles.details_container}>
                <p>
                  <span>Item: </span> {fechamento.id}
                </p>
                <p>
                  <span>Data: </span> {fechamento.data}
                </p>
                <p>
                  <span>Turno: </span> {fechamento.turno}
                </p>
                <p>
                  <span>Vendedor: </span> {fechamento.vendedor.name}
                </p>
                <p>
                  <span>Sobra: </span> R$ {fechamento.sobra}
                </p>
                <p>
                  <span>Falta: </span> R$ {fechamento.falta}
                </p>
                <p>
                  <span>C??dula: </span> R$ {fechamento.c??dula}
                </p>
                <p>
                  <span>Cr??dito: </span> R$ {fechamento.cr??dito}
                </p>
                <p>
                  <span>D??bito: </span> R$ {fechamento.d??bito}
                </p>
                <p>
                  <span>Pix: </span> R$ {fechamento.pix}
                </p>
                <p>
                  <span>Promiss??ria: </span> R$ {fechamento.promiss??ria}
                </p>
                <p>
                  <span>Tabacaria: </span>R$ {fechamento.tabacaria}
                </p>
                <p>
                  <span>Sa??da: </span>R$ {fechamento.sa??da}
                </p>
                <p>
                  <span>Total: </span>R$ {fechamento.total}
                </p>
              </div>
              <div className={styles.details_container_gray}>
                <p>
                  <span>Aluguel: </span> R$ {fechamento.aluguel}
                </p>
                <p>
                  <span>Carlton: </span> R$ {fechamento.carlton}
                </p>
                <p>
                  <span>Compras: </span> R$ {fechamento.compras}
                </p>
                <p>
                  <span>Contabilidade: </span> R$ {fechamento.contabilidade}
                </p>
                <p>
                  <span>D??cimo: </span> R$ {fechamento.d??cimo}
                </p>
                <p>
                  <span>Empr??stimo: </span> R$ {fechamento.empr??stimo}
                </p>
                <p>
                  <span>Energ??tico: </span> R$ {fechamento.energ??tico}
                </p>
                <p>
                  <span>Energia: </span> R$ {fechamento.energia}
                </p>
                <p>
                  <span>Gudang: </span> R$ {fechamento.gudang}
                </p>
                <p>
                  <span>Imposto: </span> R$ {fechamento.imposto}
                </p>
                <p>
                  <span>Pagamentos: </span> R$ {fechamento.pagamentos}
                </p>
                <p>
                  <span>Pro Labore: </span>R$ {fechamento.prolabore}
                </p>
                <p>
                  <span>Sal??rio: </span>R$ {fechamento.sal??rio}
                </p>
                <p>
                  <span>Seguran??a: </span>R$ {fechamento.seguran??a}
                </p>
                <p>
                  <span>Sorvete: </span>R$ {fechamento.sorvete}
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.fechamento_form}>
              <EntradaForm handleSubmit={editEntry} btnText="Concluir Edi????o" entryData={fechamento}/>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Fechamento;
