# Health Status Classification (Task 3)

## Overview
This Python script (`predict_patient_health_categories.py`) classifies health status ("Good", "Moderate", "Poor") using `dataset.json`. It extracts features (average heart rate, steps, sleep hours, calories), trains Decision Tree and Random Forest classifiers, evaluates them with accuracy and F1-score, and visualizes feature importance.

## Dataset
- **File**: `dataset.json`
- **Records**: 20
- **Structure**:
  - `vitals.heart_rate`: Array of heart rate values.
  - `activity.steps`: Daily step count.
  - `sleep.duration_hours`: Sleep duration.
  - `nutrition.calories`: Calorie intake.
- **Target**: `health_status` (derived):
  - Poor: Heart rate < 60 or > 100, steps < 5000, sleep < 6 hours.
  - Moderate: Heart rate < 70 or > 90, steps < 7000, sleep < 7 hours.
  - Good: Otherwise.

## Prerequisites
- Python (v3.8+)
- Libraries: pandas, scikit-learn, numpy, matplotlib, seaborn

## Installation
1. Navigate to `backend/`:
   ```bash
   cd backend
