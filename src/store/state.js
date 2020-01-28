let state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    posts: []
}

export default state