import React, { useState } from "react";

export default function HomePage() {
  const [data, setData] = useState();

  const saveData = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("mykey"));
    localStorage.setItem("myKey", data);
  };

  const readData = () => {
    localStorage.getItem("mykey");
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <form>
        <label>What To Do</label>
        <input type="text" onChange={handleChange}></input>
        <button type="submit" onClick={saveData}>
          Add
        </button>
      </form>
    </div>
  );
}
