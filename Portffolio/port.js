
document.addEventListener("scroll",function()
{
   const a=document.querySelectorAll(".fill");
   a.forEach(fill => {
   fill.style.width=fill.getAttribute("data-width")   
   });
   
}
);

//****************ARROW BUTTON to TOP********************
let b1=document.createElement("button");
b1.id="bid";
b1.innerHTML="&#8679";
/*b1.style.bottom="20px";
b1.style.right="20px";
b1.style.display="none"*/
document.body.appendChild(b1)

document.addEventListener("scroll",()=>{
if(window.scrollY>=400)
{
   b1.style.display="block";
}
else{
   b1.style.display="none";
} })

b1.addEventListener("click",()=>{
  window.scrollTo(
   {top:0,behavior:"smooth"}) 
})


//*******************Theme Changer**************************
let c=document.getElementById("b2");
  let d= document.getElementById("contt");
c.addEventListener("click",()=>
{
   document.body.classList.toggle("b22")
  d.classList.toggle("b23")
})




//****************Buttons Scroll******************
 let Buttons= document.querySelectorAll("nav.clasnav button");

Buttons.forEach(btn=>{
   btn.addEventListener("click",()=>{
      let e=btn.dataset.target;
      let f=document.querySelector(`#${e}`)
      f.scrollIntoView({behavior:"smooth"});
   })
})
