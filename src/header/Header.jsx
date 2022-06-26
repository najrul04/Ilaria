import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img src="https://wallpapercave.com/wp/wp6596907.jpg" alt="" className="headerImage" />
        </div>
    )
}
