$('.addButton').on('click',()=>{
    let url = window.prompt("请添加网址：")
    if(url.indexOf('http')!==0){
        url = 'https://'+ url
    }
    const $siteList = $('.siteList')
    const $lastli = $siteList.find('li.last')
    debugger
    const $li = $(`<li>
    <a href="${url}">
    <div class='site'>
        <div class="log">
           ${url[0]}
        </div>
        <div class="link">${url}</div>
    </div>
    </a>
    </li>`).insertBefore($lastli)
    debugger
})