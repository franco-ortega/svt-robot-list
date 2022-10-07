const Row = ({ rowNumber, robotId, batteryLevel, y, x }) => {
  const bgOpacity = `${rowNumber % 2 ? 'bg-opacity-25' : 'bg-opacity-75'}`;
  const borderStyles = ' border border-dark';

  return (
    <div
      className={`row bg-success text-center ${bgOpacity} ${
        rowNumber === '0' && 'fw-bold'
      }`}
    >
      <div className={`col-2 ${borderStyles}`}>{robotId}</div>
      <div className={`col-4 ${borderStyles}`}>{batteryLevel}</div>
      <div className={`col-3 ${borderStyles}`}>{y}</div>
      <div className={`col-3 ${borderStyles}`}>{x}</div>
    </div>
  );
};

export default Row;
