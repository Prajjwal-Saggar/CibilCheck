import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    sphereRef.current.rotation.x = elapsedTime * 0.2;
    sphereRef.current.rotation.y = elapsedTime * 0.3;
    sphereRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.2;
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.5} ref={sphereRef}>
      <meshStandardMaterial
        color="#004D74"
        opacity={0.5}
        transparent
        wireframe
      />
    </Sphere>
  );
};

const AnimatedBackground = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere />
    </Canvas>
  );
};

export default AnimatedBackground;