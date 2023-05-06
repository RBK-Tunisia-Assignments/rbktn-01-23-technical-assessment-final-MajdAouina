import React from "react";
import "../App.css";

const RecepieCard = () => {
  return (
    <>
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
          </div>
          <div className="text">
            <h1 className="food">Pizza</h1>
            <i> 25 Mins</i> <br />
            <i>Serves: 5</i>
          </div>
        </>
      </div>
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
          <div className="text">
            <h1 className="food">Pasta</h1>
            <i> 30 Mins</i> <br />
            <i>4 Serves </i>
          </div>
        </>
      </div>
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VycnklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alter=""
            />
          </div>
          <div className="text">
            <h1 className="food">Curry chicken</h1>
            <i> 45 Mins</i> <br />
            <i>4 Serves </i>
          </div>
        </>
      </div>
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>

          <div className="text">
            <h1 className="food">Stir-Fry</h1>
            <i> 40 Mins</i> <br />
            <i>3 Serves </i>
          </div>
        </>
      </div>
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
            <div className="icon">
              <a href="/">
                <i />
              </a>
            </div>
          </div>
          <div className="text">
            <h1 className="food">Roasted Chicken</h1>
            <i> 425 Mins</i> <br />
            <i>6 Serves </i>
          </div>
        
      </div>
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1548869206-93b036288d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVlZiUyMHN0aXIlMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text">
            <h1 className="food">Beef Stir Fry</h1>
            <i> 40 Mins</i> <br />
            <i>2 Serves </i>
          </div>
        </>
      </div>
    </>
  );
};

export default RecepieCard;
