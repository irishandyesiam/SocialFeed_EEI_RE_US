
const Post = (props) => {

    console.log(props.xyzposts)

    return (
        <table>
            <thead>
                <tr>
                <th>User's Name</th>
                <th>Post</th>
                <button type="button">Like</button>
                <button type="button">Dislike</button> 
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