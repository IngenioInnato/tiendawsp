/*Carrousel de productos*/ 
var sliderInfo=[
    {product: 'img/boli1.jpg', title: 'Pen', content:'', price: '25 por $60 / 6ptos'},
    {product: 'img/bolso.jpg', title: 'Backpacks / Mochilas', content:'', price: ' 1 por $15.50 / 2ptos'},
    {product: 'img/bolso1.jpg', title: 'Backpacks / Mochilas', content:'', price: '1 por $47.52 / 5ptos'},
    {product: 'img/bolso2.jpg', title: 'Backpacks / Mochilas', content:'', price: '1 por $15 / 2ptos'},
    {product: 'img/bolso3.jpg', title: 'Backpacks / Mochilas', content:'', price: '1 por $15 / 2ptos'},
    {product: 'img/car iman.jpg', title: 'Car Magnets', content:'', price: '1 por $12.92 / 1pto'},
    {product: 'img/chaqueta h.jpg', title: "Men's Jackets", content:'', price: '1 por $70 / 7ptos'},
    {product: 'img/chaqueta h2.jpg', title: "Men's Jackets", content:'', price: '1 por $110 / 11ptos'},
    {product: 'img/chaqueta h3.jpg', title: "Men's Jackets", content:'', price: '1 por $110 / 11ptos'},
    {product: 'img/chaqueta h4.jpg', title: "Men's Jackets", content:'', price: '1 por $100 / 10ptos'},
    {product: 'img/chaqueta M.jpg', title: "Women's Jackets", content:'', price: '1 por $120 / 12ptos'},
    {product: 'img/chaqueta M2.jpg', title: "Women's Jackets", content:'', price: '1 por $120 / 12ptos'},
    // {product: 'img/chaqueta M3.jpg', title: "Women's Jackets", content:'', price: '1 por $70 / 7ptos'},
    {product: 'img/doorhangers.jpg', title: 'Door Hangers', content:'', price: '50 por $35.99 / 4ptos'},
    {product: 'img/flyer.jpg', title: 'Flyers', content:'', price: '25 por $10 / 1pto'},
    {product: 'img/Folder1.jpg', title: 'Folder', content:'', price: '50 por $299.25 / 30ptos'},
    {product: 'img/Folder2.jpg', title: 'Folder', content:'', price: '50 por $299.25 / 30ptos'},
    {product: 'img/gorra1.jpg', title: 'Hats', content:'', price: '1 por $36 / 4ptos'},
    {product: 'img/gorra2.jpg', title: 'Hats', content:'', price: '1 por $36 / 4ptos'},
    {product: 'img/gorra3.jpg', title: 'Hats', content:'', price: '1 por $36 / 4ptos'},
    {product: 'img/polo H.jpg', title: "Men's Polo Shirts", content:'', price: '1 por $30 / 3ptos'},
    {product: 'img/polo H1.jpg', title: "Men's Polo Shirts", content:'', price: '1 por $30 / 3ptos'},
    {product: 'img/polo M.jpg', title: "Women's Polo Shirts", content:'', price: '1 por $20 / 2ptos'},
    {product: 'img/poloM1.jpg', title: "Women's Polo Shirts", content:'', price: '1 por $20 / 2ptos'},
    {product: 'img/poloM2.jpg', title: "Women's Polo Shirts", content:'', price: '1 por $20 / 2ptos'},
    {product: 'img/Tarjeta presentacion.jpg', title: 'Business Cards', content:'100 por $15 / 2ptos', price: '100 por $24 premium / 2ptos'},
    {product: 'img/Taza azul.jpg', title: 'Mugs', content:'', price: '1 por $10.50 / 1pto'},
    {product: 'img/Taza-Blanca.jpg', title: 'Mugs', content:'', price: '1 por $10.50 / 1pto'},
];
var sliderDesktop=`
<div id="carouselControls" class="carousel slide d-md-block d-none" data-pause data-aos="fade-zoom-in" data-aos-duration="1500">
    <div class="carousel-inner px-5">
        <div class="carousel-item active">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[0].product}" class="rounded-circle h-25" alt="${sliderInfo[0].title}">
                        </div>
                        <h2>${sliderInfo[0].title}</h2>
                        <p>${sliderInfo[0].content}</p>
                        <span>${sliderInfo[0].price}</span>
                    </div>`; 
                    for(var i = 1; i <= 2 ; i++){
                        sliderDesktop +=` 
                        <div class="col-md-4">
                            <div class="text-center">
                                <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[0].title}">
                            </div>
                            <h2>${sliderInfo[i].title}</h2>
                            <p>${sliderInfo[i].content}</p>
                            <span>${sliderInfo[i].price}</span>
                        </div>`;
                    }
                    sliderDesktop +=`
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; 
                for(var i=3; i
                    <=5; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;
                }
                sliderDesktop +=` 
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; for(var i=6; i
                    <=8; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;}sliderDesktop +=`
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; for(var i=9; i
                    <=11; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;}sliderDesktop +=`
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; for(var i=12; i
                    <=14; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;}sliderDesktop +=`
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; for(var i=15; i
                    <=17; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;}sliderDesktop +=`
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; for(var i=18; i
                    <=20; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;}sliderDesktop +=`
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; for(var i=21; i
                    <=23; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;}sliderDesktop +=`
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row text-center">`; for(var i=24; i
                    <=26; i++){sliderDesktop +=` 
                    <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>${sliderInfo[i].price}</span>
                    </div>`;}sliderDesktop +=`
                </div>
            </div>
        </div>
    </div>
<a rel="nofollow noopener noreferrer" class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
<a rel="nofollow noopener noreferrer" class="carousel-control-next" href="#carouselControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
</div>`;


var sliderMovil=`
<div id="carouselControlsMovil" class="carousel slide d-md-none d-block" data-pause data-aos="fade-zoom-in" data-aos-duration="1500">
    <div class="carousel-inner px-5 text-center">
        <div class="carousel-item active">
            <div class="text-center">
                <img src="${sliderInfo[0].product}" class="rounded-circle h-25" alt="${sliderInfo[0].title}">
            </div>
            <h2>${sliderInfo[0].title}</h2>
            <p>${sliderInfo[0].content}</p>
            <span>${sliderInfo[0].price}</span>
        </div>`;for (var i=1; i <= 26; i++){
            sliderMovil +=` 
            <div class="carousel-item">
            <div class="text-center">
                <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[0].Title}">
            </div>
            <h2>${sliderInfo[i].title}</h2>
            <p>${sliderInfo[i].content}</p>
            <span>${sliderInfo[i].price}</span>
    </div>`;}
    sliderMovil +=` 
    </div>
<a rel="nofollow noopener noreferrer" class="carousel-control-prev" href="#carouselControlsMovil" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
<a rel="nofollow noopener noreferrer" class="carousel-control-next" href="#carouselControlsMovil" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
</div>`;
$('#responsiveCarrousel').append(sliderDesktop + sliderMovil);/*=========*/