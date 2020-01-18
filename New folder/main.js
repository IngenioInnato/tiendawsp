/*Carrousel de productos*/ 
var sliderInfo=[
    {product: 'img/boli1.jpg', title: 'Bolígrafo', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/bolso.jpg', title: 'Bolso', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/bolso1.jpg', title: 'Bolso', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/bolso2.jpg', title: 'Bolso', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/bolso3.jpg', title: 'Bolso', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/car iman.jpg', title: 'Imán para Carros', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/chaqueta h.jpg', title: 'Chaqueta', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/chaqueta h2.jpg', title: 'Chaqueta', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/chaqueta h3.jpg', title: 'Chaqueta', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/chaqueta h4.jpg', title: 'Chaqueta', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/chaqueta M.jpg', title: 'Chaqueta', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/chaqueta M2.jpg', title: 'Chaqueta', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/chaqueta M3.jpg', title: 'Chaqueta', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/doorhangers.jpg', title: 'Doorhangers', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/flyer.jpg', title: 'Doorhangers', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/Folder1.jpg', title: 'Folder', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/Folder2.jpg', title: 'Folder', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/gorra1.jpg', title: 'Gorra', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/gorra2.jpg', title: 'Gorra', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/gorra3.jpg', title: 'Gorra', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/polo M.jpg', title: 'Polo', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/polo M1.jpg', title: 'Polo', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/polo M2.jpg', title: 'Polo', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/Tarjeta presentacion.jpg', title: 'Tarjeta de presentacion', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/Taza azul.jpg', title: 'Tarjeta de presentacion', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
    {product: 'img/Taza-Blanca.jpg', title: 'Tarjeta de presentacion', content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloribus suscipit tempora harum veritatis minima porro, facere voluptas officiis dolores dolore deleniti dolorum. Laudantium, eligendi. Ab recusandae, dicta corporis odit.', price: ''},
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
                        <span>$${sliderInfo.price}</span>
                    </div>`; 
                    for(var i = 1; i <= 2 ; i++){
                        sliderDesktop +=` 
                        <div class="col-md-4">
                        <div class="text-center">
                            <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[0].title}">
                        </div>
                        <h2>${sliderInfo[i].title}</h2>
                        <p>${sliderInfo[i].content}</p>
                        <span>$${sliderInfo.price}</span>
                </div>`;}sliderDesktop +=` </div>
        </div>
    </div>
    <div class="carousel-item">
        <div class="container">
            <div class="row text-center">`; for(var i=3; i
                <=5; i++){sliderDesktop +=` <div class="col-md-4">
                    <div class="text-center">
                        <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                    </div>
                    <h2>${sliderInfo[i].title}</h2>
                    <p>${sliderInfo[i].content}</p>
                    <span>$${sliderInfo.price}</span>
            </div>`;}sliderDesktop +=` 
        </div>
    </div>    
    <div class="carousel-item">
    <div class="container">
        <div class="row text-center">`; for(var i=6; i
            <=8; i++){sliderDesktop +=` <div class="col-md-4">
                <div class="text-center">
                    <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
                </div>
                <h2>${sliderInfo[i].title}</h2>
                <p>${sliderInfo[i].content}</p>
                <span>$${sliderInfo.price}</span>
        </div>`;}sliderDesktop +=`
    </div>
</div>
</div>
<a rel="nofollow noopener noreferrer" class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
<a rel="nofollow noopener noreferrer" class="carousel-control-next" href="#carouselControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
</div>`;var sliderMovil=`
<div id="carouselControlsMovil" class="carousel slide d-md-none d-block" data-pause data-aos="fade-zoom-in" data-aos-duration="1500">
    <div class="carousel-inner px-5">
        <div class="carousel-item active">
            <div class="text-center">
                <img src="${sliderInfo[0].product}" class="rounded-circle h-25" alt="${sliderInfo[0].title}">
            </div>
            <h2>${sliderInfo[i].title}</h2>
            <p>${sliderInfo[i].content}</p>
            <span>$${sliderInfo.price}</span>
        </div>`;for (var i=1; i <= 5; i++){
            sliderMovil +=` 
            <div class="carousel-item">
            <div class="text-center">
                <img src="${sliderInfo[0].product}" class="rounded-circle h-25" alt="${sliderInfo[0].Title}">
            </div>
            <h2>${sliderInfo[i].title}</h2>
            <p>${sliderInfo[i].content}</p>
            <span>$${sliderInfo.price}</span>
    </div>`;}
    sliderMovil +=` 
    </div>
<a rel="nofollow noopener noreferrer" class="carousel-control-prev" href="#carouselControlsMovil" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
<a rel="nofollow noopener noreferrer" class="carousel-control-next" href="#carouselControlsMovil" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
</div>`;
$('#responsiveCarrousel').append(sliderDesktop + sliderMovil);/*=========*/