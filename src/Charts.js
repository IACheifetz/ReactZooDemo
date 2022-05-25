import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

export default function Charts() {
  return (
    <div>
      <VictoryChart
        domainPadding={40}
      >
        <VictoryBar
          width={500}
          data={[
            { quarter: 1, earnings: 50000, colorScale: 'orange' },
            { quarter: 2, earnings: 16500, colorScale: 'blue' },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 }
          ]}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
  
      <VictoryPie
        width={500}
        colorScale={['tomato', 'black', 'gold', 'cyan']}
        data={[
          { quarter: 'Spring', earnings: 50000 },
          { quarter: 'Summer', earnings: 16500 },
          { quarter: 'Fall', earnings: 14250 },
          { quarter: 'Winter', earnings: 19000 }
        ]}
        x="quarter"
        y="earnings"
      />

    </div>
  );
}