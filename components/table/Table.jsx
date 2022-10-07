import Row from './Row';

const Table = ({ robots }) => {
  return (
    <div className='m-4'>
      <h2>Robots</h2>
      <div className='container border border-dark fs-5'>
        <Row
          rowNumber='0'
          robotId='ID'
          batteryLevel='Battery Level'
          y='Y'
          x='X'
        />
        {robots.map((robot) => (
          <Row
            key={robot.robotId}
            rowNumber={robot.robotId}
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
