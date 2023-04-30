function getValue() {
    let TuduList = document.querySelector("#tudulist");
    let Submit = document.querySelector("#submit");
    let list = document.querySelector("#list");
    // let saveList = document.querySelector("#ok");
    let wrapModal = document.querySelector("#wrap");
    let getModal=document.querySelector('#modal')
    const data = [];
  
    Submit.addEventListener("click", function (e) {
      e.preventDefault();
      setList(data,list)
      getList(data)
     
      
    });
    TuduList.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.textContent === "delete") {
        let TitleDel = e.target.closest(".wrapper").firstElementChild;
        deleteList(data ,list,TitleDel)
      }
      else if(e.target.textContent === "edit"){
        
        getModal.style.display='block'
        let TitleEdit = e.target.closest(".wrapper").firstElementChild;

        wrapModal.innerHTML = "";
        editModal(data,wrapModal,TitleEdit)
      
      }
      console.log(data);
    });

    wrapModal.addEventListener("click", function (e) {
      e.preventDefault();
      
      if (e.target.textContent === "save") {
      let titleSave = e.target.closest("div").id
      console.log(titleSave)
      saveModals(data,titleSave)           
      }
      list.innerHTML = "";
      getList(data)
      console.log(data);
      getModal.style.display='none'
    });
  }
  

 function setList(data ,list){
  let Title = document.querySelector("#TitleInput");
  let Description = document.querySelector("#descriptionInput");
  const val = {
    id: Date.now(),
    title: Title.value,
    description: Description.value,
  };
  data.push(val);
  console.log(data);
  list.innerHTML = "";
 }

  function getList(data){
    for (let i = 0; i < data.length; i++) {
      list.innerHTML += ` <li>
        <div class="wrapper">
        <div id="id_title">${data[i].id}</div>
            <h1>Title:${data[i].title}</h1>
            <div class="description">description: :${data[i].description}</div>
            <div class="but">
                <button>delete</button>
                <button>edit</button>
            </div>
        </div>
    </li>`;
    }
  }

  function deleteList(data ,list,TitleDel){
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == TitleDel.textContent) {
        // data.splice(i, 1);
       if (i==0) {
        data.splice(i, i+1);
       }else{ 
        data.splice(i, i);
      }
       
        list.innerHTML = "";
        getList(data)
        console.log(data);
      }
      
    }

  }

function editModal(data,wrapModal,TitleEdit) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == TitleEdit.textContent) {
      // data.splice(i, 1);
    
      wrapModal.innerHTML+=`<label for="">title</label><br>
      <input class="inputEdit" id="TitleModal" type="text" value="${data[i].title}"><br>
      <label for="">description</label><br>
      <input class="inputEdit" id="descriptionModal" type="text" value="${data[i].description}"><br>
      <div id="${data[i].id}"><button id="ok">save</button></div>`
      
    }
  } 
}

function saveModals(data,titleSave) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == titleSave) {
      
      let Title = document.querySelector("#TitleModal");
      let Description = document.querySelector("#descriptionModal");
      data[i].title=Title.value
      data[i].description=Description.value

      
      
    }
  }
}
  getValue();
