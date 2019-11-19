import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleClick1() {
        let add = this.state.count + 1

        this.setState({
            count: add
        })
    }

    handleClick2() {
        let min = this.state.count - 1

        if (min < 0) return

        this.setState({
            count: min
        })
    }

    handleClick3() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <br />
                <Button color="secondary" variant="contained" onClick={() => this.handleClick2()} >-</Button>
                <Button color="secondary" variant="contained" onClick={() => this.handleClick1()} >+</Button>
                <Button color="secondary" variant="contained" onClick={() => this.handleClick3()} >Reset</Button>
            </div>
        )
    }
}