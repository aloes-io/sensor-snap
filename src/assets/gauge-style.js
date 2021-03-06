const gaugeStyle = conf => {
  return `svg.sensor-gauge {
  font-family: ${conf.fontFamily};
  --font-color: ${conf.fontColor};
  --primary-color: ${conf.primaryColor};
  --secondary-color: ${conf.secondaryColor};
  --success: ${conf.successColor};
  --warning: ${conf.warningColor};
  --danger: ${conf.dangerColor};
  --border: 1px solid transparent;
  --box-shadow: 0 ${conf.width / 50}px ${conf.width / 35}px 0px #6e6e6e;
  --box-shadow-selected: 0 ${conf.width / 75}px ${conf.width /
    100}px 0px #6e6e6e;
  text-align: center;
}
svg.sensor-gauge > path.dial {
  stroke: #eee;
  stroke-width: ${conf.width / 40}px;
  fill: rgba(0,0,0,0);
}
svg.sensor-gauge > path.value {
  stroke: rgb(47, 227, 255);
  stroke-width: ${conf.width / 30}px;
  fill: rgba(0,0,0,0);
}
svg.sensor-gauge > text.value-text {
  text-anchor: middle;
  alignment-baseline: middle;
  dominant-baseline: central;
  fill: var(--primary-color);
  font-family: ${conf.fontFamily2};
  font-size: ${conf.height / 20}px;
}
svg.sensor-gauge > g > text.sensor-resources {
  font-size: ${conf.height / 30}px;
  fill: var(--font-color); 
  font-weight: 400;
  text-anchor: middle;
  alignment-baseline: middle:
  dominant-baseline: central;
}
svg.sensor-gauge > g > text > tspan.editable-resource {
  cursor: pointer;
}
image.meter_needle {
  transform-origin: bottom center;
  transform: rotate(270deg);
}`;
};

export default gaugeStyle;
