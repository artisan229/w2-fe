import styled from "styled-components";

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #00000052;
    z-index: 0;
`;

const ModalBox = styled.div`
    width: 50%;
    height: 70%;
    background: white;
    position: fixed;
    top: 30%;
`;

function Modal() {
    return (
        <ModalContainer>
            <Modal>
                <h2>안녕하세요</h2>
            </Modal>
        </ModalContainer>
    );
}

export default Modal;