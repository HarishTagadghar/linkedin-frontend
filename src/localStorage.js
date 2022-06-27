export function getToken() {
    const user = JSON.parse(localStorage.getItem("user")) 
    return user.token
}
export function getUserId() {
    const user = JSON.parse(localStorage.getItem("user")) 
    return user.userId
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

