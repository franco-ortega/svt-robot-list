import { useState } from 'react';
import Filter from '../filter/Filter';
import Row from './Row';

const Table = ({ robots, setRobots }) => {
  const [searchId, setSearchId] = useState('');
  const [robotsToDisplay, setRobotsToDisplay] = useState([]);

  const [type, setType] = useState('id');
  const [direction, setDirection] = useState('');

  const onSortClick = (type, direction) => {
    setType(type);
    setDirection(direction);
  };

  const onIdSortAsc = () => {
    onSortClick('id', 'asc');
    const sortedIdAsc = [...robots].sort((a, b) => a.robotId - b.robotId);
    setRobots(sortedIdAsc);
  };
  const onIdSortDes = () => {
    onSortClick('id', 'des');
    const sortedIdDes = [...robots].sort((a, b) => b.robotId - a.robotId);
    setRobots(sortedIdDes);
  };

  return (
    <div className='px-4 text-center'>
      <button onClick={onIdSortAsc}>Sort Acs</button>
      <button onClick={onIdSortDes}>Sort Des</button>

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
