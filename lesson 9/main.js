function TableEmployees() {
   


let butt=document.querySelector('#but');
let name =document.querySelector('#name')
let surname =document.querySelector('#surname')
let salary =document.querySelector('#salary')
let dateHiring =document.querySelector('#dateHiring')
let Tbody =document.querySelector('#Tbody')
let table =document.querySelector('#table')
let delAll =document.querySelector('#delAll')
let del =document.querySelector('#del')
let edit =document.querySelector('#edit')
let salaryMax=document.querySelector('#salaryMax')
let salaryMin=document.querySelector('#salaryMin')
let DateMax=document.querySelector('#DateMax')
let DateMin=document.querySelector('#DateMin')
let localData=JSON.parse(localStorage.getItem('data'))
 let data=localData ||[]
 getEmployee(data)

console.log(localData)
butt.addEventListener('click',function(event){
    event.preventDefault();
 const employee={
    id:Date.now(),
    // check:false,
    name: name.value,
    surname: surname.value,
    salary:salary.value,
    dateHiring:dateHiring.value
}
 data.push(employee)
 localStorage.setItem('data',JSON.stringify(data))
console.log(data)
Tbody.innerHTML=''
getEmployee(data)

 })


 delAll.addEventListener('click',()=>{
    data.splice(0,data.length)
    localStorage.setItem('data',JSON.stringify(data))
    console.log(data)
   Tbody.innerHTML=''
 })

 function getEmployee(data) {
   
    data.forEach(item => {
        Tbody.innerHTML+=`<tr id="${item.id }">
        <td><input type="checkbox" id="check"></td>
        <td>${item.name }</td>
        <td>${item.surname }</td>
        <td>${item.salary }</td>
         <th>${item.dateHiring}</th>
         </tr>`
    });
    
 }




table.addEventListener('click',(e)=>{
if (e.target.checked) {
    let checkDel = e.target.closest("tr").id
 index = data.findIndex((item) => item.id === +checkDel );
   //  console.log(index)
    del.addEventListener('click',()=>{
        data.splice(index, 1)
        localStorage.setItem('data',JSON.stringify(data))
        Tbody.innerHTML=''
        getEmployee(data)
       })
}
 })

 edit.addEventListener('click',()=>{
   let allcheck=document.querySelectorAll('input[type="checkbox"]:checked')
   console.log(allcheck)
   if (allcheck.length>1) {
      alert('вы выбрали мого сотрудников')
      console.log(allcheck)
      // allcheck.length=0
      // Tbody.innerHTML=''
      // getEmployee(data)
   }
   else{

      let checkedit = allcheck[0].closest("tr").id
      data.map(item=>{
         if (item.id==checkedit) {
            console.log(item.id ,name.value)
            item.name=name.value
            item.surname=surname.value
            item.salary=salary.value
            item.dateHiring=dateHiring.value
         }
      })
      console.log(data)
      localStorage.setItem('data',JSON.stringify(data))
      Tbody.innerHTML=''
      getEmployee(data)
   }
    })

salaryMin.addEventListener('click',()=>{

data.sort((a,b)=> {return a.salary-b.salary} )
localStorage.setItem('data',JSON.stringify(data))
Tbody.innerHTML=''
getEmployee(data)
})

salaryMax.addEventListener('click',()=>{
   localStorage.setItem('data',JSON.stringify(data))
data.sort((a,b)=> {return b.salary-a.salary} )
Tbody.innerHTML=''
getEmployee(data)
})


DateMin.addEventListener('click',()=>{
   // console.log(+(new Date(a.dateHiring)))

// console.log(new Date(data[0].dateHiring))
   data.sort((a,b)=> {return (+(new Date(a.dateHiring))- +(new Date(b.dateHiring)))} )
   localStorage.setItem('data',JSON.stringify(data))
   Tbody.innerHTML=''
   getEmployee(data)
   })
   
   DateMax.addEventListener('click',()=>{
     
   data.sort((a,b)=> {return (+(new Date(b.dateHiring))- +(new Date(a.dateHiring)))} )
   localStorage.setItem('data',JSON.stringify(data))
   Tbody.innerHTML=''
   getEmployee(data)
   })
   setTimeout(()=>{
document.querySelector('.baner').style.display='none'

   },5000)

   }

   TableEmployees()