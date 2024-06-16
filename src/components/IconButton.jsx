import IconButtonSvg from "../assets/iconButton.svg";

function IconButton() {
    return (
        <div className="flex items-center gap-4">
            <button>
                <img src={IconButtonSvg}/>
                <span class="sr-only">Icon Logo</span>
            </button>
        </div>


    );
}

export default IconButton;