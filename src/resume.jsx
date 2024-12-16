import React from 'react';

function ResumeViewer() {
  const fileUrl = 'https://drive.google.com/file/d/1QvpJe8UE0_eqw9qQLEhjE0B1DtfHOC8M/preview'; // Replace with your Google Drive file URL

  return (
    <div>
      <iframe
        src={fileUrl}
        width="100%"
        height="500"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
}

export default ResumeViewer;