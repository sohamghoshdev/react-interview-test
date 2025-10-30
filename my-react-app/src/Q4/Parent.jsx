import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [message, setMessage] = useState("Good Morning");

  const handleMessageChange = () => {
    setMessage("Good Night");
  };

  return (
    <div>
      <h1>Parent Message</h1>
      <h3>{message}</h3>
      <Child change={handleMessageChange}/>
    </div>
  );
}
