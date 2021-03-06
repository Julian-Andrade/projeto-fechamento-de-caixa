import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./EntradaForm.module.css";

function EntradaForm({ handleSubmit, entryData, btnText }) {
  const [vendedores, setVendedores] = useState([]);
  const [entry, setEntry] = useState(entryData || {});

  useEffect(() => {
    fetch("http://localhost:5000/vendedores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setVendedores(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(entry);
  };

  function handleChange(e) {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setEntry({
      ...entry,
      vendedor: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <div>
      <form onSubmit={submit} className={styles.form_container}>
        <div className={styles.form}>
          <div>
            <Input
              text="Data"
              type="date"
              name="data"
              handleOnChange={handleChange}
              value={entry.data ? entry.data : ""}
            />
            <Input
              text="Turno"
              type="number"
              name="turno"
              handleOnChange={handleChange}
              value={entry.turno ? entry.turno : ""}
              min="1"
              max="3"
            />
            <Select
              name="vendor_id"
              text="Selecione o vendedor"
              options={vendedores}
              handleOnChange={handleSelect}
              value={entry.vendedor ? entry.vendedor.id : ""}
            />
            <Input
              text="Sobra"
              type="number"
              name="sobra"
              handleOnChange={handleChange}
              value={entry.sobra ? entry.sobra : ""}
            />
            <Input
              text="Falta"
              type="number"
              name="falta"
              handleOnChange={handleChange}
              value={entry.falta ? entry.falta : ""}
            />
          </div>
          <div>
            <Input
              text="C??dula"
              type="number"
              name="c??dula"
              handleOnChange={handleChange}
              value={entry.c??dula ? entry.c??dula : ""}
            />
            <Input
              text="Cart??o de Cr??dito"
              type="number"
              name="cr??dito"
              handleOnChange={handleChange}
              value={entry.cr??dito ? entry.cr??dito : ""}
            />
            <Input
              text="Cart??o de D??bito"
              type="number"
              name="d??bito"
              handleOnChange={handleChange}
              value={entry.d??bito ? entry.d??bito : ""}
            />
            <Input
              text="Pix"
              type="number"
              name="pix"
              handleOnChange={handleChange}
              value={entry.pix ? entry.pix : ""}
            />
            <Input
              text="Promiss??ria"
              type="number"
              name="promiss??ria"
              handleOnChange={handleChange}
              value={entry.promiss??ria ? entry.promiss??ria : ""}
            />
          </div>
          <div>
            <Input
              text="Tabacaria"
              type="number"
              name="tabacaria"
              handleOnChange={handleChange}
              value={entry.tabacaria ? entry.tabacaria : ""}
            />
            <Input
              text="Sa??da"
              type="number"
              name="sa??da"
              handleOnChange={handleChange}
              value={entry.sa??da ? entry.sa??da : ""}
            />
            <Input
              text="Total"
              type="number"
              name="total"
              handleOnChange={handleChange}
              value={entry.total ? entry.total : ""}
            />
          </div>
        </div>
        <div className={styles.form}>
          <div>
            <Input
              text="Aluguel"
              type="number"
              name="aluguel"
              handleOnChange={handleChange}
              value={entry.aluguel ? entry.aluguel : ""}
            />
            <Input
              text="Carlton"
              type="number"
              name="carlton"
              handleOnChange={handleChange}
              value={entry.carlton ? entry.carlton : ""}
            />
            <Input
              text="Compras"
              type="number"
              name="compras"
              handleOnChange={handleChange}
              value={entry.compras ? entry.compras : ""}
            />
            <Input
              text="Contabilidade"
              type="number"
              name="contabilidade"
              handleOnChange={handleChange}
              value={entry.contabilidade ? entry.contabilidade : ""}
            />
            <Input
              text="D??cimo Terceiro"
              type="number"
              name="d??cimo"
              handleOnChange={handleChange}
              value={entry.d??cimo ? entry.d??cimo : ""}
            />
          </div>
          <div>
            <Input
              text="Empr??stimo"
              type="number"
              name="empr??stimo"
              handleOnChange={handleChange}
              value={entry.empr??stimo ? entry.empr??stimo : ""}
            />
            <Input
              text="Energ??tico"
              type="number"
              name="energ??tico"
              handleOnChange={handleChange}
              value={entry.energ??tico ? entry.energ??tico : ""}
            />
            <Input
              text="Energia"
              type="number"
              name="energia"
              handleOnChange={handleChange}
              value={entry.energia ? entry.energia : ""}
            />
            <Input
              text="Gudang"
              type="number"
              name="gudang"
              handleOnChange={handleChange}
              value={entry.gudang ? entry.gudang : ""}
            />
            <Input
              text="Imposto"
              type="number"
              name="imposto"
              handleOnChange={handleChange}
              value={entry.imposto ? entry.imposto : ""}
            />
          </div>
          <div>
            <Input
              text="Pagamentos"
              type="number"
              name="pagamentos"
              handleOnChange={handleChange}
              value={entry.pagamentos ? entry.pagamentos : ""}
            />
            <Input
              text="Pro Labore"
              type="number"
              name="prolabore"
              handleOnChange={handleChange}
              value={entry.prolabore ? entry.prolabore : ""}
            />
            <Input
              text="Sal??rio"
              type="number"
              name="sal??rio"
              handleOnChange={handleChange}
              value={entry.sal??rio ? entry.sal??rio : ""}
            />
            <Input
              text="Seguran??a"
              type="number"
              name="seguran??a"
              handleOnChange={handleChange}
              value={entry.seguran??a ? entry.seguran??a : ""}
            />
            <Input
              text="Sorvete"
              type="number"
              name="sorvete"
              handleOnChange={handleChange}
              value={entry.sorvete ? entry.sorvete : ""}
            />
          </div>
        </div>
        <SubmitButton text={btnText} />
      </form>
    </div>
  );
}

export default EntradaForm;
