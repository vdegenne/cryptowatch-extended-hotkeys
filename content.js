const priceTickerEl = document.querySelector('#price-ticker');

function selectCrossHair () {
  document.querySelector('.icon-drawing-crosshair').dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
}


window.addEventListener('keypress', function (e) {
  if (e.key === 'f') {
    priceTickerEl.click();

    // prevent tool change in the chart frame
    selectCrossHair();
  }

  if (e.key === 'F') {
    document.querySelector('[data-testlabel="100%"]').click();
  }

  if (e.key === 'c') {
    const order = document.querySelector('.order-close-button');
    if (order) {
      order.click();
      selectCrossHair()
    }

    // setTimeout(selectCrossHair, 500)
  }

  if (e.key === 'b') {
    document.querySelector('[data-testlabel="buy"]').click();
  }
  if (e.key === 's') {
    document.querySelector('[data-testlabel="sell"]').click();
  }
})