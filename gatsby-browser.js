/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const disqusEmbedCode = () =>
  /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
  /*
  var disqus_config = function () {
  this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  */
  (function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script")
    s.src = "https://https-viralpatel-blog.disqus.com/embed.js"
    s.setAttribute("data-timestamp", +new Date())
    ;(d.head || d.body).appendChild(s)
  })()

exports.onRouteUpdate = ({ location }) => {
  if (location.href.indexOf("/blog/") > -1) {
    disqusEmbedCode()
  }
}
