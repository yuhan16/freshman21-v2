---
layout: post
title: "jekyll test notes"
date: 2019-09-11 
category: Miscellaneous
tags: jekyll html
excerpt_separator: <!--more-->
---

This blog collects quick notes in developing jekyll notes. We also perform different general tests in this notes.

<!--more-->

## Some notes

Make entire Div Clickable:
```html
<a href="http://example.com">
  <div class="example"> anything </div>
</a>
```
This is perfectly valid HTML.

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

### For excerpt
We have two ways to display partial posts in the blog pages:
- use `excerpt` in the front matter
- use `excerpt_separator` in the front matter

For example, 
```yaml
excerpt: "These pre-written contents will be displayed in the blog page instead of any content in the post."
# or
excerpt_separator: <!--more-->
```

The second methods displays the post content before `<!--more-->`.


### margin collaps
when we use `container-all` with 0 margin and 0 padding to cover the background, we may encounter a margin collapse. The container will automatically have margin. We can use a fack padding to solve this problem `padding: 0.1px`. 

See [Collapsing Margins of Block Elements](https://cmichel.io/css-margin-top-not-working)





### github pages
In order to use the github page domain name `yuhan16.github.io`, we need to create a repo with the name `yuhan16.github.io`. Then we go to the GitHub page settings. The page will be automatically published to this domain.

See [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)


### For testing
<i class="fa fa-car" style="font-size:48px;"></i>

{{page.url | prepend: site.baseurl}}

<a href="javascript:void(0)">testlink</a>

{{"Deep Learning" | remove: " " | downcase}}


### markup text in div and mathjax
<div> This is a paragraph without &lt p &gt.
This is a paragraph without &lt p &gt.
</div>

<div>
	<p>This is a paragraph without &lt;p&gt;.</p>
	<p>This is a paragraph without &lt;p&gt;.</p>
</div>

