import React from 'react';
import './App.css';
import NavWrapper from "./components/navigation/NavWrapper/NavWrapper";
import ContentArea from "./components/body/content-area/content-area";

function App() {
  return (
    <>
      <NavWrapper /> <br/>
      <ContentArea />
    </>
  );
}

export default App;
