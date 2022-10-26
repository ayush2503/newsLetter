import { ADMIN_DETAILS, IS_ADMIN_AUTHENTICATED } from "../../Types/AdminType/AuthTypes"

const AdminAuthDetails={
    userDetails:{},
    isAuthenticated:false
}

export const authDetails=(state=AdminAuthDetails,action)=>{
    switch(action.type){
        case IS_ADMIN_AUTHENTICATED:
        return ({
            ...state,
            isAuthenticated:action.ifAuthenticated
        })
        case ADMIN_DETAILS:
            return ({
                ...state,
                userDetails: action.userDetails
            })
        default:
            return({
                ...state
            })
    }
}