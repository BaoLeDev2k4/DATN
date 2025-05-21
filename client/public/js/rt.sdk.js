(function _(e) {

    var sc = document.getElementsByTagName("script");
    var url = '';
    for(idx = 0; idx < sc.length; idx++)
    {
        s = sc.item(idx);

        if(s && s.src && s.src.match(/\/rt\.sdk\.js/) && s.getAttribute("id") && s.id === 'rt_script')
        { 
            url = s.src; 
            
        }
    }
    if (url == '')
    {
        var rt_script = document.currentScript;
        if(rt_script != null)
        {
            url = rt_script.src;
        }
    }
    

    var pttype = document.location.protocol;
    if (url != '' && (pttype === "http:" || pttype === "https:"))
    {
        
        j = document.createElement("script");
        var mark = '&';
        if(url.indexOf("?") == -1)
        {
            mark = '?';
        }
        var curr = new Date();
        var f = new Date(curr.setDate(curr.getDate() - curr.getDay()));
        f.setHours(0, 0, 0, 0);
        j.src = url.replace(/\/rt\.sdk\.js/, e)+mark+"t="+ (f.getTime());

        j.async = !0;
        i = document.getElementsByTagName("script")[0];
        i.parentNode && i.parentNode.insertBefore(j, i)
    }

})("/rt.all.jsx");
