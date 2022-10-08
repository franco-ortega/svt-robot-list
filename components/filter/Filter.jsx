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
    <div className='container my-2 d-flex flex-column align-items-center'>
      <div className='d-flex flex-column bg-success rounded p-2 fs-5 text-light'>
        <label className='' htmlFor='robotId'>
          Filter by Robot ID:
          <input
            className='ms-2 h-25 w-25 text-center'
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
            className='ms-2 text-center'
            type='checkbox'
            id='exactMatch'
            name='exactMatch'
            onChange={onExactMatchChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Filter;
