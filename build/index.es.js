import React, { useState, useRef, useEffect } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var styles = {"line":"Xplosion-module_line__I--N8","word":"Xplosion-module_word__QV2nl","fancy":"Xplosion-module_fancy__2Onv9","outer":"Xplosion-module_outer__nd-8v","inner":"Xplosion-module_inner__6l-io","float":"Xplosion-module_float__fjOqv","letter":"Xplosion-module_letter__3joYp","background-pan":"Xplosion-module_background-pan__m4q87"};

var Xplosion = function (_a) {
    var children = _a.children, className = _a.className, textInput = _a.textInput;
    var _b = __read(useState([]), 2), lines = _b[0], setLines = _b[1];
    var containerRef = useRef(null);
    var intervalRef = useRef(null);
    useEffect(function () {
        var enhance = function (element) {
            if (element) {
                var words_1 = textInput.split(/\s+/);
                element.innerHTML = "";
                words_1.forEach(function (word, wordIndex) {
                    var wordContainer = document.createElement("span");
                    wordContainer.className = className
                        ? "".concat(styles.fancy, " ").concat(className)
                        : "".concat(styles.fancy, " ").concat(styles.word);
                    word.split("").forEach(function (value) {
                        var outer = document.createElement("span");
                        outer.className = styles.outer;
                        var inner = document.createElement("span");
                        inner.className = styles.inner;
                        var letter = document.createElement("span");
                        letter.className = styles.letter;
                        letter.innerText = value;
                        inner.appendChild(letter);
                        outer.appendChild(inner);
                        wordContainer.appendChild(outer);
                    });
                    element.appendChild(wordContainer);
                    if (wordIndex < words_1.length - 1) {
                        var space = document.createElement("span");
                        space.innerText = " ";
                        space.style.marginRight = "5px";
                        element.appendChild(space);
                    }
                });
            }
        };
        var container = containerRef.current;
        if (container) {
            enhance(container);
        }
    }, [className, textInput]);
    var startAnimation = function () {
        var iterations = Array(lines.length).fill(0);
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        var initialText = textInput;
        intervalRef.current = setInterval(function () {
            setLines(function (prevLines) {
                return prevLines.map(function (line, lineIndex) {
                    return line
                        .split("")
                        .map(function (_, index) {
                        return index < iterations[lineIndex]
                            ? initialText[index]
                            : String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    })
                        .join("");
                });
            });
            if (iterations.every(function (iteration, lineIndex) { return iteration >= lines[lineIndex].length; })) {
                if (intervalRef.current !== null) {
                    clearInterval(intervalRef.current);
                }
                setLines(function (prevLines) { return prevLines.map(function () { return initialText; }); });
            }
            iterations = iterations.map(function (iteration) { return iteration + 1; });
        }, 20);
    };
    var handleMouseOver = function () { return startAnimation(); };
    var handleMouseLeave = function () {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        setLines([]);
    };
    return React.cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave,
    }, React.createElement("div", { className: className, ref: containerRef }, lines.map(function (line, index) { return (React.createElement("span", { key: index }, line)); })));
};

export { Xplosion };
//# sourceMappingURL=index.es.js.map
