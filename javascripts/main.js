window.onload = function(e) {
  var startPoint = document.getElementById('myVal');

  var add = document.getElementById('add');
  var subtract = document.getElementById('subtract');

  var quoteBox = document.getElementById('quote-box');
  var quoteButton = document.getElementById('quote-button');

  quoteButton.addEventListener('click', e => {
    fetch('https://zen.github.com')
      .then(response => response.json())
      .then(responseData => {
        quoteBox.innerHTML = `<blockquote><q>${responseData}</q></blockquote>`;
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
