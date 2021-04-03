import React from 'react';
import { Card, Col } from 'react-bootstrap';

import './EmptyCard.css';

function EmptyCard() {

    return (
        
        <Card as = {Col} lg className = "empty__card" style = {{borderRadius: "7px 7px 7px 7px"}}>
            <Card.Body style = {{height: "156px", width: "156px"}}/>
        </Card>
           
    );
}

export default EmptyCard;
