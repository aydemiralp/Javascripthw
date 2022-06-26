let username=prompt("Lütfen isminizi giriniz")
let userDOM=document.querySelector("#myName")
userDOM.innerHTML=username

function showTime(){
    
    let clock = new Date();
    clock = clock.toLocaleTimeString();
    document.querySelector("#currentclock").innerHTML = clock;
  
    
    setTimeout(showTime , 1000);
}