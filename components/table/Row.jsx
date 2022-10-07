const Row = ({ robotId, batteryLevel, y, x }) => {
  return (
    <div className='row'>
      <div className='col'>{robotId}</div>
      <div className='col'>{batteryLevel}%</div>
      <div className='col'>{y}</div>
      <div className='col'>{x}</div>
    </div>
  );
};

export default Row;
