import React from 'react'
import { WebView } from 'react-native-webview'
import styled from 'styled-components/native'

const VideoContainer = styled.View`
	width: 75%;
	height: 350px; /* Ajuste a altura conforme necessário */
	margin-top: 20px;
	background-color: #323232;
	border: solid 1px #0ed907;
	border-radius: 8px;
	overflow: hidden; /* Garante que o vídeo não ultrapasse o container */
`

const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
	const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&loop=1&playlist=${videoId}&showinfo=0&fs=0&autohide=1&disablekb=1`

	return (
		<VideoContainer>
			<WebView
				source={{ uri: videoUrl }}
				automaticallyAdjustContentInsets
				allowsFullscreenVideo={false}
				cacheEnabled // Habilita o cache
				cacheMode="LOAD_CACHE_ELSE_NETWORK" // Usa o cache se disponível, senão recorre à rede
				style={{ width: '100%', height: '100%', borderRadius: 8, backgroundColor: '#32323' }}
			/>
		</VideoContainer>
	)
}

export default YouTubeVideo
