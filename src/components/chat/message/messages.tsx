import React, { memo, useEffect } from "react";
import "./messages.css";

// eslint-disable-next-line react/display-name
const Messages = memo(({ messageList }: any) => {
  return (
    <div className="chatbox-upper">
      {messageList?.map((massage: any, index: any) => (
        <Message key={index} massage={massage} />
      ))}
    </div>
  );
});

export default Messages;

// eslint-disable-next-line react/display-name
const Message = memo(({ massage }: any) => {
  return (
    <div className="messages-container">
      <h4 className="messages-nickname">{massage.nickName}</h4>
      <p className="messages-message">
        {/* 텍스트 300자 이상 작성 시, 작성불가하고 모달이 뜸/ 2초뒤 자동 사라짐 가하고 모달이 뜸/ 2초
        뒤 자동 사라짐 */}
        {massage.message}
      </p>
    </div>
  );
});
