import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

const AuthRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => auth.uid ? (
            <Component {...props} />
        ) : (
                <Redirect to='/signin'/>
            )
        }
    />
)

const mapStateToProps = state => ({
    auth: state.firebase.auth
})

export default connect(mapStateToProps)(AuthRoute)