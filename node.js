let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discound=document.getElementById('discound');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');

//get total
function getTotal(){
   if(price.value !='')
   {
    let result= (+price.value + +taxes.value + +ads.value) - +discound.value;
    total.innerHTML=result;
    total.style.background='#040';
   }
   else
   {
    total.innerHTML='';
    total.style.background='rgb(198, 4, 4)';
   }
}




//create product
let datapro;
if(localStorage.product!=null)
{
    datapro=JSON.parse(localStorage.product);
}
else
{
    datapro=[];
}
submit.onclick=function(){
   let newpro={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discound:discound.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
   }
   datapro.push(newpro)
   localStorage.setItem('product',JSON.stringify(datapro))
   clearData()
   showdata()
}
//save local storge




//clear inputs

function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discound.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}
//read

function showdata(){
   let table='';
   for(let i=0;i<datapro.length;i++)
   {
    table+=`
    <tr>
                        <td>${i}</td>
                        <td>${datapro[i].id}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].taxes}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discound}</td>
                        <td>${datapro[i].category}</td>
                        <td>${datapro[i].total}</td>
                        <td><button  id="updete">Updete</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
    </tr>`
   }

   document.getElementById('tbody').innerHTML=table;
   let btndelete=document.getElementById('deleteAll');
   if(datapro.length>0)
   {
     btndelete.innerHTML=`<button onclick="deleteAll()" >Delete All</button>`
   }
   else{
    btndelete.innerHTML='';
   }
}

showdata()
//count
//delete
function deleteData(i)
{
   datapro.splice(i,1);
   localStorage.product=JSON.stringify(datapro);
   showdata()
}
function deleteAll(){
    localStorage.clear()
    datapro.splice(0)
    showdata()

}
//updete
//search
//clean data
