import React from 'react'
 
import ImageLoader from '../ImageLoader'
 
const QuestionImg = (props) => {
    //console.log(props);
    return (
        
            <div style={{ width: '40px', overflow: 'visible' }}>
                <ImageLoader imageName={props.slika} />
            </div>
    );
}
 
export default QuestionImg;