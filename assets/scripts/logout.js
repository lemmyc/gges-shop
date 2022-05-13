$(document).ready(()=>{
    const logoutBtns = document.querySelectorAll('.logout-btn');
    for(let logoutBtn of logoutBtns){
        logoutBtn.onclick = (e)=>{
            e.preventDefault();
            window.localStorage.setItem("isLogged", false);
            let currentPage = (window.location.href).split("/").pop();
            if (currentPage == "") currentPage = "index.html"
            currentPage = currentPage.slice(0, currentPage.indexOf(".html")+5);
            window.open(currentPage, "_self")
        }
    }
})