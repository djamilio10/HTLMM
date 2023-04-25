let btnplusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button');
let deleteButton = document.querySelector('#supprimer_button');

btnplusAll.forEach((btn) => {
  btn.addEventListener('click', augmentationQuantité);
});

btnMinusAll.forEach((btn) => {
  btn.addEventListener('click', diminutionQuantité);
});

addButton.addEventListener('click', addArticle);

deleteButton.addEventListener('click', deleteAllArticles);

function augmentationQuantité() {
  this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;
  subtotal(this);
}

function diminutionQuantité() {
  let qty = parseInt(this.nextElementSibling.value);
  if (qty > 0) {
    this.nextElementSibling.value = qty - 1;
    subtotal(this);
  }
}

function subtotal(elt) {
  let price = parseInt(elt.parentElement.nextElementSibling.innerText);
  let qty = parseInt(elt.previousElementSibling.value);
  let subtotal = price * qty;
  elt.parentElement.nextElementSibling.nextElementSibling.innerText = subtotal + ' fr';
  calculTotal();
}

function calculTotal() {
  let total = 0;
  let subtotals = document.querySelectorAll('.subtotal');
  subtotals.forEach((subtotal) => {
    total += parseInt(subtotal.innerText);
  });
  document.querySelector('#total_display').innerText = total + ' fr cfa';
}

function addArticle() {
  let name = document.querySelector('#name_product');
  let price = document.querySelector('#price_product');
  document.querySelector('#all_products').innerHTML += '<tr><td class="article--name"><div style="margin-right:1rem"><img src="https://iconprincess.com/wp-content/uploads/2021/07/louis-vuitton-sac-capucines-1920x1920.jpg" height="200PX" width="200PX"></div></td><td class="quantity"><button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="Prix unitaire" class="qty" value="1"><button class="qty-plus" id="2">+</button></td><td class="price">15000 fr</td><td class="subtotal">15000 fr</td></tr>';
  loadNewElement();
}

function loadNewElement() {
  let btnplusAll = document.querySelectorAll('.qty-plus');
  let btnMinusAll = document.querySelectorAll('.qty-minus');
  btnplusAll.forEach((btn) => {
    btn.addEventListener('click', augmentationQuantité);
  });
  btnMinusAll.forEach((btn) => {
    btn.addEventListener('click', diminutionQuantité);
  });
}

function deleteAllArticles() {
  let allProducts = document.querySelector('#all_products');
  allProducts.querySelectorAll('tr:not(:first-child)').forEach((row) => row.remove());
  calculTotal(); // mise à jour du total après suppression de tous les articles
  document.querySelector('#total_display').innerText = '0 fr cfa';
}

const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
  });
});

