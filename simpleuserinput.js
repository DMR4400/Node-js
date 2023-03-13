let express= require("express")
let ourApp=express()
ourApp.use(express.urlencoded({extended: false}))
ourApp.get('/',function(req,res){
    res.send(`
    <form action="/answer" method="POST">
    <p>what color?</p>
    <input name= "color" autocomplete="off">
    <button>Submit</button>
    </form>
    `)
})
ourApp.post('/answer',function(req,res){
    if(req.body.color.toUpperCase()== "BLUE")
    {
        res.send(`
        <p> Congrats.</p>
        <a href="/">back to homepage  </a>`)
    }
    else{
        res.send(`
        <p> Incorrect.</p>
        <a href="/">back to homepage  </a>`)
    }
})
ourApp.listen(3000)
