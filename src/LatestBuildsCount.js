import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Count from './Count';

const LatestBuildsCount = ({className}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/build/recentBuildsCount')
      .then((res) => res.json())
      .then((data) => setData(() => data));
  }, []);

  return data ? (
    <div className={className}>
      {data.map((count) => (
        <Count data={count} key={count.title} />
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

const StyledLatestBuildsCount = styled(LatestBuildsCount)`
  margin-top: 70px;
  margin-left: 20px;
`;

export default StyledLatestBuildsCount;
