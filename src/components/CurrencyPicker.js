import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./CurrencyPicker.css";

const CurrencyPicker = () => {
  const { currency, dispatch } = useContext(AppContext);

  const submitEvent = (curr) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: curr,
    });
  };

  return (
    <div className="alert alert-success dropdown">
      <span>Currency ({currency})</span>
      <div className="dropdown-content">
        <button className="btn btn-success" onClick={() => submitEvent("$")}>
          Dollar
        </button>
        <button className="btn btn-success" onClick={() => submitEvent("£")}>
          Pounds
        </button>
        <button className="btn btn-success" onClick={() => submitEvent("€")}>
          Euro
        </button>
        <button className="btn btn-success" onClick={() => submitEvent("₹")}>
          Ruppee
        </button>
      </div>
    </div>
  );
};

export default CurrencyPicker;
