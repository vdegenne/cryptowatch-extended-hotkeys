function main() {
  const priceTickerEl = document.querySelector('#price-ticker');

  function preventDefault(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
    return;
  }

  window.addEventListener('keypress',function (e) {
    // if (e.shiftKey) {
    if (e.key === 'f') {
      preventDefault(e);
      // e.preventDefault();
      // e.stopImmediatePropagation();
      priceTickerEl.click();
    }

    if (e.key === 'F') {
      document.querySelector('[data-testlabel="100%"]').click();
    }

    if (e.key === 'c') {
      const order = document.querySelector('.order-close-button');
      if (order) {
        order.click();
      }
    }

    if (e.key === 'b') {
      document.querySelector('[data-testlabel="buy"]').click();
    }
    if (e.key === 's') {
      document.querySelector('[data-testlabel="sell"]').click();
    }
    // }
  })
}

main()