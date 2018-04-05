var express     = require("express"),
    app         = express();
    jQuery      = require("jquery")
  
      

 app.set("view engine", "ejs");
 app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.listen(8080, ("localhost"), function(){
  console.log ("Server is runing");
});
