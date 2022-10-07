import { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import Row from './Row';

const Table = ({ robots }) => {
  const [searchId, setSearchId] = useState('');
  const [robotsToDisplay, setRobotsToDisplay] = useState([]);

  useEffect(() => {
    const filteredRobots = robots.filter((robot) =>
      searchId ? robot.robotId.includes(searchId) : robot
    );

    setRobotsToDisplay(filteredRobots);
  }, [searchId, robots]);

  return (
    <div className='p-4 text-center'>
      <h2>Robots</h2>
      <Filter setSearchId={setSearchId} />
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
