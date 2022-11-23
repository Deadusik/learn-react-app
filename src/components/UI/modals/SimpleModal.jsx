import React from 'react'
import module from '../modals/SimpleModal.module.css'

const SimpleModal = ({ children, visible, setVisible }) => {
    const rootClasses = [module.SimpleModal];
    if (visible) {
        rootClasses.push(module.SimpleModal_Active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={module.SimpleModal__Content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default SimpleModal;