import { useContext } from "react";
import { useTranslation } from "react-i18next";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { DetailContext } from "./detailProvider";

function ShoppingListChart() {
  const { data } = useContext(DetailContext);
  const {t} = useTranslation()

  const ShoppingListResolved = data?.itemList.filter((item) => item.resolved) || [];
  const ShoppingListNotResolved =
    data?.itemList.filter((item) => !item.resolved) || [];

  const chartData = [
    { name: t("solved"), value: ShoppingListResolved.length },
    { name: t("unsolved"), value: ShoppingListNotResolved.length },
  ];

  const COLORS = ["#8A6A61", "#D77A61", "#6A3E32", "#B84424"];

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ShoppingListChart;