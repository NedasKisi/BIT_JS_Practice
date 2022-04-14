// Sukurti masyą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.

//  Manual būdas
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// console.log(arr)

// // For būdas

// var numberArray = [];

// for(var i = 1; i <= 20; i++){
//     numberArray.push(i);
// }
// console.log(numberArray);


// // Array.length būdas

// const arr3 = Array.from({length: 20}, (_, i) => i + 1)

// console.log(arr3)


// /////////////////////////////////////////////////////////////////////////////////

// 2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.

// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// const arr = Array.from({length: rand(40,60)},  (_, i) => i + 1);

// console.log(arr)


// /////////////////////////////////////////////////////////////////////////////////

// 3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.

// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// const arr = Array.from({length: rand(10,15)},  () => i = rand(5,47));

// console.log(arr);

// /////////////////////////////////////////////////////////////////////////////////

// 4. Sukurti masyvą, kurio ilgis 100, o reikšmės – atsitiktinės raidės D, E, F, G, H. 20.

// let raides ="DEFGH";
// let masyvas = [ ];
// let rand = 0;
// for (let i = 0; i <= 99; i++) {
//   rand = Math.floor(Math.random() * 5);
//   masyvas.push(raides[rand]);
// }

// console.log(masyvas)


// /////////////////////////////////////////////////////////////////////////////////

// 5. Sukurti masyvą, kurio ilgis 100, o reikšmės – atsitiktinės raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.

// let raides ="MNOP";
// let masyvas = [ ];
// let rand = 0;
// const count = {};

// for (let i = 0; i <= 99; i++) {
//   rand = Math.floor(Math.random() * 4);
//   masyvas.push(raides[rand]);
// }


// masyvas.forEach(element => {
//   count[element] = (count[element] || 0) + 1;
// });

// console.log(masyvas)
// console.log(count);


// /////////////////////////////////////////////////////////////////////////////////

// 6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.







