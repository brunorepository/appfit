import React, { useRef } from 'react'
import { VideoRef } from 'react-native-video'

import Mp4 from '../../../../../components/videos/Remadamáquinaunilateral.mp4'
import { VideoPlayer } from './styles'

const Video: React.FC = () => {
	const videoRef = useRef<VideoRef>(null)

	return <VideoPlayer resizeMode="cover" source={Mp4} repeat ref={videoRef} />
}

export default Video
