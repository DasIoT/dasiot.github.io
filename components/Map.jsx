import { Color3, Vector3, SceneLoader } from "@babylonjs/core";
import React, { useState, useRef, Suspense } from "react";
import {
  Engine,
  Scene,
  useClick,
  useHover,
  useBeforeRender,
  Model,
} from "react-babylonjs";
import "@babylonjs/loaders/glTF";

const SmallerScale = new Vector3(0.4, 0.4, 0.4);
const DefaultScale = new Vector3(1, 1, 1);
const BiggerScale = new Vector3(1.25, 1.25, 1.25);

const SpinningBox = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements
  const boxRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  useClick(() => setClicked((clicked) => !clicked), boxRef);

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <box
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={clicked ? BiggerScale : DefaultScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        diffuseColor={hovered ? props.hoveredColor : props.color}
        specularColor={Color3.Black()}
      />
    </box>
  );
};

export default function Map() {
  return (
    <div className="pb-6 pl-6">
      <Engine antialias={true} adaptToDeviceRatio={true} canvasId="babylonJS">
        <Scene>
          <arcRotateCamera
            name="camera1"
            target={Vector3.Zero()}
            alpha={Math.PI / 2.7}
            beta={Math.PI / 3}
            radius={5.5}
          />
          {/* <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} /> */}
          <Suspense fallback={() => <span>Loading...</span>}>
            <Model
              rootUrl="/"
              pluginExtension=".glb"
              sceneFilename="scene.glb"
              scaling={SmallerScale}
            />
          </Suspense>
        </Scene>
      </Engine>
    </div>
  );
}
