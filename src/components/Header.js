import React from "react";
import styled from '@emotion/styled';

const HeaderStyle = styled.div`
    background-color: #008B8B;
    width: 100%;
    text-indent: 10px;
    text-align: left
`

const Header = () => {
    let title = "I Pick, U Lift"

    return(
        <>
        <HeaderStyle>
            {/* <p>{title}</p> */}
            {title}
        </HeaderStyle>
        </>
    );


}

export default Header;
