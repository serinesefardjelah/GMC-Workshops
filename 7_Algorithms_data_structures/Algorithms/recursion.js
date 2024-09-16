//write a recursive function that reverses a string

//input : Hello 
//output : olleH

function reverseString(str){

    //base case
    if(str === ""){

        return "";

    } 
    //recursive case
    else {
        return str[str.length - 1] + reverseString(str.slice(0, -1));
    }
}

console.log(reverseString("Hello")); //olleH