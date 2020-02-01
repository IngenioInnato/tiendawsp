var sliderInfo=[
  {product: 'img/Bottle1.jpg', title:'Aluminum Water Bottles', content:'', price:'1 por $17.90 / 2ptos'}, 
  {product: 'img/Bottle2.jpg', title:'Aluminum Water Bottles',content:'',price:'1 por $17.90 / 2ptos'},
  {product: 'img/Bottle3.jpg', title:'Aluminum Water Bottles',content:'',price:'1 por $17.90 / 2ptos'},
  {product: 'img/Bottle4.jpg', title:'Aluminum Water Bottles',content:'',price:'1 por $21.90 / 2ptos'},
  {product: 'img/Bottle5.jpg', title:'Aluminum Water Bottles',content:'',price:'1 por $21.90 / 2ptos'},
  {product: 'img/Bottle6.jpg', title:'Aluminum Water Bottles',content:'',price:'1 por $21.90 / 2ptos'},
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

var sliderDesktop =`
<div id="carouselControls" class="carousel slide d-lg-block d-none" data-pause data-aos="fade-zoom-in" data-aos-duration="1500">
    <div class="carousel-inner px-lg-5 px-2">`
    for(var i = 0; i <= 32; i += 3){
    (i === 0)?
      sliderDesktop += 
      `<div class="carousel-item active">`:
      sliderDesktop += 
      `<div class="carousel-item">`;
        sliderDesktop +=`
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-4">
              <div class="text-center">
                <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
              </div>
              <h2>${sliderInfo[i].title}</h2>
              <p>${sliderInfo[i].content}</p>
              <span>${sliderInfo[i].price}</span>
            </div>
            <div class="col-lg-4">
              <div class="text-center">
                <img src="${sliderInfo[i+1].product}" class="rounded-circle h-25" alt="${sliderInfo[i+1].title}">
              </div>
              <h2>${sliderInfo[i+1].title}</h2>
              <p>${sliderInfo[i+1].content}</p>
              <span>${sliderInfo[i+1].price}</span>
            </div>
            <div class="col-lg-4">
              <div class="text-center">
                <img src="${sliderInfo[i+2].product}" class="rounded-circle h-25" alt="${sliderInfo[i+2].title}">
              </div>
              <h2>${sliderInfo[i+2].title}</h2>
              <p>${sliderInfo[i+2].content}</p>
              <span>${sliderInfo[i+2].price}</span>
            </div>
          </div>
        </div>
      </div>`;
  }
  sliderDesktop += `
  </div>`
   sliderDesktop += `
<a rel="nofollow noopener noreferrer" class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
<a rel="nofollow noopener noreferrer" class="carousel-control-next" href="#carouselControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
</div>`;

var sliderMovil=`
<div id="carouselControlsMovil" class="carousel slide d-lg-none d-block" data-pause data-aos="fade-zoom-in" data-aos-duration="1500">
  <div class="carousel-inner px-lg-5 px-2 text-center">`;
  for(var i = 0; i <= 32; i++){
    (i === 0)? sliderMovil += 
    `<div class="carousel-item active">`: 
    sliderMovil += 
    `<div class="carousel-item">`;
      sliderMovil += `
      <div class="text-center">
        <img src="${sliderInfo[i].product}" class="rounded-circle h-25" alt="${sliderInfo[i].title}">
      </div>
      <h2>${sliderInfo[i].title}</h2>
      <p>${sliderInfo[i].content}</p>
      <span>${sliderInfo[i].price}</span>
    </div>`;
  }
  sliderMovil +=` 
  </div>
<a rel="nofollow noopener noreferrer" class="carousel-control-prev" href="#carouselControlsMovil" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
<a rel="nofollow noopener noreferrer" class="carousel-control-next" href="#carouselControlsMovil" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
</div>`;
$('#responsiveCarrousel').append(sliderDesktop + sliderMovil);/*=========*/