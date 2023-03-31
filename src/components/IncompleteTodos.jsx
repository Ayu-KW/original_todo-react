import React from "react";

export const IncompleteTodos = (props) => {
  const { todos } = props;
  return (
    <div className="incomplete-area area">
      <p className="title">未完了リスト</p>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
