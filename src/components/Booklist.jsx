// Booklist.jsx
import React, { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {

    const [bookData, setBookData] = useState(null); // [変数, 関数]を定義する 最初はnull
    //APIからデータをとってbookDataに保存する処理
    //{ language, getData }に変更があった時だけ useEffect 発動させる
    //useStateとuseEffect使い分けるのは無限ループさせないため
    //useEffectでデータ取得→useStateでデータ保持
    useEffect(() => {
        const result = getData?.(language)
            .then((response) => setBookData(response));
    }, [language, getData]);
    // `?`を使用することで，`getData`が存在する場合のみ関数を実行できる

    return ( //JSON.stringifyで受け取ったデータを文字列にする
        <>
            <ul>
                {
                    bookData === null
                        ? <p>今本のデータ取り寄せとるで, もう少し待ちぃーやー</p>
                        : bookData.data.items.map((x, index) => (<li key={index}> <img src="item.volumeInfo.imageLinks.thumbnail" /> タイトル:{x.volumeInfo.title}       著者名:{x.volumeInfo.authors}  出版社:{x.volumeInfo.publisher}</li>))
                        //  bookData.data.items.map((x, index) => (<li key={index}>{x.volumeInfo.authors}</li>))
                }

            </ul>
        </>
    );
};