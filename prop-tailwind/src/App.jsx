import React from "react";
import Card from "./component/Card";

const App = () => {
  return (
    <div>
      <h2>Card</h2>
      <Card username="Akash" btntext="click me"/>
      <Card username="Mahto"/>
    </div>
  );
};

export default App;
