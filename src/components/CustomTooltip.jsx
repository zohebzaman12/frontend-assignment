import React from 'react';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black text-white p-2 rounded">
                <p>{`${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
