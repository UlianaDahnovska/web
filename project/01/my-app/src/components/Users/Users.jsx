import classes from "./Users.module.css";
import UserPhoto from '../../assets/images/user.png'
const axios = require('axios').default;

let Users = (props) => {

    let state = props.usersPage

    let getUsers = () => {
        if (state.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            state.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={classes.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}> Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}


export default Users;