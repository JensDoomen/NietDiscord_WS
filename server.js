var server = require('ws').Server;
var s = new server({ port: 5002 });

s.on('connection', function(ws){
    ws.on('message', function(message){

       // message = JSON.parse(message);

        if(message.type == "name") {
            ws.personName = message.data;
        }

        console.log("Recieved: " +message.data);

        //ws.send("From Server: "+message);

        s.clients.forEach(function e(client){
            console.log("forEach test")
                client.send(
                    //  type: ws.personName,
                    //  data: message.data
                    message.data
                    );
        
        });

        

    });
    ws.on('close', function() {
        console.log("I Lost a client");
    });
});

// const WebSocket = require('ws');

// const wss = new WebSocket.Server(({ port: 5002 }));

// wss.on("connection", ws => {
//     console.log("New cliet Connected!");

//     ws.on("message", data => {
//        console.log(`Client has send: ${data}`);

//        ws.send(data.toString().toUpperCase());
//     });

//     ws.on("close", () => {
//         console.log("Client has disconnected!");
//     })
// });