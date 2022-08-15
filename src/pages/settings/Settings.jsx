import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Settings.css";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
                <img src="" alt="" />
                <label htmlFor="fileInput">
                    
                </label>
            </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
