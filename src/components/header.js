import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            const userId = localStorage.getItem('userId');
            return [ <li className="nav-item" key={0}>
                        <Link className="nav-link" to="/signout">Sign Out</Link>
                    </li>,
                    <li className="nav-item" key={2}>
                    <Link className="nav-link" to={'/user/'+userId}>My Profile</Link>
                </li> ];

        }
        else {
            //show link to sign in and sign up
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ]; 
        }
        
    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <ul className="nav navbar-nav">
                   {this.renderLinks()} 
                </ul>
            </nav>
        )
    }
}


function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated}
}
export default connect(mapStateToProps)(Header);