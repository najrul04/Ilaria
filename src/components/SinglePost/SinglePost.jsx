import React from "react";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://wallpapercave.com/dwp1x/wp10415298.jpg"
          alt=""
          className="singlePostImage"
        />
        <hi className="singlePostTitle">
          
          <p>Lorem ipsum dolor sit</p>
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </hi>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ilaria</b>
          </span>
          <span className="singlePostDate">1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla
          repellat libero explicabo optio eaque dolorum ad, laborum mollitia
          fuga blanditiis, labore est fugit ab sunt delectus quam nam numquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem
          eligendi optio nulla sit fugiat necessitatibus hic. Eligendi sit non
          excepturi a, tenetur fuga dicta, omnis laudantium eos necessitatibus
          provident ipsa qui, aut expedita consectetur. Voluptatem eaque
          quibusdam laudantium! Iusto eum nobis illo reiciendis. Impedit atque
          explicabo itaque illo commodi!
        </p>
      </div>
    </div>
  );
}
