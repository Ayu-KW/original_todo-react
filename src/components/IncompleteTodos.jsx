import React from "react";

export const IncompleteTodos = () => {
  return (
    <div className="incomplete-area area">
      <p className="title">未完了リスト</p>
      <ul>
        <li>
          <div className="list-row">
            <p>あいうえお</p>
            <button>完了</button>
            <button>削除</button>
          </div>
        </li>
        <li>
          <div className="list-row">
            <p>かきくけこ</p>
            <button>完了</button>
            <button>削除</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
