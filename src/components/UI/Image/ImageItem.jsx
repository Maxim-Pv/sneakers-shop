import st from './ImageItem.module.css'

export const ImageItem = ({ imgId, onClick, tabIndex }) => {
  return (
    <li className={`${st.icon} ${st[`icon${imgId}`]}`}
      onClick={() => onClick(imgId)}
      tabIndex={tabIndex}
    ></li>
  )
}

export const ModalImgItem = ({ imgId, onClick, tabIndex }) => {
  return (
    <li className={`${st.icon} ${st.modal_icon} ${st[`icon${imgId}`]}`}
      onClick={() => onClick(imgId)}
      tabIndex={tabIndex}
    ></li>
  )
}
