# NZXT Aviation Gauge

Aircraft Engine Indicating and Crew Alerting System (EICAS) inspired gauge using the NZXT web integrations API.

<img src="Screenshot1.png" width=350 />
<img src="Recording1.gif" />

# Use in Kraken web integration

URL: https://reinhardtbotha.github.io/NZXT-aviation/

# How to run locally

## Prerequisites (First-time setup)

This project requires Node.js and npm. If you don't have them installed:

1. **Download Node.js:**
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version for Windows
   - Run the installer and follow the setup wizard (accept all defaults)
   - This will install both Node.js and npm together

2. **Verify installation:**
   - Open PowerShell or Command Prompt
   - Type: `node --version` (should show a version number like v20.x.x)
   - Type: `npm --version` (should show a version number like 10.x.x)

## Running the project

1. **Open a terminal in the project folder:**
   - Navigate to the project folder in File Explorer
   - Right-click in the folder and select "Open in Terminal" (Windows 11) or "Open PowerShell window here"
   - Or, open PowerShell/Command Prompt and navigate using: `cd "C:\Users\apitt\OneDrive\Documents\GitHub\NZXT-aviation"`

2. **Install dependencies** (only needed the first time or after pulling updates):
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm run dev
   ```

4. **Access the application:**
   - The terminal will show a local URL (typically `http://localhost:5173`)
   - Open this URL in your browser
   - For NZXT CAM, use: `http://localhost:5173/NZXT-aviation/`

Local URL for NZXT CAM: http://localhost:5173/NZXT-aviation/

# Technologies used

- React
- Vite
- ApexCharts
- Styled Components

# Disclaimer

This integration was developed and tested on the Kraken Elite. Therefore, it may not function as expected on models with different screen sizes.
