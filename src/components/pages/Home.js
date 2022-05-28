import styles from "./Home.module.css";
import savings from "../../img/savings.svg"

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem vindo ao <span>Sistema</span>
      </h1>
      <p>Comece agora a gerenciar o seu caixa</p>
      <img src={savings} alt="Caixa"/>
    </section>
  );
}

export default Home;
