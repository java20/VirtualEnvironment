import {GLTFLoader} from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from '../node_modules/three/build/three.module.js';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js'

									/** Initializing all necessary variables */
// initialize scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);							
// initialize camera
const camera = new THREE.PerspectiveCamera(					
	50,
	 window.innerWidth/window.innerHeight,
	 0.01,
	 1000
	 );

//Initialize lights
// const Amblight = new THREE.AmbientLight(0x404040, 5);
// scene.add(Amblight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);				
const pointlight1 = new THREE.PointLight(0xc4c4c4, 2);
pointlight1.position.set(0,300,100);
scene.add(pointlight1);
// const pointlight2 = new THREE.PointLight(0xc4c4c4, 2);
// pointlight2.position.set(500,100,0);
// scene.add(pointlight2);
const pointlight3 = new THREE.PointLight(0xc4c4c4, 2);
pointlight3.position.set(0,100,-500);
scene.add(pointlight3);
// const pointlight4 = new THREE.PointLight(0xc4c4c4, 2);
// pointlight4.position.set(-500,300,500);
// scene.add(pointlight4);

//camera.rotation.x = -96.07;
camera.rotation.y = (270/180) * Math.PI;
//camera.rotation.z = -65.21;
camera.position.x = -17.756;
camera.position.y = 3.795;
camera.position.z = -0.403;
scene.add(camera);


const renderer = new THREE.WebGLRenderer( { antialias:true } );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);	
//Initialize GLTF Loader

let controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", renderer);

// Initialize Renderer
		

// Creating Scene


// Setting Lights 



// setting camera position


// setting render size

// Loading 3D model
const loader = new GLTFLoader();
loader.load(`../3DModels/classroom.glb`, function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {

	console.error( error );

} );

// Rendering Each frame	
const animate = function(){
	requestAnimationFrame(animate);
	renderer.render(scene,camera);
}

animate();