
const Post = (props) => {
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
                <tr>name filled by props from Display Post</tr>
                <tr>post filled by props from Display Post</tr>
            </tbody>
        </table>
    );
}

export default Post;