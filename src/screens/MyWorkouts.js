import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useAuth } from "../context/AuthContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const DayCell = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const WorkoutList = styled.ul`
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WorkoutItem = styled.li`
  margin-bottom: 5px;
`;

const SavedWorkoutScreen = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
`;

const SavedWorkoutsPage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState({});

  // const [value, onChange] = useState(new Date());

  const [value, setValue] = useState(dayjs());

  const { userToken } = useAuth();

  console.log("check", userToken);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        response = await fetch("http://localhost:3001/workouts/savedWorkouts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: userToken, //`Bearer ${userToken}`,
          },
        });

        const data = await response.json();
        console.log("saved workout data: ", data);
        setSavedWorkouts(data);
      } catch (error) {
        console.error("Error fetching saved workouts:", error);
        console.log("Response:", await response);
      }
    };

    fetchData();
  }, []);
  // Empty dependency array ensures the effect runs once on component mount

  const groupedWorkouts = {};
  console.log("swsw: ", savedWorkouts);
  if (Array.isArray(savedWorkouts)) {
    savedWorkouts.forEach((workout) => {
      const dateKey = new Date(workout.date);
      const formattedDate = dateKey.toLocaleDateString();
      const formattedTime = dateKey.toLocaleTimeString();

      if (!groupedWorkouts[formattedDate]) {
        groupedWorkouts[formattedDate] = [];
      }

      groupedWorkouts[formattedDate].push({
        ...workout,
        formattedTime,
      });
    });
  }

  const days = Object.keys(groupedWorkouts);
  console.log("day: ", days);

  return (
    <SavedWorkoutScreen>
      <h1>Your Saved Workouts</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </LocalizationProvider>
      <CalendarContainer>
        {days.map((day) => (
          <DayCell key={day}>
            <h2>{day}</h2>
            <WorkoutList>
              {groupedWorkouts[day].map((workout, index) => (
                <WorkoutItem key={index}>
                  <p>{workout.formattedTime}</p>
                  <p>{workout.name}</p>
                  <ul>
                    {workout.exercises.map((exercise, index) => (
                      <li key={index}>{exercise.name}</li>
                    ))}
                  </ul>
                  {/* Include other workout details as needed */}
                </WorkoutItem>
              ))}
            </WorkoutList>
          </DayCell>
        ))}
      </CalendarContainer>
    </SavedWorkoutScreen>
  );
};

export default SavedWorkoutsPage;
