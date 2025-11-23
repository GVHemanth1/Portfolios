// Lightweight Three.js animated background
(function(){
  function initThree(){
    if(window.innerWidth < 700) return; // skip heavy visuals on small screens
    const canvas = document.getElementById('three-canvas');
    if(!canvas) return;
    // create renderer
    const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true, alpha:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    renderer.setSize(window.innerWidth, window.innerHeight * 0.6);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight*0.6), 0.1, 1000);
    camera.position.z = 6;

    const ambient = new THREE.AmbientLight(0xffffff,0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0x8ab3ff, 0.8);
    dir.position.set(5,5,5);
    scene.add(dir);

    const geom = new THREE.IcosahedronGeometry(1.8, 3);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x7a5cff,
      emissive: 0x052033,
      metalness: 0.2,
      roughness: 0.3,
      flatShading: false,
      transparent:true,
      opacity:0.95
    });
    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    // wireframe overlay
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(geom), new THREE.LineBasicMaterial({color:0x8be5ff, opacity:0.25, transparent:true}));
    scene.add(wire);

    function onResize(){
      const h = window.innerHeight * 0.6;
      renderer.setSize(window.innerWidth, h);
      camera.aspect = window.innerWidth / h;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', onResize);

    let t=0;
    function animate(){
      t += 0.01;
      mesh.rotation.x = Math.sin(t*0.6) * 0.3;
      mesh.rotation.y += 0.006;
      mesh.rotation.z = Math.cos(t*0.4) * 0.2;
      wire.rotation.copy(mesh.rotation);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  }

  if(typeof THREE === 'undefined'){
    // load THREE then init
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/three.min.js';
    s.onload = initThree;
    document.head.appendChild(s);
  } else initThree();

})();
