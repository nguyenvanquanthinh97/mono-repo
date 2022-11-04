import React, { useState, useRef, useEffect, createRef } from 'react';
import { Text } from '../../atoms/Text/Text.js';

const KEY_CODES = {
    ENTER: "Enter",
    SPACE: "Space",
    DOWN_ARROW: "ArrowDown",
    ESC: "Escape",
    UP_ARROW: "ArrowUp",
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const Select = ({ onOptionSelected: handler, options = [], label = "Please select an option ...", renderOption, }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [optionRefs, setOptionRefs] = useState([]);
    const [overlayTop, setOverlayTop] = useState(0);
    let selectedOption = null;
    if (selectedIndex != null) {
        selectedOption = options[selectedIndex];
    }
    const onOptionHandler = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    const highlightOption = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    const onButtonKeyDown = (event) => {
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.key)) {
            setIsOpen(true);
            // set focus on the list item
            highlightOption(0);
        }
    };
    const onOptionKeyDown = (event) => {
        if (event.key === KEY_CODES.ESC) {
            setIsOpen(false);
            return;
        }
        if (event.key === KEY_CODES.DOWN_ARROW) {
            highlightOption(getNextOptionIndex(highlightedIndex, options));
        }
        if (event.key === KEY_CODES.UP_ARROW) {
            highlightOption(getPreviousOptionIndex(highlightedIndex, options));
        }
        if (event.key === KEY_CODES.ENTER) {
            onOptionHandler(options[highlightedIndex], highlightedIndex);
        }
    };
    useEffect(() => {
        setOptionRefs(options.map((_) => createRef()));
    }, [options.length]);
    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    useEffect(() => {
        setOverlayTop((labelRef.current?.clientHeight || 0) + 10);
    }, [labelRef.current?.clientHeight]);
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { "data-testid": "DseSelectButton", ref: labelRef, className: "dse-select__label", onClick: onLabelClick, onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen, "aria-controls": "dse-select-list" },
            React.createElement(Text, null, selectedOption == null ? label : selectedOption.label),
            React.createElement("svg", { className: `dse-select__caret
          ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, height: "1rem", width: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { id: "dse-select-list", style: { top: overlayTop }, className: "dse-select__overlay", role: "menu" }, options?.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const isHighlighted = highlightedIndex === optionIndex;
            const ref = optionRefs[optionIndex];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                    return {
                        className: `dse-select__option 
                    ${isSelected ? "dse-select__option--selected" : ""}
                    ${isHighlighted ? "dse-select__option--highlighted" : ""}
                  `,
                        role: "menuitemradio",
                        ref,
                        key: option.value,
                        onClick: () => onOptionHandler(option, optionIndex),
                        onKeyDown: onOptionKeyDown,
                        tabIndex: isHighlighted ? 0 : -1,
                        onMouseEnter: () => highlightOption(optionIndex),
                        onMouseLeave: () => highlightOption(null),
                        ...overrideProps,
                    };
                },
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
                React.createElement(Text, null, option.label),
                isSelected && (React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "{1.5}", stroke: "currentColor" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" })))));
        })))));
};

export { Select };
//# sourceMappingURL=Select.js.map
