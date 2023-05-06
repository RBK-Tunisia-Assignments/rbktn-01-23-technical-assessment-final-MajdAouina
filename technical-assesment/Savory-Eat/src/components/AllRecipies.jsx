import React from "react";
import data from "../data/data.json";
import "../index.scss";

const handleDelete = (id) => {
  const updatedMenuItems = menuItems.filter((item) => item.id !== id);
  setMenuItems(updatedMenuItems);
};
const MenuItem = ({ image, name, time, sv }) => {
  return (
    <>
      <div className="hd">
        <img className="img" src={image} alt="food" />
      </div>
      <div className="txt">
        <h1 className="food">{name}</h1>
        <i>{time}</i> <br />
        <i>Serves: {sv}</i>
      </div>
    </>
  );
};

const AllRecepies = () => {
  return (
    <div className="c">
      {data.menuItems.map((item) => (
        <div className="card" key={item.id}>
        <button onClick={() => handleDelete(id)}>Delete</button>
          <button className="update">update</button>
          <MenuItem
            image={item.image}
            name={item.name}
            time={item.time}
            sv={item.sv}
          />
        </div>
      ))}
    </div>
  );
};

export default AllRecepies;
