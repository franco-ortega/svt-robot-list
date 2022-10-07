import { useEffect, useState } from 'react';
import { getRobots } from '../../services/robots';
import Table from '../table/Table';

const Home = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    getRobots().then((res) => setRobots(res));
  }, []);

  console.log(robots);

  return (
    <div>
      <h1>Home Page</h1>
      <Table />
    </div>
  );
};

export default Home;
