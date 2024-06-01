/* global chrome */
import React, { useState } from 'react';

function Popup() {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    if (url) {
      chrome.runtime.sendMessage({ action: "download_video", url: url }, (response) => {
        console.log(response.message);
      });
    }
  };

  return (
    <div>
      <h1>YouTube Video Downloader</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube video URL"
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default Popup;
