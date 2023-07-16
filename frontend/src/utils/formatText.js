export default function formatText(text)
{
    const format = {
        urls: []
    }
    let newText = ""

    newText = formatText_nameUrl(text).text
    format.urls.push(...formatText_nameUrl(text).urls)

    newText = formatText_url(newText).text
    format.urls.push(...formatText_url(newText).urls)

    newText = formatText_smiles(newText)

    return { text: newText, format }
}


function formatText_url(text)
{
    const urls = []
    text = text.replace(/(https?:\/\/[^\s]+)/g, url => {
        if(url.indexOf('">') === -1)
        {
            urls.push(url)
            return '<Link class="messages-elem-text-href" target="_blank" href="' + url + '">' + url + '</Link>';
        }
    })
    
    return { text, urls }
}
function formatText_nameUrl(text)
{
    const urls = []
    text = text.replace(/(\[https?:\/\/[^\s]+[\s\S]])/g, t => {
        let url = t.match(/(https?:\/\/[^\s]+\|)/g)[0]
        url = url.replace('|', '')

        let title = t.match(/(\|[\s\S]+)/g)[0]
        title = title.replace('|', '').replace(']', '')

        urls.push(url)
        return `<a class="messages-elem-text-href" target="_blank" href="${url}">${title}</a>`
    })

    return { text, urls }
}


function formatText_smiles(text)
{
    
    return text
}
