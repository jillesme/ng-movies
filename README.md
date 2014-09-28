# ng-movies

Browse movies and series using the omdb API.

## How to install

Clone the repository to your computer / server and execute the following commands:

``` 
npm install
bower install
gulp
``` 
This will launch the API for fetching images on port 3020 and a webserver on port 8000. 

If you have a (web) server you can skip the Gulp build and just copy the files to your public_html. 

## Why the /api/

The API will have to run in order to fetch the images from imdb. They block cross-domain requests to their images by checking the 'Referer' header. The referer header isn't spoofable if you use XMLHttpRequest. Which Angular's $http service does at its core. All the API does is remove the referer header, make the request to the image and return it as a base64 image.

## Todo

* *Unit tests*
* Better design
* Mobile optimized
<<<<<<< HEAD
=======
* Lots of *Unit tests*
>>>>>>> bc8ff82a658ada923c440182eafaffc2d3332c39
* Series next 'airdate'
* Improve overall code quality
