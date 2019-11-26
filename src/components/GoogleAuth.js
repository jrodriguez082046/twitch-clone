import React from 'react';

class GoogelAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '865039411830-gjtip7phpaf4isdpi4u64slgmt10sjv2.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>Google Auth</div>
    }
}

export default GoogelAuth; 