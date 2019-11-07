const sqlite = require('sqlite3').verbose()

let db = new sqlite.Database('./gamer2.db')

db.serialize(() =>{
  db.run('CREATE TABLE gamers(id INTEGER PRIMARY KEY, name text NOT NULL);',function(err){
    if(err){
      return console.log(err.message)
    }
    console.log('Table created')
  });

  db.run('INSERT into gamers(id, name) values("1","black");',function(err,row){
    if(err){
      console.log(err.message);
    }
    console.log("entered data is added to table");
  });

  db.run('INSERT into gamers(id, name) values("5","mesy");',function(err,row){
    if(err){
      console.log(err.message);
    }
    console.log("entered data is added to table");
  });

  db.run('INSERT into gamers(id, name) values("45","inxu");',function(err,row){
    if(err){
      console.log(err.message);
    }
    console.log("entered data is added to table");
  });

  db.run('INSERT into gamers(id, name) values("15","heko");',function(err,row){
    if(err){
      console.log(err.message);
    }
    console.log("entered data is added to table");
  });
});

 db.close()
