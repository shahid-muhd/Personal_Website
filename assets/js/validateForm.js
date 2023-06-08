document.getElementById("form-button").addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("form-name");
  let email = document.getElementById("email");
  let sub = document.getElementById("subject");
  let message = document.getElementById("message");

  const data = {
    name:name.value,
    email:email.value,
    sub:sub.value,
    message:message.value,
  };

  if (data.name!='' && data.email.includes('@') && data.sub!='' && data.message!='') {
    name.style.border='solid 1px #00d636';
    sub.style.border='solid 1px #00d636'
    message.style.border='solid 1px #00d636'
    email.style.border='solid 1px #00d636'


    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    fetch('https://formcarry.com/s/TL_RlfUWY2G', {
      method: "post",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: jsonData,
    }).then((res)=>{
      console.log(res);
      alert('Your form has been successfully recieved');
      
    }).catch((e)=>{
      console.log(e);
    });
  } if(data.name==''){

    name.style.border='solid 1px #e80368';
    name.placeholder='Pleae Complete this name field'
  }if(data.sub==''){
    sub.style.border='solid 1px #e80368'
    sub.placeholder='Pleae Complete this subject field'

  }if(data.message==''){
    message.style.border='solid 1px #e80368'
    message.placeholder='Pleae Complete this name field'
  } if(!data.email.includes('@')){
    email.style.border='solid 1px #e80368'
    email.placeholder='Please enter a valid email'
  }




}
