! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "super-blocked-ads";
       a.innerHTML = '<div class="inner"><div class="blocked-ads"><h3>AD BLOCKER DETECT</h3></div><div class="isi"><p>Please consider supporting us by disabling your ad blocker</p><div class="tombol"><button expr:href='data:blog.homepageUrl' expr:title='data:blog.title'class="1 active">Refresh</button>';</div></div></div>
       document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".fixblock > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();