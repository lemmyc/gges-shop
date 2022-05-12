var itemList={
    "gpu-asus-rtx-3060":{   
        "name":"ASUS ROG Strix GeForce RTX 3060 Ti Gaming 8GB V2",
        "price":16490000,
        "photo":"assets/images/product-images/asus-rog-rtx-3060.webp"
    },

};
const ordTableBody = document.querySelector('.ord-table tbody');
const ordTableFooter = document.querySelector('.ord-table tfoot');
let totalPreTax = 0;
var htmls, html = [];
var index = 0; // index trong mảng html (thứ tự mặt hàng trong đơn hàng)
var localDt = localStorage;
for(var key in localDt){
    if(localStorage.hasOwnProperty(key)){
        if(itemList[key] === undefined) continue;
        let item = itemList[key]; //với mỗi key, lấy từng item theo key đó
        let photo = item.photo;
        let name = item.name;
        let price = convToVND(item.price);
        let orderCount = parseInt(localStorage.getItem(key));
        let total = convToVND(item.price*orderCount);
        totalPreTax += item.price*orderCount;
        html.push(`
            <tr>
                <td class="d-prod-img"><img src="${photo}" alt=""></td>
                <td class="d-prod-name">${name}</td>
                <td class="d-prod-quant">${orderCount}</td>
                <td class="d-prod-price">${price}</td>
                <td class="d-prod-total">${total}</td>
                <td class="d-prod-del">
                <div class="input-group inline-group">
                    <input class="form-control quantity flex-grow-0 w-50  p-0 mb-3 text-center" min="1" name="quantity" value="1" type="number">
                </div>
                    <button class="d-prod-del-btn" data-code=${key} onclick="handleRemove('${index}', '${key}')">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>
            `)
    }
    index++;
}
htmls = html.join('')
ordTableBody.innerHTML = htmls;
ordTableFooter.innerHTML = getOrdFooter();
toggleTable();
function handleRemove(removeIndex, removeKey){
    totalPreTax -= itemList[removeKey].price*parseInt(localStorage.getItem(removeKey));
    localStorage.removeItem(removeKey);
    let index = parseInt(removeIndex);
    // với mỗi nút remove, ta sẽ gán cứng một index trong lúc render giao diện
    // nên khi remove một phần tử, nếu dùng splice, index trong mảng sẽ thay đổi
    // nhưng index trong hàm của onclick thì không được cập nhật => LỖI
    // nên ta gán tạm thời tại phần tử đó là một chuỗi rỗng
    // khi join lại và render ra giao diện, html cũng sẽ bỏ qua
    // khi reload lại trang, mọi thứ sẽ được cập nhật lại
    html[index] = ` `;
    htmls = html.join('');
    ordTableBody.innerHTML = htmls;
    ordTableFooter.innerHTML = getOrdFooter();
    toggleTable();
}
function getOrdFooter(){
    let discountRate = getDiscountRate();
    let discount = discountRate*totalPreTax;
    let tax = 0.1*(totalPreTax - discount);
    let total = totalPreTax - discount + tax;
    htmls = `
        <tr>
            <td class="totalPreTax" colspan="6">
                Tổng (A) = ${convToVND(totalPreTax)}
            </td>
        </tr>
        <tr>
            <td class="discount" colspan="6">
                Chiết khấu (B) = ${discountRate} x A = ${convToVND(discount)} 
                <p class="mb-0" style="font-size: 16px"> <i>Đăng nhập tại GGES - Nhận ngay ưu đãi 10%</i></p>
            </td>
        </tr>
        <tr>
            <td class="total" colspan="6">
                Thành tiền =  ${convToVND(total)}
            </td>
        </tr>
        <tr>
            <td class="confirmation" colspan="6">
                <button id="confirm-btn" onclick="handleConfirmClick()">Xác nhận đơn hàng</button>
                <button id="print-btn" onclick="handlePrintClick()"><i class="fa-solid fa-print"></i> In bản báo giá</button>
            </td>
        </tr>
    `
    return htmls;
}
function convToVND(number){
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}
function getDiscountRate(){
    return (JSON.parse(window.localStorage.getItem("isLogged")) ? 0.1 : 0)
}
function handleConfirmClick(){
    if(localStorage.length > 0){
        for(var key in localStorage){
            if(localStorage.hasOwnProperty(key)){
                window.localStorage.removeItem(key)
            }
        }
        alert('Đơn hàng của bạn đã được chúng tôi tiếp nhận.\r\nXin cảm ơn vì đã ủng hộ Sữa chua Freeze !!!');
        location.reload();
    }else
        alert('Xin quý khách hãy thêm ít nhất một sản phẩm.')
}
function handlePrintClick(){
    if(localStorage.length > 0)
        window.print();
    else
        alert('Xin quý khách hãy thêm ít nhất một sản phẩm.')
}
function toggleTable(){
    if(localStorage.length === 0){
        document.querySelector('.ord-table').style.border = 'none';
        document.querySelector('.ord-table').innerHTML = `
            <div
              style="margin: 16px; text-align:center; font-weight: bold; font-size: 24px; color: #f90b6e">
                <p
                    style="margin-bottom: 16px"
                >
                    Giỏ hàng chưa có sản phẩm
                </p>
                <a
                    style="text-decoration:none; font-size: 20px; padding: 4px 8px; border: 1px solid black; color: #f90b6e"
                    href="./sanpham.html" rel=”noopener”> Mua sắm ngay !!!
                </a>
            </div>
        `
    }
}
window.onstorage = ()=>{
    location.reload();
}

