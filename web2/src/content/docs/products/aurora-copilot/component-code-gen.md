---
title: Component Code Generation
description: A guide to using the Component Code Generation feature in Aurora Copilot.
---

<style>
  .tip-section {
    background-color: #800080; 
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    color: #ffffff; 
  }

  .tabs {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1.5rem;
  }

  .tab-labels {
    display: flex;
    background-color: #333;
  }

  .tab-label {
    flex: 1;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    color: #ffffff;
    background-color: #444;
  }

  .tab-label:hover, .tab-label.active {
    background-color: #555;
  }

  .tab-content {
    padding: 1.5rem;
    background-color: #1e1e2f;
    color: #d1d1e0;
  }

  .feature-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .feature-card {
    background-color: #1e1e2f;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #ffffff;
  }

  .feature-card-title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  .feature-card-description {
    font-size: 0.95rem;
    color: #d1d1e0;
  }

  .image-container {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}

.image-container img {
  max-width: 100%;
  width: 60%; 
  height: 80%;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>

The **Component Code Generation** feature in Aurora Copilot offers two convenient methods for migrating your front-end components: file upload or manual code entry.

## How It Works
<p>1. Click on the <b>Create New Session</b> key </p>
<div class="image-container">
<img src="../../../../../public/component.png" alt="UI Main Page">
</div>
<p>2. Choose your desired <b>Migration Type</b> </p>
<div class="tabs">
  <div class="tab-labels">
    <div class="tab-label active" onclick="showTab('upload')">Uploading a Component</div>
    <div class="tab-label" onclick="showTab('manual')">Entering Code Manually</div>
  </div>

  <div class="tab-content" id="upload">
    <p>Upload component files directly into Aurora Copilot for migration:</p>
    <ol>
      <li>Click the <b>Upload Component</b> button.</li>
       <div class="image-container">
          <img src="../../../../../public/uploadComponent.png" alt="upload component">
      </div>
      <li>Select the component file from your local machine.</li>
      <li>Click on <b>Create Session</b></li>
      <div class="image-container">
          <img src="../../../../../public/compUpload.png" alt="upload component">
      </div>
      <li>Aurora Copilot will automatically process and prepare the code for migration.</li>
    </ol>
  </div>

  <div class="tab-content" id="manual" style="display: none;">
    <p>Input the component code directly into Aurora Copilot:</p>
    <ol>
      <li>Click the <strong>Enter Code Manually</strong> button to open the dialog box.</li>
      <div class="image-container">
          <img src="../../../../../public/enterCode.png" alt="UI Main Page">
      </div>
      <li>Provide a <strong>Session Name</strong> for the migration.</li>
      <div class="image-container">
          <img src="../../../../../public/sessionName.png" alt="UI Main Page">
      </div>
      <li>Paste or write your component code into the provided text area.</li>
       <div class="image-container">
          <img src="../../../../../public/session.png" alt="UI Main Page">
      </div>
      <li>Click <strong>Create Session</strong> to begin the migration process.</li>
    </ol>
  </div>
</div>

<script>
  function showTab(tabId) {
    document.getElementById('upload').style.display = 'none';
    document.getElementById('manual').style.display = 'none';
    document.querySelectorAll('.tab-label').forEach(label => label.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
  }
</script>

<!-- ## Features of the Manual Entry Dialog

<div class="feature-cards">
  <div class="feature-card">
    <div class="feature-card-title">Session Name Field</div>
    <div class="feature-card-description">Name and organize your migration sessions for easy reference.</div>
  </div>

  <div class="feature-card">
    <div class="feature-card-title">Code Input Field</div>
    <div class="feature-card-description">A spacious text area for pasting or writing your component code.</div>
  </div>

  <div class="feature-card">
    <div class="feature-card-title">Submit Button</div>
    <div class="feature-card-description">Initiate the migration process after entering your code.</div>
  </div>
</div> -->

<div class="tip-section">
  <h2>Pro Tip</h2>
  <p>For complex components with multiple files, consider using the file upload option to ensure all dependencies are included in the migration process.</p>
</div>
