import { onNavigate } from "../Router.js";
export const Profile = {

    events: () => {
        const saveprofile = document.getElementById('btnProfile')
        saveprofile.addEventListener('click', () => onNavigate('/home'));
    }
}
