import { useState } from "react"
import useOutside from '../../useOutside'
import st from './Image.module.css'
import { ImageItem, ModalImgItem } from "./ImageItem";

const Image = () => {
  const [selectedImg, setSelectedImg] = useState(1);
  const { ref, isVisible, setIsVisible } = useOutside(null);
  const [modalSelectedImg, setModalSelectedImg] = useState(1);
   
  const handleImgInFocus = (imgId) => {
    setSelectedImg(imgId);
  }

  const handleOpenModal = (open) => {
    setIsVisible(open);
    setModalSelectedImg(selectedImg);
    console.log('modal');
  }

  const handleCloseModal = (close) => {
    setIsVisible(close);
    setSelectedImg(modalSelectedImg);
  }
   
  const handleNextImg = () => {
    setModalSelectedImg((prev) => (
      prev === 4 ? prev = 1 : prev + 1
    ))
  }

  const handlePrevImg = () => {
    setModalSelectedImg((prev) => (
      prev === 1 ? prev = 4 : prev - 1
    ))
  }

  const handleModalImgInFocus = (imgId) => {
    setModalSelectedImg(imgId)
  }

  return (
    <>
      <div className={st.container_images}>
        <div className={`${st.imgInfocus} ${st[`img${selectedImg}`]}`}
          onClick={() => handleOpenModal('openModal')}
        >
        </div>
          <ul className={st.items}>
            {[1, 2, 3, 4].map((imgId) => (
              <ImageItem
                key={imgId}
                imgId={imgId}
                onClick={handleImgInFocus}
                tabIndex='0'
              />
            ))}
          </ul>
      </div>
        <div className={`${st.modal} ${st[`${isVisible}`]}` }>
          <div ref={ref}>
            <button className={st.close_modal_btn} 
              onClick={() => handleCloseModal(null)}
            >
              <svg width="14" height="15" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fillRule="evenodd"/>
              </svg>
            </button>
            <div className={`${st.imgInfocus} ${st[`img${modalSelectedImg}`]}`}>
              <div className={st.arrows}>
                <svg className={st.arrow_next} 
                  width="40" height="40"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 -13 10 45"
                  onClick={() => handleNextImg()}
                >
                  <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
                <svg className={st.arrow_prev} 
                  width="40" height="40" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 -13 15 45"
                  onClick={() => handlePrevImg()}
                >
                  <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
              </div>
            </div>
            <ul className={`${st.items} ${st.modal_items}`}>
              {[1, 2, 3, 4].map((imgId) => (
                <ModalImgItem
                  key={imgId}
                  imgId={imgId}
                  onClick={handleModalImgInFocus}
                  tabIndex='0'
                />
              ))}
            </ul>
          </div>
        </div>
    </>
  )
} 

export default Image

