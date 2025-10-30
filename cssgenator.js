   var shadowX = "2px"
   var shadowy = "2px" 
   var shadowColor = ""
   var shadowBlur = "2px"
   var shadowSpread = "50px" 
   var result = "" 
   var color1 = ""
   var color2 = ""
    function handlekeypress(e)
    {   
        // console.log(e.value)
        document.getElementById("preview").innerHTML = e.value
    }
    function changebgcolor(e)
    {
        document.getElementById("preview").style.background = e.value
        result += "background-color:" + e.value + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changetxtcolor(e)
    {
        document.getElementById("preview").style.color = e.value  
        result += "Color:" + e.value + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function handlebdcolor(e)
    {
        document.getElementById("preview").style.border =  "2px solid " + e.value
        result += "border-Color:" + e.value + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function handlebdwidth(e)
    {
        document.getElementById("preview").style.borderWidth = e.value + "px"
        result += "border-width:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function handlebdradius(e)
    {
        document.getElementById("preview").style.borderRadius = e.value + "px"
        result += "border-radius:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changeSize(e)
    {
        document.getElementById("preview").style.fontSize = e.value + "px"
        result += "font-size:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
         
    }
    function changemargin(e)
    {
        document.getElementById("preview").style.margin = e.value + "px"
        result += "margin:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changepadding(e)
    {
        document.getElementById("preview").style.padding = e.value + "px"
        result += "padding:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changeshadowX(e)
    {
        shadowX = e.value + "px"
        document.getElementById("preview").style.boxShadow = `${shadowX} ${shadowy} ${shadowColor}`
        result += "shadowX:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changeshadowY(e) 
    {
        shadowy = e.value + "px" 
        document.getElementById("preview").style.boxShadow = `${shadowX} ${shadowy} ${shadowColor}`
        result += "shadowY:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changeshadowblur(e)
    { 
        // var blr = e.value + "px"         
        // document.getElementById("preview").style.boxShadow = "10px 20px "+ blr +" 0px pink"
        shadowBlur = e.value + "px"
        document.getElementById("preview").style.boxShadow = `${shadowX} ${shadowy} ${shadowBlur} ${shadowColor}`
        result += "shadowblur:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changeshadowspread(e)
    {
        shadowSpread = e.value + "px"
        document.getElementById("preview").style.boxShadow = `${shadowX} ${shadowy} ${shadowBlur} ${shadowSpread} ${shadowColor} `
        result += "shadow-spred:" + e.value + "px" + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function changeshadowcolor(e)
    {
        shadowColor = e.value
        // document.getElementById("preview").style.boxShadow = e.value + " 0px 10px"
        document.getElementById("preview").style.boxShadow = `${shadowX} ${shadowy}  ${shadowSpread} ${shadowColor} `
        result += "shadow-color:" + e.value  + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function backgroundgradient(e) 
    {
        var color1 = document.getElementById("color1").value
        var color2 = document.getElementById("color2").value
        document.getElementById("preview").style.background = "linear-gradient( to left," + color1 + ", " + color2 + ")";
        result += "background-image: linear-gradient" + e.value + "<br>"
        document.getElementById("cssOutput").innerHTML = result
    }
    function handlecopy()
    {
        navigator.clipboard.writeText(result)
        alert("Copied to clipboard")
    }