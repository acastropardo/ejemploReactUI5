import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';




var connectionOptions = {
    transports: ["websocket"]
};

// Establish a Socket.io connection
//const apiURL = "http://localhost:3031"
//const apiURL = "http://192.168.0.179:3031"
const apiURL = "http://acastropardo.zapto.org:3031"
const socket = io(apiURL,connectionOptions);

//const socketClient = socketio(socket);

//Initialize our feathers client application througb Socket.io
//with hooks and authentication

const client = feathers();

//Connect to the feathers server using the Socket.io Connection
client.configure(feathers.socketio(socket, {timeout: 15000}));

//setup the feathers authentication client
client.configure(feathers.authentication());

//show the login page
const showLogin = (error) => {
    document.location.href = "http://localhost:3001";
}

export default client;
