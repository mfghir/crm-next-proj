const FormInput = ({ name, label, type, value, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
