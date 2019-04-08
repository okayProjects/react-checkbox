import React, { Component } from 'react';
import Checkbox from '../components/Checkbox';


class Form extends Component {
    state = {
        ageConfirmed: false,
        ticketBought: false
    }

    confirmAgeHandler = () => {
        this.setState((prevState) => {
            return { ageConfirmed: !prevState.ageConfirmed }
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (!this.state.ticketBought) {
            this.setState({
                ticketBought: true
            })
        }
    }

    messageShowHandler = () => {
        const positiveMessage = <strong><p>You are allowed to buy a ticket.</p></strong>;
        const negativeMessage = <strong><p>You are too young to see the film.</p></strong>;
        const ticketBought = <strong><p>Ticket Bought. Enjoy the movie.</p></strong>;
        if (this.state.ageConfirmed && this.state.ticketBought) {
            return ticketBought
        } else if (this.state.ageConfirmed) {
            return positiveMessage
        } else {
            return negativeMessage
        }
    }

    render() {
        console.log(this.state.ageConfirmed);
        return (
            <Checkbox boxChecked={this.confirmAgeHandler} confirmed={this.state.ageConfirmed} submited={this.submitHandler} messageShow={this.messageShowHandler} disable={this.state.ageConfirmed} />
        )
    }
}

export default Form;