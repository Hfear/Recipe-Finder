
export default function  Modal({isVisible, hideModal, children}) {
 if(!isVisible) {return null}

    return(
        <div 
        onClick = {hideModal}
        className="fixed inset-0 bg-indigo-900 bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center"
        >
            <div onClick={(e) => e.stopPropagation() } className="max-w-xl w-144 mx-auto flex flex-col">
                <button
                onClick = {hideModal}
                className="bg-pink text-purple-100 rounded border-solid border-indigo-200 border-opacity-50"
                >Close tab</button>
                <div 
                className="bg-indigo-200 text-gray-800 p-8  border-solid rounded-md border-indigo-900 border-opacity-50">
                <h1 
                className="text-indigo-900 font-serif p-1">Recipe Form</h1>
                {children}
            </div>

            </div>


        </div>
    )

}