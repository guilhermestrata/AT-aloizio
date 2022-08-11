module.exports = (app)=>{
    app.get('/adicionar',(req,res)=>{
        res.render('adicionar.ejs')
    })
}