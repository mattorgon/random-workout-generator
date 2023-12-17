// import React from 'react';
// import styled from '@emotion/styled';

// const ButtonStyle = styled.button`
//         background-color: DarkSlateGray;
//         color: white;
//         border: none;
//         border-radius: 6px;
//         width: 100px;
//         cursor: pointer;
//         &:hover {
//             background-color: darkred;
//         }
//     `


// const CustomCheckbox = styled.input`
//     /* Your custom styles here */
//     /* ... */
//     background-color: red;
//     lab
//     color: white;
//     border: none;
//     cursor: pointer;
//     &:hover {
//         background-color: darkred;
//     }
//   `;

// const SelectableButton = ({buttonText}) => {

    

//   return (

//     <CustomCheckbox type="checkbox" />
//   );
// }

// export default SelectableButton;

// import React, { useState } from 'react';
// import styled from '@emotion/styled';

// const ToggleableButtonComp = styled.button`
//   background-color: ${(props) => (props.checked ? '#008B8B' : 'white')};
//   color: ${(props) => (props.checked ? 'white' : 'black')};
//   //background: #FFF;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
//   border: none;
//   border-radius: 6px;
//   width: 100px;
//   cursor: pointer;
//   &:hover {
//     background-color: darkgrey;
//     }
// `;

// const ToggleableButton = ({ buttonText }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleButtonClick = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <ToggleableButtonComp checked={isChecked} onClick={handleButtonClick}>
//       {buttonText}
//     </ToggleableButtonComp>
//   );
// };

// export default ToggleableButton;


import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ToggleableButton = styled.button`
  background-color: ${(props) => (props.checked ? 'DarkSlateGray' : 'white')};
  color: ${(props) => (props.checked ? 'white' : 'DarkSlateGray')};
  border: 2px solid DarkSlateGray;
  border-radius: 6px;
  padding: 8px;
  margin: 4px;
  cursor: pointer;
`;

const ToggleableButtonComponent = ({ buttonText }) => {
  const [toggledButtons, setToggledButtons] = useState([]);

  const handleButtonClick = (buttonText) => {
    setToggledButtons((prevButtons) => {
      if (prevButtons.includes(buttonText)) {
        return prevButtons.filter((button) => button !== buttonText);
      } else {
        return [...prevButtons, buttonText];
      }
      
    });
  };

  useEffect(() => {
    console.log('Toggled Buttons:', toggledButtons);
  }, [toggledButtons]);

  return (
    <>
      {/* <div>
        {toggledButtons.map((button, index) => (
          <span key={index}>{button}</span>
        ))}
      </div> */}
      <ToggleableButton checked={toggledButtons.includes(buttonText)} onClick={() => handleButtonClick(buttonText) }>
        {buttonText}
      </ToggleableButton>
    </>
  );
};

export default ToggleableButtonComponent;

