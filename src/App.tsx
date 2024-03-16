import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import "./index.css";
import NavBar from "./components/NavBar";
import Message from "./components/Message";

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let model: THREE.Object3D | null = null; // Declare model variable outside useEffect

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });

    const handleWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    const loader = new GLTFLoader();
    loader.load(
      "/models/saturn.glb",
      (saturn) => {
        model = saturn.scene; // Assign loaded model to the model variable
        model.scale.set(4, 4, 4);
        model.rotation.set(0, 0, 85);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.8,
        });
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );
    const light = new THREE.PointLight(0x29cc3c, 100000, 100);
    light.position.set(50, 50, 50);
    scene.add(light);

    // Variable to store the hue value
    let hue = 0;

    camera.position.z = 60;

    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        // Check if model is loaded
        model.rotation.y += 0.001; // Rotate the model
      }
      hue += 0.0001; // Adjust this value to control the speed of color change
      if (hue > 1) {
        hue -= 1; // Reset hue to stay within the range [0, 1]
      }

      // Convert the hue value to a color and update the light's color
      const color = new THREE.Color();
      color.setHSL(hue, 1, 0.5); // Saturation: 1, Lightness: 0.5
      light.color.set(color);
      renderer.render(scene, camera);
    };

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.minDistance = 40;
    controls.maxDistance = 80;
    controls.enablePan = false;

    animate();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <main className="max-h-[100vh] bg-black relative overflow-x-hidden">
      <Message />
      <NavBar />
      <canvas ref={canvasRef} />
    </main>
  );
};

export default App;
