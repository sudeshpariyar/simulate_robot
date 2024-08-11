import React from "react";
import "./Grid.css";
import { RobotPositionType } from "../App";
import image from "../assets/robotimage.png";

interface GridProps {
  robotDirection: number;
  robotPosition: RobotPositionType;
}
const directions = ["N", "E", "S", "W"];

const Grid = ({ robotDirection, robotPosition }: GridProps) => {
  const board = Array(5)
    .fill(0)
    .map(() => Array(5).fill(null));

  board[robotPosition.y][robotPosition.x] = (
    <div className={`robot ${directions[robotDirection]}`}>
      <img className="robot__image" src={image} alt="robot" />
    </div>
  );
  return (
    <div className="grid__wrapper">
      <h4>BOARD</h4>
      <div className="grid">
        {board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div className="cell" key={colIndex}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
