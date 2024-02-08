let option = document.querySelector('#option');
let close = document.querySelector('#close'); 
let closeOrder = document.querySelector('.close-cart'); 
let openOrder = document.querySelector('#cart');



//side panel for menu options
option.addEventListener('click', openOptions); 
function openOptions(){
  const panel = document.querySelector('.sidepanel');
  panel.style.display = 'flex'; 
}
close.addEventListener('click', closeOptions); 
function closeOptions(){
  const panel = document.querySelector('.sidepanel'); 
  panel.style.display = 'none'; 
}

//side panel for order + reservation 

closeOrder.addEventListener('click', closeOrderTab); 
function closeOrderTab(){
  const orderTab = document.querySelector('.sideBar'); 
  orderTab.style.display = 'none'; 
}
openOrder.addEventListener('click', openOrderTab); 
function openOrderTab(){
  const orderTab = document.querySelector('.sideBar'); 
  orderTab.style.display = 'flex'; 
}

//navbar for the menu options scroll to function 
$("#drinkNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#drinkHead").offset().top},
        'slow');
});
$("#sideNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#sideHead").offset().top},
        'slow');
});
$("#sandwichNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#sandwichHead").offset().top},
        'slow');
});
$("#meatNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#meatHead").offset().top},
        'slow');
});
$("#dessertNav").click(function() {
    $('html,body').animate({
        scrollTop: $("#dessertHead").offset().top},
        'slow');
});



//cart feature working 

//if the cart is on 
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready); 
}else{
  ready(); 
}
function ready(){
  //remove items
  var removeItems = document.getElementsByClassName('itemRemove'); 
  //a loop thats an event listener to all items
  for(var i = 0; i < removeItems.length; i++){
    var removeBtn = removeItems[i]; 
    removeBtn.addEventListener("click", removeItemOrder); 
  }

  var qntyInput = document.getElementsByClassName('orderQnty'); 
  for(var i =0; i < qntyInput.length; i++){
    var input = qntyInput[i]; 
    input.addEventListener('change', amountChange); 
  }
  //add items 
  var addItems = document.getElementsByClassName('add-cart'); 
  for(var i = 0; i < addItems.length; i++){
    var addBtn = addItems[i]; 
    addBtn.addEventListener("click", addItemOrder); 
  }

}

//amount ordre change
function amountChange(event){
  var input = event.target; 
  if( input.value <= 0){
    input.value = 1; 
  }
  totalOrder(); 
}

//add item to order
function addItemOrder(event){
  var clicked = event.target; 
  var itemInfo = clicked.parentElement; 
  var name = itemInfo.getElementsByClassName("food-title")[0].innerText; 
  var price = itemInfo.getElementsByClassName("price")[0].innerText; 
  addToOrder(name, price); 
}

function addToOrder(n, p){
  var orderContent = document.getElementsByClassName("cart-content")[0];
  var orderBox = document.createElement("div"); 
  orderBox.classList.add("cart-box");
  

  var newItem = `
    <div class="itemTitle">${n}</div>
    <div class="itemPrice">${p}</div>
    <p class="pr-2">Quantity:</p>
    <input type="number" value = "1" class="orderQnty">
    <i class="fa-solid fa-trash itemRemove"></i>
  `; 
  orderBox.innerHTML = newItem; 
  orderContent.append(orderBox); 
  orderBox.getElementsByClassName("itemRemove")[0].addEventListener('click', removeItemOrder); 
  orderBox.getElementsByClassName("orderQnty")[0].addEventListener('change', amountChange); 
  totalOrder(); 
  alert("Item added to Order.");
}

//removes items 
function removeItemOrder(event){
  var clicked = event.target; 
  clicked.parentElement.remove(); 
  totalOrder(); 
}



//update thy total
function totalOrder(){
  var orderBox = document.getElementsByClassName("cart-box"); 
  var totalPrice = 0; 
  for(var i = 0; i < orderBox.length; i++){
    var item = orderBox[i]; 
    var priceItem = item.getElementsByClassName("itemPrice")[0]; 
    var amount = item.getElementsByClassName("orderQnty")[00]; 
    var itemcost = parseFloat(priceItem.innerText.replace('$', "")); 
    var qnty = amount.value; 
    totalPrice = totalPrice + (itemcost * qnty); 
  }
  document.getElementsByClassName('total-price')[0].innerText = '$' + totalPrice; 
}

