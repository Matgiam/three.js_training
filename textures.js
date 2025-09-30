import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 75: FOV (field of view) window.innerWidth / window.innerHeight: aspect ratio 0.1: near plane 1000: far plane
//(0.1,1000) all the objects within this near and far plane will be rendered, otherwise not.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//renderer.domElement is the HTML <canvas> element that Three.js creates for rendering the 3D scene.
//document.body.appendChild(...) takes that canvas and inserts it into the page’s <body>, so it actually shows up in the browser.
const loader = new THREE.TextureLoader();
const texture = loader.load("/wall.jpg");
//used for loading a texture
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

function animate() {
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
