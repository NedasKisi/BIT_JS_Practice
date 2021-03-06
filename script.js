// 1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras. 

// let  n = 20;

// if (n >= 0) {
//    console.log("Geras")
// } else {
//    console.log("Blogas")
// }

// /////////////////////////////////////////////////////////////////////////////////

//  2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.

// let n = 2;

// if (n === 1) {
//    console.log("Eikite")
// } else if(n === 2 || n === 3){
//    console.log("Palaukite")
// } else {
//    console.log("n gali būti tik skaičiai: 1(žalia), 2(geltona), 3(raudona).")
// }

// /////////////////////////////////////////////////////////////////////////////////

// 3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.

// Books fit into boxes

// let d = 2;
// let k = 8;
// let n = 5;

// Books don't fit into boxes

// let d = 3;
// let k = 18;
// let n = 5;

// const boxCap = ( n * d ) - k;

// if(boxCap >= 0) {
//    console.log("Knygos telpa į dėžes")
// } else {
//    console.log("Knygos netelpa į dėžes")
// }

// /////////////////////////////////////////////////////////////////////////////////

// 4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.


// let a = 5;
// let b = 2;

// if(a > b) {
//    console.log(a = a - 1, b = b + 1)
// } else {
//    console.log(a = a + 1, b = b - 1)
// }


// /////////////////////////////////////////////////////////////////////////////////

// 5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją.

// Sprendimas be math.floor() funkcijos

// let c = 53;
// let p = 20;

// const m = c % p;
// const k = (c - m) / p;

// console.log(`Saulius nusipirks ${k} porcijas, liks ${m} centų.`)


// /////////////////////////////////////////////////////////////////////////////////

// 6. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima.

// let n = 6;

// const triangleRem = n % 3;
// console.log(triangleRem)

// if(triangleRem === 0) {
//    console.log("Trikampį sudėlioti galima.")
// } else {
//    console.log("Trikampio sudėlioti negalima.")
// }

// 7. Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)


// function days(month,year) {
//    return new Date(year, month, 0).getDate();
// };

// console.log(days(1,2022))
// console.log(days(2,2022))
// console.log(days(3,2022))
// console.log(days(6,2022))
// console.log(days(3,2022))
// console.log(days(8,2022))
// console.log(days(10,2022))


// /////////////////////////////////////////////////////////////////////////////////

// 8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.


// let diceThrow;

// let diceThrow = Math.ceil(Math.random()*6)

// if (diceThrow === 1 || diceThrow === 3 || diceThrow===5) {
//    console.log("Kambari tvarkys jaunėlis, nes išrideno" + ' ' + diceThrow)
// } else if(diceThrow === 2 || diceThrow === 4 || diceThrow ===6){
//    console.log("Kambari tvarkys vyresnėlis, nes išrideno" + ' ' + diceThrow)
// }

// /////////////////////////////////////////////////////////////////////////////////

// 9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.

// const years = parseInt(prompt("Enter years : "));

// const years = 1896;
// const baseYear = 1896;

// if (years >= baseYear && (years-baseYear) % 4 === 0) {
//    console.log('n' + ' ' + '=' + ' ' +(years-baseYear)/4);
// }  else {
//      console.log('Metai neolimpiniai');
// }


// /////////////////////////////////////////////////////////////////////////////////

// 10. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.

// let v = 9;
// let m = 5;

// function kelionePasieks(v1,m1,m2) { 
//    let late = m2-((v * 60 + m) - (v1 * 60 + m1));
//       if (late >= 0) {
//       console.log(" Petras į pamoką pavėluos")
//       } else {
//          console.log(" Petras į pamoką nevėluos")
//          }
//   return late;        
// } 

//testai

// kelionePasieks(8,29,43);
// kelionePasieks(8,29,23);
// kelionePasieks(9,29,23);
// kelionePasieks(9,29,53);