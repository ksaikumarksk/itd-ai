---
title: ARX Dev Tools Features
description: Explore the powerful features of ARX Dev Tools that enhance your development workflow.
---

<div class="feature-intro">
  ARX Dev Tools is designed to provide developers with a comprehensive overview of their project status during development. Our suite of features is tailored to streamline your workflow and offer valuable insights at a glance.
</div>

## Interactive Project Status Insights

<div class="feature-grid">
  <div class="feature-card">
    <h3 class="feature-title title-one">📄 Page Details</h3>
    <p>Access essential information about the current page, including:</p>
    <ul>
      <li>URL</li>
      <li>Page Title</li>
      <li>Server Details</li>
    </ul>
  </div>

  <div class="feature-card">
    <h3 class="feature-title title-two">🔄 Recently Updated Components</h3>
    <p>Quickly identify components that have been modified recently, helping you track changes and focus your development efforts.</p>
  </div>

  <div class="feature-card">
    <h3 class="feature-title title-three">🏠 Local Preview Indicator</h3>
    <p>A unique "D" icon appears when your project is running in development mode, indicating that certain components are being served locally.</p>
  </div>
</div>

## Why These Features Matter

1. **Improved Productivity**: With quick access to page details and recently updated components, you can save time and focus on what matters most.

2. **Enhanced Debugging**: The local preview indicator helps you quickly distinguish between production and development environments, making debugging easier.

3. **Better Collaboration**: Easily share project status and recent changes with your team, improving communication and coordination.

<style>
  .feature-intro {
    background-color: transparent;
    border-left: 4px solid #3498db;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .feature-card {
    background-color: transparent;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
  }

  .feature-card h3 {
    margin-top: 0;
  }

  /* Feature Title Colors */
  .title-one {
    color: #e74c3c; /* Red */
  }

  .title-two {
    color: #f39c12; /* Orange */
  }

  .title-three {
    color: #2ecc71; /* Green */
  }

  .feature-card ul {
    padding-left: 1.5rem;
  }

  .cta-container {
    background-color: transparent;
    color: #ffffff;
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    margin-top: 3rem;
  }

  .cta-button {
    display: inline-block;
    background-color: transparent;
    color: #3498db;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1rem;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .cta-button:hover {
    background-color: transparent;
    color: #ffffff;
  }
</style>
