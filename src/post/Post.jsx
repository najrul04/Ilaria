import React from 'react'
import './Post.css'

export default function post() {
  return (
    <div className='post'>
        <img className='postImage' src="https://wallpapercave.com/wp/wp11272823.jpg" alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique alias molestiae nihil facere, sit odit accusamus inventore quidem quaerat fugit quam necessitatibus explicabo facilis rem libero autem omnis nesciunt sint illo perspiciatis molestias, repellendus maxime? Eius perspiciatis dolores tenetur quidem blanditiis, dolor vero porro officia obcaecati, officiis pariatur culpa unde nisi iure eaque veniam ipsum omnis voluptas! Repellendus ipsa repellat earum accusamus, quo molestias officiis magnam quia, similique voluptatibus iusto.</p>
    </div>
  )
}
