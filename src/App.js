import React, {Component, Suspense, useMemo, useRef} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header/Header";
import Aler from "./Aler"
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./views/styles.css";
import UpdateProfile from "./pages/UpdateProfile";
import Blog from "./components/Blog/Blog";
import Dashboard from "./components/UserCenter/Dashboard";
import Users from "./pages/Users";
import PortfolioCollections from "./components/UserCenter/PortfolioCollections";
import Resume from "./components/UserCenter/Resume";
import Callback from "./pages/Callback";
import {Canvas, useFrame, useLoader, useThree} from "react-three-fiber";
import {LinearFilter, Object3D, TextureLoader, WebGLRenderTarget} from "three";
import textureUrl from "./assets/233.jpg";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import diamondUrl from "./assets/diamond.glb";
import BackfaceMaterial from "./backface-material";
import RefractionMaterial from "./refraction-material";
import "./views/Homepage.css";
import Search from "./pages/Search";
import UserSpecificPortfolio from "./pages/UserSpecificPortfolio";
import DocEditor from "./components/DocEditor";
import UpdateCollection from "./pages/UpdateCollection";
import Bookmark from "../src/components/UserCenter/Bookmark"

// function Background() {
//     const {viewport, aspect} = useThree()
//     const texture = useLoader(TextureLoader, textureUrl)
//     useMemo(() => (texture.minFilter = LinearFilter), [])
//     // Calculates a plane filling the screen similar to background-size: cover
//     const adaptedHeight = 3800 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
//     const adaptedWidth = 5000 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
//     return (
//         <mesh layers={1} scale={[adaptedWidth, adaptedHeight, 1]}>
//             <planeBufferGeometry attach="geometry"/>
//             <meshBasicMaterial attach="material" map={texture} depthTest={false}/>
//         </mesh>
//     )
// }
//
// function Diamonds() {
//     const {size, viewport, gl, scene, camera, clock} = useThree()
//     const model = useRef()
//     const gltf = useLoader(GLTFLoader, diamondUrl)
//
//     // Create Fbo's and materials
//     const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] = useMemo(() => {
//         const envFbo = new WebGLRenderTarget(size.width, size.height)
//         const backfaceFbo = new WebGLRenderTarget(size.width, size.height)
//         const backfaceMaterial = new BackfaceMaterial()
//         const refractionMaterial = new RefractionMaterial({
//             envMap: envFbo.texture,
//             backfaceMap: backfaceFbo.texture,
//             resolution: [size.width, size.height]
//         })
//         return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial]
//     }, [size])
//
//     // Create random position data
//     const dummy = useMemo(() => new Object3D(), [])
//     const diamonds = useMemo(
//         () =>
//             new Array(80).fill().map((_, i) => ({
//                 position: [i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width, 40 - Math.random() * 40, i < 5 ? 26 : 10 - Math.random() * 20],
//                 factor: 0.1 + Math.random(),
//                 direction: Math.random() < 0.5 ? -1 : 1,
//                 rotation: [Math.sin(Math.random()) * Math.PI, Math.sin(Math.random()) * Math.PI, Math.cos(Math.random()) * Math.PI]
//             })),
//         []
//     )
//
//     // Render-loop
//     useFrame(() => {
//         // Update instanced diamonds
//         diamonds.forEach((data, i) => {
//             const t = clock.getElapsedTime()
//             data.position[1] -= (data.factor / 5) * data.direction
//             if (data.direction === 1 ? data.position[1] < -50 : data.position[1] > 50)
//                 data.position = [i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width, 50 * data.direction, data.position[2]]
//             const {position, rotation, factor} = data
//             dummy.position.set(position[0], position[1], position[2])
//             dummy.rotation.set(rotation[0] + t * factor, rotation[1] + t * factor, rotation[2] + t * factor)
//             dummy.scale.set(1 + factor, 1 + factor, 1 + factor)
//             dummy.updateMatrix()
//             model.current.setMatrixAt(i, dummy.matrix)
//         })
//         model.current.instanceMatrix.needsUpdate = true
//         // Render env to fbo
//         gl.autoClear = false
//         camera.layers.set(1)
//         gl.setRenderTarget(envFbo)
//         gl.render(scene, camera)
//         // Render cube backfaces to fbo
//         camera.layers.set(0)
//         model.current.material = backfaceMaterial
//         gl.setRenderTarget(backfaceFbo)
//         gl.clearDepth()
//         gl.render(scene, camera)
//         // Render env to screen
//         camera.layers.set(1)
//         gl.setRenderTarget(null)
//         gl.render(scene, camera)
//         gl.clearDepth()
//         // Render cube with refraction material to screen
//         camera.layers.set(0)
//         model.current.material = refractionMaterial
//         gl.render(scene, camera)
//     }, 1)
//
//     return (
//         <instancedMesh ref={model} args={[null, null, diamonds.length]}>
//             <bufferGeometry dispose={false} attach="geometry" {...gltf.__$[1].geometry} />
//             <meshBasicMaterial attach="material"/>
//         </instancedMesh>
//     )
// }
//
// export function Ap() {
//     return (
//         <Canvas camera={{fov: 50, position: [0, 0, 30]}}>
//             <Suspense fallback={null}>
//                 <Background/>
//                 <Diamonds/>
//             </Suspense>
//         </Canvas>
//     )
// }


export default class App extends Component {
    render() {

        return (

            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/">

                            <Home/>
                        </Route>
                        <Route path="/login">
                            <Nav/>
                            <Login {...this.props} />
                        </Route>
                        <Route path="/callback">
                            <Callback/>
                        </Route>
                        <Route path="/blog">
                            <Blog/>
                        </Route>
                        <Route path="/usercenter">
                            <Dashboard {...this.props}/>
                        </Route>
                        <Route path="/portfoliocollections">
                            <PortfolioCollections/>
                        </Route>
                        <Route path="/bookmarks">
                            <Bookmark/>
                        </Route>
                        <Route path="/resume">
                            <Resume/>
                        </Route>
                        <Route path='/updateProfile'>
                            <Nav/>
                            <UpdateProfile/>
                        </Route>
                        <Route path='/user'>
                            <Users/>
                        </Route>
                        <Route path='/testing'>
                            <Aler />
                        </Route>
                        <Route path="/search" component={Search}/>


                        <Route path='/userportfolio'>
                            <UserSpecificPortfolio/>
                        </Route>
                        <Route path='/userupadteportfolio'>
                            <UpdateCollection/>
                        </Route>
                        {/*test doc editor*/}
                        <Route path='/DocEditor'><DocEditor/></Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}
