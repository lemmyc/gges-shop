var itemList={
    "gges001":{
        "name":"CPU Intel Core I5-7500 (3.4GHz - 3.8GHz)",
        "price":4490000,
        "photo":"assets/images/product-images/cpu/intel-core-i5-7500.webp"
    },
    "gges002":{
        "name":"CPU Intel Core I5-8600K (3.6GHz)",
        "price":6669000,
        "photo":"assets/images/product-images/cpu/intel-core-i5-8600k.webp"
    },
    "gges003":{
        "name":"CPU INTEL Core i9-11900 (8C/16T, 2.50 GHz - 5.20 GHz, 16MB) - 1200",
        "price":13390000,
        "photo":"assets/images/product-images/cpu/intel-core-i9-11900.webp"
    },
    "gges004":{
        "name":"Mainboard MSI Z390-A Pro",
        "price":3299000,
        "photo":"assets/images/product-images/mainboard/msi-z390a-pro.webp"
    },
    "gges005":{
        "name":"Mainboard MSI MEG Z490 GODLIKE",
        "price":20599000,
        "photo":"assets/images/product-images/mainboard/msi-meg-z490.webp"
    },
    "gges006":{
        "name":"Mainboard MSI Z590-A PRO",
        "price":4900000,
        "photo":"assets/images/product-images/mainboard/msi-z590a-pro.webp"
    },
    "gges007":{
        "name":"RAM Corsair Vengeance RGB Pro 16GB DDR4 3200MHz",
        "price":2290000,
        "photo":"assets/images/product-images/ram/corsair-rgb-pro-3200.webp"
    },
    "gges008":{
        "name":"RAM Corsair Vengeance LPX 8GB DDR4 3000MHz",
        "price":1109000,
        "photo":"assets/images/product-images/ram/corsair-lpx.webp"
    },
    "gges009":{
        "name":"RAM KINGSTON Fury Black 8GB DDR4 2666MHz",
        "price":1350000,
        "photo":"assets/images/product-images/ram/kingston-fury.webp"
    },
    "gges010":{
        "name":"GIGABYTE GeForce GTX 1660Ti 6GB GDDR6 OC",
        "price":9209000,
        "photo":"assets/images/product-images/vga/gtx-1660ti.webp"
    },
    "gges011":{
        "name":"GIGABYTE GeForce RTX 3060 Ti VISION OC 8G 8GB GDDR6",
        "price":18629000,
        "photo":"assets/images/product-images/vga/rtx-3060ti.webp"
    },
    "gges012":{
        "name":"ASUS TUF Gaming Radeon™ RX 6700 XT OC Edition 12GB GDDR6",
        "price":24109000,
        "photo":"assets/images/product-images/vga/rx-6700xt.webp"
    },
    "gges013":{
        "name":"Case Máy tính Golden Field H3B - Mid Tower (Đen)",
        "price":550000,
        "photo":"assets/images/product-images/case/golden-field-h3b.webp"
    },
    "gges014":{
        "name":"Case Máy tính Sama Shadow",
        "price":990000,
        "photo":"assets/images/product-images/case/sama-shadow.webp"
    },
    "gges015":{
        "name":"Case Máy tính Xigmatek AQUARIUS S QUEEN (No Fan) Hồng",
        "price":1799000,
        "photo":"assets/images/product-images/case/xigmatek-aquarius.webp"
    },
    "gges016":{
        "name":"Bàn phím cơ CORSAIR K63 (TKL/Cherry MX Red/Đỏ)",
        "price":1990000,
        "photo":"assets/images/product-images/keyboard/corsair-k63.webp"
    },
    "gges017":{
        "name":"Bàn phím cơ ASUS Strix Flare (Fullsize/Cherry MX Red)",
        "price":3990000,
        "photo":"assets/images/product-images/keyboard/strix-flare.webp"
    },
    "gges018":{
        "name":"Bàn phím Logitech Gaming G213 (Đen)",
        "price":990000,
        "photo":"assets/images/product-images/keyboard/logitech-g213.webp"
    },
    "gges019":{
        "name":"Chuột gaming Logitech G502 HERO (Đen)",
        "price":1049000,
        "photo":"assets/images/product-images/mouse/logitech-g502.webp"
    },
    "gges020":{
        "name":"Chuột máy tính DARE-U EM908",
        "price":299000,
        "photo":"assets/images/product-images/mouse/dareu-em908.webp"
    },
    "gges021":{
        "name":"Chuột máy tính Dareu LM130 (Đen)",
        "price":149000,
        "photo":"assets/images/product-images/mouse/dareu-lm130.webp"
    },
    "gges022":{
        "name":"Tai nghe Over-ear Logitech G331 Wired Gaming (Đen)",
        "price":1549000,
        "photo":"assets/images/product-images/earphones/logitech-g331.webp"
    },
    "gges023":{
        "name":"Tai nghe không dây gaming Logitech G733 Lightspeed RGB (Trắng)",
        "price":2989000,
        "photo":"assets/images/product-images/earphones/logitech-g733.webp"
    },
    "gges024":{
        "name":"Tai nghe DareU EH416 RGB (Đen)",
        "price":349000,
        "photo":"assets/images/product-images/earphones/dareu-eh416.webp"
    }
};


const placeOrdBtns = document.querySelectorAll('.product .product-btns .btn-buy');
placeOrdBtns.forEach((placeOrdBtn, index) => {
    let listKey = (index < 9) ? `gges00${index + 1}` : `gges0${index + 1}`;
    placeOrdBtn.onclick = () => {
        // console.log(index);
        // console.log(listKey);
        placeOrd(listKey, placeOrdBtn);
    }
    // placeOrdBtn.addEventListener('click', () => placeOrd(itemList[listKey]));
});

var myAlert = document.getElementById('liveToast');
var bsAlert = new bootstrap.Toast(myAlert);

function placeOrd(productId, element) {
    let currentItemCount;       // số lượng sản phẩm hiện tại
// Nếu sản phẩm không tồn tại => cho currentCount gges = 0
    if (typeof localStorage[productId] === 'undefined')
        currentItemCount = 0;
    else
        currentItemCount = parseInt(window.localStorage.getItem(productId));
        // Lấy gges có tồn tại => lấy số lượng gges trong localStorage để làm việc

    let totalCount = currentItemCount + 1;
    //alert('Đã thêm ' + itemList[productId].name + ' vào giỏ hàng');
    myAlert.querySelector('.toast-body').innerText = 'Đã thêm ' + itemList[productId].name + ' vào giỏ hàng';
    bsAlert.show();
    window.localStorage.setItem(productId, totalCount);
}