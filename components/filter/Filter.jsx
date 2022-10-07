import { useEffect, useState } from 'react';

const Filter = ({ robots, searchId, setSearchId, setRobotsToDisplay }) => {
  const [exactMatch, setExactMatch] = useState(false);

  useEffect(() => {
    const filteredRobots = robots.filter((robot) =>
      searchId && exactMatch
        ? searchId === robot.robotId
        : searchId
        ? robot.robotId.includes(searchId)
        : robot
    );

    setRobotsToDisplay(filteredRobots);
  }, [robots, searchId, exactMatch, setRobotsToDisplay]);

  const onExactMatchChange = () => setExactMatch((prevState) => !prevState);

  return (
    <div className='fs-5'>
      <label className='' htmlFor='robotId'>
        Filter by Robot ID:
        <input
          className='ms-1 h-25 w-25 text-center'
          type='number'
          placeholder='ID'
          id='robotId'
          name='robotId'
          onChange={(e) => setSearchId(e.target.value)}
        />
      </label>
      <label className='' htmlFor='exactMatch'>
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
