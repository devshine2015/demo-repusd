import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Searchwidget() {
  const [selectDefi, setSelectDefi] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "changeSelectDefi", payload: selectDefi });
  }, [selectDefi, dispatch]);

  return (
    <div className="SelectDefiContainer">
      <label htmlFor="cars" style={{ color: "white" }}>
        Select a Defi : &nbsp;
      </label>
      <select
        name="Defis"
        id="Defis"
        onChange={(event) => setSelectDefi(event.target.value)}
      >
        <option value="0">AAVE</option>
        <option value="1">Pancakeswap</option>
      </select>
    </div>
  );
}

export default Searchwidget;
