import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useAuth } from "../context/AuthContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "../context/DarkModeProvider";
import getTheme from "../styles/theme"; // Import the theme
import BodySegmentsPieChart from "../components/SegmentPieChart";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const DayCell = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2px;
  padding-top: 5px;
  min-width: 13%;
  min-width: 30px;
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  border-color: ${(props) => (props.darkMode ? "#f1ba66" : "#5b7564")};
  color: ${(props) => (props.darkMode ? "#F8F0E3" : "#000000")};
  overflow-wrap: break-word;
`;

const WorkoutList = styled.ul`
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-inline-start: 0;
`;

const WorkoutItem = styled.li`
  margin-bottom: 5px;
`;

const WorkoutItemUL = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
`;

const SavedWorkoutScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DateStyle = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
`;

const EmptyCell = styled.div`
  font-size: 1vw;
`;

const DatePickerStyle = styled.div`
  margin-bottom: 10px;
  width: 50%;
  height: 10%;
  align-self: center;
  color: ${(props) => (props.darkMode ? "#f1ba66" : "#000000")};

  @media (max-width: 768px) {
    width: 50%; // Adjust the width for smaller screens
  }
`;

const TitleStyle = styled.div`
  font-size: 100%;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#32533D")};
`;

const SavedWorkoutsPage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState({});
  const [value, setValue] = useState(dayjs());
  const { userToken } = useAuth();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedDate = value.toDate();
        const dateRange = calculateDateRange(selectedDate);

        const workoutsData = {};

        for (const date of dateRange) {
          const response = await fetch(
            `http://localhost:3001/workouts/savedWorkouts?date=${date.toISOString()}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                authorization: userToken,
              },
            }
          );
          workoutsData[date.toLocaleDateString()] = await response.json();
        }

        setSavedWorkouts(workoutsData);
      } catch (error) {
        console.error("Error fetching saved workouts:", error);
      }
    };

    fetchData();
  }, [value, userToken]);

  const calculateDateRange = (selectedDate) => {
    const dateRange = [];
    for (let i = -3; i <= 3; i++) {
      const date = new Date(selectedDate);
      date.setDate(selectedDate.getDate() + i);
      dateRange.push(date);
    }
    return dateRange;
  };

  return (
    <ThemeProvider theme={getTheme(darkMode)}>
      <SavedWorkoutScreen>
        <TitleStyle darkMode={darkMode}>Your Saved Workouts</TitleStyle>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerStyle darkMode={darkMode}>
            <DatePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" fullWidth />
              )}
            />
          </DatePickerStyle>
        </LocalizationProvider>
        <BodySegmentsPieChart />
        <CalendarContainer>
          {Object.keys(savedWorkouts).map((formattedDate) => {
            const workoutsForDay = savedWorkouts[formattedDate];

            return (
              <DayCell key={formattedDate} darkMode={darkMode}>
                <DateStyle>{formattedDate}</DateStyle>
                {workoutsForDay.length > 0 ? (
                  <WorkoutList>
                    {workoutsForDay.map((workout, index) => (
                      <WorkoutItem key={index}>
                        <p>{new Date(workout.date).toLocaleTimeString()}</p>
                        <p>{workout.name}</p>
                        {workout.exercises && workout.exercises.length > 0 ? (
                          <WorkoutItemUL>
                            {workout.exercises.map((exercise, index) => (
                              <li key={index}>{exercise.name}</li>
                            ))}
                          </WorkoutItemUL>
                        ) : (
                          <p>No saved exercises</p>
                        )}
                      </WorkoutItem>
                    ))}
                  </WorkoutList>
                ) : (
                  <EmptyCell>No saved exercises</EmptyCell>
                )}
              </DayCell>
            );
          })}
        </CalendarContainer>
      </SavedWorkoutScreen>
    </ThemeProvider>
  );
};

export default SavedWorkoutsPage;
