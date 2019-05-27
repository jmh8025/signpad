// import request from "request";

export function loginSuccess(userData){
    console.log("result", userData);
    return{
        type:'LOGIN_SUCCESS',
        userData
    }
}

export function loginFailed(error){
    return{
        type:'LOGIN_FAILED',
        error
    }
}


// export function login(data){
//     return dispatch => {
//         const options = {
//             uri:'http://192.168.0.63:8080/actionMobileLogin.do', 
//             method: 'POST',
//             form: {
//             "id":data.id,
//             "password":data.password,
//             }
//         }
//         request.post(options, function(err,httpResponse,body){
            
//         });
//     }
// }



export  function login(data){
    return async dispatch => {
        const res = await fetch('http://192.168.0.63:8080/actionMobileLogin.do',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "id":data.id,
                "password":data.password
            }) 
        })
        if(res.status < 300){
            // dispatch(isLoading(false))
            const responseJSON = await res.json();
            console.log("responseJSON",responseJSON);
            await dispatch(loginSuccess(responseJSON));
        }else{
            const responseJSON = await res.json();
            console.log("responseJSON",responseJSON);
            await dispatch(loginFailed(responseJSON));
        }
    }
}
  