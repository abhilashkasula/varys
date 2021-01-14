import styled from 'styled-components';
import {useState, useEffect} from 'react';
import BuildStatus from './BuildStatus';

const LatestBuildsStatus = ({className}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/build/latestBuilds')
      .then((res) => res.json())
      .then((data) => setData(() => data));
  }, []);

  return data ? (
    <div className={className}>
      Latest Builds
      {data.map((build) => (
        <BuildStatus build={build} key={build.number} />
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

const StyledLatestBuildsStatus = styled(LatestBuildsStatus)`
  margin-left: 10px;
`;

export default StyledLatestBuildsStatus;
