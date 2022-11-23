import React from 'react'
import module from '../styles/SwitchBar.module.css'
import WhiteButton from './UI/buttons/WhiteButton'
import whiteButtonModule from './UI/buttons/WhiteButton.module.css'

const SwitchBar = ({ countPages, currentPage, setPage, ...props }) => {
    return (
        <div className={module.SwitchBar} {...props}>
            {
                countPages.map((pageNumber, index) =>
                    <WhiteButton
                        key={index}
                        onClick={() => setPage(pageNumber)}
                        className={pageNumber === currentPage ?
                            [whiteButtonModule.whiteButton, whiteButtonModule.whiteButton_active].join(' ')
                            :
                            whiteButtonModule.whiteButton}>{pageNumber}
                    </WhiteButton>
                )
            }
        </div>
    );
}

export default SwitchBar;