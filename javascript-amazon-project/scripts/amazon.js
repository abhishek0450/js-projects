const products = [
    {
      image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
      name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
      rating: {
        stars: 5,
        reviews: 100
      },
      priceCents: 1290
    },
    {
      image: 'images/products/intermediate-composite-basketball.jpg',
      name: 'Intermediate Composite Basketball',
      rating: {
        stars: 4,
        reviews: 87
      },
      priceCents: 1499
    },
    {
      image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
      name: 'Adults Plain Cotton T-Shirt - 2 Pack - Teal',
      rating: {
        stars: 4.5,
        reviews: 100
      },
      priceCents: 1299
    },
    {
        image : 'images/products/black-2-slot-toaster.jpg" data-testid="product-image',
        name : 'Black 2-Slot Toaster',
        rating : {
            stars : 4.5,
            reviews : 100
        },
        priceCents : 1699
    },
    {
        image : 'images/products/6-piece-white-dinner-plate-set.jpg' ,
        name : '6 Piece White Dinner Plate Set' ,
        rating : {
            stars : 4.5 ,
            reviews : 100
        } ,
        priceCents : 1299
    },
    {
        image : 'images/products/backpack.jpg' ,
        name : 'Backpack' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/bathroom-rug.jpg' ,
        name : 'Bathroom Rug' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/black-2-slot-toaster.jpg' ,
        name : 'Black 2-Slot Toaster' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/blackout-curtain-set-beige.webp' ,
        name : 'Blackout Curtain Set - Beige' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/blackout-curtains-black.jpg' ,
        name : 'Blackout Curtains - Black' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/coffeemaker-with-glass-carafe-black.jpg' ,
        name : 'Coffeemaker with Glass Carafe - Black' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/cotton-bath-towels-teal.webp' ,
        name : 'Cotton Bath Towels - Teal' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/countertop-blender-64-oz.jpg' ,
        name : 'Countertop Blender - 64 oz.' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/electric-glass-and-steel-hot-water-kettle.webp' ,
        name : 'Electric Glass and Steel Hot Water Kettle' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/liquid-laundry-detergent-plain.jpg' ,
        name : 'Liquid Laundry Detergent - Plain' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/knit-athletic-sneakers-gray.jpg' ,
        name : 'Knit Athletic Sneakers - Gray' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/facial-tissue-2-ply-18-boxes.jpg' ,
        name : 'Facial Tissue - 2 Ply - 18 Boxes' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    },
    {
        image : 'images/products/duvet-cover-set-blue-twin.jpg' ,
        name : 'Duvet Cover Set - Blue - Twin' ,
        rating : {
            stars : 3.5 ,
            reviews : 190
        },
        priceCents : 999
    }
  
  ];

  let productHTML = '';
  
  products.forEach(product => {
   productHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.reviews} 
                </div>
            </div>

            <div class="product-price">
               $ ${(product.priceCents / 100).toFixed(2)} 
              
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected="" value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
 `;


    });

    console.log(productHTML);

    document.querySelector('.js-products-grid').innerHTML = productHTML; //this will add the productHTML to the products-grid div in the HTML file
  