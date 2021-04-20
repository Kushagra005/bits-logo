var scene, camera, renderer, cylinder;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.CylinderGeometry(15, 15, 0, 64);

  const texture = new THREE.TextureLoader().load("./texture/logo.png");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);

  cylinder.rotateX(1.7);
  cylinder.rotateY(1.6);

  camera.position.z = 30;
}

function animate() {
  requestAnimationFrame(animate);

  cylinder.rotation.y += 0.01;
  cylinder.rotation.z += 0.05;
  renderer.render(scene, camera);
}


init();
animate();
