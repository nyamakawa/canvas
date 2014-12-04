window.onload = function () {

    var element = document.getElementById('section1');

    element.innerText = 'hello';

    var canvas = document.getElementById('canvas1');
    var context = canvas.getContext("2d");
    var height = canvas.height;
    var width = canvas.width;


    function createImage(context, width, height) {
        var image = {
            context: context,
            width: width,
            height: height,
        };

        image.imageData = context.createImageData(image.width, image.height);
        image.setPixel = function (x, y, r, g, b, a) {
            var imageData = image.imageData;
            var index = (x + y * imageData.width) * 4;
            imageData.data[index+0] = r;
            imageData.data[index+1] = g;
            imageData.data[index+2] = b;
            imageData.data[index+3] = a;
        }
        image.draw = function () {
            image.context.putImageData(image.imageData, 0, 0);
        }

        return image;
    }

    var image = createImage(context, width, height);

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            image.setPixel(i , j, i * 255 / width, j * 255 / height, 255, 255);
        }
    }
    image.draw();
};
