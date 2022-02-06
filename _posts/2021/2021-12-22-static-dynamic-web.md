---
layout: post
title: Static vs Dynamic Web Pages
modified: 2014-12-19
categories: [Programming, Web]
tags: [web programming, jekyll, html, css]
comments: true
logo:
excerpt_separator: <!--more-->
---



When we send http requests to the web server, the web server responds to the request and send the page file (usually with `.html` extension) back, so that we can view the entire web page in the browser. The way how the web server processes and generates the web pages categorizes the web pages into **static** and **dynamic**.

## Static Web Pages

A static web page is a page file stored in the web server. Each web page has a unique URL (Uniform Resource Locator). When rerquesting for a static web page, the web server simple finds the page file in the file system and send it back. The server will not do any processing to the page file. 

**Note:** Normally static web pages is stored with `.html` file extension.



## Dynamic Web Pages

Dynamic web pages are responded by the web server after pre-processing. The dynamic web page is stored in a page file with code. The code instructs the web server to pre-process the page file, generates the corresponding html file, and then send back to the user. 

The pre-processing depends on what code the web server uses. The most common programming language for web server development is [PhP](https://www.php.net/). There are other server side languges such as Python and C#. 

We take PhP for example. A dynamic web page written with PhP language is stored in a page file with `.php` extension. When we request for a dynamic web page, the web server first processes the php page file and generates the html file. Then the server send the heml file back the user. 

A typical dynamic web page file with PhP looks like this:

```html
<!DOCTYPE html>
<html>
    <body>
        <p>This example shows PHP block and its processed output.</p>
        <?php
            echo "String Output from PHP Block.";
        ?>
         
        <p>This PHP block prints addition of two number in the 
        processed HTML output.</p>
        <?php
            echo 1+1;
        ?>
    </body>
</html>
```



The code adds more flexibility to the web server to process the web page. For example, the web server can access the database and write the latest data to the web page. This upon-request mechanism can save a lot of energy. If we want to find the stock price at 10 am today, we only need to send a request and the server will generate the lastest page. If the server uses static web pages, either we cannot get the lastest price, or the server has to update the static page file constantly.



## Static vs Dynamic

In a static web page, the user can only view the existing page content. Therefore, it is more suitable for blogs and news websites. In addition, it is also more secure because the user cannot modify anything.

A dynamic web page provides more interactions between the user and the website. It is more suitable for interactive websites such as Google. Let's consider two examples.

The first example is the stock price query. If we want to check the stock price right now, we send a request to the web server. The web server receives the request and check the lastest database for the stock price. Then the server generates the html page file and send it back. Assume that the web page is static, which means they are pre-generated and stored in the server. We either cannot find the lastest stock price, or the web server has to constantly update the page file to ensure the data is in time. 

The second example is online computing. Assume we want to perform a complex computation on the web server and we input the data in the website. Then the web page has to be dynamic. Otherwise, the web server cannot even know what we have input in the page. Let along process the input.





```html
<!DOCTYPE html>
<html>
    <body>
        <p>This example shows PHP block and its processed output.</p>
        <?php
            echo "String Output from PHP Block.";
        ?>
         
        <p>This PHP block prints addition of two number in the 
        processed HTML output.</p>
        <?php
            echo 4+8;
        ?>
    </body>
</html>
```

