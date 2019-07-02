import React from "react";
import Styled from "styled-components";
import SlideView from "/SlideView";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default function App() {
  return (
    <AppWrapper>
      <SlideView />
    </AppWrapper>
  );
}
