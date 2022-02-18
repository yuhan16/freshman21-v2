---
layout: post
title: "jekyll notes"
date: 2021-12-10 
category: Miscellaneous
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
{%raw%}
```html
{% assign var = site.baseurl | append: "/page" | append: 2 | string %}
```
{%endraw%}
Note that `{ int | string }` convert integer to strings.


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

The superscript can be written like this<sup>[1]</sup> 

### font matter settings
Jekyll can distinguish plural. For example, 
```
category:
- ca
- cb
```
is equivalent to 
```
categories: ca cb
```
**Note:** there is no comma `,` when using the plural.

The same applies for `tag` and `tags`.

### link in markdown
Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/


### For testing
<i class="fa fa-car" style="font-size:48px;"></i>

{{page.url | prepend: site.baseurl}}

<a href="javascript:void(0)">testlink</a>

{{"Deep Learning" | remove: " " | downcase}}
