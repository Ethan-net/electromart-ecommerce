const phoneLi = [
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
        name: "Samsung Galaxy",
        model: "s10 64GB ",
        discount: "No discount",
        price: "N258,000",
        picture: "/image/samsungGals10.png",
        ref: "/Html/product/phone/samsungs10.html"
        },
]
const phonepage = document.querySelector(".gridlist");
const phoneList = [];
phoneLi.forEach((phon)=>{
    const li = document.createElement("li");
    phoneList.push(li);

    li.innerHTML =`<p class="discountDe">${phon.discount}</p>
                <div class="productCardDe">
                    <div>
                        <div class="dmage">
                            <img src="${phon.picture}" alt="huawie">
                        </div>
                        <div>
                            <div>
                            <h3 id="name" class="ItemName">${phon.name}</h3>
                            <p class="modelDe">${phon.model}</p>
                            <a href="${phon.ref}" id="moreinfo" class="moreinfo">more information>>></a> 
                            <h2 class="priceDe" id="price">${phon.price}</h2> 
                            </div>
                        </div>
                        
                        <button class="buyButde">Buy Now</button> 
                        
                </div>   
                `;
                phonepage.appendChild(li);
                console.log(phonepage);

});
