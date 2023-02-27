import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Postprocessing } from "./Postprocessing.jsx";
import { World } from "./World.jsx";
import { Camera } from "./Camera.jsx";

export function App() {

	const [ moving, setMoving ] = useState( false );

	return (
		<Suspense fallback={ <div>loading</div> }>
			<Canvas
				dpr={ 0.7 / window.devicePixelRatio }
				onPointerDown={ () => setMoving(true) }
			>
				<Postprocessing />
				<fog
					attach="fog"
					far={ 3 }
					color="#e6a35d"
				/>
				<World />
				<Camera moving={ moving } />
			</Canvas>
		</Suspense>
	);

}
