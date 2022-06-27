import { API } from "../../backend"

export const getAllUsersApi = () => {
    return fetch(`${API}/auth/users` , {
        method:"GET",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
            
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => err)
}

export const addFriendRequestApi = (friendWithUserId , token) => {
    return fetch(`${API}/requestFriend` , {
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
            token:token
        },
        body:JSON.stringify(friendWithUserId)
    })
    .then(response => response.json())
    .catch(err => err)
}

export const getAllFriendRequestApi = (token) => {
    return fetch(`${API}/requestFriend` , {
        method:"GET",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
            token:token
        },
    })
    .then(response => response.json())
    .catch(err => err)
}

export const getUserByUserIdApi = (userId) => {

    return fetch(`${API}/auth/${userId}` , {
        method:"GET",
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
            
        }
    })
    .then(response => {
        return  response.json()
    })
    .catch(err => err)
}

export const updateFriendStatusApi = (friendWithUserId ,token) => {
    return fetch(`${API}/requestFriend/status` , {
        method:"PUT",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
            token:token
        },
        body:JSON.stringify({friendWithUserId:friendWithUserId})
    })
    .then(response => response.json())
    .catch(err => err)
}

export const deleteFriendRequestApi = (userId , token) => {
    return fetch(`${API}/requestFriend/delete` , {
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
            token:token
        },
        body:JSON.stringify({userId:userId})
    })
    .then(response => response.json())
    .catch(err => err)
}