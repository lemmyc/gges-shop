var currentUser = window.localStorage.getItem("currentUser");
$(document).ready(()=>{
    handleRememberUser();
    let isLogged = JSON.parse(window.localStorage.getItem("isLogged"));
    if(isLogged){
        let user = JSON.parse(window.localStorage.getItem(currentUser))
        // console.log(user)
        let loginBtns = document.querySelectorAll(".login-btn");
        for(let loginBtn of loginBtns){
            loginBtn.innerHTML = `Xin chào, <strong>${user.name}</strong>`
            let loginChildElement = loginBtn.nextElementSibling;
            loginChildElement.innerHTML = `
            <p>
                <i>Email của bạn:</i>
                <br/>
                <strong>${user.email}</strong>
            </p>
            <button class="btn btn-primary logout-btn">Đăng xuất</button>
            `
        }
    }
    else{
        const submitLoginBtns = document.querySelectorAll(".submit-login-btn");
        for(let submitLoginBtn of submitLoginBtns){
            submitLoginBtn.onclick = (e)=>{
                e.preventDefault();
                handleLogin();
            }
        }
    }
})
function handleRememberUser(){
    const rememberUserElements = document.querySelectorAll("[name='rememberMe']");
    const headerNavElement = document.querySelector("header nav");
    const emailInputElements = headerNavElement.querySelectorAll("[name='email']");
    // console.log(emailInputElements)
    let isRememberUser = JSON.parse(window.localStorage.getItem('rememberUser'))
    for(let rememberUserElement of rememberUserElements){
        rememberUserElement.checked = isRememberUser;
    }
    if(isRememberUser){
        for(let emailInputElement of emailInputElements){
            emailInputElement.value = currentUser;
        }
    }
}
function handleLogin(){
    const loginForms = document.getElementsByName("login-form");
    for(let loginForm of loginForms){
        if(window.getComputedStyle(loginForm).display !== 'none'){
            loginFormValidate(loginForm);
        }
    }
}
function loginFormValidate(form){
    const formInputs = form.querySelectorAll("input");
    const emailInput =  form.querySelector("[name='email']").value;
    const passInput = form.querySelector("[name='password']").value;
    const rememberUser = form.querySelector("[name='rememberMe']").checked;
    // console.log(rememberUser)
    const user = JSON.parse(window.localStorage.getItem(emailInput));
    if (user == null) alert("Vui lòng kiểm tra lại Tên người dùng")
    if(emailInput !== user.email || passInput !== user.password)
        alert("Tên người dùng hoặc Mật khẩu chưa chính xác")
    else{
        currentUser = emailInput
        window.localStorage.setItem("currentUser", currentUser);
        window.localStorage.setItem("rememberUser", rememberUser);
        window.localStorage.setItem("isLogged", true);
        let currentPage = (window.location.href).split("/").pop();
        if (currentPage == "dangky.html" || currentPage == "") currentPage = "index.html"
        currentPage = currentPage.slice(0, currentPage.indexOf(".html")+5);
        window.open(currentPage, "_self")
    }
}