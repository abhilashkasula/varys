import styled from 'styled-components';

const Count = ({className, data}) => {
  return (
    <div className={className}>
      <p style={{margin: 0}}>{data.title}:</p>
      <b style={{margin: 0, fontSize: '20px'}}>{data.count}</b>
    </div>
  );
};

const StyledCount = styled(Count)`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  align-items: center;
`;

export default StyledCount;
