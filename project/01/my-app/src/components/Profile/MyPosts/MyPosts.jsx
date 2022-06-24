import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let state = props.profilePage

    let postsElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }

    return (
    <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} value={state.newPostText} placeholder='Enter your post'/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>
    )
}

export default MyPosts;