import Vue from 'vue'
import httpClient from './../api/httpClient'
import CxltToastr from "cxlt-vue2-toastr"
var toastrConfigs = {
    position: 'top right',
    showDuration: 500,
    hideDuration: 500,
    progressBar: true,
    closeButton: true,
    timeOut: 5000,
    delay: 0,
    successColor: '#0e0b38c9',
    infoColor: '#e81a1c',
    showMethod: 'slideInRight',
    hideMethod: 'slideOutRight',
}
Vue.use(CxltToastr, toastrConfigs)

let actions = {
    handleResponse({ commit }, json) {
        let response = json.res;
        if (response.data.status) {
            Vue.prototype.$toast.success({
                title: "Success",
                message: json.msg,
                delay: 0
            });
        } else {
            let message = response.data.message
            if (typeof message === 'string') {
                Vue.prototype.$toast.error({
                    title: "Error",
                    message: message,
                    delay: 0
                });
            } else {
                for (let key in message) {
                    if (message.hasOwnProperty(key)) {
                        Vue.prototype.$toast.error({
                            title: "Error",
                            message: message[key][0],
                            delay: 0
                        });
                    }
                }
            }
        }
    },
    empower({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            httpClient.post('empowerment', user)
                .then(res => {
                    let msg = "Saved successfully."
                    dispatch('handleResponse', { res, msg })
                    resolve(res)
                }).catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    login({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            httpClient.post('login', user)
                .then(res => {
                    let msg = "Login successful."
                    dispatch('handleResponse', { res, msg })
                    if (res.data.status) {
                        const token = res.data.token
                        const user = res.data.user
                        localStorage.setItem('token', token)
                        commit('auth_success', token, user)
                        resolve(res)
                    }
                }).catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    register({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            httpClient.post('register', user)
                .then(res => {
                    let msg = "Registration successful."
                    dispatch('handleResponse', { res, msg })
                    if (res.data.status) {
                        const token = res.data.token
                        const user = res.data.user
                        localStorage.setItem('token', token)
                        commit('auth_success', token, user)
                        resolve(res)
                    }
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
            Vue.prototype.$toast.success({
                title: "Success",
                message: "Logout successful",
                delay: 0
            });
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