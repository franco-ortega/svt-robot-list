import { useState } from 'react';
import Filter from '../filter/Filter';
import Row from './Row';

const Table = ({ robots }) => {
  const [searchId, setSearchId] = useState('');
  const [robotsToDisplay, setRobotsToDisplay] = useState([]);

  return (
    <div className='p-4 text-center'>
      <h2>Robots</h2>
      <Filter
        robots={robots}
        searchId={searchId}
        setSearchId={setSearchId}
        setRobotsToDisplay={setRobotsToDisplay}
      />
      <div className='container border border-dark fs-5'>
        <Row
          rowNumber='0'
          robotId='ID'
          batteryLevel='Battery Level'
          y='Y'
          x='X'
        />
        {robotsToDisplay.map((robot, i) => (
          <Row
            key={robot.robotId}
            rowNumber={i + 1}
            robotId={robot.robotId}
            batteryLevel={`${robot.batteryLevel}%`}
            y={robot.y}
            x={robot.x}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
