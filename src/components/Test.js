import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            account: "PRACTICE",
            balance: ""
        };
    }

    render() {
        const { postId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Email: {postId}
                </div>
                <div className="card-body">
                    Account: {postId}
                </div>
                <div className="card-body">
                    Balance: {postId}
                </div>
            </div>
        );
    }
}