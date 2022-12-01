export interface SocketReqResTypes {
  header: {
    targetServiceName: string;
    messageType: "REQUEST";
    contentType: "TEXT";
  };
  body: { request?: any; response?: any };
}
