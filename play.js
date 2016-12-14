console.log("play.js");

var scene = document.querySelector('a-scene');
if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}

function run(){
    console.log('scene loaded, running script');
    var sphere = document.getElementById('sphere');
    sphere.setAttribute("color","black");
    growSphere();

    function growSphere(){
        var sphereX = 0;
        var sphereY = 1.25;
        var sphereZ = -5
        var position = sphereX+" "+sphereY+" "+sphereZ;
    console.log(position);
    sphere.setAttribute("position",position);
    }

    var $cube = $('#cube');
    console.log("cube rotation: "+$cube.attr("rotation"));
    $cube.attr("rotation","0 0 0");

    var cube = document.getElementById("cube");
    var cubeHeight = cube.getAttribute('geometry').height;
    console.log("cubeHeight: "+cubeHeight);
    cube.setAttribute('geometry', 'height', 5);
    console.log("height should now be 5, actual: "+cube.getAttribute("geometry").height);


    console.log("after register component");
}