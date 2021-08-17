import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tweet } from "../components/Tweet";
import useSWR from "swr"


// import { createTheme } from '@material-ui/core/styles';

// const theme = createTheme({
//     palette: {
//         primary: {
//             light: '#757ce8',
//             main: '#3f50b5',
//             dark: '#002884',
//             contrastText: '#fff',
//         },
//         secondary: {
//             light: '#ff7961',
//             main: '#f44336',
//             dark: '#ba000d',
//             contrastText: '#000',
//         },
//     },
// });




export const TweetIndex = () => {
    // const dummyTweetList = [
    //     { id: "qwerty", data: { tweet: "test1", user_id: "1", created_at: JSON.stringify(new Date()), } },
    //     { id: "asdfgh", data: { tweet: "test2", user_id: "2", created_at: JSON.stringify(new Date()), } },
    //     { id: "zxcvbn", data: { tweet: "test3", user_id: "3", created_at: JSON.stringify(new Date()), } },
    // ];

    // const [tweetList, setTweetList] = useState(null);
    const fetcher = async (url) => (await axios.get(url)).data.result;

    const options = {
        // 初期データ
        initialData: null,
        // pollingの期間（ミリ秒）
        refreshInterval: 5000,
        // windowのフォーカス時にRevalidateする
        revalidateOnFocus: true,
    }
    // const { data, error } = useSWR("http://localhost:3001/tweet", fetcher)
    const { data, error } = useSWR("http://localhost:3001/tweet", fetcher, options)




    // useEffect(() => {
    //     const getAllTweet = async () => {
    //         const result = await axios.get("http://localhost:3001/tweet");
    //         setTweetList(result.data.result);
    //         return result;
    //     };
    //     getAllTweet();
    // }, []);
    return (
        // <ul>
        //     {tweetList?.map((x, i) => <Tweet key={i} id={x.id} tweet={x.data.tweet} user_id={x.data.user_id} created_at={x.data.created_at} />)}
        // </ul>
        <ul>
            {data?.map((x, i) => <Tweet key={i} id={x.id} tweet={x.data.tweet} user_id={x.data.user_id} created_at={x.data.created_at} />)}
        </ul>
    )
};
