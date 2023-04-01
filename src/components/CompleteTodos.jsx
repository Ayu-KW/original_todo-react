import React from "react";

export const CompleteTodos = (props) => {
  const { todos } = props;
  return (
    <div className="complete-area area">
      <p className="title">完了リスト</p>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
