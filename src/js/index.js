const h1 = document.getElementById("fadeIn1")
const rondomkaarten = document.getElementById("rondom-kaarten")
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

window.onload = function (){
    window.setTimeout(fadeIn, 1000);
}

async function fadeIn(){
    h1.innerHTML = "Hallo, welkom op mijn portfolio website"
    h1.style.opacity = "1";
    await sleep(3000)
    h1.style.opacity = "0"
    await sleep(3000)
    h1.innerHTML = "Mijn naam is Jonas Vandecasteele en ik ben een Full Stack Developer in opleiding."
    h1.style.opacity = "1";
    await sleep(3000)
    h1.style.opacity = "0"
    await sleep(3000)
    h1.innerHTML = "Verken mijn projecten en ontdek wat ik met code en creativiteit kan doen."
    h1.style.opacity = "1";
    await sleep(3000)
    h1.style.opacity = "0";
    await sleep(3000)
    document.body.classList.remove("bg-black");
    document.body.classList.add("bg-light")
    rondomkaarten.classList.remove("d-none")
    h1.classList.add("d-none")
    rondomkaarten.classList.add("d-flex")
}



