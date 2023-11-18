const products = [
    {
        name: "Iphone 12",
        image: "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-12.png",
        price: 1000,
    },
    {
        name: "Iphone 13",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/3/_/3_51_1_2_6.jpg",
        price: 1100,
    },
    {
        name: "Iphone 14",
        image: "https://seoulmobile.com.vn/images/stories/virtuemart/product/refurb-iphone-13-pro-max-silver-2023.jpg",
        price: 1200,
    }
]

const productsHTML = products.map((product) => {
    return `
    <div class="product">
        <img src="${product.image}" alt="">
        <p>${product.name}</p>
        <p>$${product.price}</p>
    </div>
    `
})


document.getElementById('products').innerHTML = productsHTML.join('')