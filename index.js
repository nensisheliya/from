document.querySelector("form").addEventListener("submit",(e)=>{
e.preventDefault();
let name=document.getElementById("name").value
let age=document.getElementById("age").value
let password=document.getElementById("password").value



if(name.length>0 && age>18 && password.length>8){
    console.log(name,age,password)
}
else{
    alert("please enter a valid detalis")
}
});