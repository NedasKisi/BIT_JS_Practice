// 1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.

// for (i=0; i<5; i++) {
//    console.log('Labas')
// }
 
// /////////////////////////////////////////////////////////////////////////////////

// 2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).


// for (i=0; i<5; i++) {
//    console.log(i)
// }

// let test = "";
// let i = 0;
// do {
//     test += i + "\n";
//     i++;
// } while (i < 5);
// console.log(test);

// /////////////////////////////////////////////////////////////////////////////////

// 3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).

// for (i=0; i<50; i = i + 10) {
//    console.log(i)
// }

// let test = "";
// let i = 0;
// do {
//     test += i + "\n";
//     i = i + 10;
// } while (i < 50);
// console.log(test);

// /////////////////////////////////////////////////////////////////////////////////

// 4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).

// for (i=49; i<=53; i++) {
//    console.log(i)
// }


// let test = "";
// let i = 49;
// do {
//     test += i + "\n";
//     i = i + 1;
// } while (i < 54);
// console.log(test);

// /////////////////////////////////////////////////////////////////////////////////

// 5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).


// PVZ
// function rand(min, max) {
// Return Math.floor(Math.random()*(max-min+1)+min);
// }


// rand = Math.floor(Math.random()*10)

// for (i=0; i<=10; i++) {
//    console.log(Math.floor(Math.random()*10))
// }



// /////////////////////////////////////////////////////////////////////////////////

// 6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 3 > 0) {
//      console.log(numbers[i]);
//    }
// }

// Arba

// for (i = 0; i <= 20; i++) {
//   if (i % 3 > 0) {
//     console.log(i);
//   }
// }

// /////////////////////////////////////////////////////////////////////////////////

// 7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.

// const multNum = parseInt(prompt("Enter a number : "));

// for (i = 1; i <= 10; i++) {
//   console.log(multNum + "*" + i + "=" + multNum * i);
// }


// /////////////////////////////////////////////////////////////////////////////////

// 8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais.


// Check in browser

// const converter = parseInt(prompt("Enter inches : "));

// var converter = 200;

// for (i = 0; i <= converter; i++) {
//   console.log(i + ' inches ' +  '= ' + (i / 2.54) + 'cm');
// }



// /////////////////////////////////////////////////////////////////////////////////

// 9. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.



// const money = 100 
// const percent = 0.02
// const total = money + (money * percent)

// var years = 10;
// arba browser patikrinimas
// const years = parseInt(prompt("Enter inches : "));



// for (i = 1; i <= years; i++) {
//   console.log(i + ' metai ' +  '= ' + (money + (i *  total * percent)) + 'Eur');
// }



// /////////////////////////////////////////////////////////////////////////////////

// 10. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.

// Browser prompt check
// const years = parseInt(prompt("Enter years : "));


// const years = 2004;

// for (i = 1; i <= 1; i++) {
//     if(years % 400 === 0 || years % 4 === 0)
//       console.log(years + ' metai yra keliamieji ');
//       else {
//         console.log(years + ' metai nėra keliamieji')
//       }
// }
