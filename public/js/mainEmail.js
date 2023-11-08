
const form= document.querySelector('.emailForm');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const formData=new FormData(form);
  const body= Object.fromEntries(formData);
  const stringJson = JSON.stringify(body);

  console.log(stringJson);

  fetch('http://localhost:3001/email',{
    method:'POST',
    body:stringJson,
    headers:{
        'Content-Type':'application/json'
    }
  }).then((res)=>{if(res.ok){
    alert(`${body.name} tu mensaje a sido enviado` )
    form.reset();
  }else{
    alert('hubo un error al enviar el email')
  }
}).catch(err=>console.log(err))
    
});