import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try Firebase first
        const querySnapshot = await getDocs(collection(db, "patientData"));
        const patientData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (patientData.length > 0) {
          setPatients(patientData);
          console.log("Firebase data:", patientData);
        } else {
          throw new Error("No data from Firebase");
        }
      } catch (error) {
        console.error("Firebase error:", error);
        // Fallback to dataset.json
        fetch("/dataset.json")
          .then((res) => res.json())
          .then((data) => {
            setPatients(data);
            console.log("Dataset.json data:", data);
          })
          .catch((err) => console.error("Dataset error:", err));
      }
    };
    fetchData();
  }, []);

  // Helper to calculate average of an array
  const getAverage = (arr) => {
    if (!arr || arr.length === 0) return 0;
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
  };

  // Prepare chart data for heart rate (line chart)
  const chartData = {
    labels: patients.map((p) => p.date || `Record ${p.id}`),
    datasets: [
      {
        label: "Heart Rate (Avg)",
        data: patients.map((p) => getAverage(p.vitals?.heart_rate) || 0),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  // Prepare chart data for steps (bar chart, replacing sleep hours)
  const barData = {
    labels: patients.map((p) => p.date || `Record ${p.id}`),
    datasets: [
      {
        label: "Steps",
        data: patients.map((p) => p.activity?.steps || 0),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Patient Health Dashboard</h1>
      {patients.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <>
          <h2>Heart Rate Trend</h2>
          <Line data={chartData} />
          <h2>Steps</h2>
          <Bar data={barData} />
          <h2>Patient Data Table</h2>
          <table border="1" style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Heart Rate (Avg)</th>
                <th>Sleep Hours</th>
                <th>Steps</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>
                    {patient.vitals?.heart_rate
                      ? getAverage(patient.vitals.heart_rate).toFixed(1)
                      : "N/A"}
                  </td>
                  <td>{patient.sleep?.duration_hours || "N/A"}</td>
                  <td>{patient.activity?.steps || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;