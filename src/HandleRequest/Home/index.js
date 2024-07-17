import api from "../../api/api.js";
import {webPath} from "../../route/path/webPath.js";

export const HomeData = async () => {
    return await api.get(webPath.home).then((res) => {
        return res.data.data
    }).catch((err) => {
        console.log(err);
        return err
    })
}