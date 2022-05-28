import styles from "./TableData.module.css";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function TableData({
  id,
  data,
  turno,
  vendedor,
  sobra,
  falta,
  cédula,
  crédito,
  débito,
  pix,
  promissória,
  tabacaria,
  saída,
  total,
  handleRemove,
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.tabledata_container}>
      <p>{id}</p>
      <p>{data}</p>
      <p>{turno}</p>
      <p>{vendedor}</p>
      <p>R$ {sobra}</p>
      <p>R$ {falta}</p>
      <p>R$ {cédula}</p>
      <p>R$ {crédito}</p>
      <p>R$ {débito}</p>
      <p>R$ {pix}</p>
      <p>R$ {promissória}</p>
      <p>R$ {tabacaria}</p>
      <p>R$ {saída}</p>
      <p>R$ {total}</p>
      <div className={styles.table_actions}>
        <Link to={`/Fechamento/${id}`}>
          <BsPencil />
        </Link>
      </div>
      <div className={styles.table_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}

export default TableData;
