import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sideBarReducer from "./SideBar-reducer";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./Users-reducer";

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sideBarReducer,
        usersPage: usersReducer
    }
})


export default store