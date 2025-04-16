import React, { useContext } from 'react'
import { Store } from '../../Utils/Store'


const Footer = () => {
    const {state} = useContext(Store)
    const {ContactInfo} = state
    return (
        <h1>Footer</h1>
    )
}

export default Footer
