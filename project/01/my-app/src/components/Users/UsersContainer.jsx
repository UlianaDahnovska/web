import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/Users-reducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;