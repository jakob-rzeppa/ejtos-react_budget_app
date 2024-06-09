import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./CurrencyPicker.css";

const CurrencyPicker = () => {
  const { currency } = useContext(AppContext);

  return (
    <div className="alert alert-success dropdown">
      <span>Currency (Pounds)</span>
      <div className="dropdown-content">
        <button className="btn btn-success">Dollar</button>
        <button className="btn btn-success">Pounds</button>
        <button className="btn btn-success">Euro</button>
        <button className="btn btn-success">Ruppee</button>
      </div>
    </div>
  );
};

export default CurrencyPicker;
