import React from 'react'

export default function NotFound404() {
    return (
        <div style={style404}>
            We couldn't find what you're looking for.
        </div>
    )
}


const style404 = {
    width: '100%',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '48px',
    color: '#fff',
    padding: '32px',
}