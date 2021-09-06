import "../css/AddButton.css"

export function AddButton(props: {onClick: () => void}) {

    return (
        <div className="addButton" onClick={props.onClick}>
            <p className="addButtonText noselect">Post a new message...</p>
        </div>
    );
}
