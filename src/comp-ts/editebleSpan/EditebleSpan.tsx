import React, { ChangeEvent, useState, KeyboardEvent } from "react";

type EditebleSpanType = {
  title: string;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  id: string;
  editSpan: (newTitle: string, idTask: string, idTodo: string) => void;
  idTodo: string;
};

export const EditebleSpan = (props: EditebleSpanType) => {
  let [spanStatus, setSpanStatus] = useState(true);
  let [spanTitle, setSpanTitle] = useState("");

  const changeSpanStatus = () => {
    setSpanStatus(false);
    setSpanTitle(props.title);
  };
  const onBlurHandler = () => {
    setSpanStatus(true);
    props.editSpan(spanTitle, props.id, props.idTodo);
  };
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSpanTitle(e.currentTarget.value);
  };

  return spanStatus ? (
    <span onDoubleClick={changeSpanStatus}>{props.title}</span>
  ) : (
    <input
      value={spanTitle}
      onChange={onChangeInput}
      onBlur={onBlurHandler}
      autoFocus
      onKeyUp={props.onEnter}
    ></input>
  );
};
