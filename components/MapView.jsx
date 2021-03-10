import React from 'react'
import { Viewer, Entity, CameraFlyToBoundingSphere } from "resium";
import { Cartesian3, Math, BoundingSphere, HeadingPitchRange } from "cesium";
// import Cesium from "cesium";
// Cesium.Ion.defaultAccessToken = "YOUR_ACCESS_TOKEN";

export default function MapView() {
    return <Viewer
        homeButton={false}
        navigationHelpButton={false}
        timeline={false}
        fullscreenButton={false}
        infoBox={false}
        baseLayerPicker={false}
        geocoder={false}
        scene3DOnly
    >
        <CameraFlyToBoundingSphere
            boundingSphere={new BoundingSphere(Cartesian3.fromDegrees(140, 35.7, 0), 0)}
            offset={new HeadingPitchRange(0, Math.toRadians(-30), 80000)}
            duration={3} />
    </Viewer>
}
