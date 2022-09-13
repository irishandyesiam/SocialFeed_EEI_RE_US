
const DisplayPost = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>User's Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.xyzposts.map((post) => {
                return (
                <tr>
                    <td>{post.userName}</td>
                    <td>{post.comment}</td>
                </tr>
                )
            })}
            <tr>
                <td></td>
            </tr>
            </tbody>
        </table>
     );
}
 
export default DisplayPost;