// 1. ເພີ່ມຄຳອະທິບາຍ (desc) ໃຫ້ກັບນ້ຳຫອມແຕ່ລະລາຍການ
const productsData = [
    { id: 1, name: "ນ້ຳຫອມ Ralph Lauren Polo Red EDT 125ml", price: 4999000, img: "https://perfumerackph.com/cdn/shop/products/Ralph_Lauren_Polo_Red_EDT_125ml.jpg?v=1762005059&width=1445", desc: "ກິ່ນຫອມອົບອຸ່ນ ປົນຄວາມສະປອດ ເໝາະສຳລັບຜູ້ຊາຍທີ່ທັນສະໄໝ ແລະ ມີສະເໜ່ທີ່ໜ້າຄົ້ນຫາ." },
    { id: 2, name: "ນ້ຳຫອມ Rasasi Daarej Pour Homme Edp 100ml", price: 2300000, img: "https://perfuma.lk/wp-content/uploads/2024/05/13012021-83-600x600-1-300x300.png", desc: "ກິ່ນຫອມຫວານອ່ອນໆ ປະສົມປະສານດ້ວຍຄວາມດຶງດູດ ຕິດທົນດົນຕະຫຼອດເບິດມື້." },
    { id: 3, name: "ນ້ຳຫອມ CODE For Men Diners Pakistan", price: 3400000, img: "https://diners.com.pk/cdn/shop/files/CODE-01_400x.webp?v=1690797719", desc: "ກິ່ນອາຍຄວາມຫຼູຫຼາແບບຄລາສສິກ ສ້າງຄວາມໝັ້ນໃຈໃຫ້ທຸກໂອກາດ." },
    { id: 4, name: "ນ້ຳຫອມ Cutesy Aroma Concepts LLC", price: 2275000, img: "https://www.aromaconcepts.com/cdn/shop/files/1_4afb3478-edc6-44fe-af84-f6307855a0bb.jpg?v=1774613852", desc: "ກິ່ນດອກໄມ້ ແລະ ໝາກໄມ້ ສົດຊື່ນ ອ່ອນຫວານ ລະມຸນລະໄມ." },
    { id: 5, name: "ນ້ຳຫອມ Im Just Me Eau De Toilette", price: 2800000, img: "https://www.cosmenet.in.th/upload/iblock/62a/cutepress_imjustmeeaudetoilette600x600.jpg", desc: "ສະທ້ອນຄວາມເປັນຕົວຕົນທີ່ໂດດເດັ່ນ ໝັ້ນໃຈ ແລະ ເປັນເອກະລັກ." },
    { id: 6, name: "ນ້ຳຫອມ Moi Vanilla Drip Long-Lasting Eau De", price: 2999000, img: "https://images-static.nykaa.com/media/icons/8904245757977_vanilladrip.jpg", desc: "ກິ່ນວານິລາຫວານລະມຸນ ໃຫ້ຄວາມຮູ້ສຶກອົບອຸ່ນ ແລະ ໜ້າຮັກ." },
    { id: 7, name: "ນ້ຳຫອມ Allure Homme Sport Chanel", price: 4000000, img: "https://beautyhouse.com/cdn/shop/files/02zzd3z4c5.png?v=1723895746&width=1600", desc: "ກິ່ນຫອມສະປອດສົດຊື່ນ ຫຼູຫຼາລະດັບ High-End ຍອດນິຍົມຕະຫຼອດການ." },
    { id: 8, name: "ນ້ຳຫອມ Christian Dior Homme Sport", price: 5100000, img: "https://www.perfumesthailand.com/image/cache/data/1/christian-dior-homme-sport-500x500.jpg", desc: "ຄວາມສົດຊື່ນທີ່ມີພະລັງ ຈາກໝາກໄມ້ຕະກູນຊີຕຣັດ ຕິດທົນດີຢ້ຽມ." },
    { id: 9, name: "ນ້ຳຫອມ Olene Eau de Toilette By Diptyque", price: 3800000, img: "https://files.vogue.co.th/uploads/Olene_Eau_de_Toilette_Diptyque-removebg-preview.webp", desc: "ກິ່ນດອກໄມ້ຂາວ ໃຫ້ຄວາມຮູ້ສຶກຄືກັບຍ່າງຢູ່ທ່າມກາງສວນດອກໄມ້ເມືອງໜາວ." },
    { id: 10, name: "ນ້ຳຫອມ Perfume/Fragrance - Handsome (Men) 100ml ", price: 2430000, img: "https://avssalesonline.co.za/cdn/shop/files/Canva430x500_2f0e7551-2943-45e3-b909-e496050a195b.png?v=1693835442&width=823",  desc: "ນໍ້າຫອມຜູ້ຊາຍແບບຄລາສສິກປະສົມກິ່ນລາເວນເດີ, ກິ່ນນໍ້າທະເລ, ໂຫລະພາ ແລະ ເຈີຣານຽມ." },
    { id: 11, name: "ນ້ຳຫອມ Perfume/Fragrance - Elegance 100ml ", price: 1990000, img: "https://avssalesonline.co.za/cdn/shop/files/Canva430x500.png?v=1693834996&width=823",  desc: "ກິ່ນຫອມຂອງຜູ້ຍິງປະກອບດ້ວຍກິ່ນພິກໄທສີບົວ, ດອກມະລິບໍລິສຸດ ແລະ ອໍາພັນ patchouli ປະສົມກັບກິ່ນດອກໄມ້ອ່ອນໆ ແລະ ວານິລາ." },
    { id: 12, name: "ນ້ຳຫອມ Urban Man Amaze ໂດຍ Fragrance World", price: 3550000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQYKJCjtlWmTK5zhpGdYHomDU1wW5LujFUw&s", desc: "ກິ່ນຫອມທີ່ສົມດູນ ແລະ ຊ່ຽວຊານນີ້ປະກອບດ້ວຍກິ່ນຫອມອົບອຸ່ນ ແລະ ດຶງດູດໃຈຂອງຖົ່ວ tonka ແລະ ໄມ້ໝາກພ້າວ, ເສີມດ້ວຍກິ່ນຫອມສົດຊື່ນ ແລະ ມີຊີວິດຊີວາຂອງ bergamot." },
    { id: 13, name: "ນ້ຳຫອມ Prada Unveils ", price: 2100000, img: "https://ifragranceofficial.com/wp-content/uploads/2025/07/Paradigme-for-Men.jpeg", desc: "ກິ່ນຫອມໃໝ່ທີ່ກ່ຽວຂ້ອງໂດຍກົງກັບກິ່ນຫອມຂອງຜູ້ຍິງຄື Paradox, ຍີ່ຫໍ້ Milano ກຳລັງຊອກຫາວິທີທີ່ຈະປະດິດວົງລໍ້ຂອງການຜະລິດນ້ຳຫອມຄືນໃໝ່. ປະກອບດ້ວຍນັກຜະລິດນ້ຳຫອມທີ່ມີຄວາມຊຳນານ 3 ຄົນ, Paradigme ເປັນຜົນມາຈາກການປ່ຽນແປງຮູບຊົງຂອງພີຣາມິດນ້ຳຫອມ ແລະ ສ້າງມັນຂຶ້ນມາຈາກພື້ນຖານ." },
    { id: 14, name: "ນ້ຳຫອມ NIVEA SUN Eau de Toilette, NIVEA SUN Perfume ", price: 700000, img: "https://m.media-amazon.com/images/I/61hKyhH002L._AC_SX300_SY300_QL70_ML2_.jpg",  desc: "ລະດູຮ້ອນທີ່ບໍລິສຸດ - ດ້ວຍກິ່ນຫອມຂອງດອກໄມ້ທີ່ໂປ່ງໃສ, ກິ່ນເຄື່ອງເທດສີຂາວ ແລະ ກິ່ນໄມ້, ກິ່ນຫອມປະສົມເຂົ້າກັນຢ່າງສົມບູນກັບຄວາມອ່ອນໂຍນຂອງຜິວໜັງທີ່ອົບອຸ່ນ." },
    { id: 15, name: "ນ້ຳຫອມ Natural Notes & Synthetic Molecules", price: 2150000, img: "https://blog.delacourte.com/uploads/2019/11/les-notes-fruitees-de-la-nature-a-la-synthese-gourmande-300x300.png", desc: "ການປະສົມປະສານທີ່ລົງຕົວ ໃຫ້ກິ່ນສະອາດ ປອດໂປ່ງ." },
    { id: 16, name: "ນ້ຳຫອມ Wise Guy Wear Cologne ", price: 1990000, img: "https://mybrooklynbrand.com/cdn/shop/files/discover-latest-img1.png?v=1734528568&width=250",  desc: "ໃຊ້ນ້ຳຫອມຢ່າງສະຫຼຽວສະຫຼາດ." },
    { id: 17, name: "ນ້ຳຫອມ Giorgio Armani Emporio Stronger With You", price: 4550000, img: "https://beautyhouse.com/cdn/shop/files/03mebzaxxy.png?v=1758061963&width=800", desc: "ນໍ້າຫອມຜູ້ຊາຍກິ່ນອໍາພັນທີ່ໜ້າສົນໃຈ, ປະສົມປະສານກິ່ນຫອມຂອງໝາກກໍ່າກັບກິ່ນວານິລາທີ່ອົບອຸ່ນແລະເຜັດຮ້ອນ ເຊິ່ງເຮັດໃຫ້ເກີດຄວາມປະທັບໃຈທີ່ຍາວນານຂອງຄວາມເປັນເອກະພາບແລະຄວາມເຂັ້ມແຂງ. " },
    { id: 18, name: "ນ້ຳຫອມ Rasasi Hawas Fire Eau De Par Fum Men Spray- Bold Arabian Body Spray ", price: 850000, img: "https://i5.walmartimages.com/asr/43abe779-f066-450f-a8c7-0f7d64c60bb0.87240a4ff1e7a4c61db771bda2af897d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", desc: " ສ່ວນປະສົມທີ່ສະຫງ່າງາມນີ້ກຳນົດກິ່ນຫອມຂອງຜູ້ຊາຍດ້ວຍຄວາມສົດຊື່ນທີ່ຍືນຍົງ. ຂອງ: ນໍ້າຫອມນີ້ຖືກບັນຈຸຢູ່ໃນຂວດທີ່ທັນສະໄໝ ແລະ ເປັນສິ່ງພິເສດສຳລັບຜູ້ຊາຍ. ມັນເໝາະສຳລັບວັນເກີດ, ວັນຄົບຮອບ, ຫຼື ຊ່ວງເວລາໃດກໍ່ຕາມທີ່ມີຄວາມຊັບຊ້ອນ ແລະ ຄວາມເອົາໃຈໃສ່. ກິ່ນຫອມທີ່ຍາວນານ: ນໍ້າຫອມແມ່ນຂອງເຈົ້າດ້ວຍຄວາມອ່ອນໂຍນ ແລະ ຄວາມຮູ້ສຶກ. ມັນໃຊ້ນໍ້າມັນທີ່ມີຄຸນນະພາບສູງຈາກທຳມະຊາດ ແລະ ຖືກປະສົມດ້ວຍສິ່ງທີ່ເພີ່ມຄວາມດຶງດູດໃຈລະຫວ່າງຜູ້ຄົນ. " },
    { id: 19, name: "ນ້ຳຫອມ Chic Eclat (Limited) ", price: 13000000, img: "https://emperperfumes.com/cdn/shop/files/Chic-Eclat-Emper-Perfumes-27425050034241.jpg?v=1773742648&width=3402",  desc: "ການປະສົມປະສານທີ່ສົດໃສຂອງດອກໄມ້ໝາກແພ, ດອກກຸຫລາບ, ດອກລາເວນເດີ, ດອກກ້ວຍໄມ້ ແລະ ໝາກກ້ຽງ ປະສົມກັບຄວາມຫວານອ່ອນໆແບບເຂດຮ້ອນ." },
    { id: 20, name: "ນ້ຳຫອມ Green Leaf Premium citrus fragrance ", price: 3500000, img: "https://hasanoud.com/cdn/shop/files/Greenleafcopy.jpg?v=1768651679&width=713",  desc: "ສຳຜັດກັບຄວາມຫລູຫລາ ແລະ ຄວາມຊັບຊ້ອນດ້ວຍ Green Leaf, ກິ່ນຫອມລະດັບພຣີມຽມທີ່ສະແດງເຖິງສະເໜ່ຂອງການຍ່າງຜ່ານປ່າທີ່ຂຽວອຸ່ມທຸ່ມ. ກິ່ນເປີດຂອງ bergamot ມີຄວາມໂດດເດັ່ນ ແລະ ເພີ່ມຄວາມສົດຊື່ນ ແລະ ສົດຊື່ນໃຫ້ກັບກິ່ນຫອມ." },
    
];

let basket = [];
let hasPromoCodeDiscount = false;
let currentSelectedProduct = null; // ເກັບຂໍ້ມູນສິນຄ້າທີ່ກຳລັງເປີດເບິ່ງ

const productList = document.getElementById('product-list');
const salesCount =
JSON.parse(localStorage.getItem("salesCount")) || {};

const topProducts =
Object.entries(salesCount)
.sort((a,b) => b[1] - a[1])
.slice(0,3)
.map(item => item[0]);

productsData.sort((a,b)=>{

    const aIndex = topProducts.indexOf(a.name);
    const bIndex = topProducts.indexOf(b.name);

    if(aIndex !== -1 && bIndex !== -1){
        return aIndex - bIndex;
    }

    if(aIndex !== -1){
        return -1;
    }

    if(bIndex !== -1){
        return 1;
    }

    return 0;
});

// ສະແດງລາຍການສິນຄ້າໜ້າເວັບ (ປ່ຽນປຸ່ມໃຫ້ເປັນແບບຄລິກເບິ່ງລາຍລະອຽດ)
productsData.forEach(p => {

    let badge = "";

    if(topProducts[0] === p.name){
        badge = `<div class="top1">👑</div>`;
    }
    else if(topProducts[1] === p.name){
        badge = `<div class="top2">🥈</div>`;
    }
    else if(topProducts[2] === p.name){
        badge = `<div class="top3">🥉</div>`;
    }

    productList.innerHTML += `
        <div class="card"
             onclick="openProductModal(${p.id})"
             style="cursor:pointer;">

            ${badge}

            <img src="${p.img}"
                 class="card-img"
                 alt="${p.name}">

            <h3>${p.name}</h3>

            <p>${p.price.toLocaleString()} ກີບ</p>

            <button style="background:#111111; box-shadow: 0 2px 5px #D4AF37;">
                <i class="fa-solid fa-eye"></i>
                ເບິ່ງລາຍລະອຽດ
            </button>

        </div>
    `;
});

// 💡 ຟັງຊັນເປີດ Modal ສະແດງລາຍລະອຽດ
function openProductModal(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    
    currentSelectedProduct = product;
    document.getElementById('modal-img').src = product.img;
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById('modal-desc').innerText = product.desc;
    
    // ເຊັດຄ່າເລີ່ມຕົ້ນຂອງ Option
    document.querySelector('input[name="p-size"][value="100ml"]').checked = true;
    document.getElementById('p-tester').checked = false;
    
    updateModalPrice();
    document.getElementById('product-modal').style.display = 'flex';
}

// 💡 ຟັງຊັນປິດ Modal
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// 💡 ຟັງຊັນອັບເດດລາຄາໃນ Modal ຕາມຂະໜາດ (ຖ້າເລືອກ 50ml ຫຼຸດ 30%)
function updateModalPrice() {
    if (!currentSelectedProduct) return;
    const size = document.querySelector('input[name="p-size"]:checked').value;
    let price = currentSelectedProduct.price;
    
    if (size === "50ml") {
        price = price * 0.7; // ຫຼຸດ 30%
    }
    document.getElementById('modal-price').innerText = price.toLocaleString() + " ກີບ";
}

// 💡 ຟັງຊັນເພີ່ມສິນຄ້າຈາກໃນ Modal ລົງກະຕ່າ
function addFromModal() {
    if (!currentSelectedProduct) return;
    
    const size = document.querySelector('input[name="p-size"]:checked').value;
    const isTesterChecked = document.getElementById('p-tester').checked;
    
    let basePrice = currentSelectedProduct.price;
    if (size === "50ml") basePrice = basePrice * 0.7;

    // ເພີ່ມສິນຄ້າຫຼັກ
    const finalName = `${currentSelectedProduct.name} (${size})` +
    (isTesterChecked ? " + Tester 2ml  ໝາຍເຫດ ສຳລັບນ້້ຳຫອມຫົວເຊື້ອ tester ຫຼື ຕົວທົດລອງ ຫາກວ່າລູກຄ້າໄດ້ທົດລອງແລ້ວ ຢາກສົ່ງທັງຕົວແທ້ ແລະ ຕົວ ເທດເຕີ້ ແມ່ນໃຫ້ສົ່ງສິນຄ້າຄືນ ກຳນົດສົ່ງຄືນ ບໍ່ໃຫ້ເກີນ 7ວັນ" : "");
    basket.push({
        cartId: Date.now() + Math.random(),
        name: finalName,
        price: basePrice
    });

    alert(`🎉 ເພີ່ມ ${finalName} ລົງໃນກະຕ່າແລ້ວ!`);
    closeProductModal();
    renderUI();
}

function removeFromCart(cartId) {
    basket = basket.filter(item => item.cartId !== cartId);
    renderUI();
}

function applyCoupon() {
    const code = document.getElementById('coupon-input').value.trim();
    if (basket.length === 0) { alert("ກະລຸນາເລືອກສິນຄ້າກ່ອນ!"); return; }
    if (code === "LAO2024") {
        hasPromoCodeDiscount = true;
        alert("🎉 ນຳໃຊ້ລະຫັດ LAO2024 ສຳເລັດ! ຫຼຸດເພີ່ມ 5%");
    } else {
        hasPromoCodeDiscount = false;
        alert("❌ ລະຫັດບໍ່ຖືກຕ້ອງ!");
    }
    renderUI();
}

function renderUI() {
    document.getElementById('cart-count').innerText = basket.length;
    let total = basket.reduce((s, i) => s + i.price, 0);
    let discount = 0;
    let statusText = "";
    
    if (hasPromoCodeDiscount) {
        discount += total * 0.05;
        statusText += "🎉 ໃສ່ໂຄດ LAO2024 ຫຼຸດເພີ່ມ 5%<br>";
    }

    let finalTotal = total - discount;

    document.getElementById('final-total-text').innerHTML = finalTotal.toLocaleString() + " ກີບ";

    const statusDiv = document.getElementById('discount-status-text');
    if (discount > 0 && statusDiv) {
        statusDiv.innerHTML = statusText;
        statusDiv.style.display = "block";
    } else if (statusDiv) {
        statusDiv.style.display = "none";
    }

    const cartListText = document.getElementById('cart-list-text');
    if (basket.length === 0) {
        cartListText.innerHTML = "ຍັງຫວ່າງເປົ່າ";
    } else {
        cartListText.innerHTML = basket.map(item => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px; border-bottom: 1px dashed #eee; padding-bottom: 4px;">
                <span style="font-size:0.85rem;">• ${item.name}</span>
                <span style="font-weight:bold; white-space:nowrap;">${item.price.toLocaleString()} ກີບ <i class="fa-solid fa-trash" style="color:red; cursor:pointer; margin-left:5px;" onclick="removeFromCart(${item.cartId})"></i></span>
            </div>
        `).join('');
    }
}
function resetCart() {
    if(confirm('ລ້າງກະຕ່າ')) { basket =[]; renderUI(); }

}

function confirmPurchase() {

    const name = document.getElementById('custname').value.trim();
    const tle = document.getElementById('custTel').value.trim();
    const loc = document.getElementById('custloc').value.trim();

    if (!name || !tle || basket.length === 0) {
        alert("ກະລຸນາກອກຂໍ້ມູນໃຫ້ຄົບ!");
        return;
    }

    if (!/^[0-9]+$/.test(tle) || tle.length !== 8) {
        alert("❌ ເບີໂທລະສັບຕ້ອງເປັນຕົວເລກ 8 ຫຼັກ!");
        return;
    }

    // ຄຳນວນລາຄາສິນຄ້າ
    let subtotal = basket.reduce(
        (sum, item) => sum + item.price,
        0
    );

    let discount = 0;

    if (hasPromoCodeDiscount) {
        discount += subtotal * 0.05;
    }

    const finalTotal = subtotal - discount;

    const orderData = {
        billId: "INV-" + Math.floor(100000 + Math.random() * 900000),
        name: name,
        tel: tle,
        loc: loc,
        items: basket,
        total: finalTotal,
        hasPromoCodeDiscount: hasPromoCodeDiscount,
        date: new Date().toLocaleString()
    };

    // ບັນທຶກຍອດຂາຍ
    let salesCount =
    JSON.parse(localStorage.getItem("salesCount")) || {};

    basket.forEach(item => {

        const productName =
        item.name.split(" (")[0];

        salesCount[productName] =
        (salesCount[productName] || 0) + 1;

    });

    localStorage.setItem(
        "salesCount",
        JSON.stringify(salesCount)
    );

    // ບັນທຶກໃບບິນລ່າສຸດ
    localStorage.setItem(
        "myOrder",
        JSON.stringify(orderData)
    );

    window.location.href = "rp.html";
}
