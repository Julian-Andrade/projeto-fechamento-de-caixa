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
              text="Cédula"
              type="number"
              name="cédula"
              handleOnChange={handleChange}
              value={entry.cédula ? entry.cédula : ""}
            />
            <Input
              text="Cartão de Crédito"
              type="number"
              name="crédito"
              handleOnChange={handleChange}
              value={entry.crédito ? entry.crédito : ""}
            />
            <Input
              text="Cartão de Débito"
              type="number"
              name="débito"
              handleOnChange={handleChange}
              value={entry.débito ? entry.débito : ""}
            />
            <Input
              text="Pix"
              type="number"
              name="pix"
              handleOnChange={handleChange}
              value={entry.pix ? entry.pix : ""}
            />
            <Input
              text="Promissória"
              type="number"
              name="promissória"
              handleOnChange={handleChange}
              value={entry.promissória ? entry.promissória : ""}
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
              text="Saída"
              type="number"
              name="saída"
              handleOnChange={handleChange}
              value={entry.saída ? entry.saída : ""}
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
              text="Décimo Terceiro"
              type="number"
              name="décimo"
              handleOnChange={handleChange}
              value={entry.décimo ? entry.décimo : ""}
            />
          </div>
          <div>
            <Input
              text="Empréstimo"
              type="number"
              name="empréstimo"
              handleOnChange={handleChange}
              value={entry.empréstimo ? entry.empréstimo : ""}
            />
            <Input
              text="Energético"
              type="number"
              name="energético"
              handleOnChange={handleChange}
              value={entry.energético ? entry.energético : ""}
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
              text="Salário"
              type="number"
              name="salário"
              handleOnChange={handleChange}
              value={entry.salário ? entry.salário : ""}
            />
            <Input
              text="Segurança"
              type="number"
              name="segurança"
              handleOnChange={handleChange}
              value={entry.segurança ? entry.segurança : ""}
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
