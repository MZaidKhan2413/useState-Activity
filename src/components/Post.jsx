import "./Post.css";
import { useState } from "react";

function initLike () {
  return Math.floor(Math.random()*100)
}

export default function Post() {
  const [like, setLike] = useState(false);
  const [likeCounter, setLikeCounter] = useState(initLike);

  function likePost() {
    setLike(!like);
 
    if (!like) {
        setLikeCounter(likeCounter+1)
    }
  }

  return (
    <div className="post">
      <p className="post_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas
        velit magni distinctio quibusdam deserunt in pariatur repellat debitis
        minima?
      </p>
      <button className="like_btn" onClick={likePost}>
        <i className={like ? "fa-heart fa-solid" : "fa-heart fa-regular"}></i>
        
        {likeCounter} {/* This counter will show how many times post is liked */}
      </button>
    </div>
  );
}
