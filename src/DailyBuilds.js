import styled from 'styled-components';
import {Line} from 'react-chartjs-2';

const getSuccessDataset = (data) => ({
  label: 'Success',
  fill: true,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data,
});

const getFailedDataset = (data) => ({
  label: 'Failed',
  fill: true,
  lineTension: 0.1,
  backgroundColor: 'rgba(1000,0,0,0.4)',
  borderColor: 'rgba(1000,0,0,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(1000,0,0,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(1000,0,0,1)',
  pointHoverBorderColor: 'rgba(1000,0,0,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data,
});

const getBuildData = ({labels, succeededJobs, failedJobs}) => {
  return {
    labels: labels.map(([date, month]) => `${date}/${month}`),
    datasets: [
      getSuccessDataset(succeededJobs.map((success) => success.length)),
      getFailedDataset(failedJobs.map((fail) => fail.length)),
    ],
  };
};

const DailyBuilds = ({className, data}) => (
  <div className={className}>
    <Line data={getBuildData(data)} width={40} height={20} />
  </div>
);

const StyledDailyBuilds = styled(DailyBuilds)`
  width: 370px;
`;

export default StyledDailyBuilds;
