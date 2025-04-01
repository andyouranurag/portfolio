import React from 'react';

function ResumeViewer() {
  const fileUrl = 'https://drive.google.com/file/d/1KNefB9WoR2U5f6lEaK70pyFH4m7mnPxq/view?usp=sharing'; // Replace with your Google Drive file URL

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