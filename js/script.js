let menuVisible = false;
const mostrarquitarmenu = () => {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
};

const seleccionar = () => {
    document.getElementById("nav").classList="";
    menuVisible = false;
}

const efectobarra = () => {
    let skills = document.getElementById("skills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanciaSkills >= 300) {
      let habilidades = document.getElementsByClassName("progreso");
      for (let habilidad of habilidades) {
        habilidad.classList.add("javascript");
      }
    }
  };
  

window.onscroll = function(){
    efectobarra();
}