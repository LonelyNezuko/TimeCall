import Cookies from 'universal-cookie'
import $ from 'jquery'

export default function checkAuth()
{
    const cookies = new Cookies()
    const authCookie = cookies.get('auth')

    if(authCookie === undefined
        || typeof authCookie !== 'object')return false

    const sessionID = authCookie.sessionID
    if(sessionID === undefined)return false

    // $.get(`/api?method=getSession&params[id]=${}`)

    return true
}
