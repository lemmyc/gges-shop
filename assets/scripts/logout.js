$(document).ready(()=>{
    const logoutBtns = document.querySelectorAll('.logout-btn');
    for(let logoutBtn of logoutBtns){
        logoutBtn.onclick = (e)=>{
            e.preventDefault();
            window.localStorage.setItem("isLogged", false);
            let currentPage = (window.location.href).split("/").pop();
            if (currentPage == "") currentPage = "index.html"
            window.open(currentPage, "_self")
        }
    }
})