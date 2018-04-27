function Sprite(x,y,largura,altura) {

    this.x = x;
    this.y = y;
    this.altura = altura;
    this.largura = largura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }

    
    
}

var bg = new Sprite(0, 0, 600, 1200);