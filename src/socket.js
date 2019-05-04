// const WS_URL = "wss://socket-io-chat.now.sh/socket.io/";
export const WS_URL = "wss://echo.websocket.org";
const ws = new WebSocket(WS_URL);
export default ws;