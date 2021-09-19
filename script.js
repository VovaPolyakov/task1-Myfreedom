// 1 задание
// let name = prompt('Ваше имя ');

// console.log('Привет,' + name);



// 2 задание 

// let numberOne = prompt('Какую цифру вы хотите возвести в степень ?');

// let numberTwo = prompt('На какую степень вы хотите возвести число?');


// numberThree = Number(numberOne) ** Number(numberTwo);

// console.log(numberThree);

// 3 задание 


// let numberOne = prompt('Введите первое число ');

// let numberTwo = prompt('Введите второе число ');

// if (Number(numberOne) > Number(numberTwo)) {
//     console.log(numberOne);
// }else if (Number(numberOne) < Number(numberTwo)) {
//     console.log(numberTwo);
// }else {
//     console.log('Эти два числа равны');
// };

// 4 задание

// let num1 = Number(prompt('Введите число:'));
// let num2 = Number(prompt('Введите втрое число:'));


// let num3 = num1 % num2

// if (num3 == 0) {
//     console.log('Число кратное');
// } else {
//     console.log('Число не кратное');
// }

// Задание 5

// let i = 0
// let a = 10
// let b = 0

// for (i; i <= 10; i++) {
//     b = a + i
//     console.log(b)
// }

//Задание 6

// let i = 0

// for (i; i <= 10; i + 2) {
//     let numberOne = Number(prompt('Введите число  '));
//     if (numberOne == 10) {
//         alert('Число равно 10')
//     } else {
//         alert('Число не равно 10 ')
//     }
// }

//Задание 7 
// let number = Number(prompt('Введите число '));

// for (let i = 0; i < number; i++) {
//     console.log(i ** 2)
// }

//Задание 8

for (let i = 1; i <= 100; i++) {


    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}
