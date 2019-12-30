import React from 'react';

import { Paper } from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
            <img alt={video.snippet.title} src={video.snippet.thumbnails.high.url}/>
        </Paper>
    )
}

export default VideoItem;