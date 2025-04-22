import React from "react";

// import StyledComponent from "./components/ProfileCard";
// import CSSModuleStyledCard from "./components/ProfileCard";
// import CSSStyledCard from "./components/ProfileCard";
import InlineStyleCard from "./components/ProfileCard";


function App() {
  return(
    <div style={{display:"flex",gap:"20px"}}>
      <InlineStyleCard/>
      {/* <StyledComponentCard /> */}
      {/* <CSSModuleStyledCard /> */}
      {/* <CSSStyledCard /> */}
      
    </div>
  );
}

export default App;