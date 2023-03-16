import React from "react";

const Subgallery = () => {
  return (
    <>
      <section className="subgallery" id="Gallery">
        <div className="section__header">
          <h1>OUR GALLERY</h1>
          <span>CHECK OUR</span>
          <span id="two"> HALL OF FAME</span>
        </div>
        <div className="images">
          <div className="image__wrapper">
            <div className="set1">
              <div className="img11">
                <img
                  src="https://templateiicma.vercel.app/assets/img/menu/menu-item-1.png"
                  alt=""
                />
                <div className="txt">
                  <h4>Magnam Tiste</h4>
                </div>
              </div>
              <div className="img12">
                <img
                  src="https://templateiicma.vercel.app/assets/img/menu/menu-item-2.png"
                  alt=""
                />
                <div className="txt">
                  <h4>Aut Lia</h4>
                </div>
              </div>
              <div className="img13">
                <img
                  src="https://templateiicma.vercel.app/assets/img/menu/menu-item-3.png"
                  alt=""
                />
                <div className="txt">
                  <h4>Est Eligendi</h4>
                </div>
              </div>
            </div>
            <div className="set2">
              <div className="img21">
                <img
                  src="https://templateiicma.vercel.app/assets/img/menu/menu-item-4.png"
                  alt=""
                />
                <div className="txt">
                  <h4>Eos Luibusdam</h4>
                </div>
              </div>
              <div className="img22">
                <img
                  src="https://templateiicma.vercel.app/assets/img/menu/menu-item-5.png"
                  alt=""
                />
                <div className="txt">
                  <h4>Eos Luibusdam</h4>
                </div>
              </div>
              <div className="img23">
                <img
                  src="https://templateiicma.vercel.app/assets/img/menu/menu-item-6.png"
                  alt=""
                />
                <div className="txt">
                  <h4>Laboriosam direva</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Subgallery;
