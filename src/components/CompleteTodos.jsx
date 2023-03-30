import React from "react";

export const CompleteTodos = () => {
  return (
    <div className="complete-area area">
      <p className="title">完了リスト</p>
      <ul>
        <li>
          <div className="list-row">
            <p>はひふへほ</p>
            <button>戻す</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
