import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Phoenix_Bird(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF("/models/phoenix_bird-transformed.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name='Object_7'
          geometry={nodes.Object_7.geometry}
          material={materials.MatI_Ride_FengHuang_01a}
          skeleton={nodes.Object_7.skeleton}
          position={[-0.625, 0, -17.137]}
          rotation={[0, 0.053, 0]}
        />
        <skinnedMesh
          name='Object_8'
          geometry={nodes.Object_8.geometry}
          material={materials.MatI_Ride_FengHuang_01b}
          skeleton={nodes.Object_8.skeleton}
          position={[-0.625, 0, -17.137]}
          rotation={[0, 0.053, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/phoenix_bird-transformed.glb");
