// var
let varfirst = 1;
console.log(varfirst);

{
    var varSecond = 2;
    console.log(varSecond);    
}
console.log(varSecond);    

{
    let varThird = 3;
    console.log("Third - first : "+varThird)    
}
console.log("Next !")
{
    let varThird = 4;
    console.log("Third - second : "+varThird)    
    {
        console.log("Third - third : "+varThird)    
        let varFifth = 5;
        console.log("Fifth : "+varFifth)    
        console.log("First : "+varfirst)    
    }
    console.log("Third - fourth : "+varThird)    
}
console.log("End !")
// fucntion 