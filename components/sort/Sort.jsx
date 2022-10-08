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
    <div className='m-1 d-flex flex-column gap-2'>
      <div className='d-flex flex-row justify-content-center gap-2'>
        <button className='btn btn-success' onClick={onIdSortAsc}>
          Sort ID <i className='bi bi-arrow-up'></i>
        </button>
        <button className='btn btn-success' onClick={onIdSortDes}>
          Sort ID <i className='bi bi-arrow-down'></i>
        </button>
      </div>
      <div className='d-flex flex-row justify-content-center gap-2'>
        <button className='btn btn-success' onClick={onBatterySortAsc}>
          Sort Battery <i className='bi bi-arrow-up'></i>
        </button>
        <button className='btn btn-success' onClick={onBatterySortDes}>
          Sort Battery <i className='bi bi-arrow-down'></i>
        </button>
      </div>
      <div className='d-flex flex-row justify-content-center gap-2'>
        <button className='btn btn-success' onClick={onYSortAsc}>
          Sort Y <i className='bi bi-arrow-up'></i>
        </button>
        <button className='btn btn-success' onClick={onYSortDes}>
          Sort Y <i className='bi bi-arrow-down'></i>
        </button>
      </div>
      <div className='d-flex flex-row justify-content-center gap-2'>
        <button className='btn btn-success' onClick={onXSortAsc}>
          Sort X <i className='bi bi-arrow-up'></i>
        </button>
        <button className='btn btn-success' onClick={onXSortDes}>
          Sort X <i className='bi bi-arrow-down'></i>
        </button>
      </div>
    </div>
  );
};

export default Sort;
