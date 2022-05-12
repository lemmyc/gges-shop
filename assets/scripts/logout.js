$(document).ready(()=>{
    const logoutBtns = document.querySelectorAll('.logout-btn');
    for(let logoutBtn of logoutBtns){
        logoutBtn.onclick = (e)=>{
            e.preventDefault();
            window.localStorage.setItem("isLogged", false);
            window.open('index.html', "_self")
        }
    }
})