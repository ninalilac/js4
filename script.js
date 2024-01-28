"use strict";


// ---- 1


let array = [14, 150, 'css', null, 'javascript', 25];

let arrayNew = array.map(element =>
    typeof element === 'number' ? element * element :
    typeof element === 'string' ? element.toUpperCase() :
    element
  );


console.log(arrayNew);


// ---- 2 

 
let info = "Good Day";
let infoDay = info.slice(info.indexOf(' ') + 1);

console.log(infoDay);

// ---- 3

function userNina(userString) {
    return userString.length;
}

const ninaString = " Hello Everyone!";
const lengthofStr = userNina(ninaString);

console.log(lengthofStr);




// ---- 4

let capital = "tbilisi";

let response = prompt ("Sakartvelos dedakalakia?");

let responseLowercase = response.toLocaleLowerCase();

let result = responseLowercase === capital ? "Sworia!": "Arasworia!";

console.log(result);

// ---- 5



let fruits = ["apple", "mango", "avocado", "kiwi"];

// თუ მაქვს 200ზე მეტი სტრინგი, ბოლოდან წამოვალ რომ ჩავანაცვლო

fruits.splice(-1, 1);


// ჩავამატებ ჩვეულებრივად, მე მანგოს ამოვიღებდი კივი მიყვარს

fruits.push("strawberry");

console.log(fruits);



// ---- 6 
// const გვეჩაგრება

const array2 = [5, 25, 89, 120, 36];

array2.push("javascript", "python");
array2.unshift("html", "css");

    console.log(array2.length);

array2.shift();
array2.pop();

    console.log(array2);








// ---- 7


const fruits1 = ["orange", "banana", "kiwi"];

console.log(fruits1.length);

fruits1.push("apple", "pineapple"); // push როცა ბოლოში ამატებ ელემენტს
fruits1.unshift("watermelon"); // unshift როცა დასაწყისში ამატებ ელემენტს

console.log(fruits1.length);


fruits1.splice(2, 0, "mango"); 


fruits1.shift();   // პირველ ელემენტს შლის
fruits1.pop(); // ბოლო ელემენტს შლის //// პ.ს ეს კომენტარები ჩემთვის არის.. //


console.log(fruits1.length);
console.log(fruits1);




// ---- 8


let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, 'a', 'b' ,'c');

console.log(array3);



// ---- 9 



let array4 = [12, 25, 3, 6, 8, 14, 7, 23];
let  newArray4 = array4.map(element => element / 3);

console.log(newArray4);






// ---- 10


// ახალ ცვლადს შევქმნი სადაც აღარ იქნება რიცხვი 10
// let array5 = [15, 100, 25, 10, 36];
// let newArray5 = array5.filter(element => element !== 10);

// console.log(newArray5);

// ან 
let array5 = [15, 100, 25, 10, 36];

array5.splice(3,1);


console.log(array5);

// ---- 11

let array6 = [1, 2, 3, 4, 5];

array6.splice(2,1, "three");

console.log(array6);



// ---- 12 


let array7 = ["hello1", 14, 24, "hello2"];

array7.shift();
array7.pop();

console.log(array7);



// ---- 13


let array8 = [1, 2, 3, 4, 5];
let sum = 0;

array8.forEach(function(number){
    sum += number;
});
console.log(sum);




// ---- 14


let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filterLanguages = languages.filter (word => word.length > 3);

console.log(filterLanguages);



// ---- 15



let words = ['madrid', 'rome', 'milan', 'berlin'];

let filterWords = words.filter (result => result.includes("m"));

console.log(filterWords);


// ---- //
