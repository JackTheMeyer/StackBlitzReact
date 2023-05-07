import React from 'react';
import React, { useState } from 'react';
import './style.css';

let car = 5;
export default function App() {
  const [fresha, setFresha] = useState(true);

  function HandleClick() {
    setFresha(!fresha);
    console.log(fresha);
  }

  function ConditionalRenderer() {
    let content;
    //let fresha = true;
    if (fresha) {
      content = <MyButton36 />;
    } else {
      content = <MyButton />;
    }
    return <div>{content}</div>;
  }

  function MyButton() {
    return (
      <button class="button" onClick={HandleClick}>
        I'm a button
      </button>
    );
  }

  function MyButton36() {
    return (
      <button class="button-36" onClick={HandleClick}>
        I'm a button
      </button>
    );
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <MyButton />
      <ConditionalRenderer />
      {car}
    </div>
  );
}
