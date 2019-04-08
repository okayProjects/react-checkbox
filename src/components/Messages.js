import React from 'react';
import Message from './Message';

const messages = (props) => (
    <Message confirmed={props.confirmed} messageShow={props.messageShow} />

)

export default messages;