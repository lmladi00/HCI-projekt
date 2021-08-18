import React, { useEffect } from "react"

import * as styles from './style.module.css'

import ImgParag2 from './ImgParag2';

import "aos/dist/aos.css";
import Aos from "aos"

const ImageParagraph2 = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
}, []);
return(
    <section data-aos="fade-up" className={styles.imageParagraph2}>
      <p>KRŠTENJE</p>
        <div className={styles.title}>
          <ImgParag2 img="slika1.jpg"  tekst>
            <span>Uskoro će Vašem kumčetu<br/> krštenje, a Vi još ne znate<br/> što biste kupili, a ujedno<br/> želite da to bude nešto novo<br/> i unikatno? Onda ste na<br/> pravom mjestu! Svaki okvir<br/> je rađen s puno ljubavi i<br/> pažnje te prilagođen<br></br> željama kupaca,od boje,<br/> vrste slova do minimalizma.</span>
          </ImgParag2>  
        </div>
    </section>
  );
};
  export default ImageParagraph2

  /*     <h2>KRŠTENJE</h2>    */