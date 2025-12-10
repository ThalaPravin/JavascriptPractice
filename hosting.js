getValue();
// func();

var num = 12;

getValue();
// func();


function getValue(){
    console.log("Value of num is ", num);
}

var func = ()=>{
    console.log("through arrow function" , num);
}

func();

getValue();