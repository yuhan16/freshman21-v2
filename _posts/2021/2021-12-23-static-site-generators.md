---
layout: post
title: Static Site Generators
modified: 2021-12-23
categories: Web
tags: [SSG, static site generator, html, css, github pages]
comments: true
logo:
excerpt_separator: <!--more-->
---

I have discussed the difference between static and dynamic web pages in [xxx]. In this post, I will write some of my understanding of Jekyll and static site generators.

<!--more-->


## Static Site Generators

Static site generators (SSGs) are the software that generates and publish static HTML files from dynamic writing. In other words, they achieve two goals:

- automate static web page generation;
- publish the generated web pages locally for preview.

### Some Background of HTML

Every static web page is a complete HTML file. A simple example of a complete HTML file is like this:

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

The web page title and the style sheet for display are defined in `<head>`, and the content is written in `<body>`. In short, an HTML file has to follow some rules to be displayed by the browser correctly. We refer to [HTML Tutorial](https://www.w3schools.com/html/) to learn more about the HTML basics. 

### SSG as a Tool

It can be tedious and troublesome to write HTML files directly, especially when the page content is long. There are so many types of websites. In blogging, what we need is the blog content. The interactions with the website and other fancy components are less required. The primary objective is to display the blog content nicely on a web page. Now SSGs can help. So the idea behind SSGs is simple: use templates to facilitate blog writing and automate web page generation.

In SSGs, we can first create some templates for future display. Then we only need to focus on writing the content (usually in markdown files). SSGs will put the content to the template and generate a complete HTML file for display. After SSGs generate all the page files, we can put them to some web server, for example, GitHub, so that people can access your pages from the Internet.

Another advantage of SSGs is that they can publish the web pages locally. It turns your computer to a local server so that you can view the web pages through the browser as if you view the page from a real server. It is extremely helpful for debugging.

There are many SSGs available. For example, [Next.js]([https://nextjs.org](https://nextjs.org/)), [Jekyll](https://jekyllrb.com), [Hugo](https://gohugo.io/). [Gatsby](https://www.gatsbyjs.com/), [Nuxt](https://nuxtjs.org/). Any of them does a good job.


## Resources

There are some resources discussing the functions of SSGs:

 [GitLab SSGs Part 2: What are modern static site generators](https://about.gitlab.com/blog/2016/06/10/ssg-overview-gitlab-pages-part-2/) 
