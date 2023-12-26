import React from 'react';

const Modal = ({ isOpen, channel, onClose }) => {
    if (!isOpen || !channel) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>닫기</button>
                <div>
                    <h3>{channel.snippet.title}</h3>
                    <p>{channel.snippet.description}</p>
                    {/* 여기에 채널의 다른 세부 정보 추가 가능 */}
                </div>
            </div>
        </div>
    );
};

export default Modal;
