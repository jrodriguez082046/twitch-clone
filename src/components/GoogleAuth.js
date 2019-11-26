import React from 'react';

class GoogelAuth extends React.Component {
    state = { isSignedIn: null }; 

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '865039411830-gjtip7phpaf4isdpi4u64slgmt10sjv2.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); 
                this.setSTate({ isSignedIn: this.auth.isSignedIn.get()})
            })
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogelAuth; 