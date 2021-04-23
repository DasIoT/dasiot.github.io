import React from "react";

// 25.069407, 121.521192
const [x, y, z] = gpsToVector3(25.069407, 121.521192, 0); //CIT

const load = async () => {
  const [
    Viewer,
    XKTLoaderPlugin,
    ImagePlane,
    TreeViewPlugin,
    AnnotationsPlugin,
  ] = await Promise.all([
    import("@xeokit/xeokit-sdk/src/viewer/Viewer").then((m) => m.Viewer),
    import(
      "@xeokit/xeokit-sdk/src/plugins/XKTLoaderPlugin/XKTLoaderPlugin.js"
    ).then((m) => m.XKTLoaderPlugin),
    import("@xeokit/xeokit-sdk/src/viewer/scene/ImagePlane/ImagePlane.js").then(
      (m) => m.ImagePlane
    ),
    import(
      "@xeokit/xeokit-sdk/src/plugins/TreeViewPlugin/TreeViewPlugin.js"
    ).then((m) => m.TreeViewPlugin),
    import(
      "@xeokit/xeokit-sdk/src/plugins/AnnotationsPlugin/AnnotationsPlugin.js"
    ).then((m) => m.AnnotationsPlugin),
  ]);
  const viewer = new Viewer({
    canvasId: "myCanvas",
    transparent: true,
  });
  // viewer.cameraControl.doublePickFlyTo = true;
  // viewer.cameraControl.navMode = "planView";
  viewer.cameraControl.navMode = "firstperson";
  viewer.cameraControl.followPointer = false;
  viewer.cameraControl.constrainVertical = false;
  viewer.cameraControl.dragRotationRate = 90;
  viewer.cameraControl.panInertia = 0.2;
  viewer.cameraControl.smartPivot = true;

  const cameraFlight = viewer.cameraFlight;
  cameraFlight.duration = 0.5;
  // cameraFlight.fitFOV = 25;

  // viewer.camera.eye = [
  //   11.815765380859375,
  //   31.031147003173828,
  //   -11.536711692810059,
  // ];
  // viewer.camera.look = [
  //   11.815765380859375,
  //   -6.36965799331665,
  //   -11.536711692810059,
  // ];
  // viewer.camera.up = [0, 0, 1];
  viewer.camera.eye = [10, 120, -50]; // 遠近，下上，旋轉近遠
  viewer.camera.look = [-60, -3, 0];
  viewer.camera.up = [0, 1, 0];
  viewer.camera.gimbalLock = true;

  viewer.scene.xrayMaterial.fillAlpha = 0.1;
  viewer.scene.xrayMaterial.fillColor = [0, 0, 0];
  viewer.scene.xrayMaterial.edgeAlpha = 0.4;
  viewer.scene.xrayMaterial.edgeColor = [0, 0, 0];

  viewer.scene.highlightMaterial.fill = false;
  viewer.scene.highlightMaterial.fillAlpha = 0.3;
  viewer.scene.highlightMaterial.edgeColor = [1, 1, 0];

  // Annotations
  const annotations = new AnnotationsPlugin(viewer, {
    markerHTML:
      "<div class='annotation-marker' style='background-color: {{markerBGColor}};'>{{glyph}}</div>",
    labelHTML:
      "<div class='annotation-label' style='background-color: {{labelBGColor}};'>\
        <div class='annotation-title'>{{title}}</div>\
        <div class='annotation-desc'>{{description}}</div>\
        <div class='annotation-desc'>🔋 🟩🟩🟩🟥🟥 </div>\
        <div class='annotation-desc'> Status: {{status}} </div>\
        </div>",

    values: {
      markerBGColor: "red",
      labelBGColor: "white",
      glyph: "X",
      title: "Untitled",
      description: "No description",
      status: "Normal",
    },
  });
  annotations.on("markerClicked", (annotation) => {
    annotation.setLabelShown(!annotation.getLabelShown());
  });

  // Annotations

  const xktLoader = new XKTLoaderPlugin(viewer);
  const model = xktLoader.load({
    id: "myModel",
    src: "/assets/models/schependomlaan.xkt",
    metaModelSrc: "/assets/metaModels/schependomlaan.json", // Creates a MetaObject instances in scene.metaScene.metaObjects
    // position: [0, 0, 0],
    position: [x, y + 0.5, z],
    edges: true,
  });
  model.on("loaded", () => {
    annotations.createAnnotation({
      id: "a1",
      worldPos: [x + 0.1, y, z],
      markerShown: true,
      labelShown: false,

      values: {
        glyph: "W1",
        title: "Ike Watterson",
        description: "Happy worker bee",
        markerBGColor: "yellow",
        status: "Normal",
      },
    });
    annotations.createAnnotation({
      id: "a2",
      worldPos: [x + 12, y, z - 6],
      markerShown: true,
      labelShown: true,

      values: {
        glyph: "S2",
        title: "Spider man",
        description: "your friendly neighbourhood",
        markerBGColor: "red",
        status: "Heatstroke 🥵",
      },
    });

    // const metaObject = viewer.metaScene.metaObjects["0u4wgLe6n0ABVaiXyikbkA"];
    const metaObject = viewer.metaScene.metaObjects["2SWZMQPyD9pfT9q87pgXa1"]; // Skip "node-1" at first
    if (metaObject) {
      viewer.scene.setObjectsVisible(viewer.scene.visibleObjectIds, false);
      viewer.scene.setObjectsVisible(metaObject.getObjectIDsInSubtree(), true);
    }
    viewer.cameraFlight.flyTo(model);
    const treeView = new TreeViewPlugin(viewer, {
      containerElement: document.getElementById("treeViewContainer"),
      autoExpandDepth: 3, // Initially expand tree three nodes deep
    });
  });

  new ImagePlane(viewer.scene, {
    src: "/assets/map.png",
    size: 190,
    position: [x + 13, y, z - 10],
    rotation: [0, -20, 0],
    opacity: 1.0,
    collidable: false,
    gridVisible: true,
    pickable: true,
  });
};

export default function HeroSection() {
  React.useEffect(load);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" id="product">Product</h1> */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-gray-900">
            DasIoT
          </h1>
          <p className="mb-8 leading-relaxed">
            DasIoT is an all in one IoT platform that helps you to manage
            construction sites with custom IoT devices integration.
          </p>
          <span>
            <a className="underline hover:text-gray-900" href="#contact">
              Contact us
            </a>{" "}
            for more detail.
          </span>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="arch.png"
          />
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" id="product">Product</h1> */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-gray-900">
            Web Powered Control Panel
          </h1>
        </div>
      </div>
      <div
        id="treeViewContainer"
        className="absolute bg-gray-50 w-1/3 bg-opacity-70 rounded-sm"
      ></div>
      <canvas id="myCanvas" className="w-full h-96" />
    </section>
  );
}

function gpsToVector3(lat, lng, alt) {
  const cosLat = Math.cos((lat * Math.PI) / 180.0);
  const sinLat = Math.sin((lat * Math.PI) / 180.0);
  const cosLon = Math.cos((lng * Math.PI) / 180.0);
  const sinLon = Math.sin((lng * Math.PI) / 180.0);
  // const rad = 6378137.0;
  // const f = 1.0 / 298.257224;
  // const C =
  //   1.0 / Math.sqrt(cosLat * cosLat + (1 - f) * (1 - f) * sinLat * sinLat);
  // const S = (1.0 - f) * (1.0 - f) * C;
  // const h = 0.0;
  const rad = 500.0; // assuming on a perfect sphere

  return [
    // (rad * C + h) * cosLat * cosLon,
    // (rad * C + h) * cosLat * sinLon,
    // (rad * S + h) * sinLat,
    rad * cosLat * cosLon,
    rad * cosLat * sinLon,
    rad * sinLat,
  ];
}
