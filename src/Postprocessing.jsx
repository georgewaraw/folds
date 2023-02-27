import { ChromaticAberration, DepthOfField, EffectComposer, Noise } from "@react-three/postprocessing";

export const Postprocessing = () => (
	<EffectComposer>
		<ChromaticAberration offset={[ 0.0125, 0 ]} />
		<Noise opacity={ 10 } />
		<DepthOfField
			focusDistance={ 1.005 }
			bokehScale={ 10 }
		/>
	</EffectComposer>
);
