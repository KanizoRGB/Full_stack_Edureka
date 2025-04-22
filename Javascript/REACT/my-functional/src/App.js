import React from "react";
import AddToCartButton from "./AddToCartButton";

import UserProfile from "./UserProfile";

function App() {
  const app = {
    styles: {
      textAlign: "center",
      marginTop: "5px",
    },
  };
  return (
    <div style={app.styles}>
      <h1>Welcome to My Dashprofile</h1>
      {/* <AddToCartButton /> */}
      <UserProfile />
    </div>
  );

  
}
export default App;