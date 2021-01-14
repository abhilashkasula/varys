import styled from 'styled-components';

const Mark = ({className}) => <p className={className}></p>;

const StyledMark = styled(Mark)`
  width: 20px;
  background-color: ${(props) =>
    props.status === 'SUCCESS' ? 'green' : 'red'};
  border-radius: 50%;
  margin: 0 5px 0 0;
`;

const BuildStatus = ({className, build: {status, number, url}}) => {
  return (
    <a className={className} href={url}>
      <StyledMark status={status} />
      <p style={{margin: 0}}>{number}</p>
    </a>
  );
};

const StyledBuildStatus = styled(BuildStatus)`
  display: flex;
  color: black;
  text-decoration: none;
  padding: 3px;
  border: 1px solid;
  border-radius: 4px;
  margin-top: 3px;
  border-color: grey;
  box-shadow: -1px 1px 6px 0px #80808087;
  display: flex;
  justify-content: space-around;
`;

export default StyledBuildStatus;
