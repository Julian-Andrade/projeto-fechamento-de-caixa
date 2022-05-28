import { useNavigate } from "react-router-dom";
import EntradaForm from "../layout/EntradaForm";
import styles from "./Entrada.module.css";

function Entrada() {
  const redirect = useNavigate();
  function CreateEntry(entry) {
    //Inicializando
    fetch("http://localhost:5000/entry", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //Fazer o redirecionamento da página aqui!
        redirect("/Fechamentos", {
          state: {
            message: "Fechamento de caixa realizado com sucesso!",
          },
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.entrada_container}>
      <h1>
        Fechamento de <span>Caixa</span>
      </h1>
      <p>Preencha o formulário abaixo</p>
      <EntradaForm handleSubmit={CreateEntry} btnText="Criar Fechamento" />
    </div>
  );
}

export default Entrada;
