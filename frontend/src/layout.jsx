import { useLocation } from "react-router-dom";
import getSearch from './utils/getSearch'

import Channels from './components/channels/channels'
import GroupAdd from './components/groupAdd/groupAdd'
import NewDialog from './components/newDialog/newDialog'
import Invite from './components/invite/invite'

import CookiesAccept from './components/cookiesAccept/cookiesAccept'

import checkAuth from './utils/checkAuth'

export default function Layout()
{
    const location = useLocation();
    return (
        <>
            <CookiesAccept />

            {location.pathname !== '/authentication' && (<Channels />)}

            {location.hash.indexOf('#newDialog') !== -1 && (<NewDialog />)}

            {getSearch('invite') && (<Invite />)}
        </>
    );
}
