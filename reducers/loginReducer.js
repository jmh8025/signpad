const INITIAL_STATE={
    isLoggedIn : false,
    id : "",
    password : "",
    error : undefined,
    userData : {}
}

export default function login(state=INITIAL_STATE, action){
    console.log("action",action);
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn : true,
                id : action.userData.id,
                password : action.userData.password,
                userData : action.userData,
                error : undefined
            }
            break;
        case "LOGIN_FAILED":
            return {
                ...state,
                isLoggedIn : false,
                error : action.error
            }
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn : false
            }
        default:
            return state
    }
}
  