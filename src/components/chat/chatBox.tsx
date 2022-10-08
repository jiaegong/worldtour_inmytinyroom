import React, { useEffect, useState } from "react";
import MessageBox from "./message/messages";
import "./chatBox.css";
import io from "socket.io-client";

// 나중에 정리하기
interface MessageForm {
  room: string;
  nickName: string;
  message: string;
}

const socket = io("http://13.125.86.28/");

const ChatBox = () => {
  const [rows, setRows] = useState<number>(1);
  const [newMesage, setNewMesage] = useState<MessageForm>({
    room: "Seoul",
    nickName: "",
    message: "",
  });
  const [messageList, setMessageList] = useState<MessageForm[]>([]);

  useEffect(() => {
    socket.emit("join_room", "Seoul");
    socket.on("user_nickName", (userNickName) => {
      setNewMesage({
        room: "Seoul",
        nickName: userNickName,
        message: "",
      });
    });

    socket.on("receive_message", (newlyAddedMessage) => {
      setMessageList((prevMessageList) => [...prevMessageList, newlyAddedMessage]);
    });

    return () => {
      socket.off("join_room");
      socket.off("send_message");
      socket.off("receive_message");
      socket.off("user_nickName");
    };
  });

  // React.KeyboardEvent<HTMLButtonElement>
  // React.MouseEvent<HTMLButtonElement, MouseEvent>

  const sendMessage = (e: any): void => {
    if (newMesage.message === "") return;

    socket.emit("send_message", newMesage);
    setMessageList((prevMessageList) => [...prevMessageList, newMesage]);
    setNewMesage((messageContents) => {
      return { ...messageContents, room: "Seoul", message: "" };
    });

    // textarea rows를 1로 되돌림으로써, textarea 높이를 원래 크기로 돌림
    (e.currentTarget.previousElementSibling! as HTMLTextAreaElement).rows = 1;
  };

  const handleTyping = (e: any): void => {
    setRows(handleRows(e));

    setNewMesage((messageContents) => {
      return {
        ...messageContents,
        room: "Seoul",
        message: e.target.value,
      };
    });
  };

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  return (
    <section className="chatbox-container">
      <MessageBox messageList={messageList} />
      <div className="chatbox-lower">
        <button className="chatbox-chatbtn">chat</button>
        <div className="chatbox-chatInputBox">
          <textarea
            className="chatbox-msginput"
            placeholder="친구들에게 메세지를 보내세요!"
            maxLength={1000}
            value={newMesage.message}
            rows={rows}
            onChange={handleTyping}
            onKeyUp={onEnter}
          />
          <button className="chatbox-sendbtn" onClick={sendMessage}>
            전송
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;

// 나중에 정리하기
const handleRows = (e: React.ChangeEvent<HTMLTextAreaElement>): number => {
  const textareaLineHeight = 20;
  const minRows = 1;
  const maxRows = 3;

  const previousRows = e.target.rows;
  e.target.rows = minRows; // reset number of rows in textarea

  const currentRows = ~~(e.target.scrollHeight / textareaLineHeight) - 1;

  if (currentRows === previousRows) {
    e.target.rows = currentRows;
  }

  if (currentRows >= maxRows) {
    e.target.rows = maxRows;
    // e.target.scrollTop = e.target.scrollHeight;
  }

  return currentRows < maxRows ? currentRows : maxRows;
};
