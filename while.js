// 1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.

// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// let i = 0;
// let sum = 0;

// while (sum < 100) {
//     i = rand(1, 10);
//     sum = sum + i;
//     console.log(i)
// }



// /////////////////////////////////////////////////////////////////////////////////

// 2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7.


// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// let i = 0;
// let sum = 0;


// do {
//     i = rand(1, 10);
//     sum = (sum + i);
//     console.log(i)
// } 
// while (sum % 7 != 0) {

// }
// console.log(sum);


// /////////////////////////////////////////////////////////////////////////////////

// 3. Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių. Kontroliniai duomenys: Įveskite knygos skyrių skaičių: 8 Tadas visą knygą perskaitys per 4 dienas (-ų). Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų). Įveskite knygos skyrių skaičių: 17 Tadas visą knygą perskaitys per 6 dienas (-ų). Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).

// let m;
// let d;
// let s;

// function perskaitys(m,d) {
//    s = m/d; 
//    do {d--;
//       m=m-d;
//       console.log(s);
//    } while (m === 0); 
// }
// perskaitys(17,6);
// perskaitys(8,4);
// perskaitys(10,6);


// /////////////////////////////////////////////////////////////////////////////////

// 4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.

// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// let i = 0;
// while (i !== 5) {
//   i = rand(1, 10);
//   console.log(i);
// }

// /////////////////////////////////////////////////////////////////////////////////

// 5. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje)
// 
// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// let i = 0;
// while (i !== 10) {
//   i = rand(0, 10);
//   console.log(i);
// }