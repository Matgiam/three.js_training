import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 75: FOV (field of view) window.innerWidth / window.innerHeight: aspect ratio 0.1: near plane 1000: far plane
//(0.1,1000) all the objects within this near and far plane will be rendered, otherwise not.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//renderer.domElement is the HTML <canvas> element that Three.js creates for rendering the 3D scene.
//document.body.appendChild(...) takes that canvas and inserts it into the page’s <body>, so it actually shows up in the browser.

const loader = new GLTFLoader();
const light = new THREE.AmbientLight(0xffffff, 2);
scene.add(light);
loader.load(
	"/squirtle.glb",
	function (gltf) {
		scene.add(gltf.scene);
		renderer.render(scene, camera);
	},
	undefined,
	function (error) {
		console.error(error);
	}
);
camera.position.z = 2;
camera.position.y = 0.5;

