
export default function  Modal({isVisible, hideModal, children}) {
 if(!isVisible) {return null}

    return(
        <div 
        onClick = {hideModal}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center"
        >
            <div onClick={(e) => e.stopPropagation() } className="max-w-xl w-144 mx-auto flex flex-col">
                <button
                onClick = {hideModal}
                >Close tab</button>
                <div className="bg-white text-gray-800 p-8">
                <h1>Recipe Form</h1>
                {children}
            </div>

            </div>


        </div>
    )

}