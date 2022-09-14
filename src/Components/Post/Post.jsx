
const Post = (props) => {

    console.log(props.xyzposts)

    return (
        <table>
            <thead>
                <tr>
                <th>User's Name</th>
                <th>Post</th>
                <th>Like</th>
                <th>Dislike</th>    
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