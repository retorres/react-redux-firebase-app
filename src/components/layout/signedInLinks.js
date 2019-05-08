import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Store/actions/authActions'

const SignedInLinks = (props) => {
    const { profile } = props
    return (
        <ul className="right">
            <li> <NavLink to='/create'>New project</NavLink></li>
            <li> <a onClick={props.signOut}>Logout</a></li>
            <li> <NavLink to='/' className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            console.log('desloguei')         
            dispatch(signOut())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)