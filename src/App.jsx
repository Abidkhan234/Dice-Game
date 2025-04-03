import React, { useEffect, useState } from "react";
import EntryPage from "./Components/EntryPage";
import Mainpage from "./Components/Mainpage";

const App = () => {
  const [isplayed, setIsplayed] = useState(false);

  return (
    <div>
      <>
        {isplayed ? (
          <Mainpage />
        ) : (
          <EntryPage isplayed={isplayed} setIsplayed={setIsplayed} />
        )}
      </>
    </div>
  );
};

export default App;
