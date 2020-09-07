
let arr = [1,2,3,4,5,6,7,8,9];
let number = +prompt("enter your number");
function checkNumber(number, array){
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]){
            return true;
        }
    }
}
if (checkNumber(number, arr)){
    document.write(number + " thuoc mang ["+ arr +"] ")
}
else {
    document.write(number + " khong thuoc mang ["+ arr +"]")
}