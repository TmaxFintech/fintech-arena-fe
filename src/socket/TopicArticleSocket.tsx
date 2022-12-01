import React, { useEffect } from "react";
import { SocketReqResTypes } from "src/types/SocketResponse";

interface TopicArticleSocketType {
  service:
    | "InsertService"
    | "SelectService"
    | "SelectListService"
    | "DeleteService";
  body: {};
  setResponse: React.Dispatch<React.SetStateAction<SocketReqResTypes|undefined>> ;
}

function TopicArticleSocket({
  service = "InsertService",
  body,
  setResponse
}: TopicArticleSocketType) {
  const webSocketUrl =  `ws://192.168.154.142:8080`;

  const ws = new WebSocket(webSocketUrl);
  ws.onopen = (e) => {
    // connection opened
    ws.send(
      JSON.stringify({
        header: {
          targetServiceName: `example.service.article.${service}`,
          messageType: "REQUEST",
          contentType: "TEXT",
        },
        body: body,
      })
    );
    console.log("connected");
  };
  let result;
  ws.onmessage = async (e) => {
    try {
      if (e !== null && e !== undefined) {
        result = await JSON.parse(e.data);
        setResponse(result)
        console.log("result", result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  ws.onerror = (e) => {
    // an error occurred
    console.log("error", e);
  };

  // ws.onclose = (e) => {
  //   // connection closed
  //   console.log(e.code, e.reason);
  // };

  // return () => {
  //   ws.close();
  // };
  // }, [data]);

}

export default TopicArticleSocket;
