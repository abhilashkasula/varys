import {useState, useEffect} from 'react';
import DailyBuilds from './DailyBuilds';
import AverageDuration from './AverageDuration';

const Build = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/build/perDayStats')
      .then((res) => res.json())
      .then((data) => setData(() => data));
  }, []);

  return data ? (
    <div>
      <DailyBuilds data={data} />
      <AverageDuration data={data} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Build;
