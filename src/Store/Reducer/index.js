import { combineReducers } from "redux";
import { authDetails } from "./AdminAuth/AdminDetails";

// import { userReducer } from "./userReducer";

const rootReducer=combineReducers(
    {
        // user: userReducer,
        adminAuth:authDetails
    }
)

export default rootReducer;