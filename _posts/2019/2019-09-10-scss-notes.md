---
layout: post
title:  "Notes on CSS files"
date:   2019-09-10
category: Miscellaneous
tags: css
excerpt_separator: <!--more-->
---

This notes documents the usage of css classes for the personal website.
<!--more-->

```bash
container-all  # entire body
|- header-container    # through header, format only
|  `- navbar           # small header, container only with clearfix
|- body-container      # through body, format only
|   `- page-content    # small body page, container only with clearfix
|- footer-container    # through footer, format only
|  `- footer-content   # small footer, container only with clearfix
```

There is only one `page` class: `page-content`, which defines the format of the page content. 

There is a series of `post` class:
- `post`: no css definition, only used to group things.
- `post-header`: contains `post-title` and `post-meta`
- `post-title`: defines post titile formats, including h1-h4
- `post-meta`: defines meta information under post title
- `post-content`: defines post content format.
- `post-link:`: defines link format in the post.

There is another css file `layout_research.scss`, which defines the formats of math related posts and publications.

There are two different `index` classes:
- `page-index`: display current page and JS. not in `post` class.
- `post-index`: previous and next posts. not in `post` class.