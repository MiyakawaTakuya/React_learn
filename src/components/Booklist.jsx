// Booklist.jsx
import React from "react";

export const Booklist = ({ language, getData }) => {

    const result = getData?.(language);
    // `?`を使用することで，`getData`が存在する場合のみ関数を実行できる

    return (
        <>
            <p>this is {result} list component</p>
        </>
    );
};