const openCart = document.querySelector('.cart__icon');
const closeCart = document.querySelector('close__cart');
const productDOM = document.querySelector('.product__center');
const cartDOM = document.querySelector('.cart__center');
const itemsTotal = document.querySelector('.item__total');
const cartTotal = document.querySelector('.cart__total');
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const product__count = document.querySelector('.product__count');

let cart = [];
let buttonDOM = [];

//ui
class UI{
    displayProduct(obj){
        let results = '';
        obj.forEach(({title,image,id,price}) => {
            results += `<div class="product">
            <div class="image__container">
              <img src="${image}" alt="" />
            </div>
            <div class="product__footer">
              <h1>${title}</h1>
              <div class="rating">
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                  </svg>
                </span>
              </div>
              <div class="bottom">
                <div class="btn__group">
                  <a href="#" class="btn addToCart" data-id = ${id} >Add to Cart</a>
                  <a href="#" class="btn view">View</a>
                </div>
                <div class="price">$${price}</div>
              </div>
            </div>
          </div> `;
        });

        productDOM.innerHTML = results;
    }

    getButtons(){
        const buttons = [...document.querySelectorAll('.addToCart')];
        //console.log(buttons);

        buttonDOM = buttons;

        buttons.forEach(button => {
            const id = button.dataset.id;
            
            const inCart = cart.find(item => item.id == id);

            if (inCart){
                button.innerText = 'In Cart';
                button.disabled = true;
            }

            button.addEventListener('click', e => {
                e.preventDefault();
                e.target.innerText = 'In Cart';
                e.target.disabled = true;

                // Get product from products
                const cartItem = {...Storage.getProducts(id),amount: 1};
                console.log(cartItem);

                //Add the product to cart
                cart = [...cart, cartItem];
                //store the product in LocalStorage
                Storage.saveCart(cart);
                //set ItemValues
                this.setItemValues(cart);
                //Display the items in the cart
                this.addToCart(cartItem);

            });
        });
    }

    setItemValues(cart){
        let tempTotal = 0;
        let itemTotal = 0;

        cart.map(item => {
            tempTotal += item.price + item.amount
            itemTotal += item.amount
        });

        itemsTotal.innerText = itemTotal;
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    }
    addToCart({title,price,image,id}){
        let div = document.createElement('div')
        div.classList.add('cart__item')
        div.innerHTML = `<img src=${image} alt="">
        <div>
          <h3>${title}</h3>
          <h3 class="price">$${price}</h3>
        </div>
        <div>
          <span data-id = ${id} class = "inc">
            <svg>
              <use xlink:href="./images/sprite.svg#icon-angle-up"></use>
            </svg>
          </span>
          <p class = "product__count">1</p>
          <span data-id = ${id} class = "dec">
            <svg>
              <use xlink:href="./images/sprite.svg#icon-angle-down"></use>
            </svg>
          </span>
        </div>
        <div>
          <span class="remove__item">
            <svg>
              <use xlink:href="./images/sprite.svg#icon-trash"></use>
            </svg>
          </span>
        </div>`;

        cartDOM.appendChild(div);
    }
}

//storage
class Storage{
    static saveProducts(obj){
        localStorage.setItem("products", JSON.stringify(obj));
    }

    static getProducts(id){
        const products = JSON.parse(localStorage.getItem('products'))
        return products.find(item => item.id == parseInt(id))
    }

    static saveCart(cart){
        localStorage.setItem("carts",JSON.stringify(cart));

    }
}

//Products
class Products{
    async getProducts(){
        try{
            const results = await fetch('products.json')
            const data = await results.json()
            //console.log(data.items)
            const products = data.items;
            return products;
        } catch (err) {
            console.log(err)
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const ui = new UI()
    const products = new Products()

    const productObj = await products.getProducts();
    ui.displayProduct(productObj);
    ui.getButtons();
    Storage.saveProducts(productObj);

    inc.addEventListener('click', function(){
        e.target.innerText = "yo";
    })

    closeCart.addEventListener('click',)
})

