import React from "react";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

// export const Tweet = ({ key, id, tweet, user_id, created_at }) => {
//     return (
//         <li key={key} id={id}>
//             <p>{tweet} by {user_id} at {created_at}</p>
//         </li>
//     )
// };

export const Tweet = ({ key, id, tweet, user_id, created_at }) => {
    return (
        <li key={key} id={id}>
            {/* <p>{tweet} by {user_id} at <Link to={`/tweet/${id}`}>{created_at}</Link></p> */}
            <Button color="primary" component={Link} to={`/tweet/${id}`}>{tweet} by {user_id} at {created_at}</Button>
        </li>
    )
};