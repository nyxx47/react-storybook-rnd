import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchUser, cancelFetchUser} from '../store/modules/cancellation'


class Users extends Component {
    
    render(){
        return(
            <div>
                <h1>Fetch User Demo </h1>

                <button onClick={() => this.props.fetchUser("redux-observable")}>
                    Fetch User Info
                </button>

                <button onClick={() => this.props.cancelFetchUser()}>
                    CANCEL
                </button>
<br/>
                <span>{this.props.isFetchingUser ? '(Loading...)' : ''}</span>

                <div>
                    {JSON.stringify(this.props.user)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetchingUser: state.isFetchingUser,
    user: state.users
})

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        cancelFetchUser: () => dispatch(cancelFetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)