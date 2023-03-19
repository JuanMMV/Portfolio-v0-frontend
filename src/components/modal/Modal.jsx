import './modal.css'

const Modal = ({modalVisible, setModalVisible, dataModal, setDataModal}) => {

    if(!modalVisible) return null

    return (
        <div 
            className="modal__container" 
            onClick={()=>{
                setModalVisible(false)
                setDataModal("")
            }} 
        >
            <span 
                className="modal__exit"
                onClick={()=>{
                    setModalVisible(false)
                    setDataModal("")
                }} 
            >
                &times;
            </span>

            <div className='hola'>
            { !dataModal.includes('https://www.youtube.com') ? (
                <img 
                    src={dataModal} 
                    alt="imagen full"
                    className="modal__image"
                />
            ) : (
                <iframe 
                    className='modal__iframe'
                    src={dataModal} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            )}
            </div> 
        </div>
    );
};

export default Modal



