// get current price-->
const currentMemoryPrice = document.getElementById('current-memory-cost');

const currentStoragePrice = document.getElementById('current-storage-cost');

const currentDeliveryPrice = document.getElementById('current-delivery-cost');

const currentTotalPrice = document.getElementById('current-total-cost');

const finalTotalPrice = document.getElementById('final-price');

// setMemoryPrice function-->
function setMemoryPrice(isDefault) {
  if (isDefault == true) {
    currentMemoryPrice.innerText = '0';
  } else {
    currentMemoryPrice.innerText = '180';
  }
}

// setMemoryPrice function-->
function setStoragePrice(isDefault) {
  if (isDefault == 'true') {
    currentStoragePrice.innerText = '0';
  } else if (isDefault == 'false-1') {
    currentStoragePrice.innerText = '100';
  } else {
    currentStoragePrice.innerText = '180';
  }
}

// setDeliveryCost function-->
function setDeliveryCost(isDefault) {
  if (isDefault == true) {
    currentDeliveryPrice.innerText = '0';
  } else {
    currentDeliveryPrice.innerText = '20';
  }
}

// upDateTotal Function-->
function upDateTotal() {
  // get current price-->
  const currentBestPrice = parseInt(document.getElementById('current-best-cost').innerText);

  const currentMemoryPrice = parseInt(document.getElementById('current-memory-cost').innerText);

  const currentStoragePrice = parseInt(document.getElementById('current-storage-cost').innerText);

  const currentDeliveryPrice = parseInt(document.getElementById('current-delivery-cost').innerText);

  //set totalPrice-->
  const newTotalPrice = currentBestPrice + currentMemoryPrice + currentStoragePrice + currentDeliveryPrice;

  currentTotalPrice.innerText = newTotalPrice;

  finalTotalPrice.innerText = newTotalPrice;
}

//extra memory button event-->
document.getElementById('8gb-memory-button').addEventListener('click', function () {
  setMemoryPrice(true);
  //updateTotal-->
  upDateTotal();
});
document.getElementById('16gb-memory-button').addEventListener('click', function () {
  setMemoryPrice(false);
  //updateTotal-->
  upDateTotal();
});

//extra storage button event-->
document.getElementById('256gb-storage-button').addEventListener('click', function () {
  setStoragePrice('true');
  //updateTotal-->
  upDateTotal();
});
document.getElementById('512gb-storage-button').addEventListener('click', function () {
  setStoragePrice('false-1');
  //updateTotal-->
  upDateTotal();
});
document.getElementById('1tb-storage-button').addEventListener('click', function () {
  setStoragePrice('false-2');
  //updateTotal-->
  upDateTotal();
});

//DeliveryCost  button event-->
document.getElementById('free-delivery-button').addEventListener('click', function () {
  setDeliveryCost(true);
  //updateTotal-->
  upDateTotal();
});
document.getElementById('express-delivery-buttotn').addEventListener('click', function () {
  setDeliveryCost(false);
  //updateTotal-->
  upDateTotal();
});
