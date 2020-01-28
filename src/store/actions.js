import httpClient from './../api/httpClient'

let actions = {
    empower({ commit }, user) {
        httpClient.post('empowerment', user)
            .then(res => {
                commit('empower', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            httpClient.post('login', user)
                .then(res => {
                    const token = res.data.token
                    const user = res.data.user
                    localStorage.setItem('token', token)
                    commit('auth_success', token, user)
                    resolve(res)
                }).catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            httpClient.post('register', user)
                .then(res => {
                    const token = res.data.token
                    const user = res.data.user
                    localStorage.setItem('token', token)
                    commit('auth_success', token, user)
                    resolve(res)
                }).catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            resolve()
        })
    },
    //     createPost({ commit }, post) {
    //         axios.post('/api/posts', post)
    //             .then(res => {
    //                 commit('CREATE_POST', res.data)
    //             }).catch(err => {
    //                 console.log(err)
    //             })

    //     },
    //     fetchPosts({ commit }) {
    //         axios.get('/api/posts')
    //             .then(res => {
    //                 commit('FETCH_POSTS', res.data)
    //             }).catch(err => {
    //                 console.log(err)
    //             })
    //     },
    //     deletePost({ commit }, post) {
    //         axios.delete(`/api/posts/${post.id}`)
    //             .then(res => {
    //                 if (res.data === 'ok')
    //                     commit('DELETE_POST', post)
    //             }).catch(err => {
    //                 console.log(err)
    //             })
    //     }
}

export default actions