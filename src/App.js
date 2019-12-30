import React, { Component } from 'react';
import './App.css';

import youtube from './api/youtube';
import VideoList from './components/VideoList';
import Modal from './components/Modal';

export default class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
    open: false
  }

  handleClose = () => {
    this.setState({open: false})
  };

  componentDidMount() {
    this.handleSearch();
  }

  onVideoSelect = (video) => {
    
    this.setState({
      selectedVideo: video,
      open: true
    });
  }


  handleSearch = async () => {
    const response = await youtube.get('search', {params: {
      part: 'snippet',
      maxResults: 50,
      key: '',
      type: 'video',
      q: 'Miuzela'
    }});

    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div>
         <VideoList 
            videos={this.state.videos} 
            onVideoSelect={this.onVideoSelect}/>
         <Modal 
            open={this.state.open} 
            handleClose={this.handleClose} 
            selectedVideo={this.state.selectedVideo}/>
      </div>
    )
  }
}
