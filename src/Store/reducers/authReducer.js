const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signOut success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_ERROR':
            console.log('signOut success')
            return {
                ...state,
                authError: null
            }


        // firebase.auth().signOut().then(() => {
        //     dispatch({ type: 'SIGNOUT_SUCCESS' })
        // }).catch((err) => {
        //     dispatch({ type: 'SIGNOUT_ERROR', err })
        // })

        default:
            return state
    }
}

export default authReducer