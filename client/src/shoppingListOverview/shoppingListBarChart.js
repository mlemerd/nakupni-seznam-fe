import React, { useContext } from 'react';
import { ShoppingListContext } from './shoppingListItem';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ShoppingListBarChart() {
    const { shoppingListOverviewList } = useContext(ShoppingListContext);

    // Příprava dat pro graf
    const data = shoppingListOverviewList.map(list => ({
        name: list.name,
        itemCount: list.itemList ? list.itemList.length : 0
    }));

    return (
        <ResponsiveContainer color="#F3E8E2" width="90%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" tick={{ fill: '#F3E8E2' }} />
                <YAxis tick={{ fill: '#F3E8E2' }} /> 
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#131516', color: '#131516' }} />
                <Legend wrapperStyle={{ color: '#D77A61' }} />
                <Bar 
                    dataKey="itemCount" 
                    fill="#D77A61" 
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ShoppingListBarChart;
