chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "download_video") {
      fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: request.url })
      })
      .then(response => response.json())
      .then(data => {
        sendResponse({ message: 'Download started' });
      })
      .catch(error => {
        console.error('Error:', error);
        sendResponse({ message: 'Download failed' });
      });
    }
    return true;
  });
  