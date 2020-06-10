import { faTrash, faSignOutAlt, faEdit, faSpinner, faCannabis, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faCannabis, faPlusCircle);  
};

export default Icons;