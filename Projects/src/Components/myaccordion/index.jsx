import React, { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMS, setEMS] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getcurrentid) {
    // setSelected(getcurrentid === selected ? null : getcurrentid);
    setSelected(getcurrentid === selected ? null : getcurrentid);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item" key={dataItems.id}>
              <div className="title" onClick={() => handleSingleSelection(dataItems.id)}>
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItems.id ? <div className="content">{dataItems.answer}</div> : null}
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
