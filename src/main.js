const $siteList = $('.siteList')
const $lastli = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [{logo:'B',url:'https://bilibili.com/'},
{logo:'A',url:'https://www.apple.com.cn/'},
{logo:'B',url:"www.baidu.com"}
]
const simplifyUrl = (url)=>{
    return url.replace('https://','')
    .replace('http://','')
    .replace('www.','')
    .replace(/\/.*/,'')
}
const render =()=>{
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node,index)=>{
        const $li = $(`<li>
        <div class='site'>
            <div class="logo">
                ${node.logo}
            </div>
            <div class="link">${simplifyUrl(node.url)}</div>
            <div class="close">
            <svg class="icon">
        <use xlink:href="#icon-close"></use>
            </svg>
            </div>
        </div>
    </li>`).insertBefore($lastli)
    $li.on('click',()=>{
        window.open(node.url)
    })
    $li.on('click','.close',(e)=>{
        e.stopPropagation()
        hashMap.splice(index,1)
        console.log(index)
        render()
    })
    
    })    
    }   
render()

$('.addButton').on('click',()=>{
    let url = window.prompt("请添加网址：")
    if(url.indexOf('http')!==0){
        url = 'https://'+ url
    }
    hashMap.push({
        logo:simplifyUrl(url)[0].toUpperCase(),
        url:url})
        render()
    })    
 
    $(document).on('keypress',(e)=>{
        const {key} = e
        console.log(key)
        for(let i =0;i<hashMap.length;i++){
            if(hashMap[i].logo.toLowerCase() === key){
                window.open(hashMap[i].url)
            }
        }
    })
    window.onbeforeunload = ()=>{
        const string = JSON.stringify(hashMap)
        localStorage.setItem('x',string)
    }
    