import React from 'react';
import { FontSize } from '@ds.e/foundation';

const Text = ({ size = FontSize.base, children, }) => {
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text };
//# sourceMappingURL=Text.js.map
