<head>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet" />
    <style>
        .icon {
        font-family     : 'Material Icons';
        font-size       : 20px;
        margin          : 0 0.25em;
        cursor          : pointer;
        }
    </style>
    <script type="module" src="./components/sample-tooltips_u5.js"></script>

</head>
<!-- ------------------------------------------------------------------------- -->
<!--
<div class="page-back">

[BACK - X](/FRApps/fr020100_Basic-Tools.md)
</div><div class="page-next">

[X - NEXT](/FRApps/fr020102_Basic-Large-Blocks.md)
</div><div style="margin-top:35px">&nbsp;</div>
-->
<!-- ------------------------------------------------------------------------- -->

<!--#  HTML Custom App <!-- {docsify-ignore} --> 

<!-- -------------------------------------------------------------- -->

<!-- ## 1. Basic Blocks <!-- {docsify-ignore} -->

#  HTML Custom App <!-- {docsify-ignore} -->


## Basic Blocks <!-- {docsify-ignore} --> 

## Introduction
 <span class="material-icons">help_outline</span>

<br>

<!-- <a href="Div1"> -->
<!-- <simple-tooltip> -->

<div id="Div1"> 
<!-- comment --> 

# We will begin this Custom App by simply copying & pasting the code below into  your empty html and css files.  Theviewing the files in your [repos]itory.  
   - Item 1e results will be 4 very basic blocks that sit on top of each other.  Let's start by r
   - Item 2

</div>  

<!-- </a>  -->
<!-- </simple-tooltip>-->
___

## 1. Review Files

-  Using VSCode, in a folder called BasicTraining, open:
    - index.<b>html</b> and
    - index.<b>css</b>
    
Both should be empty.

___

## 2. Insert Code

### index.html   
<br>
Click on index.<b>html</b> file from VSCode. Copy and paste the entire below code to Line 1:
<br><br>

```HTML
<!DOCTYPE html>
<html lang="en"> 
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <link rel="stylesheet" href="index.css">
       <link rel="shortcut icon" href="../favicon.gif">
       <title>Basic-Training</title>
    </head>
    <body>
        <div class="header">
            <h2>header</h2>
        </div>
        <div class="section1">
           <h2>section 1</h2>
        </div>
        <div class="section2">
            <h2>section 2</h2>
        </div>
        <div class="footer">
            <h2>footer</h2>
        </div>
    </body>
</html>
```
**This page will automatically save with the "Auto Save" option you set earlier.**

From VSCode, right click on the file "index.<b>html</b>" and click on "Open In Live Server"
- This option is available because you added the "Live Server" extension earlier


<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBlocksImage1.jpg">

___

If your Chrome browser is not already open, this command will open it and show the results of the above html code. 

Like this:

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBlocksImage2.jpg">

<i>This is our starting point.</i>  Let's move to the CSS code to add our blocks.

___

### index.css  
___

Again, from VSCode click on the index.<b>css</b> file. Then copy and paste the below code (ensure to grab the final curly bracket "<font color='green'><b>}</b></font>" ), on to Line 1 of index.<b>css</b>:
<br><br>

```css
/* Basic Blocks */

@import url('https://fonts.googleapis.com/css?family=Bookman Old Style');

/*-----------------------------------------
root selector to create variables
-------------------------------------------*/
:root {
    --header-color: red;
    --section1-color: blue;
    --section2-color: lightgray;
    --footer-color: green;
    --h2-text-color-light: white;
    --h2-text-color-dark: black;
    --nav-list-item-hover-color: white;
    --h2-font-size: 1.5rem;
    --nav-list-font-size: 1.2rem;
    --footer-list-font-size: .9rem;
} 

/*-----------------------------------------
The html properites
------------------------------------------*/
html {
    background: #b3b3b3;
    height: 100%;
    text-align: center;
}

/*-----------------------------------------
The body properites
------------------------------------------*/
body {
    background: white;
    height: 100%;
}

/*-----------------------------------------
Set global properties for the <h2> tags
It also overrides the intrinsic margin of
20 to 0--allowing to stack the blocks together
-------------------------------------------*/
h2 {
    margin: 0;
    font-size: var(--h2-font-size) ;
    color: var(--h2-text-color-light);
    padding: 1.5rem;
    text-align: center;
  }

/*-----------------------------------------
The .header properites
------------------------------------------*/
.header {
    background: var(--header-color);
    width: 300px;
    height: 100px;
    position: relative;
}

/*-----------------------------------------
The .section1 properites
------------------------------------------*/
.section1 {
    background: var(--section1-color);
    width: 300px;
    height: 100px;
    position: relative;
}

/*-----------------------------------------
The .section2 properites
------------------------------------------*/
.section2 {
    background: var(--section2-color);
    width: 300px;
    height: 100px;
    position: relative;
}

/*-----------------------------------------
This is another <h2> override
setting the font color from white to black
------------------------------------------*/
.section2 h2 {
    color: var(--h2-text-color-dark);
}

/*-----------------------------------------
The .footer properites
------------------------------------------*/
.footer {
    background: var(--footer-color);
    width: 300px;
    height: 100px;
    position: relative;
}
^ copy to here

```


___

## 3. Understanding CSS        <!-- .(20615.01.2 RAM Changed to ### 4. Was #### --> 
<br>
To understand a little of this CSS code, let's look at the .header properties.
<br>
<br>
<font color='green'>** Notes:</font>
<br><br>

```css
/*-----------------------------------------
root selector to create variables
-------------------------------------------*/
** In CSS you can describe variables, this is very 
powerful. For example, if it was decided that the 
header color should actually be salmon, not red,
it only needs changing here.  Several of the below 
variables are not used in this particular .css, but 
will be used in upcoming sessions.

NOTE: in the .header properties below exactly 
      how this variable is used.  We are setting
      the background color of the header to red
      with the variable called "--header-color"

:root {
    --header-color: red;
    --section1-color: blue;
    --section2-color: lightgray;
    --footer-color: green;
    --h2-text-color-light: white;
    --h2-text-color-dark: black;
    --nav-list-item-hover-color: white;
    --h2-font-size: 1.5rem;
    --nav-list-font-size: 1.2rem;
    --footer-list-font-size: .9rem;
} 
_____________________________________________________

/*-----------------------------------------
The .header properites
------------------------------------------*/
.header {
    background: var(--header-color);
        ** Sets the background to the variable you set above
    width: 300px;
        ** Sets the width of the header block 300 pixels
    height: 100px;
        ** Sets the height of the header block 100 pixels
    position: relative;
        ** Places the header box relative to the html code
        *DOM (Document Object Model) reading from 
        the top to the bottom
        
}

```

&nbsp;&nbsp;&nbsp;&nbsp;*[DOM](https://www.w3.org/TR/WD-DOM/introduction.html "What Is DOM")


We will build from this basic page to create a web site with a fixed header and footer, links with a button, and an image.  From there, the next course we will move on to add some magic with JavaScript (JS) to this web page.
___


## ___________________

##  Basic Blocks Web Page       <!-- .(20615.01.1 RAM This seems a little out of place --> 
<br>

<span style="font-size: 25px"><b>Congratulations</b></span>, you have just created a simple html page with a cascading style sheet (CSS) which makes 4 *basic blocks.*  
<br>
Please check your Chrome browser. 
<br><br>
Like this:

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBlocksImage3.jpg">

___

<!--## 5. View Full Code  <!-- {docsify-ignore} -->
<!--## 5. <a target="_blank" title="View Full Code" href="FRApps/code/fr020101_basic-blocks-code.md">View Full Code For Basic Blocks</a>-->

##  [View Full Code For Basic Blocks](/FRApps/code/fr020101_basic-blocks-code.md "Full Code")

___

NEXT -->



<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>