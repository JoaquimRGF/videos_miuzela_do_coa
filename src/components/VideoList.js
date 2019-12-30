import React from 'react';
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) => {
  const listOfVideos = videos.map((video) => 
    <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>
  )
  return (
    <Grid container spacing={3} style={{justifyContent:'center'}}>
      {listOfVideos}
    </Grid>
  )
}

export default VideoList











// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridList';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
// }));


// const VideoList = ( {videos} ) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160}  cols={3}>
//         {videos.map(video => (
//           <GridListTile key={video.id.videoId} cols={1} >
//             <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// export default VideoList;