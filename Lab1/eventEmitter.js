import {EventEmitter} from 'events';

const emitter = new EventEmitter();

const sayHi = (name)=> {
    console.log(`Logged in ${name}`);
}

emitter.on('greet',sayHi);
emitter.on('greet',(name)=>{console.log(`Logged out ${name}`)});
emitter.once('greet',(name)=>{console.log( `System Started ${name}`)});
emitter.on('exit',(name)=>{console.log(`System Exitttt ${name}`)});

emitter.emit('greet', "Arshh");
emitter.mit('greet', "Mohit");
emitter.off('exit', "manager");