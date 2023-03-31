// 現在は下記の記述を省くことができる（システムに怒られるケースもあるらしいが…。）
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

import "./style.css";

export const App = () => {
  // Stateの設定（再レンダリング）
  const [todoText, settodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState(["あいうえお", "かきくけこ"]);
  // const [completeTodos, setcompleteTodos] = useState(["はひふへほ"]);

  // 処理一覧（ボタンイベント）
  // 引数（e：入力した値）を元に入力欄Stateを再レンダリング
  const onChangetodoText = (e) => settodoText(e.target.value);
  // 追加ボタンが押された時の挙動
  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
  };

  // HTML出力範囲
  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangetodoText} onClick={onClickAdd} />
      <IncompleteTodos todos={incompleteTodos} />
      <CompleteTodos />
    </>
  );
};
