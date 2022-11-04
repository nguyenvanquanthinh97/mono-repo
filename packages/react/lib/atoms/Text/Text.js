import React from 'react';
import { FontSize } from '@leo.97/foundation';

const Text = ({ size = FontSize.base, children, }) => {
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text };
//# sourceMappingURL=Text.js.map
