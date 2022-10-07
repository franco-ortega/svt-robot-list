import { useEffect, useState } from 'react';
import { getRobots } from '../../services/robots';
import Table from '../table/Table';

const Home = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    getRobots().then((res) => setRobots(res));
  }, []);

  console.log(robots);

  return <div>{robots.length > 0 && <Table robots={robots} />}</div>;
};

export default Home;
