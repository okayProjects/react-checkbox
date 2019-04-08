import React from 'react';
import Messages from './Messages';
import SubmitButton from './Buttons/Button';

const checkbox = (props) => (
    <form onSubmit={props.submited}>
        <input type='checkbox' id='age' onChange={props.boxChecked} ></input>
        <label htmlFor='age'>I am 18 or older</label>
        <br />
        <br />
        <SubmitButton submited={props.submited} disable={props.disable} />
        <Messages confirmed={props.confirmed} messageShow={props.messageShow} />
    </form>
)

export default checkbox;