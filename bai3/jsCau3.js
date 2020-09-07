
let string= prompt("Nhập chuỗi vào đây");
let str =['u','e','o','a','i','U','E','O','A','I'];
let count =checkNguyenAm(string,str);
document.write(string +"<br>");
document.write("Dãy vừa nhập có " + count + " nguyên âm");

function checkNguyenAm(string, arr){
    let count=0;
    for (let i=0; i<string.length;i++){
        for (let j=0;j<arr.length;j++){
            if (string[i]===arr[j]){
                count++;
            }
        }
    }
    return count;
}