import React from 'react';
import { Spacing } from '@leo.97/foundation';

const Color = ({ hexCode, height = Spacing.sm, width = Spacing.sm, }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return (React.createElement("div", { style: {
            backgroundColor: hexCode,
        }, className: className }));
};

export { Color };
//# sourceMappingURL=Color.js.map
