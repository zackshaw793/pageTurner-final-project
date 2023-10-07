import React from 'react';


const ReadingHeader = () => {
    return (
        <div className="reading-header">
            <h1 className='d-flex 
                           flex-column 
                           justify-content-center 
                           align-items-center
                           mt-5
                           shadow p-2' style={{background: 'white',
                                         borderRadius: '16px',
                                         padding: '25px'}}>
                myBooks</h1>
        </div>
    );
}

export default ReadingHeader;