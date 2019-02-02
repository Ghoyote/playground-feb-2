window.onload = function(e) {
  var startPoint = document.getElementById('myVal');

  var add = document.getElementById('add');
  var subtract = document.getElementById('subtract');

  var quoteBox = document.getElementById('quote-box');
  var quoteButton = document.getElementById('quote-button');
  var quoteInput = document.getElementById('quote-input');
  var nameInput = document.getElementById('name-input');
  var magicButton = document.getElementById('magic-button');
  quoteButton.addEventListener('click', e => {
    fetch('http://api.github.com/zen')
      .then(response => {
        return response.text();
      })
      .then(responseData => {
        console.log(responseData);
        quoteBox.innerHTML = `<blockquote><q>${responseData}</q></blockquote>`;
      })
      .catch(err => {
        console.error(err);
      });
  });
  magicButton.addEventListener('click', e => {
    var quote = quoteInput.value;
    var name = nameInput.value;
    if (quote.length < 3 || name.length < 2)
      return alert('Please fill username and quote');
    fetch('https://radiant-escarpment-11253.herokuapp.com/add-quote', {
      method: 'POST',
      body: {
        quote: quote,
        username: name
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(responseData) {
        console.log(responseData);
      });
  });
  add.addEventListener('click', e => {
    var startVal = Number(startPoint.textContent);
    startVal += 1;
    startPoint.textContent = startVal;
  });

  subtract.addEventListener('click', e => {
    var startVal = Number(startPoint.textContent);
    startVal -= 1;
    startPoint.textContent = startVal;
  });
};
