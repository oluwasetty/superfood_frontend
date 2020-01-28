let mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.status = 'success'
        state.token = token
        state.user = user
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
    },
    // CREATE_POST(state, post) {
    //     state.posts.unshift(post)
    // },
    // FETCH_POSTS(state, posts) {
    //     return state.posts = posts
    // },
    // DELETE_POST(state, post) {
    //     let index = state.posts.findIndex(item => item.id === post.id)
    //     state.posts.splice(index, 1)
    // }

}
export default mutations