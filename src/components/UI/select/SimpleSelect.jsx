import React from 'react';
import module from './SimpleSelect.module.css';

const SimpleSelect = ({ options, defaultValue, value, onChange, ...props }) => {
    return (
        <select
            className={module.simpleSelect}
            value={value}
            onChange={e => onChange(e.target.value)}
            {...props}>
            <option value=''>{defaultValue}</option>
            {options.map(op =>
                <option key={op.value} value={op.value}>{op.name}</option>
            )}
        </select>
    );
}

export default SimpleSelect;
