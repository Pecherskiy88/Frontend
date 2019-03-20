import React from 'react';
import {connect} from 'react-redux';
import {asyncGallery} from '../redux/actions/galleryAction';
import './Gallery.css';

const Gallery = ({gallery, getGalleryData}) => {
    return (
        <div className='Gallery'>
            <button className = 'btn' onClick={getGalleryData}>Get data</button>
            <div className='Gallery__container'>
              {gallery.map(el => <img src={el.webformatURL}  key={el.id} alt=''/>)}  
            </div>
        </div>
    );
};
function MSTP (state) {
    return {
        gallery: state.gallery, //спросить детально
    }
}

function MDTP (dispatch) {
    return {
        getGalleryData: function() {
            dispatch(asyncGallery())
        }
    }
}

export default connect(MSTP, MDTP) (Gallery);