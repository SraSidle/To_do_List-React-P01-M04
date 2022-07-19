// import {useState} from "react"
import React, { useState } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import TaskList from "../../components/TaskList/TaskList";
import Footer from "../../components/Footer/Footer";

function App() {
  const [updateList, setUpdateList] = useState();

  return (
    <div className="App">
      <Header setUpdateList={setUpdateList} />
      <TaskList updateList={updateList} />
      <Footer />
    </div>
  );
}

export default App;
