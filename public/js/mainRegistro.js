
const form= document.querySelector('.registro');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const formData=new FormData(form);
  const body= Object.fromEntries(formData);
  const stringJson = JSON.stringify(body);

  console.log(stringJson);

  fetch('http://localhost:3001/registro',{
    method:'POST',
    body:stringJson,
    headers:{
        'Content-Type':'application/json'
    }
  }).then((res)=>{if(res.ok){
    alert( 'tu usurio a sigo enviado' )
    form.reset();
  }else{
    alert('hubo un error al enviar el registro')
    form.reset()
  }
}).catch(err=>console.log(err))
    
});