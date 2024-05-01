import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [ pizzas, setPizzas ] = useState([])
  const [ editPizza, setEditPizza ] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(setPizzas)
  }, [])

  function handleEditPizza(pizza) {
    setEditPizza(pizza)
  }

  function handleUpdatePizza(updatedPizza) {
    const updatedPizzas = pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza)
    setEditPizza(updatedPizza)
    setPizzas(updatedPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} setEditPizza={setEditPizza} onUpdatePizza={handleUpdatePizza}/>
      <PizzaList pizzas={pizzas} onEditPizza={handleEditPizza}/>
    </>
  );
}

export default App;
