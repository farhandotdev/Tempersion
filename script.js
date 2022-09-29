{/* <h1 class="heading">I am<br>Thermometer<span class="fa" id="thermo"></span></h1> */}

const tempLoad = () =>{
    let temp = document.getElementById('thermo');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "yellow";

    setTimeout(()=>{
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "yellow";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "orange";
    }, 2000);
    setTimeout(()=>{
        temp.innerHTML = "&#xf2c8";
    },3000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red";
    }, 4000);
}
setInterval(tempLoad, 5000);

tempLoad();