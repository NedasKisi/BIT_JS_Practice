// 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.

//  1 variantas
// function add(){
//    const num1 = 3;
//    const num2 = 10;
//    const sum = num1 + num2;
//    console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
// }
// add();


// 2 variantas. 
// function sum(n1,n2){
// 	return n1+n2;
// }
// console.log(sum(5,9));


// /////////////////////////////////////////////////////////////////////////////////

// 2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.


// function compare(n1, n2) {
// 	if (n1 > n2) {
// 		return n1 + ' is the bigger number';
// 	} else if (n2 > n1) {
// 		return n2 + ' is the bigger number';
// 	} else {
// 		return n1 + ' = ' + n2 ;
// 	}
// }
// compare();
// console.log(compare(10,4))


// /////////////////////////////////////////////////////////////////////////////////

// 3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.

// function leapYear(n) {
//    if(n % 400 === 0 && n % 4 === 0) {
//       return n + ' yra keliamieji metai'
//    } else{
//       return n + ' nėra keliamieji metai'
//    }
// }

// let year= leapYear(2000)
// console.log(year)



// /////////////////////////////////////////////////////////////////////////////////

// 4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.


// function squaredNum(n){
//    return n ** 2
// }

// let squared = squaredNum(12);
// console.log(squared);


// /////////////////////////////////////////////////////////////////////////////////

// 5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.

// function higherThan(n) {
//    if(n < 1) return 0;
//    return n + higherThan(n-1);
// }

// console.log(higherThan(3))


// /////////////////////////////////////////////////////////////////////////////////

// 6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).

// function printDivisors(n) {
//      for(let i = 1; i <= Math.sqrt(n); i++) {
//       if (n % i == 0) {
//            if (parseInt(n / i, 10) == i) {
//             return i;
//           } else {
//              return i + " " + parseInt(n / i, 10) + " ";
//           }
//        }
//    }
// }

// console.log(printDivisors(50))

// /////////////////////////////////////////////////////////////////////////////////

// 7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).

// function showText(text) {
//    return text + '\n' + ' Teksto ilgis simboliais: ' +text.length;
// }


// let text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'

// console.log(showText(text))


// /////////////////////////////////////////////////////////////////////////////////

// 8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ];

// const mobileNum = (arr = []) => {
//    let mob = '';
//    arr = arr.map(String);
//    mob += `(${arr[0]+arr[1]+arr[2]}) `;
//    mob += `${arr[3] + arr[4] + arr[5]}-`;
//    mob += arr[6] + arr[7] + arr[8] + arr[9];
//    return mob;
// };
// console.log(mobileNum(arr));


// /////////////////////////////////////////////////////////////////////////////////

// 9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra ilgesnis.

// 2 budai printint, vienas nustatant kintamuosius kitas, juos irasant tiesiogiai, susitaupo 2 eil.

// let text1 = 'random text incoming';
// let text2 = 'very very random text incoming';

// function getCharLength (text1, text2) { 
// 	if(text1.length > text2.length){
//       return 'text1 yra ilgesnis text2';
//    } else if (text2.length > text1.length){
//       return 'text2 yra ilgesnis text1'
//    }
// }

// console.log(getCharLength(text1,text2));

// console.log(getCharLength('random text incoming','very very random text incoming'));


// /////////////////////////////////////////////////////////////////////////////////

// 10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.


// function ocuringLetters(str, letter) {
//    let count = 0;
//    for (let i = 0; i < str.length; i++) {
//        if (str.charAt(i) == letter) {
//            count += 1;
//        }
//    }
//    return count;
// }

// let string = '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
// let letterToCheck = 'a';
// const result = ocuringLetters(string, letterToCheck);

// console.log(result);

