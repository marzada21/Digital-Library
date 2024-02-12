import BookForm from "./BookForm";

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if (!props.open) return (<></>)
    return (
        <div
            onClick={props.onClose}
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50'
        >
            <div
                className='max-w-2xl bg-white shadow-lg overflow-hidden p-2 mt-2'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-black hover:text-gray-800 focus:outline-none"
                        onClick={props.onClose}
                    >
                        <h1 className="font-bold hover:text-stone-600">X</h1>
                    </button>
                </div>
                <div className="p-4">
                    <BookForm id={props.id} onClose={props.onClose} />
                </div>
            </div>
        </div>

    )
}
export default Modal;
