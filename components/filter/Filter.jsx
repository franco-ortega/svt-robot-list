import { useEffect, useState } from 'react';

const Filter = ({ robots, searchId, setSearchId, setRobotsToDisplay }) => {
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
  }, [robots, searchId, exactMatch, setRobotsToDisplay]);

  const onExactMatchChange = () => setExactMatch((prevState) => !prevState);

  return (
    <div className='p-1'>
      <label className='fs-4' htmlFor='robotId'>
        Filter by Robot ID:
        <input
          className='ms-1 w-25 text-center'
          type='number'
          placeholder='ID'
          id='robotId'
          name='robotId'
          onChange={(e) => setSearchId(e.target.value)}
        />
      </label>
      <label className='fs-5' htmlFor='exactMatch'>
        Exact Match:
        <input
          type='checkbox'
          className='ms-1 text-center'
          id='exactMatch'
          name='exactMatch'
          onChange={onExactMatchChange}
        />
      </label>
    </div>
  );
};

export default Filter;
