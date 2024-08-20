import {auth,  signInWithEmailAndPassword  } from "./firebase.mjs";


//sign in message
function showmessage(message, divid){
  var msgdiv = document.getElementById(divid);
  msgdiv.style.display ="block";
  msgdiv.innerHTML = message;
  msgdiv.style.opacity=1;
  setTimeout(function(){
    msgdiv.style.opacity=0;
  }, 5000);
}










let signin = document.getElementById('login')

signin.addEventListener('click' , function(){
   
 
    let emin = document.getElementById('emailin').value;
    let passin = document.getElementById('passwordin').value;
    console.log(emin, passin);
    
  signInWithEmailAndPassword(auth, emin, passin)
    .then((userCredential) => {
      showmessage('login is succesful', 'signinmsg');
      window.location.assign('post.html');
      // Signed in 
      const user = userCredential.user;})

      // .catch((error)=>{
      //   console.error("error writing document", error)
      // })



      .catch((error)=>{
        
        const errorCode = error.code;

        if (errorCode === 'auth/invalid-credential'){
          showmessage('Incorrect Email or Password', 'signinmsg')
        }else{
          showmessage('Account does not Exist', 'signinmsg')
        }});
      })
        //const errorMessage = error.message;
        
        // console.log(
        // (alert(errorMessage, errorCode)));
        // ..
;
    
      
      
      
      // console.log(user);
      
      // ...
   
      // signInWithEmailAndPassword(auth, emin, passin)
      // .then((userCredential) => {
      //   // Signed in 
      //   const user = userCredential.user;
      //   console.log('login');
        
       
        
      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   alert("haha")
      // });
   