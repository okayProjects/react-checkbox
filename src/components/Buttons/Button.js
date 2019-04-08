import React from 'react';

const button = (props) => (
    <button type='submit' disabled={!props.disable}  >BUY A TICKET</button>
)

export default button