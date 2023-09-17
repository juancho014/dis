const express = require ('express');
const app = express();
const path = require('path');
const data = require('./utils/data')
const title = 'Origen'



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    data.getAllDishes((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('index', {
            title,
            JSONBody
        });

    })
  
})

app.get('/comidas', (req, res)=>{
    res.render('pages/comidas', {
        title: `${title} | Comidas`,
        //dishes
    })
})

app.get('/infusiones', (req, res)=>{
    res.render('pages/infusiones',{
        title: `${title} | Infusiones`,
        //dishes
    })
})

app.get('/contacto', (req, res)=>{
    res.render('pages/contacto', {
        title:`${title} | Contacto`,
        //dishes
    })
})

app.listen(3000, ()=>{
    console.log('Funcionando en el puerto 3000')
})



