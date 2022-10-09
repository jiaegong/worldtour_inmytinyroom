import _ from "lodash";
import React, { memo, useEffect, useState } from "react";
import "./messages.css";

// eslint-disable-next-line react/display-name
const Messages = memo(({ messageList }: any) => {
  const messageBoxRef = React.useRef<HTMLDivElement>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const [scrollState, setScrollState] = useState(true);

  const scrollEvent = _.debounce(() => {
    // 스크롤 위치
    const scrollTop = Number(messageBoxRef.current?.scrollTop);
    // 요소의 높이
    const clientHeight = Number(messageBoxRef.current?.clientHeight);
    // 스크롤의 높이
    const scrollHeight = Number(messageBoxRef.current?.scrollHeight);

    // 스크롤이 맨 아래에 있을때 true, 아닐 때 false
    setScrollState(scrollTop + clientHeight >= scrollHeight ? true : false);
  }, 100);

  const scroll = React.useCallback(scrollEvent, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (scrollState) {
      scrollToBottom();
    }
  }, [messageList.length]);

  // 스크롤 이벤트 추가
  React.useEffect(() => {
    messageBoxRef.current?.addEventListener("scroll", scroll);
    return () => {
      messageBoxRef.current?.removeEventListener("scroll", scroll);
    };
  });

  return (
    <div ref={messageBoxRef} className="chatbox-upper">
      {messageList?.map((massage: any, index: any) => (
        <Message key={index} massage={massage} />
      ))}
      {scrollState ? (
        <></>
      ) : (
        <button className="scrollToBottom" onClick={scrollToBottom}>
          &darr;
        </button>
      )}

      <div ref={messagesEndRef} />
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
