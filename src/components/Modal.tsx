import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

function Modal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <button onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="50px" height="50px"><path fill="#6b96d6" d="M71.481,84.777c-15.497,1.003-30.995,1.003-46.492,0c-5.234-0.339-9.427-4.532-9.766-9.766 c-1.003-15.497-1.003-30.995,0-46.492c0.339-5.234,4.532-9.427,9.766-9.766c15.497-1.003,30.995-1.003,46.492,0 c5.234,0.339,9.427,4.532,9.766,9.766c1.003,15.497,1.003,30.995,0,46.492C80.908,80.246,76.715,84.438,71.481,84.777z"/><path fill="#81d4fa" d="M99.961,5.259c-0.082-1.278-0.547-2.587-1.576-3.615c-1.119-1.119-2.674-1.593-4.165-1.635	C88.028-0.165,78.896,2.25,72.847,5.358c-2.648,1.36-3.529,4.512-1.658,7.341c0.445,0.673,0.911,1.349,1.397,2.024	c-9.383,8.831-16.648,17.319-22.311,27.836l0,0c-1.35,2.466-1.306,5.215,0.329,6.85s4.384,1.679,6.85,0.329l0.001,0.001	c10.497-5.652,18.973-12.901,27.786-22.258c0.737,0.52,1.492,1.019,2.265,1.495c2.152,1.326,5.372,1.491,7.134-1.826	C98.259,20.335,100.315,10.772,99.961,5.259z"/><path fill="#4a254b" d="M48.235,78.1c3.646,0,6.65-2.748,7.054-6.285C55.338,71.385,55.024,71,54.591,71c-2.451,0-10.259,0-12.711,0 c-0.433,0-0.748,0.385-0.699,0.815C41.585,75.352,44.589,78.1,48.235,78.1z"/><circle cx="32.235" cy="65.011" r="7.011" fill="#fff"/><circle cx="33.235" cy="64.011" r="3.187" fill="#4a254b"/><circle cx="64.235" cy="65.011" r="7.011" fill="#fff"/><circle cx="65.235" cy="64.011" r="3.187" fill="#4a254b"/></svg>
                <span className="sr-only">Icon to modal</span>
            </button>
            <Dialog open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Its a simple dialog.</DialogHeader>
                <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="w-full max-w-xs">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Translate
                                </button>
                            </div>
                        </form>
                    </div>
                </DialogBody>
            </Dialog>
        </div>
    );

}

export default Modal;