import React from "react";
import "../index.scss";
import data from './data/data.json';

const MenuItem = ({ item }) => {
  return (
    <div className="card">
      <button className="delete">delete</button>
      <button className="update">update</button>

      <>
        <div className="header">
          <img className="img" src={item.image} alt="food" />
        </div>
        <div className="text">
          <h1 className="food">{item.name}</h1>
          <i>{item.time}</i> <br />
          <i>Serves: {item.servings}</i>
        </div>
      </>
    </div>
  );
};

const AllRecepies = () => {
  return (
    <div className="card-container">
      {data.menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AllRecepies;
