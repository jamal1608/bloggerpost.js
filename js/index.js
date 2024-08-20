import { db} from './firebase.mjs';
import { collection, getDocs, doc } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
// 
// const cors =require('cors.json');
// // app.use((cors){

// //   origin: "///C:/Users/hp/Desktop/mini%20heck/js/firebase.mjs"
// // });

let datapost = document.getElementById('updatepost')
async function getpost() {
  datapost.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "post"));
  querySnapshot.forEach((doc) => {

    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data());
    let getVal = doc.data()

 datapost.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${getVal.url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${getVal.name}</h5>
          <p class="card-text">${getVal.descp}</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>`      
  });
  console.log(querySnapshot);
}



































// location to login Page
const submit = document.getElementById("login");
submit.addEventListener('click', function(){
console.log("login", login);
window.location.assign('login.html')
})



getpost()

window.post = getpost;





























































































