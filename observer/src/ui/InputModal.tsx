import {Modal} from "react-bootstrap";
import "../css/InputModal.css"
import {useEffect, useRef} from "react";
import TextareaAutosize from 'react-textarea-autosize';


export function InputModal(props: { show: boolean, onClickPositive: (name: string) => void, handleClose: () => void }) {
    const {show, onClickPositive, handleClose} = props;
    const textAreaAutoSize = useRef<HTMLTextAreaElement>(null);


    /**
     * Automatically focus on the textArea
     */
    useEffect(() => {
        if (show && textAreaAutoSize.current !== null) {
            return textAreaAutoSize.current.focus();
        }
    }, [show, textAreaAutoSize]);

    /**
     * Whether we should disable the accept button
     */
    function shouldDisableAcceptButton(): boolean {
        if (textAreaAutoSize.current !== null) {
            return textAreaAutoSize.current.value.trim().length === 0;
        }
        return false;
    }

    return (
        <Modal show={show}  onHide={handleClose} dialogClassName="modalsp">
            <Modal.Header>
                <button type="button" className="btn" aria-label="Accept" disabled={shouldDisableAcceptButton()} onClick={
                    () => {
                        if (textAreaAutoSize.current !== null) {
                            onClickPositive(textAreaAutoSize.current.value);
                            handleClose();
                        }
                    }
                }>
                    <i className="fa fa-check" aria-hidden="true"/>
                </button>
                <button type="button" className="btn" aria-label="Close" disabled={shouldDisableAcceptButton()} onClick={handleClose}>
                    <i className="fa fa-times" aria-hidden="true"/>
                </button>
            </Modal.Header>
            <Modal.Body>
                <TextareaAutosize ref={textAreaAutoSize} placeholder="Type something here..." maxLength={750} autoFocus={true}/>
            </Modal.Body>
        </Modal>

    );
}


