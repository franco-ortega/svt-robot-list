import { useEffect, useState } from 'react';
import { getRobots } from '../../services/robots';

const Home = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    getRobots().then((res) => setRobots(res));
  }, []);

  console.log(robots);

  return <div>Home Page</div>;
};

export default Home;
