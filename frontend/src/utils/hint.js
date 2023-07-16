import $ from 'jquery'

$(document).ready(() =>
{
    $(document).on('hover', '.hint', elem =>
    {
        const text = $(elem.currentTaget).attr('data-hint')
        console.log(text)
    })
})
