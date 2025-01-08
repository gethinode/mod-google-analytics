// Adapted from https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/google_analytics.html

{{- if or site.Params.modules.GoogleAnalytics.force (and (not hugo.IsServer) (not site.Config.Privacy.GoogleAnalytics.Disable)) -}}
  {{- with site.Config.Services.GoogleAnalytics.ID -}}
var doNotTrack = false;
if ({{ site.Config.Privacy.GoogleAnalytics.RespectDoNotTrack }}) {
  var dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack);
  var doNotTrack = (dnt == "1" || dnt == "yes");
}
if (!doNotTrack) {
  const script = document.createElement("script");
  script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id={{ upper (. | urlize) }}");
  document.body.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ upper . }}');
}
  {{- end -}}
{{- end -}}