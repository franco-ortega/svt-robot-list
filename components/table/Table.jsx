import { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import Row from './Row';

const Table = ({ robots }) => {
  const [searchId, setSearchId] = useState('');
  const [robotsToDisplay, setRobotsToDisplay] = useState([]);
  const [exactMatch, setExactMatch] = useState(false);

  useEffect(() => {
    const filteredRobots = robots.filter((robot) =>
      searchId && exactMatch
        ? searchId === String(robot.robotId)
        : searchId
        ? robot.robotId.includes(searchId)
        : robot
    );

    setRobotsToDisplay(filteredRobots);
  }, [robots, searchId, exactMatch]);

  const onExactMatchChange = () => setExactMatch((prevState) => !prevState);

  console.log(exactMatch);

  return (
    <div className='p-4 text-center'>
      <h2>Robots</h2>
      <Filter
        setSearchId={setSearchId}
        onExactMatchChange={onExactMatchChange}
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
