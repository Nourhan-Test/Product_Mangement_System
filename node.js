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
   console.log(datapro);
}
//save local storge
//clear inputs
//read
//count
//delete
//updete
//search
//clean data
