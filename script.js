function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position: absolute;" alt="" />';
    };

    this.moveRight = function(){
        this.left += 10;
        console.log('left: ' + this.left);
    };
    this.moveDown = function(){
        this.top += 10;
        console.log('top: ' + this.top);
    };
    this.moveLeft = function(){
        this.left -= 10;
        console.log('left: ' + this.left);
    };
    this.moveUp = function(){
        this.top -= 10;
        console.log('left: ' + this.top);
    }

}

var hero = new Hero('pikachu.png', 10, 10, 230);

function start(){
    if((hero.left < window.innerWidth - hero.size)&&(hero.top===10)){
        hero.moveRight();
    }
    if ((hero.left === window.innerWidth - hero.size) && (hero.top < window.innerHeight - hero.size)) {
        hero.moveDown();
    }
    if ((hero.left> 10)&&(hero.top===window.innerHeight - hero.size)){
        hero.moveLeft();
    }
    if ((hero.left=== 10)&&(hero.top>10)){
        hero.moveUp();
    }
    
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 30)
}

start();