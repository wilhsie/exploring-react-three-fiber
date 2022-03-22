import { OrbitControls } from '@react-three/drei'
function TestMesh() {
    return (
        <mesh position={[0,0,0]}>
            <sphereGeometry />
            <meshBasicMaterial wireframe color="green" />
            <OrbitControls />
            <gridHelper />
        </mesh>
    );
}

export default TestMesh;