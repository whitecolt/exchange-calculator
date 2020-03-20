let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd'),
  btnClear = document.querySelector('button');

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

btnClear.addEventListener('click', () => {
  inputRub.value = '';
  inputUsd.value = '';
});



























// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {

//     function catchData() {

//         return new Promise(function(resolve, reject){
//             let request = new XMLHttpRequest();
//             request.open("GET", "js/current.json");

//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             request.send();

//             request.onload = function() {
//                 if(request.readyState === 4) {
//                         if(request.status == 200) {
//                             resolve(this.response)
//                         }
//                         else {
//                             reject();

//                         }
//                 }
//             }
//         });
//     };

//     catchData()
//     .then(response => {
//         console.log(response);
//         let data = JSON.parse(response);
//         inputUsd.value = inputRub.value / data.usd;
//     })
//     .then(() => console.log(5000))
//     .catch(() => inputUsd.value = "Р§С‚Рѕ-С‚Рѕ РїРѕС€Р»Рѕ РЅРµ С‚Р°Рє")


// });