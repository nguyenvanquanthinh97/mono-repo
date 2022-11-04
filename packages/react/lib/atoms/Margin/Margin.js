import React from 'react';

const Margin = ({ space = "xs", left, right, top, bottom, children, }) => {
    let className = "";
    if (!(left || right || top || bottom)) {
        className = `dse-margin-${space}`;
    }
    if (left) {
        className = `${className} dse-margin-left-${space}`;
    }
    if (right) {
        className = `${className} dse-margin-right-${space}`;
    }
    if (top) {
        className = `${className} dse-margin-top-${space}`;
    }
    if (bottom) {
        className = `${className} dse-margin-bottom-${space}`;
    }
    return React.createElement("div", { className: className }, children);
};

export { Margin };
//# sourceMappingURL=Margin.js.map
