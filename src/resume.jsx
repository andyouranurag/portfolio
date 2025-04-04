import React from 'react';

function ResumeViewer() {
  const fileId = '1KNefB9WoR2U5f6lEaK70pyFH4m7mnPxq'; // Replace with your actual file ID
  const filePreviewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const fileDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const fileViewUrl = `https://drive.google.com/file/d/${fileId}/view`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      {/* Scrollable A4 Container */}
      <div
        style={{
          width: "80vw", // 80% of viewport width
          maxWidth: "794px", // A4 width
          height: "1123px", // A4 height
          overflow: "hidden", // Prevents unwanted scrollbars
          position: "relative",
          border: "1px solid #ccc",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "white",
        }}
      >
        <iframe
          title="Resume Document"
          src={filePreviewUrl}
          width="100%"
          height="100%"
          style={{
            border: "none",
            transform: "scale(1.05)", // Slight zoom-in to prevent cutting
            transformOrigin: "top", // Ensures scaling starts from the top
          }}
          allowFullScreen
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a
          href={fileDownloadUrl}
          download
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#28a745",
            color: "white",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          📥 Download Resume
        </a>

        <a
          href={fileViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          🔗 View on Drive
        </a>
      </div>
    </div>
  );
}

export default ResumeViewer;
