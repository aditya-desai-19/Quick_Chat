import React from 'react'

const DisplayComponent = ({className, firstChild, secondChild}) => {
    return (
        <div className={className}>
            <div>
                {firstChild}
            </div>
            <div>
                {secondChild}
            </div>
        </div>
    )
}

export default DisplayComponent