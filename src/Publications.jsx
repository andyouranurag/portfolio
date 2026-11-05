import React, { useState } from "react";
import { Book, Award, FileEarmarkPdf, Calendar3, GeoAlt, BoxArrowUpRight, Clipboard, Check2 } from "react-bootstrap-icons";
import { publications } from "./data/portfolioData";

const Publications = () => {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const copyCitation = (citation, idx) => {
    navigator.clipboard.writeText(citation);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  return (
    <section id="publications" className="portfolio-section" style={{ background: "rgba(12, 18, 32, 0.4)" }}>
      <div className="section-container">
        <div className="section-badge">
          <Book size={14} /> Academic Contributions
        </div>
        <h2 className="section-title">Research Publications</h2>
        <p className="section-subtitle">
          Peer-reviewed scientific research advancing indigenous nuclear instrumentation and AI-driven spectral analysis.
        </p>

        {publications.map((pub, index) => (
          <div key={index} className="publication-featured-card">
            <div className="pub-accent-line"></div>

            <div className="pub-header-row">
              <span className="pub-badge">
                <Award size={14} /> {pub.publicationType}
              </span>
              <span className="pub-date">
                <Calendar3 size={13} style={{ marginRight: "6px", color: "var(--accent-cyan)" }} />
                {pub.date}
              </span>
            </div>

            <h3 className="pub-title">{pub.title}</h3>

            <div className="pub-authors">
              <strong>Authors: </strong>
              <span>{pub.authors}</span>
            </div>

            <div className="pub-venue">
              <GeoAlt size={14} style={{ marginRight: "6px" }} />
              {pub.venue}
            </div>

            <div className="pub-abstract-preview">
              <strong style={{ color: "#f8fafc", display: "block", marginBottom: "0.4rem" }}>
                Abstract Overview:
              </strong>
              {pub.abstract}
            </div>

            {/* Citation Block */}
            {pub.citation && (
              <div className="pub-citation-block">
                <div className="pub-citation-header">
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Citation
                  </span>
                  <button
                    onClick={() => copyCitation(pub.citation, index)}
                    className="pub-copy-btn"
                    title="Copy citation"
                  >
                    {copiedIdx === index
                      ? <><Check2 size={13} style={{ color: "#34d399" }} /> Copied!</>
                      : <><Clipboard size={13} /> Copy</>
                    }
                  </button>
                </div>
                <p className="pub-citation-text">{pub.citation}</p>
              </div>
            )}

            {/* Badges + Links row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginTop: "1.25rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {pub.badges.map((b, bIdx) => (
                  <span key={bIdx} className="exp-tag">
                    {b}
                  </span>
                ))}
              </div>

              <div className="pub-actions">
                {pub.links?.abstractPdf && (
                  <a
                    href={pub.links.abstractPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-link-btn pub-link-pdf"
                    title="View Abstract PDF"
                  >
                    <FileEarmarkPdf size={15} /> Abstract PDF
                  </a>
                )}

                {pub.links?.abstractBook && (
                  <a
                    href={pub.links.abstractBook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-link-btn pub-link-book"
                    title="View Abstract Book"
                  >
                    <BoxArrowUpRight size={14} /> Abstract Book
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
