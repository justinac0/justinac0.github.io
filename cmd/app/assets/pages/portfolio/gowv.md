---
title: gowv
---

# gowv
**gowv** is a webview wrapper for go, it's heavily based off <br>[webview/webview_go](https://github.com/webview/webview_go). It provides extra control over underlying the native window which I was looking for in [WebView](https://github.com/webview/webview).

There where two main issues that I had with the official WebView go binding:

1. Does not handle any errors returned from WebView library functions
2. No ability to handle setting window properties (icon, maximized, minimized, etc...)

![gowv](../static/img/gowv-ext.png)
> examples/extension: added extensions to base WebView go bindings.

## Extra Notes
At my current workplace I heavily use a Golang + WebView + HTMX stack for prototyping and also for creating production ready
desktop applications that integrate with embedded systems.
Using **gowv** simplifies solves the basic QoL issues I had with the offical WebView go bindings.

