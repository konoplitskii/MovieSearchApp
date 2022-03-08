import './Preloader.css'

import React from 'react'

const Preloader = ({fullScreen}) => {
    const className = fullScreen ? 'preloader fullscreen' : 'preloader'
    return (
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"
                 preserveAspectRatio="xMidYMid">
                <defs>
                    <clipPath id="preloader-anim" x="0" y="0" width="100" height="100">
                        <rect x="0" y="0" width="0" height="100">
                            <animate attributeName="width" repeatCount="indefinite" dur="1s" values="0;100;100"
                                     keyTimes="0;0.5;1"/>
                            <animate attributeName="x" repeatCount="indefinite" dur="1s" values="0;0;100"
                                     keyTimes="0;0.5;1"/>
                        </rect>
                    </clipPath>
                </defs>
                <path className='preloader-border'
                      d="M82 63H18c-7.2 0-13-5.8-13-13v0c0-7.2 5.8-13 13-13h64c7.2 0 13 5.8 13 13v0C95 57.2 89.2 63 82 63z"/>
                <path className='preloader-inner' clipPath="url(#preloader-anim)"
                      d="M81.3 58.7H18.7c-4.8 0-8.7-3.9-8.7-8.7v0c0-4.8 3.9-8.7 8.7-8.7h62.7c4.8 0 8.7 3.9 8.7 8.7v0C90 54.8 86.1 58.7 81.3 58.7z"/>
            </svg>
        </div>
    )
}

export default Preloader