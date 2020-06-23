import io from "socket.io-client";


function main(): void{
  const os: NodeJS.ProcessEnv = process.env;
  const url: string | undefined = os['URL'];
  const port: number = parseInt(`${os['PORT'] || 3000 }`)
  const userId: string | undefined = os['USER_ID'];
  
  const socketConnectOpts = {
    forceNew: true,
    reconnection: true,
    secure: false
  };

  const websocket: SocketIOClient.Socket = io(`${url}:${port}`, socketConnectOpts);

  websocket.emit('login', userId);
  websocket.on('connect', () => console.log(`Websocket Connection Id: ${websocket.id}\n`));
}

main();