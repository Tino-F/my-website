var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/( window.innerHeight * 0.9 ), 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, ( window.innerHeight * 0.9 ) );
renderer.setClearColor(0xffffff);
document.body.appendChild( renderer.domElement );

var shape = new THREE.BoxBufferGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x000000});
var mesh = new THREE.Mesh( shape, material );

scene.add( mesh );
mesh.position.z = -10;
camera.rotation.y = 0.6;

function random(min, max, negative) {
  var num = Math.floor( Math.random() * max) + min;
  if(negative){
    num *= Math.floor(Math.random() *2) == 1 ? 1 : -1;
  }
  return num;
};

var shapes = [];
var mousex = window.innerWidth / 2;
var mousey = window.innerHeight / 2;

document.onmousemove = function (e) {
  mousex = e.clientX;
  mousey = e.clientY;
};

for(var i = 0; i<100; i++) {
    var s = new THREE.SphereBufferGeometry( random(1, 5), 10, 100);
    var m = new THREE.MeshBasicMaterial({color: 0x000000});
    shapes[i] = new THREE.Mesh(s, m);
    scene.add(shapes[i]);
    shapes[i].position.x = random(1, 1000, true);
    shapes[i].position.y = random(1, 500, true);
    shapes[i].position.z = random(1, 800, true);
};

function main () {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  camera.rotation.y += 0.002;
  camera.rotation.x += ( ( window.innerHeight / 2 ) - mousey ) * -0.00001;
  requestAnimationFrame( main );
  renderer.render( scene, camera );
};

main();
