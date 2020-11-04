
showNotes();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click",function(){
 let addTxt = document.getElementById("addTxt");

 let notes = localStorage.getItem("notes");

if(notes == null){
   
   notesObj = [];
}

else{
    notesObj = JSON.parse(notes);
}
notesObj.push(addTxt.value);

localStorage.setItem("notes",JSON.stringify(notesObj)); //in LS it is stored in the  form of string only
addTxt.value = " ";
console.log(notesObj);
showNotes();
})

// display stored notes
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
     
       notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element,index){
        html = html + `<div class="noteCard my-2 mx-2card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button> 
      
        </div>
        </div>`;
          
    });

    let notesElem = document.getElementById('notes');
    if(notesObj.length !=0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Nothing to Show. Please Add a Note in "Add a Note" section `;
    }
}


// Delete Note Function
function deleteNote(index){

let notes = localStorage.getItem("notes");
    if(notes == null){
        // if it is null then assign blank array to it
       notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
  

    notesObj.splice(index,1);
    // now we also have to update localstorage till now the element os delted from local Array
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

// search function
let search =  document.getElementById("search-txt");
// input event listen will be fired when we start typing in input
search.addEventListener("input",function(){
let inputVal  = search.value.toLowerCase();

 let noteCards =  document.getElementsByClassName("noteCard"); //got array of all cards
 Array.from(noteCards).forEach(function(element){
     let cardTxt = element.getElementsByTagName('p')[0].innerText;
    //  console.log(cardTxt);
    if(cardTxt.includes(inputVal)){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";   
    }
 })
}) 






















