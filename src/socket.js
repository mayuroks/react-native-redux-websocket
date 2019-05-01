// const WS_URL = "wss://socket-io-chat.now.sh/socket.io/";
const WS_URL = "wss://echo.websocket.org";
const ws = new WebSocket(WS_URL);
export default ws;