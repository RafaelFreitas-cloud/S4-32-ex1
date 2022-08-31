function removeChar(str){
    let newStr=""
    for(i=1;i<(str.length-1);i++){
        if(str[i]==str[i]){
            newStr+=str[i]
        }
    }
    return newStr
}

let x = "rafael"
console.log(removeChar(x))