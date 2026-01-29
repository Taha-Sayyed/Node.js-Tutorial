const EventEmitter=require('events')
const eventEmitter=new EventEmitter();
//console.log(EventEmitter)
console.log(typeof EventEmitter);//function
//console.log(eventEmitter)
console.log(typeof eventEmitter)//Object

//Define event and add listener
eventEmitter.on("greet",()=>{  //multi-callable event
    console.log(`Hello! I am listening`);
});

eventEmitter.emit("greet")

//Another way to add listener to the same event
const mylistener1=function(username){
    console.log(`Hello ${username}`);
    
}
const mylistener2=function(username){
    console.log(`Hello ${username}! How are you?`);
    
}
eventEmitter.on("greet",mylistener1)//multi-callable event
eventEmitter.emit("greet","Taha Sayyed");

eventEmitter.on("greet",mylistener2)//multi-callable event
eventEmitter.emit("greet","Taha Sayyed");

// Creating a event that can be called only once
const mylistener3=function(){
    console.log(`This event can be call only once`);
    
}

eventEmitter.once("demoEvent",mylistener3);
eventEmitter.emit("demoEvent")
eventEmitter.emit("demoEvent")//Single callable

//total listener on event "greet"
console.log(eventEmitter.listeners('greet'));






