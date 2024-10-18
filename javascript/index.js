const phoneProduct = [
    {
    name: "Samsung",
    model: "S20 128GB",
    discount: "No discount",
    price: "N120,000",
    picture: "/image/samsung-galaxy-s20-5g-r1-removebg-preview.png",
    ref: "/Html/product/phone/samsungs20.html"
    },
    {
    name: "Samsung",
    model: "A53 64GB",
    discount: "15% OFF",
    price: "N150,000",
    picture: "/image/samsung-galaxy-a53-5g-1-removebg-preview.png",
    ref: "/Html/product/phone/samsunA5.html"
    },
    {
    name: "Iphone",
    model: "13 Pro 64Gb",
    discount: "No discount",
    price: "N450,000",
    picture: "/image/apple-iphone-13-pro-max-01-removebg-preview.png",
    ref: "/Html/product/phone/iphone13pro.html"
    },
    {
    name: "Iphone ",
    model: "14 128GB",
    discount: "10% OFF",
    price: "N1,200,000",
    picture: "/image/apple-iphone-14-3-removebg-preview.png",
    ref: "/Html/product/phone/iphone14.html"
    },
    {
    name: "Huawei",
    model: "Pura 70 Ultra 512GB ",
    discount: "No discount",
    price: "N2,700,000",
    picture: "/image/huawei-pura70-ultra-1.jpg",
    ref: "/Html/product/phone/huawei70ultra.html"
    },
    {
    name: "Hisense",
    model: "4K Bluetooth smart TV, 2024(HIS TV A6N",
    discount: "No discount",
    price: "N580,000",
    picture: "/image/hisense-55-inches-4k-uhd-bluetooth-smart-tv-2024-his-55-a6n__2024-08-26_145946827-removebg-preview.png",
    },
    {
    name: "Nexus 475l ",
    model: "Inox NX-580 - Mitos Shoppers",
    discount: "No discount",
    price: "N370,000",
    picture: "/image/refrigerators-double-door-nexus-nx-340d-litre-fridge-water-dispenser_1.0-removebg-preview.png",
    },
    {
    name: "MacBook air ",
    model: "2021 500GB",
    discount: "No discount",
    price: "N1,720,000",
    picture: "/image/macbook-removebg-preview.png",
    }
    
    ];


const productContainer = document.querySelector(".r-product");
console.log(productContainer);
const productList = [];
phoneProduct.forEach((item)=>{
    const li = document.createElement("li");
        productList.push(li);

        li.innerHTML =`<div class="productCard">
                <p class="discount">${item.discount}</p>
                <img src="${item.picture}" alt="${item.name}">
                <div>
                  <h3 id="name" class="ItemNa">${item.name}</h3>
                  <p class="model">${item.model}</p>
                  <a href="${item.ref}" id="moreinfo" class="moreinfo">more information>>></a> 
                  <h2 class="price" id="price">${item.price}</h2> 
                </div>
            </div> 
            <div class="button_div">
                <button class="buyBut">Buy Now</button>
                <button class="addCartBut">Add to cart</button>
            </div>  `;
            console.log(productContainer);
            productContainer.appendChild(li);

});

