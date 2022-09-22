

export default function Select({
  label,
  isError,
  textError,
  children,
  ...props
}) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select {...props} className="input mx-5 my-2 " id={label}>
        {children}
      </select>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
