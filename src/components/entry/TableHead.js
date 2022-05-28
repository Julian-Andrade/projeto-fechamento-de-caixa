import styles from "./TableHead.module.css";

function TableHead() {
  return (
    <div className={styles.tablehead_container}>
      <h4>Item</h4>
      <h4>Data</h4>
      <h4>Turno</h4>
      <h4>Vendedor</h4>
      <h4>Sobra</h4>
      <h4>Falta</h4>
      <h4>Cédula</h4>
      <h4>Crédito</h4>
      <h4>Débito</h4>
      <h4>Pix</h4>
      <h4>Promissória</h4>
      <h4>Tabacaria</h4>
      <h4>Saída</h4>
      <h4>Total</h4>
      <h4><span className={styles.tablehead_edit}>Editar</span></h4>
      <h4><span className={styles.tablehead_erase}>Excluir</span></h4>
    </div>
  );
}

export default TableHead;
