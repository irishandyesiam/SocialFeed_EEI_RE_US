import "./CustomButton.css";
import {useState} from 'react';

const Post = (props) => {

    const [likeButtonClass, setButtonClass] = useState("like");

    function handleClickLike(){
        if(likeButtonClass === "like"){
            setButtonClass("liked")
        }
        else{
            setButtonClass("like")
        }
    }

    const [dislikeButtonClass, setButtonClassDL] = useState("dislike");

    function handleClickDislike(){
        if(dislikeButtonClass === "dislike"){
            setButtonClassDL("disliked")
        }
        else{
            setButtonClassDL("dislike")
        }
    }
    console.log(props.xyzposts)

    return (
        <table style={{margin: '1em'}}>
            <thead>
                <tr>
                <th>User's Name</th>
                <th>Post</th>
                <button className={likeButtonClass} onClick={handleClickLike}>Like</button>
                <button className={dislikeButtonClass} onClick={handleClickDislike}>Dislike</button> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.xyzposts.userName}</td>
                    <td>{props.xyzposts.comment}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Post;