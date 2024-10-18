const samsung = [
    {
    name: "Samsung Galaxy",
    model: "S20 128GB",
    discount: "No discount",
    price: "N120,000",
    picture: "/image/samsung-galaxy-s20-5g-r1-removebg-preview.png",
    ref: "/Html/product/phone/samsungs20.html"
    },
    {
    name: "Samsung Galaxy",
    model: "A53 64GB",
    discount: "15% OFF",
    price: "N150,000",
    picture: "/image/samsung-galaxy-a53-5g-1-removebg-preview.png",
    ref: "/Html/product/phone/samsunA5.html"
    },
    {
    name: "Samsung Galaxy",
    model: "S24 256Gb FE",
    discount: "No discount",
    price: "N850,000",
    picture: "/image/samsungs24.png",
    ref: "/Html/product/phone/samsungs24.html"
    },
    {
    name: "Samsung Galaxy",
    model: "A55 128GB",
    discount: "10% OFF",
    price: "N115,000",
    picture: "/image/samsungGala55.png",
    ref: "/Html/product/phone/samsunga55.html"
    },
    {
    name: "Samsung Galaxy",
    model: "A15 64GB ",
    discount: "No discount",
    price: "N130,000",
    picture: "/image/samsungGala15.png",
    ref: "/Html/product/phone/samsunga15.html"
    },
    {
    name: "Samsung Galaxy",
    model: "S22 Ultra 5G 256GB ",
    discount: "No discount",
    price: "N1,780,000",
    picture: "/image/samsungs22.png",
    ref: "/Html/product/phone/samsungs22.html"
    },
    {
    name: "Samsung Galaxy",
    model: "s10 64GB ",
    discount: "No discount",
    price: "N258,000",
    picture: "/image/samsungGals10.png",
    ref: "/Html/product/phone/samsungs10.html"
    },
    {
    name: "Samsung Galaxy",
    model: "M535 128GB ",
    discount: "No discount",
    price: "N588,000",
    picture: "/image/samsungGalM35.png",
    ref: "/Html/product/phone/samsungm35.html"
    },
    {
    name: "Samsung",
    model: "Note 20 Ultra 1 256GB ",
    discount: "No discount",
    price: "N2,700,000",
    picture: "/image/samsungGalnote20.png",
    ref: "/Html/product/phone/samsungnote20.html"
    },
]

const samsungDisplay = document.querySelector(".samsungListdisplay");
const gridphone = document.querySelector(".gridlist")
function samsungphones() {
    const samsungPhone = [];

    gridphone.style.display = "none"; // Hide gridphone
    samsungDisplay.style.display = "block"; // Show samsungDisplay

    samsungDisplay.innerHTML= "";

    samsung.forEach((samphone)=>{
    const li = document.createElement("li");
    samsungPhone.push(li);

    li.innerHTML = ` <p class="discountDe">${samphone.discount}</p>
    <div class="productCardDe">
        <div>
            <div class="dmage">
                <img src="${samphone.picture}" alt="huawie">
            </div>
            <div>
                <div>
                <h3 id="name" class="ItemName">${samphone.name}</h3>
            <p class="modelDe">${samphone.model}</p>
                <a href="${samphone.ref}" class="moreinfo">more information>>></a> 
                <h2 class="priceDe" id="price">${samphone.price}</h2> 
                </div>
            </div>
            
            <button class="buyButde">Buy Now</button> 
            
    </div>`;
    samsungDisplay.style.display = "grid"
    samsungDisplay.appendChild(li);
    console.log(samsungDisplay)
    
});
}
samsungDisplay.style.display = "none";

