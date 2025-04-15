# health-data-task

# Health Data Analysis Project

## Overview
This project builds a health data analysis system with a React dashboard (Tasks 1 & 2) and a Python classification model (Task 3). Task 1 sets up a React app with Firebase integration. Task 2 fixes the dashboard to display health data (heart rate, steps, sleep) from `dataset.json` using charts and a table. Task 3 classifies health status ("Good", "Moderate", "Poor") using features like average heart rate and steps.

## Directory Structure
- **frontend/**: React dashboard (Tasks 1 & 2).
- **backend/**: Python classification script (Task 3).

## Prerequisites
- **Frontend**:
  - Node.js (v16+)
  - npm (v8+)
- **Backend**:
  - Python (v3.8+)
  - pip

## Setup and Usage
1. **Frontend (Dashboard)**:
   - Navigate to `frontend/`.
   - Follow instructions in `frontend/README.md`.
2. **Backend (Classification)**:
   - Navigate to `backend/`.
   - Follow instructions in `backend/README.md`.

## Outputs
- **Dashboard**: Displays line chart (heart rate), bar chart (steps), and table (ID, heart rate, sleep, steps).
- **Classification**: Outputs accuracy, F1-score, classification report, and `feature_importance.png`.

## Submission Files
- **frontend/**: `package.json`, `src/App.js`, `src/firebase.js`, `src/App.css`, `public/index.html`, `public/dataset.json`, `README.md`
- **backend/**: `classify_health.py`, `dataset.json`, `feature_importance.png`, `requirements.txt`, `README.md`
- Root `README.md`

## Acknowledgments
- Built with React, Firebase, Chart.js, pandas, scikit-learn.
- Inspired by coursework on data visualization and machine learning.
