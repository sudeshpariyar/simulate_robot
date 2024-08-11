import React from "react";
import "./MoveControls.css";
import Button from "./shared/Button";

interface MoveControlsProps {
  moveRobotForward: () => void;
  rotateRobotLeft: () => void;
  rotateRobotRight: () => void;
}
const MoveControls = ({
  moveRobotForward,
  rotateRobotLeft,
  rotateRobotRight,
}: MoveControlsProps) => {
  return (
    <div className="controls__wrapper">
      <h4>MOVE CONTROLS</h4>

      <div className="controls__button">
        <Button onClick={rotateRobotLeft}>Rotate Left</Button>
        <Button onClick={moveRobotForward}>Move Forward </Button>
        <Button onClick={rotateRobotRight}>Rotate Right</Button>
      </div>
    </div>
  );
};

export default MoveControls;
