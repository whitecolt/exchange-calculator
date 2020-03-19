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
      inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => console.log("Что-то пошло не так"));
});





// inputUsd.addEventListener('input', () => {
//   let request = new XMLHttpRequest();

//   request.open('GET', './current.json');
//   request.setRequestHeader('Content-type', 'application.json; charset=utf-8');
//   request.send();

//   request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status == 200) {
//       let data = JSON.parse(request.response);

//       inputRub.value = (inputUsd.value * data.usd).toFixed(0);
//     } else {
//       inputRub.value = "шото таки снова пошло не так, Абрам!";
//     }
//   });
// });

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