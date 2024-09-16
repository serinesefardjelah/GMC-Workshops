function findLongestWord(str) {
    let arr = str.split(' ');
    let longest = arr[0];

    for(element of arr){
        if(element.length > longest.length) {
            longest = element;
        }
    }
    return  longest.length;
}

console.log(findLongestWord("Hello my name is Hayet, The weather is nice")); // 7