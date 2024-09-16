// function reverseString(str){
//     let arr = str.split(' ');
//     let reverse = [];

//     for (let i = arr.length; i >=0 ; i--) {
//         reverse.push(arr[i]);
//     }

//     return reverse.join(' ');
// }
// console.log(reverseString("Hello my name is Hayet, The weather is nice"));


function reverseString1(str) {
    return str.split(' ').reverse().join(' ');
}
console.log(reverseString1("Hello my name is Hayet, The weather is nice"));