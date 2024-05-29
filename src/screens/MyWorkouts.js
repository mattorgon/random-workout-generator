import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useAuth } from "../context/AuthContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

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
  // justify-content: center;
`;

const WorkoutItemUL = styled.li`
  padding-inline-start: 0;
`;

const SavedWorkoutScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DateStyle = styled.div`
  // font-size: 16px;
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

  @media (max-width: 768px) {
    width: 50%; // Adjust the width for smaller screens
  }

  // .MuiTextField-root {
  //   height: 40px; // Adjust the height as needed
  // }
`;

const TitleStyle = styled.div`
  font-size: 100%;
  font-weight: bold;
`;

const SavedWorkoutsPage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState({});

  // const [value, onChange] = useState(new Date());

  const [value, setValue] = useState(dayjs());

  const { userToken } = useAuth();

  console.log("check", userToken);

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
        console.log("workoutdata: ", workoutsData);
      } catch (error) {
        console.error("Error fetching saved workouts:", error);
      }
    };

    fetchData();
  }, [value]);
  // Empty dependency array ensures the effect runs once on component mount

  // Function to calculate the date range
  // Function to calculate the date range
  const calculateDateRange = (selectedDate) => {
    const dateRange = [];
    for (let i = -3; i <= 3; i++) {
      const date = new Date(selectedDate);
      date.setDate(selectedDate.getDate() + i);
      dateRange.push(date);
    }
    return dateRange;
  };

  //const days = generateDaysArray();

  // const groupedWorkouts = {};
  // console.log("swsw: ", savedWorkouts);
  // if (Array.isArray(savedWorkouts)) {
  //   savedWorkouts.forEach((workout) => {
  //     const dateKey = new Date(workout.date);
  //     const formattedDate = dateKey.toLocaleDateString();
  //     const formattedTime = dateKey.toLocaleTimeString();

  //     if (!groupedWorkouts[formattedDate]) {
  //       groupedWorkouts[formattedDate] = [];
  //     }

  //     groupedWorkouts[formattedDate].push({
  //       ...workout,
  //       formattedTime,
  //     });
  //   });
  // }

  // const days = Object.keys(groupedWorkouts);
  //console.log("day: ", days);

  //   return (
  //     <SavedWorkoutScreen>
  //       <h1>Your Saved Workouts</h1>
  //       <LocalizationProvider dateAdapter={AdapterDayjs}>
  //         <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
  //       </LocalizationProvider>
  //       {Object.keys(savedWorkouts).some(
  //         (formattedDate) => savedWorkouts[formattedDate].length > 0
  //       ) ? (
  //         <CalendarContainer>
  //           {Object.keys(savedWorkouts).map((formattedDate) => (
  //             <DayCell key={formattedDate}>
  //               <h2>{formattedDate}</h2>
  //               <WorkoutList>
  //                 {savedWorkouts[formattedDate].map((workout, index) => (
  //                   <WorkoutItem key={index}>
  //                     <p>{workout.formattedTime}</p>
  //                     {/* <p>{workout.name}</p> */}

  //                     {/* <ul>
  //                       {workout.exercises.map((exercise, index) => (
  //                         <li key={index}>{exercise.name}</li>
  //                       ))}
  //                     </ul> */}

  //                     {workout.exercises && workout.exercises.length > 0 ? (
  //                       <ul>
  //                         {workout.exercises.map((exercise, index) => (
  //                           <li key={index}>{exercise.name}</li>
  //                         ))}
  //                       </ul>
  //                     ) : (
  //                       <p>No saved exercises</p>
  //                     )}
  //                   </WorkoutItem>
  //                 ))}
  //               </WorkoutList>
  //             </DayCell>
  //           ))}
  //         </CalendarContainer>
  //       ) : (
  //         <p>No saved workouts</p>
  //       )}
  //     </SavedWorkoutScreen>
  //   );
  // };
  return (
    <SavedWorkoutScreen>
      <TitleStyle>Your Saved Workouts</TitleStyle>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerStyle>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} variant="standard" fullWidth />
                {/* Uncomment the following line if you are using a range selection */}
                {/* <TextField {...endProps} variant="standard" fullWidth /> */}
              </>
            )}
          />
        </DatePickerStyle>
      </LocalizationProvider>

      <CalendarContainer>
        {Object.keys(savedWorkouts).map((formattedDate) => {
          const workoutsForDay = savedWorkouts[formattedDate];

          return (
            <DayCell key={formattedDate}>
              <DateStyle>{formattedDate}</DateStyle>
              {/* <h2>{formattedDate}</h2> */}
              {workoutsForDay.length > 0 ? (
                <WorkoutList>
                  {workoutsForDay.map((workout, index) => (
                    <WorkoutItem key={index}>
                      {/* <p>{workout.formattedTime}</p> */}
                      <p>{new Date(workout.date).toLocaleTimeString()}</p>
                      <p>{workout.name}</p>
                      {/* {workout.name ? (
                        <p>{workout.name}</p>
                      ) : (
                        <p>No saved workout</p>
                      )} */}
                      {workout.exercises && workout.exercises.length > 0 ? (
                        <WorkoutItemUL>
                          {workout.exercises.map((exercise, index) => (
                            <li key={index}>{exercise.name}</li>
                          ))}
                        </WorkoutItemUL>
                      ) : (
                        <p>No saved exercises</p>
                        //<EmptyCell>No saved exercises</EmptyCell>
                      )}
                    </WorkoutItem>
                  ))}
                </WorkoutList>
              ) : (
                // <p>No saved workout</p>
                <EmptyCell>No saved exercises</EmptyCell>
              )}
            </DayCell>
          );
        })}
      </CalendarContainer>
    </SavedWorkoutScreen>
  );
};

export default SavedWorkoutsPage;
