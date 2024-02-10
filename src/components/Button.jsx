import React from 'react'

const Button = ({styles}) => {
    return (
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary outlin-none ${styles} rounded-[10px]`}>
            See More
        </button>
    )

}

export default Button