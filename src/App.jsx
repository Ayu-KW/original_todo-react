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
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

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
  // 完了ボタンが押された時の挙動
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  // 戻すボタンが押された時の挙動
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  };

  // HTML出力範囲
  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangetodoText} onClick={onClickAdd} />
      <IncompleteTodos todos={incompleteTodos} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
