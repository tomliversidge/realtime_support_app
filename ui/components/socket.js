import {EventEmitter} from 'events';

class Socket {
    constructor(ws = new WebSocket(), ee = new EventEmitter()) {
        this.ws = ws;
        this.ee = ee;
        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
    }
    emit(name, data) {
        this.ws.send(JSON.stringify({name, data}));
    }
    message(e){
        try {
            const message = JSON.parse(e.data);
            this.ee.emit(message.name, message.data);
        }
        catch(err){
            this.ee.emit('error', err);
        }
    }
    open(){
        this.ee.emit('connect');
    }
    close(){
        this.ee.emit('disconnect');
    }
    on(name, fn){
        this.ee.on(name, fn);
    }
    off(name, fn){
        this.ee.removeListener(name, fn);
    }
}

export default Socket;