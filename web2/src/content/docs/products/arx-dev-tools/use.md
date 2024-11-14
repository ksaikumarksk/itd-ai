---
title: Using ARX Dev Tools
description: Learn how to effectively use ARX Dev Tools to enhance your Chrome development workflow.
---

<div class="intro-section">
  <p>ARX Dev Tools provides a powerful set of features to streamline your Chrome development process. This guide will walk you through the key aspects of using the extension effectively.</p>
</div>

<div class="cta-block">
  <video controls class="tutorial-video">
    <source src="../../../../../public/Home _ italent-single-node - Google Chrome - 9 October 2024.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

## Key Features

<div class="features-list">
  <div class="feature-item">
    <h3>🔍 Extension as FAB</h3>
    <p>ARX Dev Tools is accessible as a Floating Action Button (FAB) in the Chrome toolbar.</p>
  </div>

  <div class="feature-item">
    <h3><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="M344-296 160-480l184-184 56 58-126 126 126 126-56 58Zm-144 16h80v40h400v-40h80v160q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-160Zm80-400h-80v-160q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v40Zm0 520v40h400v-40H280Zm0-640h400v-40H280v40Zm336 504-56-58 126-126-126-126 56-58 184 184-184 184ZM280-800v-40 40Zm0 640v40-40Z"/></svg> Developer Mode Indicator</h3>
    <p>When you see a "D" icon, ARX Dev Tools is in Developer Mode, highlighting locally served components for easy identification.</p>
    <ul>
      <li>Certain components are served locally</li>
      <li>Local components are highlighted for quick identification</li>
    </ul>
  </div>

  <div class="feature-item">
    <h3>🔽 Accordion Information</h3>
    <p>The accordion interface provides easy access to key project details:</p>
    <ul>
      <li><strong>Page Details:</strong> Access URL, title, and server info of the current page</li>
      <li><strong>Last Modified Components:</strong> View the most recently updated components</li>
      <li><strong>Custom Rendered Components:</strong> Inspect custom-rendered elements in your project</li>
    </ul>
  </div>
</div>

## Maximizing Your Workflow

<div class="workflow-tips">
  <h3>💡 Pro Tips</h3>
  <ul>
    <li>Use the Developer Mode indicator to distinguish production from development environments quickly.</li>
    <li>Check Last Modified Components regularly to stay updated on recent changes.</li>
    <li>Leverage Custom Rendered Components for debugging and optimizing your project’s custom elements.</li>
  </ul>
</div>

<style>
  /* General Layout Styles */
  .intro-section {
    background-color: #1976d2; /* Blue background */
    color: #ffffff; /* White text for contrast */
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .feature-item {
    background: transparent;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-left: 4px solid #1976d2;
    transition: transform 0.2s ease;
  }

  .feature-item:hover {
    transform: translateY(-3px);
  }

  .feature-item h3 {
    color: #1976d2;
  }

  .feature-item ul {
    padding-left: 1.5rem;
    list-style: disc;
  }

  /* Pro Tips Section */
  .workflow-tips {
    background: transparent;
    padding: 1.5rem;
    border-left: 4px solid #ffc107;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  .workflow-tips ul {
    padding-left: 1.5rem;
    list-style: disc;
  }

  /* Call to Action and Video Tutorial */
  .cta-block {
    text-align: center;
    margin-top: 2rem;
  }

  .tutorial-video {
    width: 100%;
    max-width: 600px;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
  }
</style>
