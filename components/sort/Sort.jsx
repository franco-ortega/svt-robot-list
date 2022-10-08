import { sortAsc, sortDes } from '../../utils/sort';

const Sort = ({ robots, setRobots }) => {
  const onIdSortAsc = () => {
    const sortedIdAsc = sortAsc(robots, 'robotId');
    setRobots(sortedIdAsc);
  };
  const onIdSortDes = () => {
    const sortedIdDes = sortDes(robots, 'robotId');
    setRobots(sortedIdDes);
  };

  const onBatterySortAsc = () => {
    const sortedBatteryAsc = sortAsc(robots, 'batteryLevel');
    setRobots(sortedBatteryAsc);
  };
  const onBatterySortDes = () => {
    const sortedBatteryDes = sortDes(robots, 'batteryLevel');
    setRobots(sortedBatteryDes);
  };

  const onYSortAsc = () => {
    const sortedYAsc = sortAsc(robots, 'y');
    setRobots(sortedYAsc);
  };
  const onYSortDes = () => {
    const sortedYDes = sortDes(robots, 'y');
    setRobots(sortedYDes);
  };
  const onXSortAsc = () => {
    const sortedXAsc = sortAsc(robots, 'x');
    setRobots(sortedXAsc);
  };
  const onXSortDes = () => {
    const sortedXDes = sortDes(robots, 'x');
    setRobots(sortedXDes);
  };

  return (
    <div>
      <button onClick={onIdSortAsc}>Sort ID Acs</button>
      <button onClick={onIdSortDes}>Sort ID Des</button>
      <button onClick={onBatterySortAsc}>Sort Battery Acs</button>
      <button onClick={onBatterySortDes}>Sort Battery Des</button>
      <button onClick={onYSortAsc}>Sort Y Acs</button>
      <button onClick={onYSortDes}>Sort Y Des</button>
      <button onClick={onXSortAsc}>Sort X Acs</button>
      <button onClick={onXSortDes}>Sort X Des</button>
    </div>
  );
};

export default Sort;
