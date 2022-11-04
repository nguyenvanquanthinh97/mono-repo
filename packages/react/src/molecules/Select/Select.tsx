import React, {
  createRef,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import { Text } from "../../atoms/Text";

const KEY_CODES = {
  ENTER: "Enter",
  SPACE: "Space",
  DOWN_ARROW: "ArrowDown",
  ESC: "Escape",
  UP_ARROW: "ArrowUp",
};

interface SelectOption {
  label: string;
  value: string;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const getPreviousOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOption>
) => {
  if (currentIndex === null) {
    return 0;
  }

  if (currentIndex === 0) {
    return options.length - 1;
  }

  return currentIndex - 1;
};

const getNextOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOption>
) => {
  if (currentIndex === null) {
    return 0;
  }

  if (currentIndex === options.length - 1) {
    return 0;
  }

  return currentIndex + 1;
};

export const Select: React.FC<SelectProps> = ({
  onOptionSelected: handler,
  options = [],
  label = "Please select an option ...",
  renderOption,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState(false);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [optionRefs, setOptionRefs] = useState<
    React.RefObject<HTMLLIElement>[]
  >([]);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  let selectedOption = null;
  if (selectedIndex != null) {
    selectedOption = options[selectedIndex];
  }

  const onOptionHandler = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }

    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const highlightOption = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex);
  };

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    if (
      [KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(
        event.key
      )
    ) {
      setIsOpen(true);

      // set focus on the list item
      highlightOption(0);
    }
  };

  const onOptionKeyDown: KeyboardEventHandler = (event) => {
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
      onOptionHandler(options[highlightedIndex!], highlightedIndex!);
    }
  };

  useEffect(() => {
    setOptionRefs(options.map((_) => createRef<HTMLLIElement>()));
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

  return (
    <div className="dse-select">
      <button
        data-testid="DseSelectButton"
        ref={labelRef}
        className="dse-select__label"
        onClick={onLabelClick}
        onKeyDown={onButtonKeyDown}
        aria-haspopup={true}
        aria-expanded={isOpen}
        aria-controls="dse-select-list"
      >
        <Text>{selectedOption == null ? label : selectedOption.label}</Text>
        <svg
          className={`dse-select__caret
          ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`}
          height="1rem"
          width="1rem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <ul
        id="dse-select-list"
        style={{ top: overlayTop }}
        className={`dse-select__overlay ${
          isOpen && "dse-select__overlay--open"
        }`}
        role="menu"
      >
        {options?.map((option, optionIndex) => {
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

          return (
            <li {...renderOptionProps.getOptionRecommendedProps()}>
              <Text>{option.label}</Text>
              {isSelected && (
                <svg
                  width="1rem"
                  height="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
