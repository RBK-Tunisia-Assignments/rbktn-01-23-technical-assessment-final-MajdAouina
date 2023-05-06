const getrecepie = (req, res) => {
  const recipeId = req.params.id;
  
  getRecipeById(recipeId,(err, r)=>{
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(r);
  });
};

module.exports = {
  getrecepie,
};
