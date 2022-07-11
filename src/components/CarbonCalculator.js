import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export const CarbonCalculator = () => {
  return (
    <div>
      <Box sx={{ width: 300 }}>
        <div>
          <h2>Temperature</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </div>
        <div>
          <h2>Solar</h2>
          <Slider
            aria-label="Solar"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </div>
      </Box>
    </div>
  );
};
