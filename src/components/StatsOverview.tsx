import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar } from "recharts";

// Sample chart data for each metric
const generateChartData = (trend: string) => {
  const baseValue = Math.random() * 100;
  return Array.from({ length: 12 }, (_, i) => ({
    time: i,
    value: trend === 'increase' 
      ? baseValue + Math.random() * 20 + i * 2
      : trend === 'decrease'
      ? baseValue - Math.random() * 10 - i
      : baseValue + (Math.random() - 0.5) * 10
  }));
};

const stats = [
  {
    title: "Current TPS",
    value: "0",
    unit: "TPS",
    timeframe: "60m",
    chartData: generateChartData('neutral'),
    color: "hsl(var(--primary))"
  },
  {
    title: "Success Rate",
    value: "0.0",
    unit: "%",
    timeframe: "live",
    chartData: generateChartData('neutral'),
    color: "hsl(var(--primary))"
  },
  {
    title: "Gas Price",
    value: "2.04",
    unit: "Gwei",
    timeframe: "1m",
    chartData: generateChartData('increase'),
    color: "hsl(var(--warning))"
  },
  {
    title: "Block Fullness",
    value: "0.0",
    unit: "%",
    timeframe: "1m",
    chartData: generateChartData('neutral'),
    color: "hsl(var(--primary))"
  },
  {
    title: "Mempool Size",
    value: "64",
    unit: "txs",
    timeframe: "live",
    chartData: generateChartData('increase'),
    color: "hsl(var(--primary))"
  },
  {
    title: "Finality",
    value: "3",
    unit: "ms",
    timeframe: "1m",
    chartData: generateChartData('increase'),
    color: "hsl(var(--primary))"
  },
  {
    title: "Max Fee",
    value: "0.00004152",
    unit: "CLAYER",
    timeframe: "60m",
    chartData: generateChartData('decrease'),
    color: "hsl(var(--destructive))"
  },
  {
    title: "Median Fee",
    value: "0.000042",
    unit: "CLAYER",
    timeframe: "1m",
    chartData: generateChartData('decrease'),
    color: "hsl(var(--destructive))"
  }
];

export const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="relative overflow-hidden border-l-4 bg-gradient-to-br from-card/95 to-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
          style={{ borderLeftColor: stat.color }}
        >
          {/* Header with title and timeframe */}
          <div className="flex items-center justify-between p-4 pb-2">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: stat.color }}
              ></div>
              <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
            </div>
            <span className="text-xs text-muted-foreground/70">{stat.timeframe}</span>
          </div>

          {/* Mini chart */}
          <div className="px-4 h-12 mb-2">
            <ChartContainer
              config={{
                value: {
                  label: "Value",
                  color: stat.color,
                },
              }}
              className="h-full w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stat.chartData}>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={stat.color}
                    strokeWidth={1.5}
                    fill={stat.color}
                    fillOpacity={0.2}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Value and unit */}
          <div className="px-4 pb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.unit}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};