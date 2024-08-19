import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const CheckedIcon = () => {
	return (
		<Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
			<G stroke="#0ed907" strokeWidth={2}>
				<Path d="M16.516 8.935l-5.456 5.767-2.964-2.804" />
				<Path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
			</G>
		</Svg>
	)
}

export default CheckedIcon
