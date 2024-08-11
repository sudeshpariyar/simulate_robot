import { useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import MoveControls from "./components/MoveControls";
import "./App.css";

export interface RobotPositionType {
  x: number;
  y: number;
}

function App() {
  const [robotPosition, setRobotPosition] = useState<RobotPositionType>({
    x: 0,
    y: 0,
  });
  const [robotDirection, setRobotDirection] = useState(0);
  //RobotDirection 0:Up, 1:Right, 2:Down, 3:Left

  const moveRobotForward = () => {
    setRobotPosition((prev) => {
      const newPosition = { ...prev };
      if (robotDirection === 0 && prev.y > 0) newPosition.y -= 1;
      if (robotDirection === 1 && prev.x < 4) newPosition.x += 1;
      if (robotDirection === 2 && prev.y < 4) newPosition.y += 1;
      if (robotDirection === 3 && prev.x > 0) newPosition.x -= 1;
      return newPosition;
    });
  };
  const rotateRobotLeft = () => {
    setRobotDirection((prev) => (prev + 3) % 4);
  };

  const rotateRobotRight = () => {
    setRobotDirection((prev) => (prev + 1) % 4);
  };
  return (
    <div className="app">
      <Header />
      <Grid robotDirection={robotDirection} robotPosition={robotPosition} />
      <MoveControls
        moveRobotForward={moveRobotForward}
        rotateRobotLeft={rotateRobotLeft}
        rotateRobotRight={rotateRobotRight}
      />
    </div>
  );
}

export default App;
