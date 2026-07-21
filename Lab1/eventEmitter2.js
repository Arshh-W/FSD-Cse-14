import {EventEmitter} from 'events';

const sayHi =(name)=>{
    console.log(` ${name} logged in`);
};

const task = new EventEmitter();

task.once("greet",()=>{
    console.log("System started");
})

task.on('greet',sayHi);
task.on('greet',(name)=>{
    console.log(`${name} starts working`);
});

task.on('greet',(name)=>{
    console.log(`${name} stops working`);
});

task.off("greet", sayHi);//off needs function name
task.once('exit',()=>{
    console.log("System Shutting down");
});


task.emit("greet","Arsh Rana");
task.emit("greet","Ashwani");
task.emit("greet", "Akarsh");
task.emit("exit");


console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners();