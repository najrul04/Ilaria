import React from 'react'
import "./Write.css"
export default function Write() {
  return (
    <div className='write'>
        <form action="" className='writeForm'>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i class="fa-regular fa-square-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display:'none'}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textArea placeholder="Tell Your story..." type="text" className="writeInput writeText"></textArea>
          </div>
          <button className="writeSubmit">
            Publish
          </button>
        </form>
    </div>
  )
}
