// import React from "react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Button } from '@material-ui/core';


export const TweetPost = () => {
    const { register, handleSubmit } = useForm();

    const [formData, setFormData] = useState(null);

    //最初にいきなりサーバーに送信せず、ブラウザ上に表示されるかをチェックする
    // const postFormData = async (postData) => {
    //     setFormData(JSON.stringify(postData));
    // };
    const postFormData = async (postData) => {
        setFormData(JSON.stringify(postData));
        const result = await axios.post("http://localhost:3001/tweet", postData);
        console.log(result);
        return result;
    };

    return (
        <form onSubmit={handleSubmit(postFormData)}>
            <input {...register("tweet")} placeholder="Tweet" />
            <input {...register("user_id")} placeholder="User_id" type="number" />
            <p>{formData}</p>
            <Button color="primary" type="submit">送信</Button>
        </form>
    )
};
