const EventEmitter=require('events');

class Chat extends EventEmitter{
    sendMessage(msg){
        this.emit("messageReceived",msg);
    }
}

const chat=new Chat();
chat.on("messageReceived",(msg)=>{
    console.log(`New Message: ${msg}`);
});

chat.sendMessage("Hello Taha")