import React, { useEffect, useRef, useState } from "react";
import styles from "./Xplosion.module.css";

interface XplosionProps {
  children: React.ReactNode;
  className?: string;
  colorClassName?:
    | "blueColor"
    | "greenColor"
    | "pinkColor"
    | "orangeColor"
    | "darkColor"
    | "lightColor";
  style?: React.CSSProperties;
  textInput: string;
}

const Xplosion: React.FC<XplosionProps> = ({
  children,
  className,
  colorClassName = "blueColor",
  style,
  textInput,
}) => {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const enhance = (element: HTMLElement) => {
      if (element) {
        const words = textInput.split(/\s+/);
        element.innerHTML = "";

        words.forEach((word, wordIndex) => {
          const wordContainer = document.createElement("span");
          let wordContainerClass = styles.fancy;

          if (className) {
            wordContainerClass += ` ${className}`;
          }

          if (colorClassName) {
            wordContainerClass += ` ${styles[colorClassName]}`;
          }

          wordContainer.className = wordContainerClass;

          word.split("").forEach((value) => {
            const outer = document.createElement("span");
            outer.className = styles.outer;

            const inner = document.createElement("span");
            inner.className = styles.inner;

            const letter = document.createElement("span");
            letter.className = styles.letter;
            letter.innerText = value;

            inner.appendChild(letter);
            outer.appendChild(inner);
            wordContainer.appendChild(outer);
          });

          element.appendChild(wordContainer);

          if (wordIndex < words.length - 1) {
            const space = document.createElement("span");
            space.innerText = " ";
            space.style.marginRight = "5px";
            element.appendChild(space);
          }
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      enhance(container);
    }
  }, [className, colorClassName, textInput]);

  const startAnimation = () => {
    let iterations: number[] = Array(lines.length).fill(0);

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    const initialText = textInput;

    intervalRef.current = setInterval(() => {
      setLines((prevLines) =>
        prevLines.map((line, lineIndex) => {
          return line
            .split("")
            .map((_, index) =>
              index < iterations[lineIndex]
                ? initialText[index]
                : String.fromCharCode(65 + Math.floor(Math.random() * 26))
            )
            .join("");
        })
      );

      if (
        iterations.every(
          (iteration, lineIndex) => iteration >= lines[lineIndex].length
        )
      ) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
        setLines((prevLines) => prevLines.map(() => initialText));
      }

      iterations = iterations.map((iteration) => iteration + 1);
    }, 20);
  };

  const handleMouseOver = () => startAnimation();

  const handleMouseLeave = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setLines([]);
  };

  return React.cloneElement(
    children as React.ReactElement,
    {
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave,
    },
    <div className={className} style={{ ...style }} ref={containerRef}>
      {lines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  );
};

export default Xplosion;
