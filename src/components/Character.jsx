/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/character.gltf --transform 
Files: public/models/character.gltf [3.7MB] > C:\Users\similoluwa Akinlabi\Desktop\animWMosimi\animated_man\animWMosimiEp2\character-transformed.glb [802.06KB] (78%)
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useCharacterAnimations } from '../contexts/CharactersAnimations'

const Character =(props) => {
  const group = React.useRef()
  const { scene, animations } = useGLTF('./models/character-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group)
  
  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <skinnedMesh castShadow name="Elvis_BodyGeo" geometry={nodes.Elvis_BodyGeo.geometry} material={materials.Character_Fat_Elvis_body_color1} skeleton={nodes.Elvis_BodyGeo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <skinnedMesh castShadow name="Elvis_BrowsAnimGeo" geometry={nodes.Elvis_BrowsAnimGeo.geometry} material={materials.Elvis_Eyes_MAT1} skeleton={nodes.Elvis_BrowsAnimGeo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <skinnedMesh castShadow name="Elvis_EyesAnimGeo" geometry={nodes.Elvis_EyesAnimGeo.geometry} material={materials.Elvis_Eyes_MAT1} skeleton={nodes.Elvis_EyesAnimGeo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <skinnedMesh castShadow name="Elvis_MouthAnimGeo" geometry={nodes.Elvis_MouthAnimGeo.geometry} material={materials.Elvis_Eyes_MAT1} skeleton={nodes.Elvis_MouthAnimGeo.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/character-transformed.glb')
export default Character;
