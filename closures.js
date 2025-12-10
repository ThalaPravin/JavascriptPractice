function outer(){
    var num =1;

    function inner(){
        console.log(num);
    }
    return inner;
}

var func = outer();

func()