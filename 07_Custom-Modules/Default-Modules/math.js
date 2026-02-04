function math(){
    console.log('Math Module');
}

math.add=function(a,b){
    return a+b;
}
math.sub=function(a,b){
    return a-b;
}
math.div=function(a,b){
    return a/b;
}
math.mul=function(a,b){
    return a*b;
}

module.exports=math;
