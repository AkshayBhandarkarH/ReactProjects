import React, { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getcurrentid) {
    setSelected(getcurrentid === selected ? null : getcurrentid);
  }

  function handleMultiSelection(getcurrentid) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getcurrentid);
    if (findIndexofCurrentId === -1) cpyMultiple.push(getcurrentid);
    setMultiple(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item" key={dataItems.id}>
              <div
                className="title"
                onClick={enableMultiSelection ? () => handleMultiSelection(dataItems.id) : () => handleSingleSelection(dataItems.id)}
              >
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {/* {selected === dataItems.id ? <div className="content">{dataItems.answer}</div> : null} */}
              {enableMultiSelection
                ? multiple.indexOf(dataItems.id) !== -1 && <div className="content">{dataItems.answer}</div>
                : selected === dataItems.id && <div className="content">{dataItems.answer}</div>}
            </div>
          ))
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
