import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEditPizza }) {
  const renderPizzas = pizzas.map(pizza => {
    return <Pizza key={pizza.id} pizza={pizza} onEditPizza={onEditPizza}/>
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          renderPizzas
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
