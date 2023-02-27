import { useGLTF } from "@react-three/drei";

import world_glb from "./assets/world.glb";

export const World = () => (
	<primitive
		object={ useGLTF(world_glb).scene }
		scale={ 10 }
	/>
);
