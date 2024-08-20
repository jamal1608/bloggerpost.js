import {auth,  createUserWithEmailAndPassword  } from "./firebase.mjs";
import{db} from "./firebase.mjs";


//signup message function
function showmessage(message, divid){
  var msgdiv = document.getElementById(divid);
  msgdiv.style.display ="block";
  msgdiv.innerHTML = message;
  msgdiv.style.opacity=1;
  setTimeout(function(){
    msgdiv.style.opacity=0;
  }, 5000);
}






// signup function
let register = document.getElementById('signup')



register.addEventListener ('click' , function(){ 
  console.log(register);


  const emailup = document.getElementById('emailup').value;
  const passup = document.getElementById('passwordup').value;
  const passc = document.getElementById('passwordc').value
console.log(passc);





if(passc !== passup ){

  showmessage('Password does not match', 'signupmsg')
    
  }else{


  }
    console.log( emailup , passup , passc );
createUserWithEmailAndPassword(auth, emailup, passup)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    showmessage('Account Created Succesfully', 'signupmsg');
    window.location.assign('login.html')
    const userdata ={
      email: emailup,
      password: passup
    };

    const docref =doc(db, "users", user.uid)
    setdoc(docref, userdata)
    .then(()=>{
    })
    .catch((error)=>{
      console.error("error writing document", error)
    })
    // console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode=='auth/email-already-in-use'){
      showmessage('Email Address Already Exists !!! Login Now', 'signupmsg')
    }else{
      showmessage('unable to create user', 'signupmsg');}
    // }if (errorCode=='auth/Failed to fetch') {
    //   showmessage('check your internet !!!', 'signupmsg')
    // } else {
    //   showmessage('unable to create user or check your internet Connection', 'signupmsg');
    // }
    // const errorMessage = error.message;
    // alert(alert(errorMessage));
    
    // ..
  })});

    
  

  


  
  
  


 

  


