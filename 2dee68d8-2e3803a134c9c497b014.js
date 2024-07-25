"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[893],{83407:function(e,t,n){var l=n(54506),i=n(54705),r=n(88763),o=n(71532),a=n(15680),s=n(94760),d=n(91101),u=n(89745),p=n(78237),c=n(2760),m=n(8145),v=n(4904),h=n(53644),f=n(12607),g=n(5160),b=n(33e3),y=n(53190),w=n(98174),x=n(41253),Y=n(41980),P=n(85181);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const j=e=>{let{childrenArray:t,query:n,hasSideNav:l}=e;const i=[];let o=null,a=null;for(;t.length;){const e=t[0];let s=0;Object.keys(P.G).forEach((d=>{var p;if((null==e||null===(p=e.props)||void 0===p?void 0:p.mdxType)===d){s++;let d=[];if(e.props.slots||e.props.repeat){const n=Math.max(parseInt(e.props.repeat)||1,1);for(let l=0;l<n;l++)d=d.concat((e.props.slots||"element").split(",").map(((e,i)=>[`${e.trim()}${1===n?"":l}`,t[d.length+i+1]])))}if(d.length){s+=d.length;const t=Object.fromEntries(d);"Variant"===e.props.mdxType&&(t.query=n),"Hero"===e.props.mdxType&&l&&(t.width=`calc(${u.fy} - ${u.CS});`);const p=(0,r.cloneElement)(e,C({},t));"Hero"===e.props.mdxType?o=o||p:"Resources"===e.props.mdxType?a=a||p:i.push(p)}else i.push(e)}})),0===s&&(s++,i.push(e)),t=t.splice(s)}return{filteredChildren:i,heroChild:o,resourcesChild:a}};var A={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},S={name:"4zleql",styles:"display:block"},z={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},k={name:"zjik7",styles:"display:flex"},N={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.A=e=>{var t;let{children:n,pageContext:i,query:O}=e;const{hasSideNav:D,siteMetadata:_,location:I,allSitePage:B,allMdx:F,allGithub:H,allGithubContributors:M}=(0,r.useContext)(d.Ay),$=void 0===i;let q=r.Children.toArray(n);if($||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){const{filteredChildren:e}=j({childrenArray:(0,x.I)(q),query:O,hasSideNav:D});return $?(0,s.Y)(a.MDXProvider,null,e):(0,s.Y)(a.MDXProvider,{components:C(C({},Y.U),P.G)},e,(0,s.Y)(p.w,{hasSideNav:D}))}{var E,G,T,V,X,L,Q,R,U,J,K,W,Z,ee,te,ne,le,ie,re,oe;const e=(0,u.Mt)(null==I?void 0:I.pathname,null==_?void 0:_.subPages),t=(0,u.rq)(null==I?void 0:I.pathname,null==_?void 0:_.subPages),{nextPage:n,previousPage:r}=(0,u.o1)(null==I?void 0:I.pathname,null==_?void 0:_.subPages),d=null==i||null===(E=i.frontmatter)||void 0===E?void 0:E.contributor_name,O=null==i||null===(G=i.frontmatter)||void 0===G?void 0:G.contributor_link,$=null==i||null===(T=i.frontmatter)||void 0===T?void 0:T.edition,ae=null==B?void 0:B.nodes.find((e=>{let{path:t}=e;return(0,o.Fe)(t)===(null==I?void 0:I.pathname)})),se=null!==(V=null==ae?void 0:ae.component)&&void 0!==V?V:"",de=null==F?void 0:F.nodes.find((e=>{let{fileAbsolutePath:t}=e;return t===se})),ue=null!==(X=null==de?void 0:de.tableOfContents)&&void 0!==X?X:{},{repository:pe,default_branch:ce,root:me}=null==H?void 0:H.nodes[0],ve=null==M?void 0:M.nodes.find((e=>{let{path:t}=e;return t===se})),he=null!==(L=null==ve?void 0:ve.contributors)&&void 0!==L?L:[],fe=se.replace(/.*\/src\/pages\//g,""),ge=void 0!==(null==i||null===(Q=i.frontmatter)||void 0===Q?void 0:Q.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof ge)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");const{home:be}=_,ye=(0,u.mc)(I.pathname),we=(0,u._Y)(null==_?void 0:_.pages),xe=(0,u.bB)(ye,we),Ye=(0,u.SH)(ye,xe),Pe=(0,u.Nk)(null==I?void 0:I.pathname,null==_?void 0:_.subPages);let Oe=[];if(Pe.length){const e=Pe[Pe.length-1].level+1;for(let t=0;t<e;t++){const e=Pe.filter((e=>e.level===t));e.length&&Oe.push(e.pop())}}let Ce=!1;null!=i&&null!==(R=i.frontmatter)&&void 0!==R&&R.jsDoc&&(Ce=!0,q=(0,x.I)(q));const{filteredChildren:je,heroChild:Ae,resourcesChild:Se}=j({childrenArray:q,hasSideNav:D}),ze=null===Ae,ke=null!==Ae&&(!Ae.props.variant||"default"===Ae.props.variant),Ne=null!==Ae&&Ae.props.variant&&"default"!==Ae.props.variant,De=null==ue||null===(U=ue.items)||void 0===U||null===(J=U[0])||void 0===J?void 0:J.items,_e=!Ae&&(D||Ce)&&De&&(De.length>1||1===De.length&&(null===(K=De[0])||void 0===K||null===(W=K.items)||void 0===W?void 0:W.length)>1||(null===(Z=De[0])||void 0===Z?void 0:Z.title)),Ie=Boolean(Se),Be=(null==e?void 0:e.pathname)===(null==t||null===(ee=t[0])||void 0===ee?void 0:ee.pathname),Fe=12,He=[];return _e&&He.push(`${(0,u.I6)(2)} - var(--spectrum-global-dimension-size-400)`),Ie&&He.push(`${(0,u.I6)(3)} - var(--spectrum-global-dimension-size-400)`),D&&He.push(u.CS),(0,s.Y)(a.MDXProvider,{components:C(C({},Y.U),P.G)},(0,s.Y)("main",{css:N},Ae&&Ae,(0,s.Y)("div",{css:(0,s.AH)(Ne?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":`\n                max-width: ${u.fy};\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                `," ",ke&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.fy,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.Y)("div",{css:k},(0,s.Y)("div",{css:(0,s.AH)("width:",Ne?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.I6)(Fe,He),";@media screen and (max-width: ",u.fy,"){width:100%;}")},ze&&(0,s.Y)("div",{css:(0,s.AH)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.fy,"){flex-direction:column;}")},!ge&&xe&&(0,s.Y)("div",{css:z},!0!==(null==be?void 0:be.hidden)&&null!=be&&be.title&&null!=be&&be.href?(0,s.Y)(h.B,{pages:[u.uQ,be,C(C({},xe),{},{href:(0,o.Fe)(xe.href)}),Ye&&C(C({},Ye),{},{href:(0,o.Fe)(Ye.href)})].concat((0,l.A)(Oe.map((e=>C(C({},e),{},{href:(0,o.Fe)((0,u.V8)(e.href))})))))}):(0,s.Y)(h.B,{pages:[u.uQ,(null==_||null===(te=_.pages)||void 0===te?void 0:te.length)>1?C(C({},null==_||null===(ne=_.pages)||void 0===ne?void 0:ne[0]),{},{href:(0,o.Fe)(null==_||null===(le=_.pages)||void 0===le||null===(ie=le[0])||void 0===ie?void 0:ie.href)}):null,C(C({},xe),{},{href:(0,o.Fe)(xe.href)}),Ye&&C(C({},Ye),{},{href:(0,o.Fe)(Ye.href)})].concat((0,l.A)(Oe.map((e=>e.title===(null==xe?void 0:xe.title)&&e.href===(null==xe?void 0:xe.href)?null:C(C({},e),{},{href:(0,o.Fe)((0,u.V8)(e.href))})))))})),(0,s.Y)("div",{css:(0,s.AH)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.fy,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},_&&_.githubIssue&&_.githubIssue.removeLogIssue?null:(0,s.Y)(v.p,{repository:pe,branch:ce,root:me,pagePath:fe}))),(0,s.Y)("div",{css:S},$&&(0,s.Y)(g.r,{name:$}),O&&(0,s.Y)(f.m,{name:d,link:O})),je,ze&&Be&&(0,s.Y)(y.T,{pages:t}),ze&&(0,s.Y)(w.P,{nextPage:n,previousPage:r}),!Ne&&(0,s.Y)("div",{css:A},(0,s.Y)("div",null,(0,s.Y)(c.R,{repository:pe,branch:ce,root:me,pagePath:fe,contributors:he,externalContributors:null==i||null===(re=i.frontmatter)||void 0===re?void 0:re.contributors,date:null!==(oe=he[0])&&void 0!==oe&&oe.date?new Date(he[0].date).toLocaleDateString():""})),(0,s.Y)("div",{css:(0,s.AH)("@media screen and (max-width: ",u.fy,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.Y)(m.G,null)))),_e&&(0,s.Y)(b.b,{tableOfContents:ue}),Ie&&Se)),(0,s.Y)(p.w,{hasSideNav:D})))}}}}]);
//# sourceMappingURL=2dee68d8-2e3803a134c9c497b014.js.map