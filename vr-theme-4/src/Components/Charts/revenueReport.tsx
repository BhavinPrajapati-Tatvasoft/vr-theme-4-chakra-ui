import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    options: {
      scales: {
        y: {
          ticks: { color: '#FFFFFF', beginAtZero: true }
        },
        x: {
          ticks: { color: 'red', beginAtZero: true },
          grid: {
            display: false,
        },
        }
      },
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [8000,6000,11000,9000,7000,17000,13000,14000,20000,8000,12000],
      // backgroundColor: "#2296CB",
      borderColor: '#E239F1',
    },
  ],
};

const RevenueReport = () => {
  return <Line options={options} data={data} height={110} />;
};

export default RevenueReport;
