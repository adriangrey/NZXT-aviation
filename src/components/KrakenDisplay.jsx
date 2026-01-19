import styled from "styled-components";
import React from "react";

import RadialGauge from "./RadialGauge";
import BarGauge from "./BarGauge";
import SplineAreaChart from "./SplineAreaChart";

import useMonitoring from "../hooks/useMonitoring";

const OuterContainer = styled.div`
  background-image: url("./Frame_1.svg");
  background-position: center;
  background-size: 320px 320px;
  background-repeat: no-repeat;
  height: 320px;
  width: 320px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 12px 0 6px 0;
  box-sizing: border-box;
`;

const LiquidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 50px;
  left: 50%;
  transform: translateX(-50%);
  top: 12px;
`;

const RadialGaugeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 115px;
  gap: 0.5rem;
  margin-top: 20px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1;
  margin-top: -15px;
  margin-left: -45px;
`;

const SplineAreaChartContainer = styled.div`
  height: 120px;
  width: 135px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: visible;
  min-height: 120px;
  padding-top: 0px;
`;

const BarGaugeContainer = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: -40px;
  align-items: stretch;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 20px;
  margin-top: -24px;
`;

const BottomItem = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomItemLabel = styled.p`
  font-size: 0.5rem;
  text-align: center;
  margin: 0;
  line-height: 1;
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
              fontSize: "0.55rem",
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
              <p style={{ margin: "0.1rem 0", textAlign: "center" }}>{item.value}</p>
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
