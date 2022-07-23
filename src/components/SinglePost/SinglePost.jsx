import React from 'react'
import "./SinglePost.css"

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://wallpapercave.com/dwp1x/wp10415298.jpg" alt="" className="singlePostImage" />
                <hi className="singlePostTitle">
                    Lorem ipsum dolor sit
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </hi>
            </div>
        </div>
    )
}
