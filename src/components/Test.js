import { Button } from 'bootstrap';
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

    setData() {
        console.log("in setData!");
        localStorage.setItem('user','Hello');
    }

    getData() {
        console.log("in getData!");
        let data = localStorage.getItem('user');
        console.log("user", data)
    }

    render() {
        const { postId } = this.state;
        return (
            <>
            <button onClick={ ()=>this.setData() }>Set</button>
            <button onClick={ ()=>this.getData() }>Get</button>
            </>
        );
    }
}