import { sortAsc, sortDes } from '../../utils/sort';

const Sort = ({ robots, setRobots }) => {
  const onIdSortAsc = () => setRobots(sortAsc(robots, 'robotId'));
  const onIdSortDes = () => setRobots(sortDes(robots, 'robotId'));
  const onBatterySortAsc = () => setRobots(sortAsc(robots, 'batteryLevel'));
  const onBatterySortDes = () => setRobots(sortDes(robots, 'batteryLevel'));
  const onYSortAsc = () => setRobots(sortAsc(robots, 'y'));
  const onYSortDes = () => setRobots(sortDes(robots, 'y'));
  const onXSortAsc = () => setRobots(sortAsc(robots, 'x'));
  const onXSortDes = () => setRobots(sortDes(robots, 'x'));

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
