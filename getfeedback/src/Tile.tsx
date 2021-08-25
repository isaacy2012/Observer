import React, {useState} from 'react';

export function Tile(props: {str: string, updateText: (a:string) => void}) {
    const [toRender,setRender] = useState(false)
    return (
        toRender?
            <li>
            <input id="textInput" type="text" onKeyPress={event => {
                if (event.key === 'Enter') {
                    props.updateText((document.getElementById("textInput") as HTMLInputElement).value)
                    setRender(toRender => false)
                }
            }} autoFocus/>
            </li>
        :
        <li onClick= { () => setRender(toRender => true)} >Tile: {props.str}</li>
    );
}


