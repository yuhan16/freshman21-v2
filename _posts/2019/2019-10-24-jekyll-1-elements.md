---
layout: post
title: "Learning Jelly Part 1: Basic Elements"
modified: 2019-10-24
categories: [Programming, Web]
tags: [web programming, jekyll, templating language]
comments: true
logo: https://avatars.githubusercontent.com/u/3083652?s=280&v=4
excerpt_separator: <!--more-->
---

In this learning notes, I will introduce the basic elements of Jekyll including the directory structure, front matter, and Liquid templating language. Understanding the elements is the first step towards learning Jekyll.

<!--more-->


## Jekyll

[Jekyll](https://jekyllrb.com/) is one of the most popular SSGs. It is written in [Ruby](https://www.ruby-lang.org/en/) and is supported by [GitHub Pages](https://pages.github.com/), which is also one of the reasons I choose Jekyll to write my blog. 

The Jekyll document is comprehensive and instructive. So I do encourage people to read the documentation if they decide to use it. Here, I will introduce Jekyll from my perspective and provide a general idea of how Jekyll works.

### Prerequisites and Installation

Since jekyll is software written in Ruby, we first need to make sure the Ruby programming language is installed in our computer. It comes with Linux distrirbutions. We can check it using the command 

```bash
$ ruby -v	# display ruby version info
```

We can also follow the [Quickstart](https://jekyllrb.com/docs/) in Jekyll documentation to create a quick jekyll project and view it in the browser.

### Directory Structure

Jekyll creates a series of directories. So it is important to understand the use of each directory so that we can create the pages we want. A typical jekyll directory is like the following (from Jekyll documentation):

```bash
.
|-- _config.yml
|-- _data
│   `-- members.yml
|-- _drafts
|   `-- on-simplicity-in-technology.md
|-- _includes
|   |-- footer.html
|   `-- header.html
|-- _layouts
|   |-- default.html
|   `-- post.html
|-- _posts
|   `-- 2007-10-29-why-every-programmer-should-play-nethack.md
|   `-- 2009-04-26-barcamp-boston-4-roundup.md
|-- _sass
|   |-- _base.scss
|   `-- _layout.scss
|-- _site
|-- .jekyll-cache
|-- .jekyll-metadata
|-- index.html    # can also be an 'index.md' with valid front matter
```

- `_posts` is the directory where we write our blog contents. The content is usually written with [Markdown](https://www.markdownguide.org/). Each file corresponds to an individual post page and each filename should follow the convention `YEAR-MONTH-DAY-title.md`.
- `_draft` is the directory to store the drafts. We can understand it as the unpublished `_post` directory. The files in this directory will not be translated into HTML file.

The above two directories are the most frequently edited ones after we set page templates.

- `_layout` directory stores all template layouts. It is written in HTML and is the skeleton for web pages. We can specify multiple templates for different use. Normally, we have a basic layout named `default.html`. It has to be a complete HTML file. Other templates (for example `post.html`) can inherit from it and does not need to be a complete HTML file. 

  We show an example of `default.html` as follows. The template has to include `<html>` element to show it is a complete HTML file. However, the template does not need to include every detail. We can use `include` command to make the template more consise.

  {% raw %}
  ```html
  <!DOCTYPE html>
  <html>
  {% include head.html %}
  <body>
      
    <div class="container">
      {% include header.html %}
      <div class="page-content wrapper">
        {{ content }}
      </div>
      {% include footer.html %}
    </div>
      
  </body>
  </html>
  ```
  {% endraw %}
  
  Other template files can inherit from `default.html`. They add more details to `default.html` to form the new template. An example of `post.html` template is shown in the following. They do **not** need to be a complete HTML file.

  {% raw %}
  ```html
  ---
  layout: default
  ---
  <div class="post">
  
    <header class="post-header">
      <h1 class="post-title">{{ page.title }}</h1>
    </header>
  
    <article class="post-content"> 
      {{ content }}
    </article>
  
    {% if page.comments %}
    {% include comments.html %}
    {% endif %}
  
  </div> 
  ```
  {% endraw %}

- `_include` directory stores the frequently used HTML snippets which are used by `include` command. For example, the `footer.html` can be the following.

  ```html
  <footer class="site-footer">
    <p>Copyright &copy; <a href="{{ site.baseurl }}/">{{site.title}}</a></p>
    <p>Powered by <a href="https://github.com/jekyll/jekyll">Jekyll</a> 
  </footer>
  ```

- `_sass` directory stores the style sheets (CSS files) for HTML files. These files determine the display format of HTML file. We refer to [CSS Tutorial](https://www.w3schools.com/css/) to learn more about the CSS basics. 

The above three directories are related to web page templates and display style. After completing the template, we can simple call which template to use in each post file. Jekyll will generate the corresponding HTML file with the desired template for us.

- `_config.yml` is the configuration file for Jekyll. We can define user-defined variables in this file.
- `index.html` or `index.md` is the index page. For web server, there is always an index page for each directory. By default, the web server will send the index page back to the user if the user does not specify in detail which HTML file to look for.

- `_site` directory stores all the generated web pages. We can put `_site` directory to the server, for example GitHub. Then the blog website is ready to view.

### Templating Language

> A templating language basically is a language which allows defining placeholders that should later on be replaced for the purpose of implementing designs. Obviously modern template languages not only support placeholders, but also loops and conditions which are often necessary for designing a web page.
>
> *&#8212;From [Stack Overflow: What is a templating language?](https://stackoverflow.com/questions/4026597/what-is-a-templating-language)*

Jekyll uses the [Liquid](https://shopify.github.io/liquid/) templating language to process templates. We can think the templating language as a "scripting language" in HTML files. It defines how Jekyll process the HTML files and generate the final version. 

**Note:** The templating language is different from other real scripting language such as JavaScript and Python. The browser cannot read it. All the template statements will be replaced by HTML after Jekyll process them. So in the final versions of the generated HTML file, there is no templating Language.

Liquid has ample functions such as `include` function and other string processing functions, which facilitate the static web page writing.

### Front Matter and Variables

The front matter is specified by `---` block at the front of each file. If we add the front matter to a file, it means that we want Jekyll to process this file. The process can be including other HTML snippets, or replacing template statements. 

The front matter specifies variables for processing. For example, in `post.html`  layout, we add `layout` variable to the front matter. So Jekyll will first substitute the HTML snippets and then put every thing to back to the `default.html` template to generate the final HTML file.

Some global variables are reserved by Jekyll, for example, `layout`, `content`, `site`, `page`. See [Jekyll Variables](https://jekyllrb.com/docs/variables/) for more information. These variables are useful when we write the template HTML files.

We can also define local variables (user-defined variables) in the front matter and reference it. For example, we define `mylogo-link` variable in the following post file:

```yaml
---
mylogo_link: https://path/to/image/.png
---
```

Then we can reference this variable in the file by writting {%raw%}`{{ mylogo_link }}`{%endraw%}.

We can also define variables in `_config.yml`. The variables are in the `site` domain and can be accessed by {%raw%}`{{site.my_variable}}`{%endraw%}.

### Summary

We have introduced the general framework of Jekyll and the idea of how Jekyll works. In the future posts, I will write more details about Jekyll usage and the problems I have met when I use Jekyll.
