import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductScreen(){
    const params=useParams();
    const {slug}=params;
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    );
}