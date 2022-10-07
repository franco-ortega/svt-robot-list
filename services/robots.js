import { getData } from './request';

export const getRobots = () => getData('/api/robots');
