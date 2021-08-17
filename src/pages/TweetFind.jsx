import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export const TweetFind = () => {
    const { id } = useParams(); //URLにくっついているidをとってくる
    const [tweet, setTweet] = useState(null);

    useEffect(() => {
        const getOneTweet = async (id) => {
            const result = await axios.get(`http://localhost:3001/tweet/${id}`);
            setTweet(result.data.result);
            return result;
        };
        getOneTweet(id);
    }, []);

    return (
        <table>
            <tbody>
                <tr><td>DocumentId</td><td>{tweet?.id}</td></tr>
                <tr><td>Tweet</td><td>{tweet?.data.tweet}</td></tr>
                <tr><td>User_id</td><td>{tweet?.data.user_id}</td></tr>
                <tr><td>Created_at</td><td>{tweet?.data.created_at}</td></tr>
            </tbody>
        </table>
    )
};