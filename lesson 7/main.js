function getValue() {
    let TuduList = document.querySelector("#tudulist");
    let Title = document.querySelector("#TitleInput");
    let Description = document.querySelector("#descriptionInput");
    let Submit = document.querySelector("#submit");
    let list = document.querySelector("#list");
  
    const data = [];
  
    Submit.addEventListener("click", function (e) {
      e.preventDefault();
      const Val = {
        id: new Date(),
        title: Title.value,
        description: Description.value,
      };
      data.push(Val);
      console.log(data);
      list.innerHTML = "";
      getList(data)
      TuduList.addEventListener("click", function (e) {
        if (e.target.textContent === "delete") {
          // let listDel = e.target.closest("li");
          let TitleDel = e.target.closest(".wrapper").firstElementChild;
          // console.log(TitleDel.textContent)
          // listDel.remove();
          for (let i = 0; i < data.length; i++) {
            if (data[i].id == TitleDel.textContent) {
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
      });
      
    });
  }
  
  getValue();

  function getList(data){
    for (let i = 0; i < data.length; i++) {
      list.innerHTML += ` <li>
        <div class="wrapper">
        <div id="id_title">${data[i].id}</div>
            <h1>Title:${data[i].title}</h1>
            <div class="description">description: :${data[i].description}</div>
            <div class="but">
                <button>delete</button>
            </div>
        </div>
    </li>`;
    }
  }