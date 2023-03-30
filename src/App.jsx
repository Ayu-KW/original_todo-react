// 現在は下記の記述を省くことができる（システムに怒られるケースもあるらしいが…。）
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

import "./style.css";

export const App = () => {
  // Stateの設定
  const [todoTask, settodoTask] = useState("");

  // 入力欄・未完了リスト・完了リスト
  return (
    <>
      <InputTodo />
      <IncompleteTodos />
      <CompleteTodos />
    </>
  );
};
