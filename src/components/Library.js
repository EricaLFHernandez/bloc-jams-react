import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: albumData };
    }

    render() {
        return (
            <section className='library'>
            <div className='logo'>
            </div>
                {
                    this.state.albums.map( (album, index) =>
                        <Link to={`/album/${album.slug}`} key={index} className='covers'>
                            <div className='album'>
                                <img src={album.albumCover} alt={album.title} className='album-cover' />
                            <span className='album-title'>
                                <div className='album-title-top'>{album.title}</div>
                                <div className='album-title-line'>{album.artist}</div>
                                <div className='album-title-line'>{album.songs.length} songs</div>
                            </span>
                            </div>
                        </Link>
                    )
                }
            </section>
        );
    }

}

export default Library;
