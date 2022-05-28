import styles from "./Input.module.css";

function Input({ type, text, name, value, placeholder, handleOnChange, min, max }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        min={min}
        max={max}
      />
    </div>
  );
}

export default Input;