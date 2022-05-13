var itemList={
    "sp001":{
        "name":"CPU Intel Core I5-7500 (3.4GHz - 3.8GHz)",
        "price":4490000,
        "photo":"assets/images/product-images/cpu/intel-core-i5-7500.webp"
    },
    "sp002":{
        "name":"CPU Intel Core I5-8600K (3.6GHz)",
        "price":6669000,
        "photo":"assets/images/product-images/cpu/intel-core-i5-8600k.webp"
    },
    "sp003":{
        "name":"CPU INTEL Core i9-11900 (8C/16T, 2.50 GHz - 5.20 GHz, 16MB) - 1200",
        "price":13390000,
        "photo":"assets/images/product-images/cpu/intel-core-i9-11900.webp"
    },
    "sp004":{
        "name":"Mainboard MSI Z390-A Pro",
        "price":3299000,
        "photo":"assets/images/product-images/mainboard/msi-z390a-pro.webp"
    },
    "sp005":{
        "name":"Mainboard MSI MEG Z490 GODLIKE",
        "price":20599000,
        "photo":"assets/images/product-images/mainboard/msi-meg-z490.webp"
    },
    "sp006":{
        "name":"Mainboard MSI Z590-A PRO",
        "price":4900000,
        "photo":"assets/images/product-images/mainboard/msi-z590a-pro.webp"
    },
    "sp007":{
        "name":"RAM Corsair Vengeance RGB Pro 16GB DDR4 3200MHz",
        "price":2290000,
        "photo":"assets/images/product-images/ram/corsair-rgb-pro-3200.webp"
    },
    "sp008":{
        "name":"RAM Corsair Vengeance LPX 8GB DDR4 3000MHz",
        "price":1109000,
        "photo":"assets/images/product-images/ram/corsair-lpx.webp"
    },
    "sp009":{
        "name":"RAM KINGSTON Fury Black 8GB DDR4 2666MHz",
        "price":1350000,
        "photo":"assets/images/product-images/ram/kingston-fury.webp"
    },
    "sp010":{
        "name":"GIGABYTE GeForce GTX 1660Ti 6GB GDDR6 OC",
        "price":9209000,
        "photo":"assets/images/product-images/vga/gtx-1660ti.webp"
    },
    "sp011":{
        "name":"GIGABYTE GeForce RTX 3060 Ti VISION OC 8G 8GB GDDR6",
        "price":18629000,
        "photo":"assets/images/product-images/vga/rtx-3060ti.webp"
    },
    "sp012":{
        "name":"ASUS TUF Gaming Radeon™ RX 6700 XT OC Edition 12GB GDDR6",
        "price":24109000,
        "photo":"assets/images/product-images/vga/rx-6700xt.webp"
    },
    "sp013":{
        "name":"Case Máy tính Golden Field H3B - Mid Tower (Đen)",
        "price":550000,
        "photo":"assets/images/product-images/case/golden-field-h3b.webp"
    },
    "sp014":{
        "name":"Case Máy tính Sama Shadow",
        "price":990000,
        "photo":"assets/images/product-images/case/sama-shadow.webp"
    },
    "sp015":{
        "name":"Case Máy tính Xigmatek AQUARIUS S QUEEN (No Fan) Hồng",
        "price":1799000,
        "photo":"assets/images/product-images/case/xigmatek-aquarius.webp"
    },
    "sp016":{
        "name":"Bàn phím cơ CORSAIR K63 (TKL/Cherry MX Red/Đỏ)",
        "price":1990000,
        "photo":"assets/images/product-images/keyboard/corsair-k63.webp"
    },
    "sp017":{
        "name":"Bàn phím cơ ASUS Strix Flare (Fullsize/Cherry MX Red)",
        "price":3990000,
        "photo":"assets/images/product-images/keyboard/strix-flare.webp"
    },
    "sp018":{
        "name":"Bàn phím Logitech Gaming G213 (Đen)",
        "price":990000,
        "photo":"assets/images/product-images/keyboard/logitech-g213.webp"
    },
    "sp019":{
        "name":"Chuột gaming Logitech G502 HERO (Đen)",
        "price":1049000,
        "photo":"assets/images/product-images/mouse/logitech-g502.webp"
    },
    "sp020":{
        "name":"Chuột máy tính DARE-U EM908",
        "price":299000,
        "photo":"assets/images/product-images/mouse/dareu-em908.webp"
    },
    "sp021":{
        "name":"Chuột máy tính Dareu LM130 (Đen)",
        "price":149000,
        "photo":"assets/images/product-images/mouse/dareu-lm130.webp"
    },
    "sp022":{
        "name":"Tai nghe Over-ear Logitech G331 Wired Gaming (Đen)",
        "price":1549000,
        "photo":"assets/images/product-images/earphones/logitech-g331.webp"
    },
    "sp023":{
        "name":"Tai nghe không dây gaming Logitech G733 Lightspeed RGB (Trắng)",
        "price":2989000,
        "photo":"assets/images/product-images/earphones/logitech-g733.webp"
    },
    "sp024":{
        "name":"Tai nghe DareU EH416 RGB (Đen)",
        "price":349000,
        "photo":"assets/images/product-images/earphones/dareu-eh416.webp"
    }
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
                <td class="d-prod-quant text-center">
                    <input class="form-control quantity flex-grow-0 p-0 text-center" min="1"
                        name="quantity" data-code=${key} value="${orderCount}" oninput="handleInputQuant(this)"  
                        type="number"
                        style="max-width:75%; margin: 0 auto;"
                    >
                </td>
                <td class="d-prod-price">${price}</td>
                <td class="d-prod-total">${total}</td>
                <td class="d-prod-del">
                
                    <button class="d-prod-del-btn p-1" data-code=${key} onclick="handleRemove('${index}', '${key}')">
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
                <button id="print-btn" class="d-none d-md-block" onclick="handlePrintClick()"><i class="fa-solid fa-print"></i> In bản báo giá</button>
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
                if(key.slice(0,2) === "sp")
                    window.localStorage.removeItem(key)
            }
        }
        alert('Đơn hàng của bạn đã được chúng tôi tiếp nhận.\r\nXin cảm ơn vì đã ủng hộ GGES Shop !!!');
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
function handleInputQuant(e){
    let productCode = e.dataset.code;
    let inputValue = e.value;
    window.localStorage.setItem(productCode, inputValue);
    location.reload();
}
window.onstorage = ()=>{
    location.reload();
}

