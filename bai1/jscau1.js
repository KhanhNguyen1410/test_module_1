function simpleEquation(a, b){
    let result;
    let print = document.getElementById("result");
    if (a === 0){
        if (b===0){
            result = "phuong trinh co vo so nghiem"
            print.innerHTML= result
        } else {
            result = "phuong trinh vo nghiem"
            print.innerHTML= result
        }
    } else {
        result = -b/a;
        print.innerHTML= result
    }

}

simpleEquation(5, 8);