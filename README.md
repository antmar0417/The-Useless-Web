<img src="https://media.giphy.com/media/aBb53vLjrYGYw/giphy-downsized-large.gif" width="100%">

# The Useless Web

That is our first individual JavaScript assignment. The purpose was to create a small application or website which serves no purpose but still makes the user intrigued. The application should be created with HTML, CSS, and JavaScript. Here below I’m providing more information about this project:

-   Application will be in demo mode and will be rate-limited to 50 requests per hour. Read more here: https://unsplash.com/documentation
-   Responsive design for mobile, tablet and desktop.
-   It's possible to hover on each picture and see the number of likes for each picture. Observe that this only applies to desktops. Sometimes you need to wait about one second to be able to see this information. See the picture below:
<div align="center">
    <img src="./images/likes.png" width="400px"></img> 
</div>

-   By clicking on a certain image you will be redirected to unsplash.com. There you will be able to see the fullscreen photo and download it for free if desired.
-   I've enabled a loading gif while images are loading.
-   The number of uploaded images on load changes depending on the screen type (mobile, tablet, and desktop).
-   The length and size of the text changes depending on the screen type (mobile, tablet, desktop).
-   You can change the background color of the header when you click on it.
-   Website URL: https://the-useless-web.netlify.app/

Thank you for visiting my site!

# Installation

To run this project follow the steps below:

-   Go to the address below and clone the project.

    ```
    https://github.com/antmar0417/The-Useless-Web.git
    ```

-   Start the server by pressing on Go Live button. It should look like the picture below:

<div align="center">
    <img src="./images/go-live.png" width="100px">
</img> 
</div>

-   And you should be able to see the website.

# Code Review

Code review written by Christopher:

1. `Fonts` - Loading two extra fonts thats not being used. 'Cookie-Regular' and 'KaiseiTokumin-Regular'.
2. `global.css:5-6` - Wrong format on Fonts, and missing two font-types (Woff and Woff2).
3. `script.js:5` - (Minor) A small spelling misstake. 'intFrameWi(d)th'.
4. `script.js:15-26` - (Minor) Your IF-statements could probably be a function instead.
5. `style.css:27-30` - (Minor) You could probably go a bit easier with the shadows. Kind of poor readability as it is now.
6. Getting a error when realoding the page with a alert saying "Try again later!". Loading animation gets stuck. Nothing happens when you dismiss the alert.

Overall you've done a great job with good consistancy and good use of comments throughout the code. Well done!


# Testers

Tested by the following people:

1. Emma Ramstedt
2. John Doe
