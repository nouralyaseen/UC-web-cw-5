alert ("مرحباً بك في موقعي! أنا نور، وسوف أحسب درجتك")
let grade = prompt("أدخل درجتك")
console.log (grade)
if (grade<=100 && grade>=90){
    console.log ("لقد حصلت على امتياز 🥳")
}else if(grade<=89 && grade>=80){
    console.log ("لقد حصلت على جيد جداً🤩")
}else if(grade<=79 && grade>=70){
    console.log ("لقد حصلت على جيد🙂")
}else if(grade<=69 && grade>=60){
    console.log ("لقد حصلت على مقبول😕")
}else if(grade<=59 && grade>=50){
    console.log ("لقد حصلت على ضعيف☹️")
}else{
    console.log ("راسب💔")
}
console.log("%cthis text is red", "color:blue")
// javascript is not java