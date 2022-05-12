$(document).ready(()=>{
    let isLogged = JSON.parse(window.localStorage.getItem("isLogged")) ;
    if(isLogged){
        alert('log in')
    }
})