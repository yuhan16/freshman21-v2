---
layout: post
title: "Mathjax in Jekyll Notes"
date: 2021-11-03
category: Miscellaneous
tags: jekyll html mathjax
logo: https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/MathJax.svg/1024px-MathJax.svg.png
excerpt: "We summarize the basic usage of mathjax in Jekyll notes. We also provide some examples of writing math equations."
---

## MathJax
We can use [MathJax](https://www.mathjax.org/) to nicely display latex math formula in Jekyll notes. 

We can use a picture to show math formula in a webpage, but it can be troublesome to make modifications. The most efficient way to write math formula is by LaTex. MathJax can be viewed as a plugin that converts the LaTex code to HTML and then display it.  

To enable MathJax, we simply need to add the following to `_include/head.html`:
```html
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']],
        processEscapes: true
      },
      "HTML-CSS": { scale: 90 }
    });
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```

## MathJax Configurations
We add inline math delimiter pairs `[$,$]` so that mathjax can recognize it. Note that `$ $` is not recognized by default.

The option `processEscapes: true` means that we can use `\$` to produce a literal dollar sign. Otherwise, MathJax will interpret every `$` sign as inline math delimiters.

We can also define LaTex macros such as `\R` as `\mathbb{R}`, as shown in [TeX Extension Options](https://docs.mathjax.org/en/latest/options/input/tex.html#tex-extension-options-1).

We can also change the math font size with `HTML-CSS` option: [Changing mathjax's font size](https://stackoverflow.com/questions/19086152/changing-mathjaxs-font-size). Note that we need `.` for different settings in `MathJax.Hub.Config`.

See [TeX Input Processor Options](https://docs.mathjax.org/en/latest/options/input/tex.html) for more detailed configurations.


## Examples
For inline math, we can simple write $f(x) = \log(x) + e^{2y}$ or \\( f(x) = 3x + 2y \\).

For independent math equations, we can either use the `equation` environment or the `$$` environments:
\begin{equation}
\begin{split}
	f(x) &= ax^2 + \log(x) \\ 
	g(x) &= kx+b
\end{split}
\end{equation}
or

$$
\begin{align}
	f(x) &= ax^2 + \log(x) \\ 
	g(x) &= kx+b
\end{align}
$$

**Note:** we do not need to add additional `$$` before the `equation` environment. The two have the same function.

We can also use `label` and `tag` to reference the equation in the same webpage.
\begin{equation}
\label{eq:1}
\tag{1}
f(x) = 1.
\end{equation}
We reference the equation \eqref{eq:1} here.

**Note:** the `label` and `tag` attributes should appear or disappear in the `equation` environment at the same time. If both of them are not used in the `equation` environment, the equation will act as the `equation*` environment. 


### Display in a Separate Line
Mathjax will interpret the `$$` environment in the Markdown file to `\[ \]` and then display the content. It will not translate the `equation` environment. However, in Markdown we need a blank line to separate the content. Therefore, the equation in the following case will be treated as inline math:
```html
This is a beginning line without extra blank lines after.
$$ f(x) = ax + by. $$
This is an ending line with out extra blank lines before.
```

This is a beginning line without extra blank lines after.
$$
f(x) = ax + by.
$$
This is an ending line with out extra blank lines before.

**Note:** In Markdown files, we need an extra **blank line** before and after `$$` to display the formula in a separate line.

However, in an HTML element, for example &lt;p&gt;, we do not need to worry about the extra blank lines because Markdown interpreter will not change the content. For example,
```html
<p>
This a line before the equation.
$$ f(x) = ax^2 + \log(x). $$
and this is a line after the equation.
</p>
```

<p>
This a line before the equation.
$$
	f(x) = ax^2 + \log(x).
$$
and this is a line after the equation.
</p>

In the equation environment, we do not need to worry about extra blank lines in both cases.
<p>
I have an equation here
\begin{equation}
	f(x) = ax^2 + \log(x)
\end{equation}
and this is a line after the equation.
</p>


## Some Tips
1. MathJax does not support the `split` environment. Instead, we can use the `align` environments or `aligned` within the `equation` environment.

2. We can use `code` environment to display LaTex code:
```latex
\begin{equation}
	f(x) = ax^2 + \log(x)
\end{equation}
```


## Reference
[1] [Math Support in Jekyll](http://blog.lostinmyterminal.com/webpages/2015/01/09/math-support-in-jekyll.html)

[2] [Use MathJax to write Equations in Jekyll blogs](http://zjuwhw.github.io/2017/06/04/MathJax.html)