import ReactApexChart from "react-apexcharts";
import React from "react";

// eslint-disable-next-line react/display-name
const BarGauge = React.memo((props) => {
  const options = {
    theme: {
      mode: "dark",
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      min: 0,
      max: 100,
      categories: [1],
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["#e5e5e5", "transparent"],
        opacity: 0.2,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: [
        function ({ value }) {
          if (value < 60) {
            return "#00FF00";
          } else if (value >= 60 && value < 80) {
            return "#FFA500";
          } else {
            return "#FF0000";
          }
        },
      ],
      opacity: 1,
    },
  };
  const series = [
    {
      data: [props?.data || 0],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.15rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div style={{ marginTop: "-10px" }}>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            width="58px"
            height={9}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: "0.1rem",
            marginLeft: "0.8rem",
            marginTop: "-2px",
          }}
        >
          <p
            style={{
              margin: "0",
              lineHeight: "1",
              fontSize: "1rem",
              textAlign: "left",
            }}
          >
            {props?.data || "0"}
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "1rem",
              lineHeight: "1",
              textAlign: "left",
            }}
          >
            %
          </p>
        </div>
      </div>
      <h3
        style={{
          fontSize: "0.55rem",
          margin: "0",
          lineHeight: "1.2",
          textAlign: "left",
        }}
      >
        {props?.label || "No Label"}
      </h3>
    </div>
  );
});

export default BarGauge;
