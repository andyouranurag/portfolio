import React from 'react';

function ResumeViewer() {
  const fileId = '1wSG3_CVzup84dzFNLw3_RMwKNlQ3xiEp'; // Replace with your actual file ID
  const filePreviewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const fileDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const fileViewUrl = `https://drive.google.com/file/d/${fileId}/view`;

  return (
    <div
      className="resume-container"
      style={{
        background: 'linear-gradient(135deg, #3498db, #8e44ad)',
        color: 'white',
        minHeight: '100vh',
        padding: '100px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Resume Preview */}
      <div
        className="resume-card"
        style={{
          width: '90vw',
          maxWidth: '794px', // A4 width
          height: '1123px', // A4 height
          overflow: 'hidden',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
        }}
      >
        <iframe
          title="Resume Document"
          src={filePreviewUrl}
          width="100%"
          height="100%"
          style={{
            border: 'none',
            transform: 'scale(1.05)',
            transformOrigin: 'top',
          }}
          allowFullScreen
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '30px' }}>
        <a
          href={fileDownloadUrl}
          download
          style={{
            textDecoration: 'none',
            padding: '12px 24px',
            margin: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            borderRadius: '30px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease-in-out',
            display: 'inline-block',
          }}
        >
          📥 Download Resume
        </a>

        <a
          href={fileViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            padding: '12px 24px',
            margin: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '30px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease-in-out',
            display: 'inline-block',
          }}
        >
          🔗 View on Drive
        </a>
      </div>
    </div>
  );
}

export default ResumeViewer;
