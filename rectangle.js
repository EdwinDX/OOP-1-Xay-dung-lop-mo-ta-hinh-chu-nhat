class Rectangle {
    length;
    width;
    constructor(l,w) {
        this.length = l;
        this.width = w;
    }
    setLength(l) {
        this.length = l;
    }
    setWidth(w) {
        this.width = w;
    }
    getArea() {
        return this.length*this.width;
    }
    getPerimeter() {
        return (this.length+this.width)*2;
    }
    fillRectangle () {
        let canvas = document.getElementById("DemoCanvas");
        let ctx = canvas.getContext('2d');
        ctx.fillStyle='#fa4b2a';
        ctx.fillRect(10, 10, this.length, this.width);
    }
}