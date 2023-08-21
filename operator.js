function toogleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hambuger-icon");
    menu.classList.toggle("open");
    icon.classList.toogle("open");
}