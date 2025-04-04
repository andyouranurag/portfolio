import React from 'react';

function ResumeViewer() {
  const fileUrl = 'https://drive.google.com/file/d/1KNefB9WoR2U5f6lEaK70pyFH4m7mnPxq/preview'; // Updated for embedding

  return (
    <div>
      <iframe
        title="Resume Document"
        src={fileUrl}
        width="100%"
        height="600"
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
}

export default ResumeViewer;
