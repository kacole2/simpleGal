# simpleGal

[![Build Status](https://travis-ci.org/steverydz/simpleGal.png?branch=master)](https://travis-ci.org/steverydz/simpleGal)

A simple image gallery jQuery plug-in.

## How to use

Checkout [the demo](http://steverydz.github.com/simpleGal/demo) to see this plug-in in action.

### Write your HTML

Place your thubmnails within either a `div`, `ol` or `ul` like so:

    <div class="thumbnails">
      <a href="path/to/larger-image.jpg">
        <img src="path/to/thumbnail.jpg" alt="Thumbnail">
      </a>
      <a href="path/to/larger-image.jpg">
        <img src="path/to/thumbnail.jpg" alt="Thumbnail">
      </a>
      <a href="path/to/larger-image.jpg">
        <img src="path/to/thumbnail.jpg" alt="Thumbnail">
      </a>
    </div>

or

    <ul class="thumbnails">
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
      </li>
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
      </li>
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
      </li>
    </ul>

or

    <ol class="thumbnails">
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
      </li>
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
      </li>
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
      </li>
    </ol>

You can give the list a class or ID of anything you like.

### Set a placeholder image

Then create a placeholder for your main image like so:

    <img src="path/to/placeholder-image.jpg" alt="Placeholder" class="placeholder">

Again, you can give this image a class or ID of anything you like.

### Captions

Captions are only supported on 'ul' or 'ol' using the 'li' tag like so:

    <ul class="thumbnails">
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
        <div class="caption">
          <p>Check out the Rocky Mountains!</p>
        </div>
      </li>
      <li>
        <a href="path/to/larger-image.jpg">
          <img src="path/to/thumbnail.jpg" alt="Thumbnail">
        </a>
        <div class="caption">
          <p>
            <a href="mailto:thephotographer@gmail.com?Subject=Nice%20Photos" target="_top">
              <span>Photographer: That Guy</span>
            </a>
          </p>
        </div>
      </li>
    </ul>

In addition, a 'div' with the class "main-image" must be added to the placeholder like so:
    
    <div class="main-image">
      <img src="path/to/placeholder-image.jpg" alt="Placeholder" class="placeholder">
      <div class="caption">
        <p>Check out the Rocky Mountains!</p>
      </div>
    </div>

Add the following CSS to make the captions as seen in [this demo](http://hillcresthalloween.com/pictures.html)
    
    .main-image img {
      border: solid 1px #fff;
      z-index: 1;
      max-width: 100%;
    }

    .main-image .caption { 
      z-index: 5;
      margin-top: -63px;
      display: block;
      background: rgba(0, 0, 0, 0.4); 
      position: relative;
      left: 1px;
    }

    .main-image .caption p {
      color: #fff;
      padding: 10px 0px;
      margin-left: 10px;
    }

    .main-image .caption a { 
      color: #fff;
      text-decoration: underline;
    }


### Call the plug-in method

In your JS file, call the function using your class or ID:

    $(".thumbnails").simpleGal();

If you have given the main image a class of anything other than `placeholder` or used an ID then you must declare that in the options:

    $(".thumbnails").simpleGal({
      mainImage: ".your-main-image-class-or-ID"
    });

### Over to you

That's it. You should be ready to roll.
