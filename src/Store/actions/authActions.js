export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS', })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })

    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'SIGNOUT_ERROR', err })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore
                .collection('users')
                .doc(res.user.uid)
                .set({
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                })
                .then(() => {
                    dispatch({ type: 'SIGNUP_SUCCESS' })
                })
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })

    }
}