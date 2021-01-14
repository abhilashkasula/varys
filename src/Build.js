import styled from 'styled-components';
import DailyGraphs from './DailyGraphs';
import LatestBuilds from './LatestBuilds';

const Build = ({className}) => {
  return (
    <div className={className}>
      <DailyGraphs />
      <LatestBuilds />
    </div>
  );
};

const StyledBuild = styled(Build)`
  display: flex;
`;

export default StyledBuild;
