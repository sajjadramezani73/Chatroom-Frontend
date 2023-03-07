import ModalRoot from "./Modal-root"

const ConfirmModal = ({ children, options }) => {
    const { show, setShow, position = 'left' } = options

    return (
        <>
            {show && (
                <ModalRoot show={show} clicked={value => setShow(value)}>
                    <div
                        className={`flex w-full h-full ${position === 'left' ? 'justify-start' : 'justify-end'}`}
                    >
                        <div
                            className={`confirm-pan w-[420px] min-w-[420px] h-full overflow-hidden 
                            ${show ? (position === 'left' ? 'activeLeft' : 'activeRight') : ''}`}
                        >
                            {children}
                        </div>
                    </div>
                </ModalRoot>
            )}
        </>
    )
}

export default ConfirmModal