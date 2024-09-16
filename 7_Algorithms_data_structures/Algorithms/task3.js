// A date is given as an integer of 6 digits. For example, the number 181019 represents October 18, 2019.
// Develop an algorithm that has such a number as input, checks that this number corresponds to a valid date and displays the following result:
// Day: 18
// Month: October
// Year: 2019


function dateFromInt(date){
    let year = date % 100;
    date = Math.floor(date / 100);
    let month = date % 100;
    let day = Math.floor(date / 100);
    let monthName = "";
    switch(month){
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
    }
    year += 2000;
    return {day, month: monthName, year};
}

let date = 181019;
let result = dateFromInt(date);
console.log(`Day: ${result.day}\nMonth: ${result.month}\nYear: ${result.year}`);