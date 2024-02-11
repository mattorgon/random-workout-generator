// // SavedWorkouts.js
// import React from "react";
// import styled from "@emotion/styled";

// const MyWorkouts = () => {
//   return (
//     <div>
//       <h2>Your Saved Workouts</h2>
//       {/* Add your saved workouts content here */}
//     </div>
//   );
// };

// export default MyWorkouts;
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useAuth } from "../context/AuthContext";
import Calendar from "react-calendar";
import "../styles/calendar.css";

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
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WorkoutItem = styled.li`
  margin-bottom: 5px;
`;

const CalendarStyle = styled.div`
  max-width: 50%;
`;

// const calendarStyle = {
//   backgroundColor: "red",
// };

const SavedWorkoutsPage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState({});

  const [value, onChange] = useState(new Date());

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

  //   return (
  //     <div>
  //       <h1>Your Saved Workouts</h1>
  //       <CalendarContainer>
  //         {savedWorkouts.map((workout) => (
  //           <DayCell key={workout.date}>
  //             <h2>{new Date(workout.date).toLocaleDateString()}</h2>
  //             <WorkoutList>
  //               {workout.exercises.map((exercise, index) => (
  //                 <WorkoutItem key={index}>{exercise.name}</WorkoutItem>
  //               ))}
  //             </WorkoutList>
  //           </DayCell>
  //         ))}
  //       </CalendarContainer>
  //     </div>
  //   );
  // };

  // Assuming savedWorkouts is an array of workout objects with a 'date' property
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

  return (
    <div>
      <h1>Your Saved Workouts</h1>
      <CalendarStyle>
        <Calendar onChange={onChange} value={value} />
      </CalendarStyle>
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
    </div>
  );
};

export default SavedWorkoutsPage;
