var game = new Phaser.Game(800, 160, Phaser.AUTO, '', {preload: preload, create: create, update})

var player;

function preload(){
    game.load.spritesheet('heroe', 'sprites/envy2.png', 50, 78);
};
function create(){
    // agregar color de fondo
    game.stage.backgroundColor = '#010982';
    
    //Colocar herore en el escenario
    player = game.add.sprite(game.width / 2, game.height / 2, 'heroe');
    
    //Las animaciones
    player.animations.add('der', [0, 1, 2, 3, 4, 5], 10, true);
    player.animations.add('izq', [6, 7, 8, 9, 10, 11], 10, true);

    //asignar las animaciones a teclas 
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    
};
function update(){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der')
    }
    else if (izquierda.isDown){
        player.x -=1;
        player.animations.play('izq')
    }
    else {
        player.animations.stop();
        player.frame = 1;
    }
};
