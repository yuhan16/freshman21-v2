---
layout: post
title: "jekyll notes"
date: 2021-12-10 
category: Notes
tags: jekyll html
excerpt_separator: <!--more-->
---

## Some notes

Make entire Div Clickable:
```html
<a href="http://example.com">
  <div class="example"> anything </div>
</a>
```
This is perfectly valid HTML.

<!--more-->

In liquid, we can use composite filter. The exection order is from left to right. For example.
```
{% assign var = site.baseurl | append: "/page" | append: 2 | string %}
```
Note that { int | string } convert integer to strings.


Also, we need to find a way to write liquid in code block.

## Publish github page with no jekyll
Github page only accepts specific jekyll plugins. Some plugins such as `jekyll-paginate-v2` cannot be recgnized by github pages. Therefore, one way to publish github page is to **publish the generated pages to Github** instead of letting github complie pages online. The generated pages are in `_site` folder.

We should note two things when using jekyll to generate pages and publish to github:
- in `_config.yaml`, set `baseurl: /your-repo-name`
- include an empty file named `.nojekyll` in the `_site` folder
- change `_site` to `docs`. Or move everything out of the `_site` folder.

### set `z-index` to overlay
The dropdown menu has `position: relative`. However, the two column layout also have the same property. Therefore, the two column layout may overlay the dropdown menu. To solve the problem, we have two ways:
- Set `position: static` to the two column layout. (May not feasible in some scenarios)
- Set `z-index` of the dropdown menu higher than the two column layout.