let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd'),
  btnClear = document.querySelector('button');

// from RUB to USD

inputRub.addEventListener('input', () => {

  function catchData() {

    return new Promise(function (resolve, reject) {

      let request = new XMLHttpRequest();
      request.open('GET', './current.json');
      request.setRequestHeader('Content-type', 'application.json; charset=utf-8');
      request.send();

      request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
          resolve(this.response)
        } else {
          reject();
        }
      };

    });
  }

  catchData()
    .then(response => {
      console.log(response);
      let data = JSON.parse(response);
      inputUsd.value = (inputRub.value / data.usd).toFixed(2);
    })
    .catch(() => console.log("Что-то пошло не так"));
});




// From USD to RUB

inputUsd.addEventListener('input', () => {

  function catchData() {

    let request = new XMLHttpRequest();
    request.open('GET', './current.json');
    request.setRequestHeader('Content-type', 'application.json; charset=utf-8');
    request.send();

    return new Promise(function (resolve, reject) {
      request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
          resolve(this.response)
        } else {
          reject();
        }
      }
    });

  };

  catchData()
    .then((response) => {
      let data = JSON.parse(response);
      inputRub.value = inputUsd.value * data.usd;
    })
    .catch(() => inputRub.value = "Что-то пошло не так");


});

// Clear both inputs

btnClear.addEventListener('click', () => {
  inputRub.value = '';
  inputUsd.value = '';
});