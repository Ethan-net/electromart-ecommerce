const iphone = [
    {
    name: "Iphone",
    model: "12 pro 128GB",
    discount: "No discount",
    price: "N120,000",
    picture: "/image/samsung-galaxy-s20-5g-r1-removebg-preview.png",
    ref: "/Html/product/phone/samsungs20.html"
    },
    {
    name: "Iphone 13",
    model: " 64GB",
    discount: "15% OFF",
    price: "N150,000",
    picture: "/image/samsung-galaxy-a53-5g-1-removebg-preview.png",
    ref: "/Html/product/phone/samsunA5.html"
    },
    {
    name: "Iphone",
    model: "12 pro max 256Gb",
    discount: "No discount",
    price: "N850,000",
    picture: "/image/samsungs24.png",
    ref: "/Html/product/phone/samsungs24.html"
    },
    {
    name: "Iphone",
    model: "XS Max 128GB",
    discount: "10% OFF",
    price: "N115,000",
    picture: "/image/samsungGala55.png",
    ref: "/Html/product/phone/samsunga55.html"
    },
    {
    name: "Iphone",
    model: "15 64GB ",
    discount: "No discount",
    price: "N130,000",
    picture: "/image/samsungGala15.png",
    ref: "/Html/product/phone/samsunga15.html"
    },
    {
    name: "Iphone",
    model: "7 plus  256GB ",
    discount: "No discount",
    price: "N1,780,000",
    picture: "/image/samsungs22.png",
    ref: "/Html/product/phone/samsungs22.html"
    },
    {
    name: "Iphone",
    model: "13 Pro Max 64GB ",
    discount: "No discount",
    price: "N258,000",
    picture: "/image/samsungGals10.png",
    ref: "/Html/product/phone/samsungs10.html"
    },
    {
    name: "Iphone ",
    model: " 14 mini 128GB ",
    discount: "No discount",
    price: "N588,000",
    picture: "/image/samsungGalM35.png",
    ref: "/Html/product/phone/samsungm35.html"
    },
    {
    name: "Iphone",
    model: "XR 256GB ",
    discount: "No discount",
    price: "N700,000",
    picture: "/image/samsungGalnote20.png",
    ref: "/Html/product/phone/samsungnote20.html"
    },
]

const iphoneDisplay = document.querySelector(".iphoneListdisplay");
const gridphone = document.querySelector(".gridlist")
function applephones() {
    const applePhone = [];

    gridphone.style.display = "none"; // Hide gridphone
    samsungDisplay.style.display = "block"; // Show samsungDisplay

    iphoneDisplay.innerHTML= "";

    iphone.forEach((apphone)=>{
    const li = document.createElement("li");
    applePhone.push(li);

    li.innerHTML = ` <p class="discountDe">${apphone.discount}</p>
    <div class="productCardDe">
        <div>
            <div class="dmage">
                <img src="${apphone.picture}" alt="huawie">
            </div>
            <div>
                <div>
                <h3 id="name" class="ItemName">${appphone.name}</h3>
            <p class="modelDe">${apphone.model}</p>
                <a href="${apphone.ref}" class="moreinfo">more information>>></a> 
                <h2 class="priceDe" id="price">${apphone.price}</h2> 
                </div>
            </div>
            
            <button class="buyButde">Buy Now</button> 
            
    </div>`;
    iphoneDisplay.style.display = "grid"
    iphoneDisplay.appendChild(li);
    console.log(samsungDisplay)
    
});
}
samsungDisplay.style.display = "none";

