import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./ContactBoy";

function ContactExperience() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"} />
      <group>
        <Text3D
          position={[-3, -2, -2]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.01}
          lineHeight={0}
          letterSpacing={-0.06}
          size={1}
          font={"fonts/Inter_Bold.json"}
        >
          {`Thank you...`}
          <meshNormalMaterial />
        </Text3D>

        <ContactBoy scale={3} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
}

export default ContactExperience;
