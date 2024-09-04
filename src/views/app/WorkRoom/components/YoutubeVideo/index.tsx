import React from 'react'
import { WebView } from 'react-native-webview'
import styled from 'styled-components/native'

const VideoContainer = styled.View`
	width: 75%;
	height: 330px; /* Ajuste a altura conforme necessário */
	margin-top: 20px;
	background-color: #323232;
	border: solid 1px #0ed907;
	border-radius: 8px;
	overflow: hidden; /* Garante que o vídeo não ultrapasse o container */
`

const YouTubeVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
	const videoUrl = `https://iframe.mediadelivery.net/embed/300957/${videoId}?autoplay=true&loop=true&muted=true&preload=true&responsive=true`
	return (
		<VideoContainer>
			<WebView
				source={{ uri: videoUrl }}
				automaticallyAdjustContentInsets
				allowsFullscreenVideo
				cacheEnabled // Habilita o cache
				cacheMode="LOAD_CACHE_ELSE_NETWORK" // Usa o cache se disponível, senão recorre à rede
				style={{ width: '100%', height: '100%', borderRadius: 8, backgroundColor: '#32323' }}
			/>
		</VideoContainer>
	)
}

export default YouTubeVideo
