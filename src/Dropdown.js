import { useState } from 'react';

function Dropdown(props) {
  const [display, setDisplay] = useState("none");

  function handleClick() {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }
  return (
    <div>
      <div>Hello World</div>

      <div style={{ display: display }}>{props.children}</div>

        <select>

       <option value="fruit">Fruit</option>

       <option value="vegetable">Vegetable</option>

       <option value="meat">Meat</option>

     </select>
    </div>
  );
}

export { Dropdown };


