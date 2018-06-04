<script>// Recent Posts
function recentposts(e){document.write("<div class='recent-post'><ul>");for(var t=0;t<e.feed.entry.length;t++){for(var r=0;r<e.feed.entry[t].link.length&&"alternate"!=e.feed.entry[t].link[r].rel;r++);var n="<li><a href="+("'"+e.feed.entry[t].link[r].href+"'")+'">'+e.feed.entry[t].title.$t+"</a> </li>";document.write(n)}document.write("</ul></div>")}
</script>
<script src="/feeds/posts/summary/?max-results=5&amp;alt=json-in-script&amp;callback=recentposts"></script>