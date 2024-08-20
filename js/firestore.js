

import { db, app} from './firebase.mjs';

import { collection, addDoc, doc } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import {  getDocs } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import {  deleteDoc, updateDoc  } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import {  getStorage, ref , uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js';



//edit and delete function
function showmessage(message, divid){
  var msgdiv = document.getElementById(divid);
  msgdiv.style.display ="block";
  msgdiv.innerHTML = message;
  msgdiv.style.opacity=1;
  setTimeout(function(){
    msgdiv.style.opacity=0;
  }, 5000);
}















// Add a new document with a generated id.




const input = document.getElementById('title');


const desc = document.getElementById('text');
const img = document.getElementById('img')
const blogsimg = collection(db, "post")
const submit = document.getElementById('submit')



//add document
submit.addEventListener('click', async function(){
  const docRef = await addDoc(collection(db, "post"), {
    name: input.value,
    descp: desc.value,
    image: blogsimg.url })}), 
    
//for image files    
    
submit.addEventListener('click', ()=>{
console.log("click");

const blogstorageRef = ref(storage, img.files[0].name);

//uploaded
submit.disabled = true;

uploadBytes(blogstorageRef, img.files[0])

  .then((snapshot) => {


    console.log('Uploaded a blob or file!');
    getDownloadURL(blogstorageRef)
    .then((url) =>{

addDoc(blogsimg, {url , 
  name: input.value,
  descp: desc.value



}).then (()=> {
  console.log("uploaded to db");
  submit.disabled = false;
  
})             


    })
    .catch((err)=> console.log('error to download =>', err),
    );
    
  })
.catch((err)=>console.log(err))
submit.disabled = false;






});





  const storage = getStorage(app);
  
   
    


    
    
    


//   });
  
//   console.log("Document written with ID: ", docRef.id);
  
// })
 
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
<button id="${doc.id}"  onclick="edit(this)"     type="button" class="btn btn-success">Edit</button>
<button  id="${doc.id}"  onclick="del(this)"      type="button" class="btn btn-danger">Delete</button>
<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>`      
  });

  console.log(querySnapshot);
}


// delete and edit function


//delete function
async function del(e){
  try{
    await deleteDoc(doc(db, "post", e.id));
    showmessage('Your data has Deleted', 'signinmsg');
  }
  catch(error){
    console.log("error",error);
  }}






//edit function
async function edit(e) {
  const todoRef = doc(db, "post", e.id);
  try{
    await updateDoc(todoRef, {

      name: prompt('Edit your Title'),
      descp: prompt('Edit Your Blog') 

    })}
    catch(error){
      console.log("error", error);
      
    }
    getodos()
  }
  
  getpost()
 
  window.del = del; 
  window.edit = edit;
  window.post = getpost;
  

  // text Area
  
  // $(document).ready(function(){
  //   $('#title').focus();
  //     $('#text').autosize();
  // });
