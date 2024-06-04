import React, { useEffect, useState, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import { useAuth } from "../context/AuthContext";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const BodySegmentsPieChart = () => {
  const { userId, userToken } = useAuth();
  const [segmentData, setSegmentData] = useState({});
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchSegmentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/workouts/users/${userId}/bodySegments`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: userToken,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSegmentData(data);
      } catch (error) {
        console.error("Error fetching segment data:", error);
      }
    };

    fetchSegmentData();
  }, [userId, userToken]);

  const pieData = {
    labels: Object.keys(segmentData),
    datasets: [
      {
        data: Object.values(segmentData),
        backgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Green
          "#9966FF", // Purple
          "#FF9F40", // Orange
          "#FF6384", // Pink
          "#36A2EB", // Light Blue
        ],
        hoverBackgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Green
          "#9966FF", // Purple
          "#FF9F40", // Orange
          "#FF6384", // Pink
          "#36A2EB", // Light Blue
        ],
      },
    ],
  };

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(canvasRef.current, {
        type: "pie",
        data: pieData,
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [pieData]);

  return <canvas ref={canvasRef} />;
};

export default BodySegmentsPieChart;
