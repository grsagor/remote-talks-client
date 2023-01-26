import useResponsiveSize from "../../hooks/useResponsiveSize";
import Lottie from "react-lottie";
import { Tooltip } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";

export const OutlinedButton = ({
  bgColor,
  onClick,
  Icon,
  isFocused,
  tooltip,
  badge,
  lottieOption,
  disabledOpacity,
  renderRightComponent,
  disabled,
  large,
  btnID,
  color,
  focusIconColor,
  isRequestProcessing,
  borderColor,
  buttonText,
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [blinkingState, setBlinkingState] = useState(1);

  const intervalRef = useRef();

  const iconSize = useResponsiveSize({
    xl: 24 * (large ? 1.7 : 1),
    lg: 24 * (large ? 1.7 : 1),
    md: 24 * (large ? 1.7 : 1),
    sm: 24 * (large ? 1.7 : 1),
    xs: 24 * (large ? 1.7 : 1),
  });

  const startBlinking = () => {
    intervalRef.current = setInterval(() => {
      setBlinkingState((s) => (s === 1 ? 0.4 : 1));
    }, 600);
  };

  const stopBlinking = () => {
    clearInterval(intervalRef.current);

    setBlinkingState(1);
  };

  useEffect(() => {
    if (isRequestProcessing) {
      startBlinking();
    } else {
      stopBlinking();
    }
  }, [isRequestProcessing]);

  useEffect(() => {
    return () => {
      stopBlinking();
    };
  }, []);

  return (
    <Tooltip placement="top" title={tooltip} open={mouseOver || mouseDown}>
      <div
        className={`flex items-center justify-center  rounded-lg ${
          bgColor ? `${bgColor}` : isFocused ? "bg-white" : "bg-gray-750"
        } ${
          mouseOver
            ? "border-2 border-transparent border-solid"
            : borderColor
            ? `border-2 border-[${borderColor}] border-solid`
            : bgColor
            ? "border-2 border-transparent border-solid"
            : "border-2 border-solid border-[#ffffff33]"
        } md:m-2 m-1`}
        style={{
          transition: "all 200ms",
          transitionTimingFunction: "ease-in-out",
          opacity: blinkingState,
        }}
      >
        <button
          className={`${
            disabled ? "cursor-default" : "cursor-pointer"
          } flex items-center justify-center`}
          id={btnID}
          onMouseEnter={() => {
            setMouseOver(true);
          }}
          onMouseLeave={() => {
            setMouseOver(false);
          }}
          onMouseDown={() => {
            setMouseDown(true);
          }}
          onMouseUp={() => {
            setMouseDown(false);
          }}
          disabled={disabled}
          onClick={onClick}
        >
          <div
            className="flex items-center justify-center p-1 m-1 rounded-lg"
            style={{
              opacity: disabled ? disabledOpacity || 0.7 : 1,
              transform: `scale(${mouseOver ? (mouseDown ? 0.95 : 1.1) : 1})`,
              transition: `all ${200 * 1}ms`,
              transitionTimingFunction: "linear",
            }}
          >
            {Icon &&
              (lottieOption ? (
                <div className={`flex items-center justify-center`}>
                  <Lottie
                    style={{ height: iconSize }}
                    options={lottieOption}
                    eventListeners={[{ eventName: "done" }]}
                    height={iconSize}
                    width={
                      (iconSize * lottieOption?.width) / lottieOption?.height
                    }
                    isClickToPauseDisabled
                  />
                </div>
              ) : (
                <>
                  <Icon
                    style={{
                      color: isFocused
                        ? focusIconColor || "#1C1F2E"
                        : color
                        ? color
                        : "#fff",
                      height: iconSize,
                      width: iconSize,
                    }}
                    fillcolor={
                      isFocused
                        ? focusIconColor || "#1C1F2E"
                        : color
                        ? color
                        : "#fff"
                    }
                  />
                  {badge && (
                    <p
                      className={`${
                        isFocused ? "text-black" : "text-white"
                      } text-base ml-2`}
                    >
                      {badge}
                    </p>
                  )}
                </>
              ))}
          </div>
          {buttonText ? (
            <p className="text-sm text-white font-semibold mr-2 text-center">
              {buttonText}
            </p>
          ) : null}
        </button>
        {typeof renderRightComponent === "function" && renderRightComponent()}
      </div>
    </Tooltip>
  );
};
