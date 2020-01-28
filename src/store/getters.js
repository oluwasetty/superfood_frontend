let getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    posts: state => {
        return state.posts
    }
}

export default getters