var inputElements = document.querySelectorAll("#registerForm input");
$(document).ready(()=>{
    const submitBtn = document.getElementById("regSubmitBtn");
    submitBtn.onclick = (e)=>{
        e.preventDefault();
        if(formValidate()){
            submitForm()
            window.localStorage.setItem("isLogged", true);
            window.open('index.html', "_self")
        }
    }
    
})
function formValidate(){
    var isAllValid = 1;
    let email;
    for(element of inputElements){
        switch(element.name){
            case 'email':
                let emailReg =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if(!emailReg.test(element.value)){
                    alert('Vui lòng nhập Email hợp lệ.');
                    isAllValid = 0;
                }
                email = element.value;
                break;
            case 'pwd':
                let pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
                if(element.value.length >= 8){
                    var pw = element.value;
                    var pwValid = true;
                }
                else{
                    alert('Mật khẩu phải có độ dài tối thiểu là 8 kí tự.');
                    isAllValid = 0;
                } 
                break;
            case 'repwd':
                if(element.value != pw && pwValid){
                    alert('Mật khẩu nhập lại không khớp');
                    isAllValid = 0;
                }
                break;
            case 'name':
                if(element.value.length < 4){
                    alert('Vui lòng kiểm tra lại họ và tên');
                    isAllValid = 0;
                }
        }
    }
    if(JSON.parse(window.localStorage.getItem(email)) != null){
        alert("Tên người dùng đã được đăng ký trước đó");
        isAllValid = 0;
    }
    return isAllValid;
}
function submitForm(){
    let data = {};
    for(element of inputElements){
        let elementName = element.getAttribute("name");
        let elementValue = element.value;
        switch(elementName){
            case 'pwd':
                data['password'] = elementValue;
                break;
            case 'repwd':
                break;
            default:
                data[elementName] = elementValue;
        }
    }
    let userKey = data.email;
    window.localStorage.setItem(userKey, JSON.stringify(data));
    window.localStorage.setItem("currentUser", data.email);
}