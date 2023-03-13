let http=require("http")
let ourApp=http.createServer(function(req,res){
    if(req.url=="/")
    {
        res.end("Hello and welcome to our website.")
    }
    if(req.url=="/about")
    {
        res.end("Thank You")
    }
   
    res.end("Page Not Found")
  
    
    
})
ourApp.listen(3000)
