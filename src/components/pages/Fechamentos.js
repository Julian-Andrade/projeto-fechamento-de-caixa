import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";
import Loading from "../layout/Loading";

import TableHead from "../entry/TableHead";
import TableData from "../entry/TableData";

import styles from "./Fechamentos.module.css";

function Fechamentos() {
  const [entry, setEntry] = useState([]);
  const [removeLoader, setRemoveLoader] = useState(false);
  const [removeMessage, setRemoveMessage] = useState(``);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  // Buscar e pegar arquivos no banco de dados!
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/entry", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          // console.log(data);
          setEntry(data);
          setRemoveLoader(true);
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  // Buscar e deletar arquivos no banco de dados!
  function removeEntry(id) {
    fetch(`http://localhost:5000/entry/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        // console.log(data);
        setEntry(entry.filter((entry) => entry.id !== id));
        setRemoveMessage(`Fechamento de caixa removido com sucesso!`);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.fechamento_container}>
      <div className={styles.title_container}>
        <h1>Fechamento de Caixa</h1>
        <LinkButton to="/Entrada" text="Criar Fechamento" />
      </div>
      {/* Mensagem de Sucesso */}
      {message && <Message type="sucess" msg={message} />}
      {/* Mensagem de remoção do fechamento de caixa */}
      {removeMessage && <Message type="sucess" msg={removeMessage} />}
      <div>
        <TableHead />
        {entry.length > 0 &&
          entry.map((entry) => (
            <TableData
              key={entry.id}
              id={entry.id}
              data={entry.data}
              turno={entry.turno}
              vendedor={entry.vendedor.name}
              sobra={entry.sobra}
              falta={entry.falta}
              cédula={entry.cédula}
              crédito={entry.crédito}
              débito={entry.débito}
              pix={entry.pix}
              promissória={entry.promissória}
              tabacaria={entry.tabacaria}
              saída={entry.saída}
              total={entry.total}
              handleRemove={removeEntry}
            />
          ))}
        {!removeLoader && <Loading />}
        {removeLoader && entry.length === 0 && (
          <p>Não há Fechamentos de Caixa cadastrados!</p>
        )}
      </div>
    </div>
  );
}

export default Fechamentos;
