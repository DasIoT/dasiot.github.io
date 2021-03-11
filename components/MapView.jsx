import React from 'react'
import { Viewer, Scene, Globe, CameraFlyToBoundingSphere, Primitive,Cesium3DTileset } from "resium";
import { Cartesian3, Math, BoundingSphere, HeadingPitchRange, IonResource, CesiumTerrainProvider } from "cesium";
import * as Cesium from 'cesium';
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYjA3ZTUxZi1kNzM3LTQ1NWMtYmZlZS01NjExOThlNzY4ZTYiLCJpZCI6NDU3MzIsImlhdCI6MTYxNTQ1MTAzM30.W3KyreYaVN-XAUsImLy-XX9_ShU88EpfKs_u5EfCp9U";

export default function MapView() {
    const ionTerrainProvider = IonResource.fromAssetId(1)
    const terrainProvider = new CesiumTerrainProvider({url: ionTerrainProvider});

    return <Viewer
        terrainProvider={terrainProvider}
        className="pb-4"
        homeButton={false}
        navigationHelpButton={false}
        animation={false}
        timeline={false}
        fullscreenButton={false}
        infoBox={false}
        baseLayerPicker={false}
        geocoder={false}
        scene3DOnly
    >
        <CameraFlyToBoundingSphere
            boundingSphere={new BoundingSphere(Cartesian3.fromDegrees(121.550767, 25.049728, 0), 0)}
            offset={new HeadingPitchRange(0, Math.toRadians(-30), 400)}
            duration={4} />

        <Scene>
            <Globe depthTestAgainstTerrain={false}></Globe>
            <Primitive>
                <Cesium3DTileset url={IonResource.fromAssetId(96188)} />
            </Primitive>
        </Scene>
    </Viewer>
}
