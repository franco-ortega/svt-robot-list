import { useState } from 'react';
import { sortItemsAsc } from '../../utils/sort';

const Sort = ({ robots, setRobots }) => {
  const [type, setType] = useState('');
  const [direction, setDirection] = useState('');

  const onSortAsc = () => {
    sortItemsAsc(robots, type, setRobots);
  };

  return (
    <div>
      <button></button>
    </div>
  );
};

export default Sort;
