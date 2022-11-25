
//cleaned attributes
let attrvalues = [
'as=""',
'crossorigin="anonymous"',
'crossorigin="use-credentials"',
'href=""',
'hreflang=""',
'media="all"',
'media="print"',
'media="screen"',
'media="speech"',
'rel="alternate"',
'rel="author"',
'rel="canonical"',
'rel="help"',
'rel="icon"',
'rel="license"',
'rel="manifest"',
'rel="modulepreload"',
'rel="next"',
'rel="pingback"',
'rel="prefetch"',
'rel="preload"',
'rel="prev"',
'rel="search"',
'rel="shortlink"',
'rel="stylesheet"',
'sizes="any"',
'sizes="widthinpixels x heightinpixels"',
'title=""',
'type=""',
'lang="en"',
'target="_self"',
'target="_blank"',
'target="_parent"',
'target="_top"',
'charset="utf8"',
'dir="ltr"',
'dir="rtl"',
'value=""',
'datetime=""',
'cite=""',
'alt=""',
'decoding="sync"',
'decoding="async"',
'decoding="auto"',
'height=""',
'sizes=""',
'src=""',
'srcset=""',
'usemap=""',
'width=""',
'currentTime=""',
'duration=""',
'preload="none"',
'preload="metadata"',
'preload="auto"',
'buffered=""',
'poster=""',
'kind="subtitles"',
'kind="captions"',
'kind="descriptions"',
'kind="chapters"',
'kind="metadata"',
'label=""',
'srclang=""',
'coords="x,y"',
'coords="x,y,r"',
'coords="x1, y1, x2, y2"',
'download=""',
'ping=""',
'rel=""',
'shape="rect"',
'shape="circle"',
'poly=""',
'name=""',
'abbr=""',
'headers=""',
'colspan=""',
'rowspan=""',
'scope="row"',
'scope="col"',
'scope="rowgroup"',
'scope="colgroup"',
'scope="auto"',
'span=""',
'allow=""',
'allow="fullscreen"',
'allow="payment"',
'referrerpolicy="no-referrer"',
'referrerpolicy="no-referrer-when-downgrade"',
'referrerpolicy="origin"',
'referrerpolicy="origin-when-cross-origin"',
'referrerpolicy="same-origin"',
'referrerpolicy="strict-origin"',
'referrerpolicy="strict-origin-when-cross-origin"',
'referrerpolicy="unsafe-url"',
'srcdoc=""',
'sandbox="allow-forms"',
'sandbox="allow-modals"',
'sandbox="allow-orientation-lock"',
'sandbox="allow-pointer-lock"',
'sandbox="allow-popups"',
'sandbox="allow-popups-to-escape-sandbox"',
'sandbox="allow-presentation"',
'sandbox="allow-same-origin"',
'sandbox="allow-scripts"',
'sandbox="allow-top-navigation"',
'sandbox="allow-top-navigation-by-user-activation"',
'data=""',
'form=""',
'typemustmatch=""',
'media=""',
'integrity=""',
'nonce=""',
'formaction=""',
'formenctype="application/<br>x-www-form-urlencoded"',
'formenctype="multipart/form-data"',
'formenctype="text/plain"',
'formmethod="post"',
'formmethod="get"',
'formtarget="_self"',
'formtarget="_blank"',
'formtarget="_parent"',
'formtarget="_top"',
'type="submit"',
'type="reset"',
'type="button"',
'accept-charset=""',
'action=""',
'autocomplete="off"',
'autocomplete="on"',
'enctype="application/<br>x-www-form-urlencoded"',
'enctype="multipart/form-data"',
'enctype="text/plain"',
'method="post"',
'method="get"',
'method="dialog"',
'target="iframename"',
'for=""',
'min=""',
'max=""',
'low=""',
'high=""',
'optimum=""',
'selected=""',
'size=""',
'cols=""',
'minlength=""',
'maxlength=""',
'placeholder=""',
'rows=""',
'spellcheck="true"',
'spellcheck="default"',
'spellcheck="false"',
'wrap="hard"',
'wrap="soft"',
'accept=""',
'capture=""',
'formmethod="dialog"',
'pattern=""',
'dirname=""',
'autocomplete=""',
'list=""',
'step=""',
'id=""',
'inputmode=""',
'tabindex=""',
'accesskey=""',
'autocapitalize="off"',
'autocapitalize="on"',
'autocapitalize="words"',
'autocapitalize="characters"',
'class=""',
'contenteditable="true"',
'contenteditable="false"',
'data-*=""',
'dir="auto"',
'draggable="true"',
'draggable="false"',
'is=""',
'itemid=""',
'itemprop=""',
'itemref=""',
'itemscope=""',
'itemtype=""',
'lang=""',
'slot=""',
'style=""',
'tabindex="positivevalue"',
'tabindex="negativevalue"',
'tabindex="0"',
]
	
//boolean attr single
[
'disabled',	
'xmlns',
'href',
'ismap',
'autoplay',
'controls',
'loop',
'muted',
'playsinline',
'default',
'reversed',
'number start',
'type UPPER',
'type lower',
'type ROMAN',
'type roman',
'type number',
'async',
'defer',
'nomodule',
'open',
'autofocus',
'formnovalidate',
'novalidate',
'autocomplete',
'multiple',
'required',
'readonly',
'checked',
'hidden',	
]	

//attr single
[
'as',
'crossorigin',
'href',
'hreflang',
'media',
'rel',
'sizes',
'title',
'type',
'lang',
'target',
'charset',
'dir',
'value',
'datetime',
'cite',
'alt',
'decoding',
'height',
'src',
'srcset',
'usemap',
'width',
'currentTime',
'duration',
'preload',
'buffered',
'poster',
'kind',
'label',
'srclang',
'coords',
'download',
'ping',
'shape',
'poly',
'name',
'abbr',
'headers',
'colspan',
'rowspan',
'scope',
'span',
'allow',
'referrerpolicy',
'srcdoc',
'sandbox',
'data',
'form',
'typemustmatch',
'integrity',
'nonce',
'formaction',
'formenctype',
'formmethod',
'formtarget',
'accept-charset',
'action',
'autocomplete',
'enctype',
'method',
'for',
'min',
'max',
'low',
'high',
'optimum',
'selected',
'size',
'cols',
'minlength',
'maxlength',
'placeholder',
'rows',
'spellcheck',
'wrap',
'accept',
'capture',
'pattern',
'dirname',
'list',
'step',
'id',
'inputmode',
'tabindex',
'accesskey',
'autocapitalize',
'class',
'contenteditable',
'data-*',
'draggable',
'is',
'itemid',
'itemprop',
'itemref',
'itemscope',
'itemtype',
'slot',
'style',
'disabled',
'xmlns',
'ismap',
'autoplay',
'controls',
'loop',
'muted',
'playsinline',
'default',
'reversed',
'number start',
'type UPPER',
'type lower',
'type ROMAN',
'type roman',
'type number',
'async',
'defer',
'nomodule',
'open',
'autofocus',
'formnovalidate',
'novalidate',
'multiple',
'required',
'readonly',
'checked',
'hidden',
]









//raw attributes

[
'as=""',
'crossorigin="anonymous"',
'crossorigin="use-credentials"',
'href=""',
'hreflang=""',
'media="all"',
'media="print"',
'media="screen"',
'media="speech"',
'rel="alternate"',
'rel="author"',
'rel="canonical"',
'rel="help"',
'rel="icon"',
'rel="license"',
'rel="manifest"',
'rel="modulepreload"',
'rel="next"',
'rel="pingback"',
'rel="prefetch"',
'rel="preload"',
'rel="prev"',
'rel="search"',
'rel="shortlink"',
'rel="stylesheet"',
'sizes="any"',
'sizes="widthinpixels x heightinpixels"',
'title=""',
'type=""',
'lang="en"',
'media="all"',
'media="print"',
'media="screen"',
'media="speech"',
'target="_self"',
'target="_blank"',
'target="_parent"',
'target="_top"',
'charset="utf8"',
'dir="ltr"',
'dir="rtl"',
'value=""',
'datetime=""',
'cite=""',
'cite=""',
'title=""',
'title=""',
'cite=""',
'datetime=""',
'cite=""',
'datetime=""',
'alt=""',
'crossorigin="anonymous"',
'crossorigin="use-credentials"',
'decoding="sync"',
'decoding="async"',
'decoding="auto"',
'height=""',
'sizes=""',
'src=""',
'srcset=""',
'usemap=""',
'width=""',
'crossorigin="anonymous"',
'crossorigin="use-credentials"',
'currentTime=""',
'duration=""',
'preload="none"',
'preload="metadata"',
'preload="auto"',
'src=""',
'buffered=""',
'crossorigin="anonymous"',
'crossorigin="use-credentials"',
'currentTime=""',
'duration=""',
'height=""',
'poster=""',
'preload="none"',
'preload="metadata"',
'preload="auto"',
'src=""',
'width=""',
'kind="subtitles"',
'kind="captions"',
'kind="descriptions"',
'kind="chapters"',
'kind="metadata"',
'label=""',
'src=""',
'srclang=""',
'alt=""',
'coords="x,y"',
'coords="x,y,r"',
'coords="x1, y1, x2, y2"',
'download=""',
'href=""',
'hreflang=""',
'ping=""',
'rel=""',
'shape="rect"',
'shape="circle"',
'poly=""',
'target="_self"',
'target="_blank"',
'target="_parent"',
'target="_top"',
'name=""',
'abbr=""',
'headers=""',
'colspan=""',
'rowspan=""',
'scope="row"',
'scope="col"',
'scope="rowgroup"',
'scope="colgroup"',
'scope="auto"',
'headers=""',
'colspan=""',
'rowspan=""',
'span=""',
'span=""',
'download=""',
'href=""',
'hreflang=""',
'ping=""',
'rel=""',
'target="_self"',
'target="_blank"',
'target="_parent"',
'target="_top"',
'type=""',
'allow=""',
'allow="fullscreen"',
'allow="payment"',
'height=""',
'name=""',
'referrerpolicy="no-referrer"',
'referrerpolicy="no-referrer-when-downgrade"',
'referrerpolicy="origin"',
'referrerpolicy="origin-when-cross-origin"',
'referrerpolicy="same-origin"',
'referrerpolicy="strict-origin"',
'referrerpolicy="strict-origin-when-cross-origin"',
'referrerpolicy="unsafe-url"',
'src=""',
'srcdoc=""',
'sandbox="allow-forms"',
'sandbox="allow-modals"',
'sandbox="allow-orientation-lock"',
'sandbox="allow-pointer-lock"',
'sandbox="allow-popups"',
'sandbox="allow-popups-to-escape-sandbox"',
'sandbox="allow-presentation"',
'sandbox="allow-same-origin"',
'sandbox="allow-scripts"',
'sandbox="allow-top-navigation"',
'sandbox="allow-top-navigation-by-user-activation"',
'width=""',
'data=""',
'form=""',
'name=""',
'type=""',
'typemustmatch=""',
'usemap=""',
'width=""',
'height=""',
'name=""',
'value=""',
'media=""',
'sizes=""',
'src=""',
'srcset=""',
'type=""',
'width=""',
'height=""',
'crossorigin="anonymous"',
'crossorigin="use-credentials"',
'integrity=""',
'nonce=""',
'referrerpolicy="no-referrer"',
'referrerpolicy="no-referrer-when-downgrade"',
'referrerpolicy="origin"',
'referrerpolicy="origin-when-cross-origin"',
'referrerpolicy="same-origin"',
'referrerpolicy="strict-origin"',
'referrerpolicy="strict-origin-when-cross-origin"',
'referrerpolicy="unsafe-url"',
'src=""',
'type=""',
'form=""',
'formaction=""',
'formenctype="application/<br>x-www-form-urlencoded"',
'formenctype="multipart/form-data"',
'formenctype="text/plain"',
'formmethod="post"',
'formmethod="get"',
'formtarget="_self"',
'formtarget="_blank"',
'formtarget="_parent"',
'formtarget="_top"',
'name=""',
'type="submit"',
'type="reset"',
'type="button"',
'value=""',
'name=""',
'form=""',
'accept-charset=""',
'action=""',
'autocomplete="off"',
'autocomplete="on"',
'enctype="application/<br>x-www-form-urlencoded"',
'enctype="multipart/form-data"',
'enctype="text/plain"',
'method="post"',
'method="get"',
'method="dialog"',
'name=""',
'target="_self"',
'target="_blank"',
'target="_parent"',
'target="_top"',
'target="iframename"',
'for=""',
'form=""',
'form=""',
'value=""',
'min=""',
'max=""',
'low=""',
'high=""',
'optimum=""',
'label=""',
'label=""',
'selected=""',
'value=""',
'for=""',
'form=""',
'name=""',
'max=""',
'value=""',
'form=""',
'name=""',
'size=""',
'cols=""',
'form=""',
'minlength=""',
'maxlength=""',
'name=""',
'placeholder=""',
'rows=""',
'spellcheck="true"',
'spellcheck="default"',
'spellcheck="false"',
'wrap="hard"',
'wrap="soft"',
'accept=""',
'capture=""',
'alt=""',
'formaction=""',
'formenctype="application/<br>x-www-form-urlencoded"',
'formenctype="multipart/form-data"',
'formenctype="text/plain"',
'formmethod="post"',
'formmethod="get"',
'formmethod="dialog"',
'formtarget="_self"',
'formtarget="_blank"',
'formtarget="_parent"',
'formtarget="_top"',
'height=""',
'src=""',
'maxlength=""',
'minlength=""',
'pattern=""',
'placeholder=""',
'dirname=""',
'maxlength=""',
'minlength=""',
'placeholder=""',
'formaction=""',
'formenctype="application/<br>x-www-form-urlencoded"',
'formenctype="multipart/form-data"',
'formenctype="text/plain"',
'formmethod="post"',
'formmethod="get"',
'formmethod="dialog"',
'formtarget="_self"',
'formtarget="_blank"',
'formtarget="_parent"',
'formtarget="_top"',
'maxlength=""',
'minlength=""',
'pattern=""',
'placeholder=""',
'dirname=""',
'maxlength=""',
'minlength=""',
'pattern=""',
'placeholder=""',
'maxlength=""',
'minlength=""',
'placeholder=""',
'autocomplete=""',
'form=""',
'name=""',
'size=""',
'type=""',
'value=""',
'list=""',
'max=""',
'min=""',
'step=""',
'id=""',
'inputmode=""',
'tabindex=""',
'title=""',
'accesskey=""',
'autocapitalize="off"',
'autocapitalize="on"',
'autocapitalize="words"',
'autocapitalize="characters"',
'class=""',
'contenteditable="true"',
'contenteditable="false"',
'data-*=""',
'dir="ltr"',
'dir="rtl"',
'dir="auto"',
'draggable="true"',
'draggable="false"',
'id=""',
'inputmode=""',
'is=""',
'itemid=""',
'itemprop=""',
'itemref=""',
'itemscope=""',
'itemtype=""',
'lang=""',
'slot=""',
'style=""',
'tabindex="positivevalue"',
'tabindex="negativevalue"',
'tabindex="0"',
'title=""','disabled',

] 


