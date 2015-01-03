function Bitmap(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;

    this.imageData = this.context.createImageData(this.width, this.height);
    this.setPixel = function (x, y, r, g, b, a) {
        var imageData = this.imageData;
        var index = (x + y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
    }

    this.draw = function () {
        this.context.putImageData(this.imageData, 0, 0);
    }

}

function set_status_text(text) {
    var element = document.getElementById('section1');
    element.innerText = text;
}

function benchmark(func) {
  return function() {
    var timestamp = new Date().getTime();

    func();

    var timestamp2 = new Date().getTime();
    set_status_text(timestamp2 - timestamp + "ms");
  };
}

function draw1() {

    var canvas = document.getElementById('canvas1');
    var context = canvas.getContext("2d");
    var height = canvas.height;
    var width = canvas.width;

    var image = new Bitmap(context, width, height);

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            image.setPixel(i , j, i * 255 / width, j * 255 / height, 255, 255);
        }
    }
    image.draw();
};

window.onload = benchmark(draw1);
