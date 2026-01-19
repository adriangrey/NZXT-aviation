import ReactApexChart from "react-apexcharts";
import React, { useEffect } from "react";

// eslint-disable-next-line react/display-name
const SplineAreaChart = React.memo((props) => {
    useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .apexcharts-legend {
        display: flex !important;
        flex-wrap: nowrap !important;
        white-space: nowrap !important;
        justify-content: center !important;
      }
      .apexcharts-legend-series {
        white-space: nowrap !important;
        margin-right: 8px !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const options = {
    animations: {
      enabled: false,
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
      background: "transparent",
      sparkline: {
        enabled: false,
      },
      fontFamily: "Arial, Helvetica, sans-serif",
      offsetX: 0,
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    title: {
      text: "POWER (W)",
      offsetY: 5,
      floating: true,
      style: {
        fontSize: "0.7rem",
        fontWeight: "bold",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      offsetY: -30,
      offsetX: 0,
      fontSize: "11px",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 400,
      labels: {
        colors: "#ffffff",
        useSeriesColors: false,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 5,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
      height: 20,
      floating: false,
      formatter: undefined,
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "numeric",
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };
  const series = [
    {
      name: "CPU",
      data: props.cpuWatts ? props.cpuWatts : [],
    },
    {
      name: "GPU",
      data: props.gpuWatts ? props.gpuWatts : [],
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="100%"
        width="100%"
      />
    </div>
  );
});

export default SplineAreaChart;
