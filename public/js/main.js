const form= document.querySelector('.main-form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const formData=new FormData(form);
  const body= Object.fromEntries(formData);
  const stringJson = JSON.stringify(body);

  console.log(stringJson);

  fetch('http://localhost:3001/dish ',{
    method:'POST',
    body:stringJson,
    headers:{
        'Content-Type':'application/json'
    }
  }).then((res)=>{if(res.ok){
       alert('el producto se ha enviado con exito');
       form.reset();
  }else{
      alert('hubo un error al enviar el producto')
  }})
    .catch(err=>console.log(err))
    
});