var score = document.getElementById("score");
var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

function end() {
  var checkDead = setInterval(function () {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );

    var blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 40 && blockLeft > 0 && characterTop >= 80) {
      block.style.animation = "none";
      block.style.display = "none";
      document.getElementById("score").innerHTML = "Robotin found the bug!";
    }
  }, 10);
}

document.body.onkeydown = function (e) {
  if (e.keyCode == 32) {
    jump();
  }
};

end();
