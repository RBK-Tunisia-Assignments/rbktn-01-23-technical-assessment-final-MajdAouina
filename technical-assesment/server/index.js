const express = require("express");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res)=>{
  res.json(menuItems);
});

app.post("/", (req, res)=>{
  const newItem = req.body
  newItem.id=menuItems.length+1
  menuItems.push(newItem)
  res.json(newItem)
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const updatedItem = req.body
  const idx = menuItems.findidx((item)=>item.id === id)
  if (idx !== -1){
    menuItems[idx] = { ...updatedItem, id }
    res.json(menuItems[idx]);
  }
});

app.delete("/:id", (req, res)=>{
  const id = parseInt(req.params.id);
  const idx = menuItems.findidx((item) => item.id === id);
  if (idx !== -1) {
    menuItems.splice(idx, 1);
    res.json( console.log("Menu item deleted")  );
  } 
});

app.listen(4000, ()>{
  console.log("Server started on port 4000");
});

