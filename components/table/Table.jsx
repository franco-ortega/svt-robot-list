import Row from './Row';

const Table = ({ robots }) => {
  return (
    <div>
      <h2>Robots</h2>
      <Row robotId='ID' batteryLevel='Battery Level' y='Y' x='X' />
      {robots.map((robot) => (
        <Row
          key={robot.id}
          robotId={robot.robotId}
          batteryLevel={robot.batteryLevel}
          y={robot.y}
          x={robot.x}
        />
      ))}
    </div>
  );
};

export default Table;
