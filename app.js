const express = require ('express');
const app = express();
const path = require('path');
const data = require('./utils/data');
const multer =require('multer');
const title = 'Origen'



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const storage= multer.diskStorage({
    destination: path.join(__dirname, 'public/img'),
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
})

app.use(multer({
    storage,
    dest:  path.join(__dirname, 'public/img')
}).single('image'))


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
});

app.get('/formulario', (req, res)=>{
    res.render('pages/formulario', {
        title:`${title} | formulario`,
        //dishes
    })
});

app.post('/upload',(req,res)=>{
   console.log(req.file);
    res.send('UPLOADED');
});

app.get('/formulario2', (req, res)=>{
    res.render('pages/formulario2', {
        title:`${title} | formulario2`,
        //dishes
    })
});

app.get('/email', (req, res)=>{
    res.render('pages/email', {
        title:`${title} | email`,
    
    })
});

app.get('/registros', (req, res)=>{
    res.render('pages/registros', {
        title:`${title} | registro`,
        
    })
});

app.get('/login', (req, res)=>{
    res.render('pages/login', {
        title:`${title} | login`,
        
    })
});




app.listen(3000, ()=>{
    console.log('Funcionando en el puerto 3000')
})



