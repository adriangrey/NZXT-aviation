import styled from "styled-components";
import React from "react";

import RadialGauge from "./RadialGauge";
import BarGauge from "./BarGauge";
import SplineAreaChart from "./SplineAreaChart";

import useMonitoring from "../hooks/useMonitoring";

const OuterContainer = styled.div`
  background-image: url("./Frame_1.svg");
  background-position: center;
  height: 320px;
  width: 320px;
`;

const InnerContainer = styled.div`
  padding-top: 6%;
`;

const LiquidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 56px;
  left: 132px;
`;

const RadialGaugeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 123.5px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const SplineAreaChartContainer = styled.div`
  height: 100px;
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BarGaugeContainer = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3.2rem;
`;

const BottomItem = styled.div`
  width: 45px;
  margin-top: 1.5rem;
`;

const BottomItemLabel = styled.p`
  font-size: 1.1rem;
  text-align: ${({ index, arrayLength }) =>
    index === 0 ? "right" : index === arrayLength - 1 ? "left" : "center"};
`;

// eslint-disable-next-line react/display-name
const KrakenDisplay = React.memo(() => {
  const { cpu, gpu, ram, kraken, cpuWatts, gpuWatts } = useMonitoring();

  return (
    <OuterContainer>
      <InnerContainer>
        <LiquidContainer>
          <p
            style={{
              fontSize: "1.1rem",
            }}
          >
            LIQUID
          </p>
          <p>{kraken?.temperature || 0}°C</p>
        </LiquidContainer>

        <RadialGaugeContainer>
          <RadialGauge data={cpu?.temperature} label={"CPU"} />
          <RadialGauge data={gpu?.temperature} label={"GPU"} />
        </RadialGaugeContainer>

        <CenterContainer>
          <SplineAreaChartContainer>
            <SplineAreaChart cpuWatts={cpuWatts} gpuWatts={gpuWatts} />
          </SplineAreaChartContainer>

          <BarGaugeContainer>
            <BarGauge data={cpu?.load} label={"CPU Load"} />
            <BarGauge data={gpu?.load} label={"GPU Load"} />
            <BarGauge data={ram?.inUsePercent} label={"RAM Load"} />
          </BarGaugeContainer>
        </CenterContainer>

        <BottomContainer>
          {[
            { label: "CPU", value: cpu?.frequency || "0", unit: "MHz" },
            { label: "PUMP", value: cpu?.fan || "0", unit: "RPM" },
            { label: "GPU", value: gpu?.frequency || "0", unit: "MHz" },
          ].map((item, index, array) => (
            <BottomItem key={index}>
              <BottomItemLabel index={index} arrayLength={array.length}>
                {item.label}
              </BottomItemLabel>
              <p>{item.value}</p>
              <BottomItemLabel index={index} arrayLength={array.length}>
                {item.unit}
              </BottomItemLabel>
            </BottomItem>
          ))}
        </BottomContainer>
      </InnerContainer>
    </OuterContainer>
  );
});

export default KrakenDisplay;
