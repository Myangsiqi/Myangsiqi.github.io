
function selectRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getRandomSpeed() {
  return randomInteger(100, 200);
}
function randomInteger(minimum, maximum) {
  return Math.floor(Math.random()*(maximum - minimum + 1) + minimum);
}
// 这是我们的玩家要躲避的敌人 
var Enemy = function() {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.speed = getRandomSpeed();
    this.sprite = 'images/enemy-bug.png'; // 敌人的图片，用一个我们提供的工具函数来轻松的加载文件
};
Enemy.prototype.startY = [68, 151, 234];//敌人的三个初始位置
Enemy.prototype.hitBox = {'x': 101, 'y': 83};//砖头像素大小


// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    // update position and wrap-around if past edge
  if (this.x <= (canvas.width + this.hitBox.x/2)) {
    this.x += this.speed  * dt;
  } else {
    this.x = -this.hitBox.x;
    this.y = selectRandom(this.startY);
    this.speed = getRandomSpeed();
  }
  if(checkisDie(this,player)){
    player.reset();
  }

};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数

var Player = function() {

    this.x =  200;
    this.y =  400;
    this.sprite = 'images/char-boy.png'; // 玩家的图片，用一个我们提供的工具函数来轻松的加载文件
};

// 此为游戏必须的函数，用来更新的位置
// 参数: dt ，表示时间间隙
Player.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    var stepX= 101;
    var stepY= 83;
    switch(this.action) {
    case 'up':
      if (this.y > canvas.boundaries.up) {
        this.y -= stepY;
      }
      break;
    case 'right':
      if (this.x < canvas.boundaries.right) {
        this.x += stepX;
      }
      break;
    case 'down':
      if (this.y < canvas.boundaries.down) {
        this.y += stepY;
      }
      break;
    case 'left':
      if (this.x > canvas.boundaries.left) {
        this.x -= stepX;
      }
      break;
  }  
    // 调试位置
  if (this.position !== this.x + ',' + this.y) {
    this.position = this.x + ',' + this.y;
    console.log(this.position);
  }
    // 到达水面后重置玩家位置
  if (this.y < 25) {
    this.reset();
  }

  //重置动作
  this.action=null

};

//玩家死亡判断
function checkisDie(object, player) {
  return (player.x > object.x - object.hitBox.x/2 &&
          player.x < object.x + object.hitBox.x/2 &&
          player.y > object.y - object.hitBox.y/2 &&
          player.y < object.y + object.hitBox.y/2);
}

// 此为游戏必须的函数，用来在屏幕上画出，
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// 此为游戏必须的函数，用来在屏幕上重置玩家，
Player.prototype.reset = function() {
    this.x=200;
    this.y=400;
};


Player.prototype.handleInput = function(e){
     this.action = e;

}

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies=[
  new Enemy(-100, 68),
  new Enemy(-100, 151),
  new Enemy(-100, 234)
]
var player = new Player();




// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
