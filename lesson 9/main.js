let butt=document.querySelector('#but');
let del=document.querySelector('#del');
let fio=[...document.querySelectorAll('.fio')]
let text =document.querySelector('#tavle_body')
data=[]

butt.addEventListener('click',function(event){
 console.log(fio)
 })







// let valid=fio.every(function(index){
//   console.log(index)
//   if(index.value==''){return false}
//   else{return true}
  
// })
// console.log(valid)
// if (valid==true) {
//   return text.innerHTML+= `<tr><td>${fio[0].value }</td> <td>${fio[1].value }</td><th>${fio[2].value }</th></tr>`
// }
// else{return alert('одно из полей не заполнено')}

// // text.innerHTML+= fio.map((elem)=>{
// // //  return`<td>${elem.value}</td>`
// // }) 