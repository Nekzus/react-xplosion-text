'use strict';

var React = require('react');

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


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root {\n  --blue: rgb(41, 121, 255);\n  --green: rgb(42, 252, 152);\n  --yellow: rgb(255, 255, 0);\n  --pink: rgb(230, 94, 230);\n  --orange: rgb(255, 165, 0);\n  --white: rgb(241, 241, 241);\n  --gray: rgb(99, 97, 99);\n}\n\n.Xplosion-module_blueColor__jeMVz {\n  --hover-background: linear-gradient(\n    to right,\n    var(--blue),\n    var(--green),\n    var(--blue)\n  );\n}\n\n.Xplosion-module_greenColor__Y95Tt {\n  --hover-background: linear-gradient(\n    to right,\n    var(--green),\n    var(--yellow),\n    var(--green)\n  );\n}\n\n.Xplosion-module_pinkColor__b-Du4 {\n  --hover-background: linear-gradient(\n    to right,\n    var(--pink),\n    var(--blue),\n    var(--pink)\n  );\n}\n\n.Xplosion-module_orangeColor__AXZwD {\n  --hover-background: linear-gradient(\n    to right,\n    var(--orange),\n    var(--pink),\n    var(--orange)\n  );\n}\n\n.Xplosion-module_darkColor__YzJyb {\n  --hover-background: linear-gradient(\n    to right,\n    var(--white),\n    var(--gray),\n    var(--white)\n  );\n}\n\n.Xplosion-module_lightColor__bjp1k {\n  --hover-background: linear-gradient(\n    to right,\n    var(--gray),\n    var(--white),\n    var(--gray)\n  );\n}\n\n@keyframes Xplosion-module_float__fjOqv {\n  from,\n  to {\n    transform: translateY(-0%);\n  }\n\n  50% {\n    transform: translateY(-3%);\n  }\n}\n\n@keyframes Xplosion-module_background-pan__m4q87 {\n  from {\n    background-position: 1000% center;\n  }\n\n  to {\n    background-position: 0% center;\n  }\n}\n\n.Xplosion-module_word__QV2nl {\n  color: var(--white);\n  font-size: clamp(2rem, 8vw, 10rem);\n  font-family: \"Rubik\", sans-serif;\n  margin: 0rem;\n  text-transform: uppercase;\n  transition: opacity 250ms ease;\n  font-weight: normal;\n}\n\na {\n  text-decoration: none;\n}\n\n.Xplosion-module_fancy__2Onv9 span {\n  display: inline-block;\n}\n\n.Xplosion-module_fancy__2Onv9 > .Xplosion-module_outer__nd-8v {\n  transition: transform 350ms ease;\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v {\n  transition-duration: 800ms;\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v > .Xplosion-module_inner__6l-io {\n  animation: Xplosion-module_float__fjOqv 5s ease infinite;\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v > .Xplosion-module_inner__6l-io > .Xplosion-module_letter__3joYp {\n  background: var(--hover-background);\n  background-size: 1000%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: Xplosion-module_background-pan__m4q87 150s linear infinite;\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(1) {\n  transform: translate(-80%, 60%) rotate(8deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(2) {\n  transform: translate(-40%, 20%) rotate(4deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(3) {\n  transform: translate(-10%, 60%) rotate(-6deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(4) {\n  transform: translate(0%, 8%) rotate(-8deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(5) {\n  transform: translate(0%, -20%) rotate(5deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(6) {\n  transform: translate(0%, 20%) rotate(-3deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(7) {\n  transform: translate(0%, -40%) rotate(-5deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(8) {\n  transform: translate(0%, 15%) rotate(10deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(9) {\n  transform: translate(0%, -50%) rotate(8deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(10) {\n  transform: translate(0%, 15%) rotate(-6deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(11) {\n  transform: translate(50%, -10%) rotate(-3deg);\n}\n\n.Xplosion-module_fancy__2Onv9:hover > .Xplosion-module_outer__nd-8v:nth-child(12) {\n  transform: translate(120%, -30%) rotate(-10deg);\n}\n";
var styles = {"blueColor":"Xplosion-module_blueColor__jeMVz","greenColor":"Xplosion-module_greenColor__Y95Tt","pinkColor":"Xplosion-module_pinkColor__b-Du4","orangeColor":"Xplosion-module_orangeColor__AXZwD","darkColor":"Xplosion-module_darkColor__YzJyb","lightColor":"Xplosion-module_lightColor__bjp1k","word":"Xplosion-module_word__QV2nl","fancy":"Xplosion-module_fancy__2Onv9","outer":"Xplosion-module_outer__nd-8v","inner":"Xplosion-module_inner__6l-io","float":"Xplosion-module_float__fjOqv","letter":"Xplosion-module_letter__3joYp","background-pan":"Xplosion-module_background-pan__m4q87"};
styleInject(css_248z);

var Xplosion = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.colorClassName, colorClassName = _b === void 0 ? "blueColor" : _b, style = _a.style, textInput = _a.textInput;
    var _c = __read(React.useState([]), 2), lines = _c[0], setLines = _c[1];
    var containerRef = React.useRef(null);
    var intervalRef = React.useRef(null);
    React.useEffect(function () {
        var enhance = function (element) {
            if (element) {
                var words_1 = textInput.split(/\s+/);
                element.innerHTML = "";
                words_1.forEach(function (word, wordIndex) {
                    var wordContainer = document.createElement("span");
                    var wordContainerClass = styles.fancy;
                    if (className) {
                        wordContainerClass += " ".concat(className);
                    }
                    if (colorClassName) {
                        wordContainerClass += " ".concat(styles[colorClassName]);
                    }
                    wordContainer.className = wordContainerClass;
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
    }, [className, colorClassName, textInput]);
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
    }, React.createElement("div", { className: className, style: __assign({}, style), ref: containerRef }, lines.map(function (line, index) { return (React.createElement("span", { key: index }, line)); })));
};

exports.Xplosion = Xplosion;
//# sourceMappingURL=index.cjs.js.map
