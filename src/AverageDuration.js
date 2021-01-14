import styled from 'styled-components';
import {Bar} from 'react-chartjs-2';

const getAverageDurationData = ({labels, averageDurations}) => {
  return {
    labels: labels.map(([date, month]) => `${date}/${month}`),
    datasets: [
      {
        label: 'Duration',
        fill: true,
        lineTension: 0.1,
        barThickness: 25,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1.5,
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
        data: averageDurations,
      },
    ],
  };
};

const AverageDuration = ({className, data}) => {
  return (
    <div className={className}>
      <Bar data={getAverageDurationData(data)} width={40} height={20} />
    </div>
  );
};

const StyledAverageDuration = styled(AverageDuration)`
  width: 370px;
`;

export default StyledAverageDuration;
