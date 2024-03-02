import React from 'react'

import { VideoPlayer } from './styles'

const Video: React.FC = () => {
	return (
		<VideoPlayer
			source={{
				uri: 'https://i.pinimg.com/originals/60/dd/7e/60dd7e1db3ecabd470041aca2c07985f.gif',
			}}
			repeat
		/>
	)
}

export default Video
