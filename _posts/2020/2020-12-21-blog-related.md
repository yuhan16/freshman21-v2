---
layout: post
title: Building up my own blog
modified: 2014-12-19
categories: [Programming, Web]
tags: [web programming, jekyll, html, css]
comments: true
excerpt_separator: <!--more-->
---



I have always been eager to build my personal blog from sketch. Now it comes true! This is not as simple as I thought before. So I think it is better take some notes about what I have learned along the way. Since I have zero background in web programming, some of the notes may be too easy for experts. Also, there are aubndnat reserouces in the Internet and I will refer to the ones which helped me during the learning.

<!--more-->

So let me start from how to select the tools.



## Static Site Generators

When the web server processes our request to show some webpage, it returns the HTML file stored in the serve, so that our browser can display the content. The HTML file has to be complete to be displayed in the browser. Normally, an HTML file needs to follow some format rules and contains the **head** and **body** elements. For example, 

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

We can refer to [HTML Tutorial](https://www.w3schools.com/html/) to learn the HTML basics. The style sheet for display is defined in `<head>`. 

Therefore, each webpage corresponds to an HTML file. When we open different pages, we actually receive different HTML files. 

This can be troublesome because HTML files are in general lengthy and complex. Besides, we also have to determine which element to use in `<body>` and how to display them. For example, if we want to write multiple paragraph in HTML, we have to use `<p>` for each paragraph. Writing HTML directly is never easy. If we want to create multiple pages, for example, writing two different blogs, then we have to create two exhausting HTML files.

Do we have some other ways to save our work?

The answer is positive. In fact we can use templates to manage the same layout. If we want to write two blogs, the only difference between the two is actually the content. Therefore, we can define some templates to use so that we only need to focus on writing our blogs instead of worrying about writing a complete HTML file. This is what a site generator does: automating the site generation.

Before talking about the static site generator, we should first figure out what are static and dynamic website. There are two tutorial on GitLab talking a static and dybnamic website, which I think is useful.

- [SSGs Part 1: A Static vs Dynamic Website](https://about.gitlab.com/blog/2016/06/03/ssg-overview-gitlab-pages-part-1-dynamic-x-static/)

- [SSGs Part 2: What are modern static site generators](https://about.gitlab.com/blog/2016/06/10/ssg-overview-gitlab-pages-part-2/)

In short, a dynamic website support user interactions such as online calculation and manipulating data. The user operations are processed by the web server. Then the result is generated and sent back to the user. In a static website, users simply look the pre-generated content, and there are no interactions.

The static site generator, as the name suggests, generates pre-written HTML files for users to refer to. The SSG is very suitable for personal blog website because there are few interactions when we read blogs. The major objective of a blog website is to present the content to users. It is an automation tool that allow people only focus on the important part of write a blog: the content.

There are many SSGs available. For example, [Next.js]([https://nextjs.org](https://nextjs.org/)), [Jekyll](https://jekyllrb.com), [Hugo](https://gohugo.io/). [Gatsby](https://www.gatsbyjs.com/), [Nuxt](https://nuxtjs.org/). Any of them does a good job.



## Jekyll

The reason I choose Jekyll, well..., is because the Github only support it when I do the first search. I know that WordPress has a lot of fantastic templates to choose. But I still have to buy a domain name. Why not use the free resource? Besides, it is not exciting to use template at all. I want to create my own website.

