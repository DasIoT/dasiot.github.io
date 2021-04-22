import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

// 25.069407, 121.521192
const [x, y, z] = gpsToVector3(25.069407, 121.521192, 0); //CIT

const load = async () => {
  const [
    Viewer,
    XKTLoaderPlugin,
    NavCubePlugin,
    TreeViewPlugin,
    Mesh,
    VBOGeometry,
    buildGridGeometry,
    PhongMaterial,
    AnnotationsPlugin,
  ] = await Promise.all([
    import("@xeokit/xeokit-sdk/src/viewer/Viewer").then((m) => m.Viewer),
    import(
      "@xeokit/xeokit-sdk/src/plugins/XKTLoaderPlugin/XKTLoaderPlugin.js"
    ).then((m) => m.XKTLoaderPlugin),
    import(
      "@xeokit/xeokit-sdk/src/plugins/NavCubePlugin/NavCubePlugin.js"
    ).then((m) => m.NavCubePlugin),
    import(
      "@xeokit/xeokit-sdk/src/plugins/TreeViewPlugin/TreeViewPlugin.js"
    ).then((m) => m.TreeViewPlugin),
    import("@xeokit/xeokit-sdk/src/viewer/scene/mesh/Mesh.js").then(
      (m) => m.Mesh
    ),
    import("@xeokit/xeokit-sdk/src/viewer/scene/geometry/VBOGeometry.js").then(
      (m) => m.VBOGeometry
    ),
    import(
      "@xeokit/xeokit-sdk/src/viewer/scene/geometry/builders/buildGridGeometry.js"
    ).then((m) => m.buildGridGeometry),
    import(
      "@xeokit/xeokit-sdk/src/viewer/scene/materials/PhongMaterial.js"
    ).then((m) => m.PhongMaterial),
    import(
      "@xeokit/xeokit-sdk/src/plugins/AnnotationsPlugin/AnnotationsPlugin.js"
    ).then((m) => m.AnnotationsPlugin),
  ]);
  const viewer = new Viewer({
    canvasId: "myCanvas",
    // transparent: true,
  });
  // viewer.cameraControl.doublePickFlyTo = true;
  // viewer.cameraControl.navMode = "planView"; // smooth
  viewer.cameraControl.followPointer = true;

  const cameraFlight = viewer.cameraFlight;
  cameraFlight.duration = 0.5;
  // cameraFlight.fitFOV = 25;

  viewer.camera.eye = [10, 120, -50]; // 遠近，下上，旋轉近遠
  viewer.camera.look = [-60, -3, 0];
  viewer.camera.up = [0, 1, 0];
  viewer.camera.zoom(-10);
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
        </div>",

    values: {
      markerBGColor: "red",
      labelBGColor: "white",
      glyph: "X",
      title: "Untitled",
      description: "No description",
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
    position: [x, y, z],
  });
  model.on("loaded", () => {
    annotations.createAnnotation({
      id: "myAnnotation1",
      // entity: viewer.scene.objects["2O2Fr$t4X7Zf8NOew3FLOH"],
      // worldPos: [2.039, 4.418, 17.965],
      worldPos: [x + 0.1, y, z],
      // occludable: true,
      markerShown: true,
      labelShown: true,

      values: {
        glyph: "W1",
        title: "Ike Watterson",
        description: "Happy worker bee",
        markerBGColor: "yellow",
      },
    });

    // const metaObject = viewer.metaScene.metaObjects["0u4wgLe6n0ABVaiXyikbkA"];
    const metaObject = viewer.metaScene.metaObjects["2SWZMQPyD9pfT9q87pgXa1"]; // Skip "node-1" at first
    if (metaObject) {
      viewer.scene.setObjectsVisible(viewer.scene.visibleObjectIds, false);
      viewer.scene.setObjectsVisible(metaObject.getObjectIDsInSubtree(), true);
    }
    viewer.cameraFlight.flyTo(model);
    // const treeView = new TreeViewPlugin(viewer, {
    //   containerElement: document.getElementById("treeViewContainer"),
    //   autoExpandDepth: 3, // Initially expand tree three nodes deep
    // });
  });

  new Mesh(viewer.scene, {
    geometry: new VBOGeometry(
      viewer.scene,
      buildGridGeometry({
        size: 300,
        divisions: 60,
      })
    ),
    material: new PhongMaterial(viewer.scene, {
      color: [0.0, 0.0, 0.0],
      emissive: [0.4, 0.4, 0.4],
    }),
    // position: [0, 0, 0],
    position: [x, y, z],
    collidable: false,
  });
};

export default function Home() {
  React.useEffect(load);

  return (
    <div className="px-14 divide-y divide-gray-300">
      <Head>
        <title>DasIoT – Smart Construction With Ease</title>
      </Head>
      <Header />
      <main>
        <h1
          id="product"
          className="title-font sm:text-4xl text-3xl pt-8 mb-4 font-medium text-gray-900"
        >
          Product
        </h1>
        <HeroSection />
        <h1
          id="ui"
          className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Web Powered Control Panel
        </h1>
        <div>
          <div id="treeViewContainer" className="absolute"></div>
          <canvas id="myCanvas" className="w-full h-96" />
        </div>
        <h1
          id="contact"
          className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Contact
        </h1>
        <ContactSection />
      </main>
      <Footer />
    </div>
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
