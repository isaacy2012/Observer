import React, {useState} from 'react';

export function Tile(props: {str: string, upDateText: (a:string) => void}) {
    const [toRender,setRender] = useState(false)
    return (
        toRender? <i>sus</i> :
        <li onClick= { e => setRender(toRender => true)} >Tile: {props.str}</li>
    );
}


