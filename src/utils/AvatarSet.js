import manAvatar from '../assets/images/man.svg';
import womanAvatar from '../assets/images/woman.svg'
import { baseUrl } from "../constant"

// set Avater user or static avater
export const avatar = (user) => {
    if (user?.avatar.length > 0) {
        return baseUrl + '/' + user?.avatar[user?.avatar?.length - 1].path
    } else {
        return user?.gender === "male" ? manAvatar : womanAvatar
    }
}