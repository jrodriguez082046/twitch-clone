import React from 'react';

class GoogelAuth extends React.Component {
    state = { isSignedIn: null }; 

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '865039411830-gjtip7phpaf4isdpi4u64slgmt10sjv2.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); 
                this.setSTate({ isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange); 
            })
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignIn = () => {
        this.auth.signIn(); 
    }

    onSignOut = () => {
        this.auth.signOut(); 
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null 
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button">
                    <i className="google icon"/>
                    Sign out
                </button>            
            ); 
        } else {
            return (
                <button className="ui red google button">
                    <i className="google icon"/>
                    Sign In in With Google
                </button>
            )
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogelAuth; 