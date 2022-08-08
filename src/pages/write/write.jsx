import React from "react";
import "./Write.css";
export default function Write() {
  return (
    <div className="write">
      <img className="writeImage" src="https://wallpapercave.com/dwp1x/wp4800584.jpg" alt="" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textArea
            placeholder="Tell Your story..."
            type="text"
            className="writeInput writeText"
          ></textArea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
