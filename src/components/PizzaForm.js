import React from "react";

function PizzaForm({ editPizza, setEditPizza, onUpdatePizza }) {

  const { id, topping, size, vegetarian } = editPizza

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editPizza)
    }).then(res => res.json())
    .then(onUpdatePizza)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setEditPizza({...editPizza, [name]: value})
  }

  function handleCheck(e) {
    const { name, value } = e.target
    setEditPizza({...editPizza, [name]: value==='Vegetarian'})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleChange}
            value={topping}
          />
        </div>
        <div className="col" onChange={handleChange}>
          <select className="form-control" name="size" value={size} >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleCheck}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleCheck}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
