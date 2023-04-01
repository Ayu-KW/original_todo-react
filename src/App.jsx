// 現在は下記の記述を省くことができる（システムに怒られるケースもあるらしいが…。）
import { useState } from "react";
// コンポーネントを読み込む
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
// CSSファイルを読み込む
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
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    settodoText("");
  };
  // 削除ボタンを押された時の挙動
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  // HTML出力範囲
  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangetodoText} onClick={onClickAdd} />
      <IncompleteTodos todos={incompleteTodos} onClickDelete={onClickDelete} />
      <CompleteTodos />
    </>
  );
};
