// https://chromium.googlesource.com/chromium/src/third_party/+/refs/heads/main/blink/renderer/core/html/resources/html.css
/*
* The default style sheet used to render HTML.
*
* Copyright (C) 2000 Lars Knoll (knoll@kde.org)
* Copyright (C) 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011 Apple Inc. All rights reserved.
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU Library General Public
* License as published by the Free Software Foundation; either
* version 2 of the License, or (at your option) any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* Library General Public License for more details.
*
* You should have received a copy of the GNU Library General Public License
* along with this library; see the file COPYING.LIB.  If not, write to
* the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
* Boston, MA 02110-1301, USA.
*
*/
const style = {
  "html": {
    display: "block",
  },
  /* generic block-level elements */
  "body": {
    display: "block",
    margin: "8px",
  },
  "body:-webkit-full-page-media": {
    backgroundColor: "rgb(0, 0, 0)",
  },
  "p": {
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
  },
  "div": {
    display: "block",
  },
  "layer": {
    display: "block",
  },
  "article, aside, footer, header, hgroup, main, nav, section": {
    display: "block",
  },
  "marquee": {
    display: "inlineBlock",
    width: "-webkit-fill-available",
  },
  "address": {
    display: "block",
  },
  "blockquote": {
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "40px",
    marginInlineEnd: "40px",
  },
  "figcaption": {
    display: "block",
  },
  "figure": {
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "40px",
    marginInlineEnd: "40px",
  },
  "q": {
    display: "inline",
  },
  "q:before": {
    content: "open-quote",
  },
  "q:after": {
    content: "close-quote",
  },
  "center": {
    display: "block",
    /* special centering to be able to emulate the html4/netscape behaviour */
    textAlign: "-webkit-center",
  },
  "hr": {
    display: "block",
    overflow: "hidden",
    unicodeBidi: "isolate",
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.5em",
    marginInlineStart: "auto",
    marginInlineEnd: "auto",
    borderStyle: "inset",
    borderWidth: "1px",
  },
  "map": {
    display: "inline",
  },
  "video": {
    objectFit: "contain",
  },
  "video:-webkit-full-page-media": {
    margin: "auto",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  "audio:not([controls])": {
    display: "none !important",
  },
  "audio": {
    width: "300px",
    height: "54px",
  },
  /* heading elements */
  "h1": {
    display: "block",
    fontSize: "2em",
    marginBlockStart: "0.67em",
    marginBlockEnd: "0.67em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    fontWeight: "bold",
  },
  ":-webkit-any(article,aside,nav,section) h1": {
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
  },
  ":-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1": {
    fontSize: "1.17em",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
  },
  ":-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1": {
    fontSize: "1.00em",
    marginBlockStart: "1.33em",
    marginBlockEnd: "1.33em",
  },
  ":-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1": {
    fontSize: ".83em",
    marginBlockStart: "1.67em",
    marginBlockEnd: "1.67em",
  },
  ":-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1": {
    fontSize: ".67em",
    marginBlockStart: "2.33em",
    marginBlockEnd: "2.33em",
  },
  "h2": {
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    fontWeight: "bold",
  },
  "h3": {
    display: "block",
    fontSize: "1.17em",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    fontWeight: "bold",
  },
  "h4": {
    display: "block",
    marginBlockStart: "1.33em",
    marginBlockEnd: "1.33em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    fontWeight: "bold",
  },
  "h5": {
    display: "block",
    fontSize: ".83em",
    marginBlockStart: "1.67em",
    marginBlockEnd: "1.67em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    fontWeight: "bold",
  },
  "h6": {
    display: "block",
    fontSize: ".67em",
    marginBlockStart: "2.33em",
    marginBlockEnd: "2.33em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    fontWeight: "bold",
  },
/* tables */
  "table": {
    display: "table",
    borderCollapse: "separate",
    borderSpacing: "2px",
    borderColor: "gray",
    boxSizing: "border-box",
    textIndent: "initial",
  },
  "thead": {
    display: "table-header-group",
    verticalAlign: "middle",
    borderColor: "inherit",
  },
  "tbody": {
    display: "table-row-group",
    verticalAlign: "middle",
    borderColor: "inherit",
  },
  "tfoot": {
    display: "table-footer-group",
    verticalAlign: "middle",
    borderColor: "inherit",
  },
  /* for tables without table section elements (can happen with XHTML or dynamically created tables) */
  "table > tr": {
    verticalAlign: "middle",
  },
  "col": {
    display: "table-column",
  },
  "colgroup": {
    display: "table-column-group",
  },
  "tr": {
    display: "table-row",
    verticalAlign: "inherit",
    borderColor: "inherit",
  },
  "td, th": {
    display: "table-cell",
    verticalAlign: "inherit",
  },
  "th": {
    fontWeight: "bold",
    textAlign: "-internal-center",
  },
  "caption": {
    display: "table-caption",
    textAlign: "-webkit-center",
  },
  /* lists */
  "ul, menu, dir": {
    display: "block",
    listStyleType: "disc",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    paddingInlineStart: "40px",
  },
  "ol": {
    display: "block",
    listStyleType: "decimal",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
    paddingInlineStart: "40px",
  },
  "li": {
    display: "list-item",
    textAlign: "-webkit-match-parent",
  },
  "ul ul, ol ul": {
    listStyleType: "circle",
  },
  "ol ol ul, ol ul ul, ul ol ul, ul ul ul": {
    listStyleType: "square",
  },
  "dd": {
    display: "block",
    marginInlineStart: "40px",
  },
  "dl": {
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0",
    marginInlineEnd: "0",
  },
  "dt": {
    display: "block",
  },
  "ol ul, ul ol, ul ul, ol ol": {
    marginBlockStart: "0",
    marginBlockEnd: "0",
  },
  /* form elements */
  "form": {
    display: "block",
    marginTop: "0em",
  },
  ":-webkit-any(table, thead, tbody, tfoot, tr) > form:-internal-is-html": {
    display: "none !important",
  },
  "label": {
    cursor: "default",
  },
  "legend": {
    display: "block",
    paddingInlineStart: "2px",
    paddingInlineEnd: "2px",
    border: "none",
  },
  "fieldset": {
    display: "block",
    marginInlineStart: "2px",
    marginInlineEnd: "2px",
    paddingBlockStart: "0.35em",
    paddingInlineStart: "0.75em",
    paddingInlineEnd: "0.75em",
    paddingBlockEnd: "0.625em",
    border: "2px groove ThreeDFace",
    minInlineSize: "min-content",
  },
  "button": {
    appearance: "auto",
  },
  /* Form controls don't go vertical. */
  "input, textarea, select, button, meter, progress": {
    WebkitWritingMode: "horizontal-tb !important",
  },
  "input, textarea, select, button": {
    margin: "0em",
    font: "-webkit-small-control",
    textRendering: "auto",
    color: "-internal-light-dark(black, white)",
    letterSpacing: "normal",
    wordSpacing: "normal",
    lineHeight: "normal",
    textTransform: "none",
    textIndent: "0",
    textShadow: "none",
    display: "inlineBlock",
    textAlign: "start",
  },
  "textarea": {
    appearance: "auto",
    border: "1px solid -internal-light-dark(#767676, #858585)",
    columnCount: "initial !important",
    WebkitRtlOrdering: "logical",
    resize: "auto",
    cursor: "text",
    padding: "2px",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    backgroundColor: "-internal-light-dark(#ffffff, #3B3B3B)",
    fontFamily: "monospace",
  },
  "area": {
    display: "inline",
  },
  "base, basefont, datalist, head, link, meta, noembed, noframes, param, rp, script, style, template, title": {
    display: "none",
  },
  "pre, xmp, plaintext, listing": {
    display: "block",
    fontFamily: "monospace",
    whiteSpace: "pre",
    margin: "1em 0",
  },
};
export default style;