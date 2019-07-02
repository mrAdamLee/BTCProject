import {db} from '../config';
import React, {component} from 'react';

export const addItem = (item1, item2, item3, item4) =>{
    db.ref('/items').push({
        name: item1,
        PhoneNumber: item2,
        Address: item3,
        Problem: item4
    });
}