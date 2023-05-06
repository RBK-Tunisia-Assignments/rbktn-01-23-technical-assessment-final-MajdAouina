const connection = require("../database-mysql/index");

//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll=(callback)=>{
  const query="SELECT * FROM recepies";
  connection.query(query, (err, results) => {
    if(err){
      return callback(err, null);
    }
    return callback(null, results);
  });
};


module.exports = { getAll };
