let number = 8807658395
let test=/^[1-9]\d{9}d$/;
if(value.test(enter.toString())){
    console.log("correct");
}
else{
    console.log("wrong pattern");
}


let text="Haii Hello";
let match=/\b\w+\b/gi/;
console.log(match,match ? text :0 )
console.log(text.length);


const text = "hello! how are you";
const words = text.match(/\bh\w+w\b/gi);
console.lof(words);
