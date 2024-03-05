"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[233],{65480:function(e,t,s){s.d(t,{Z:function(){return O}});var a=s(15861),n=s(64687),r=s.n(n),l=s(15007),o=s(95223),i=s(75900),c=s.n(i),d=s(77503),p=s(68457),u=s(62802),m=s.n(u),g=s(95083),v=s.n(g),f=s(32956),y=s(53971);var x={name:"1a50hjl",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;color:var(--spectrum-global-color-gray-800);text-decoration:underline;cursor:pointer;&:hover{color:var(--spectrum-global-color-gray-900);}"},w={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},h={name:"wwrf8h",styles:"display:flex;flex-direction:column;gap:8px;width:80%"},b={name:"zjik7",styles:"display:flex"},Z={name:"1gznmyj",styles:"color:var(--spectrum-global-color-gray-800);margin:2px 0;&:hover{color:var(--spectrum-global-color-gray-900);}"},k={name:"17fjgey",styles:"width:fit-content;margin-top:10px"},C={name:"omfma2",styles:"position:absolute;bottom:25px;top:unset;white-space:nowrap"},z={name:"17jxmzm",styles:"border:1px solid var(--spectrum-global-color-gray-400);border-radius:3px;padding:3px 6px"},N={name:"5uruvs",styles:"font-family:Source Code Pro,Monaco,monospace;white-space:normal;overflow-wrap:anywhere;max-width:300px"},S={name:"1llzu2n",styles:"display:flex;align-items:center;gap:24px"},B={name:"3w0yoi",styles:"display:flex;flex-direction:column;gap:8px"},j={name:"43cxha",styles:"display:flex;flex-direction:column;gap:32px"},D={name:"znjkts",styles:"margin:0;border:none;border-top:1px solid #D0D0D0!important"},I={name:"zwbqmk",styles:"display:flex;gap:20px;align-items:center"},P={name:"1xr24iu",styles:"padding:5%;display:flex;flex-direction:column;gap:24px;border:1px solid var(--spectrum-global-color-gray-200);border-radius:8px"},A={name:"1swkvfk",styles:"padding:0;font-family:'adobe-clean';border:none;background:transparent;margin-left:10px;cursor:pointer;text-decoration:underline;color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},M={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},_={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},E={name:"ti75j2",styles:"margin:0"},H={name:"a29rn1",styles:"display:flex;text-align:center;align-items:center;gap:10px"},T={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},U={name:"1xg43bt",styles:"display:flex;gap:20px;align-items:baseline"},F={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"},O=function e(t){var s,n,i=t.credentialProps,u=t.formData,g=t.setShowCreateForm,O=t.setShowCredential,L=t.organizationName,R=t.response,J=t.orgID,K=(0,l.useState)(null),X=K[0],q=K[1],G=(0,l.useState)({}),W=G[0],Q=G[1],V=(0,l.useState)(),Y=V[0],$=V[1],ee=(0,l.useState)(""),te=ee[0],se=ee[1],ae=[{key:"API Key",value:R.apiKey},{key:"Allowed domains",value:u.AllowedOrigins},{key:"Organization",value:L}];(0,l.useEffect)((function(){var e,t=null===(e=localStorage)||void 0===e?void 0:e.getItem("OrgInfo");t?Q(JSON.parse(t)):(0,p.Xu)(Q),u.Downloads&&oe("/console/api/organizations/"+J+"/projects/"+R.projectId+"/workspaces/"+R.workspaceId+"/download",u.Download,u.zipUrl)}),[]);var ne=null==i?void 0:i[e],re="/console/projects/"+(null==W?void 0:W.id)+"/"+R.projectId+"/overview",le=function(){q(null)},oe=function(){var e=(0,a.Z)(r().mark((function e(t,s,a){var n,l,o,i,c,d,p,u,g,y,x,w,h;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===s&&(s="download"),e.prev=1,e.next=4,v().getBinaryContent(a);case 4:return d=e.sent,p=new Uint8Array(d).buffer,u=new(m()),$(!0),e.next=10,u.loadAsync(p);case 10:return g=null===(n=window.adobeIMS)||void 0===n||null===(l=n.getTokenFromStorage())||void 0===l?void 0:l.token,y={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g,"x-api-key":null===(o=window)||void 0===o||null===(i=o.adobeIMS)||void 0===i||null===(c=i.adobeIdData)||void 0===c?void 0:c.client_id}},e.next=14,fetch(t,y);case 14:if(200!==(x=e.sent).status){e.next=26;break}return e.next=18,x.json();case 18:return w=e.sent,u.file("credential.json",JSON.stringify(w)),e.next=22,u.generateAsync({type:"blob"});case 22:h=e.sent,(0,f.saveAs)(h,s+".zip"),e.next=27;break;case 26:console.error("Failed to fetch additional data. Response status:",x.status);case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(1),console.error("An error occurred:",e.t0);case 32:return e.prev=32,$(!1),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[1,29,32,35]])})));return function(t,s,a){return e.apply(this,arguments)}}();return(0,o.tZ)("div",{className:c()(null==ne?void 0:ne.className),css:F},(0,o.tZ)("div",{className:c()(null==ne?void 0:ne.className),css:(0,o.iv)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width:",p.xU,") and (max-width:",p.Ey,"){padding:0;width:100%;}","")},(0,o.tZ)("div",{css:U},(null==ne?void 0:ne.title)&&(0,o.tZ)("h2",{className:"spectrum-Heading spectrum-Heading--sizeL",css:T},null==ne?void 0:ne.title),Y&&(0,o.tZ)("div",{css:H},(0,o.tZ)("div",{class:"spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--small"},(0,o.tZ)("div",{class:"spectrum-ProgressCircle-track"}),(0,o.tZ)("div",{class:"spectrum-ProgressCircle-fills"},(0,o.tZ)("div",{class:"spectrum-ProgressCircle-fillMask1"},(0,o.tZ)("div",{class:"spectrum-ProgressCircle-fillSubMask1"},(0,o.tZ)("div",{class:"spectrum-ProgressCircle-fill"}))),(0,o.tZ)("div",{class:"spectrum-ProgressCircle-fillMask2"},(0,o.tZ)("div",{class:"spectrum-ProgressCircle-fillSubMask2"},(0,o.tZ)("div",{class:"spectrum-ProgressCircle-fill"}))))),(0,o.tZ)("p",{css:E},"Downloading..."))),u.Downloads&&(null==ne?void 0:ne.paragraph)&&(0,o.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeL",css:_},null==ne?void 0:ne.paragraph),u.Downloads&&(0,o.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:M},"Download not working?",(0,o.tZ)("button",{css:A,onClick:function(){return oe("/console/api/organizations/"+(null==W?void 0:W.id)+"/projects/"+R.projectId+"/workspaces/"+R.workspaceId+"/download",u.Download,u.zipUrl)}},"Restart download"))),(0,o.tZ)("div",{css:(0,o.iv)("display:flex;gap:35px;@media screen and (min-width:",p.xU,") and (max-width:",p.Ey,"){flex-direction:column;padding-left:0;}","")},(0,o.tZ)("div",{css:(0,o.iv)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width:",p.xU,") and (max-width:",p.Ey,"){width:100%;}","")},(0,o.tZ)("div",{css:(0,o.iv)("background:white;border-radius:8px;width:90%;@media screen and (min-width:",p.xU,") and (max-width:",p.Ey,"){width:100%;}","")},(0,o.tZ)("div",{css:P},(0,o.tZ)("div",{css:I},(0,o.tZ)(p._m,null),(0,o.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeM"},u.CredentialName)),(0,o.tZ)("hr",{css:D}),(0,o.tZ)("div",{css:j},null==ae?void 0:ae.map((function(e,t){var s=e.key,a=e.value;return(0,o.tZ)(l.default.Fragment,null,a&&(0,o.tZ)(l.default.Fragment,null,(0,o.tZ)("div",{css:B},(0,o.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS"},s),(0,o.tZ)("div",{css:S},(0,o.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:N},a),(0,o.tZ)("div",{css:(0,o.iv)("position:relative;display:","Organization"===s?"none":"block",";","")},(0,o.tZ)("button",{className:"spectrum-ActionButton spectrum-ActionButton--sizeM",onMouseEnter:function(){return q(t)},onMouseLeave:le,onClick:function(){return function(e){navigator.clipboard.writeText(e),se(!0)}(a)},css:z},(0,o.tZ)("span",{className:"spectrum-ActionButton-label"},(0,o.tZ)(p.TI,null))),X===t&&(0,o.tZ)("span",{className:"spectrum-Tooltip spectrum-Tooltip--top is-open",css:C},(0,o.tZ)("span",{className:"spectrum-Tooltip-label"},"Copy"),(0,o.tZ)("span",{className:"spectrum-Tooltip-tip"})))))))})),(0,o.tZ)("div",{css:(0,o.iv)("display:flex;gap:24px;align-items:end;@media screen and (min-width:",p.xU,") and (max-width:",p.Ey,"){flex-direction:column;align-items:start;}","")},(0,o.tZ)("a",{href:null==ne?void 0:ne.nextStepsHref,target:"_blank",rel:"noreferrer"},(0,o.tZ)("button",{className:"spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM",css:k},(0,o.tZ)("span",{className:"spectrum-Button-label"},null==ne?void 0:ne.nextStepsLabel))),(0,o.tZ)("a",{href:re,target:"_blank",rel:"noreferrer",css:Z},(0,o.tZ)("div",{css:b},(0,o.tZ)("div",null,null==ne?void 0:ne.developerConsoleManage),(0,o.tZ)("div",{css:(0,o.iv)("margin-left:10px;@media screen and (min-width:",p.xU,") and (max-width:",p.Ey,"){display:none;}","")},(0,o.tZ)(p.AW,null)))))))),(0,o.tZ)("div",{css:h},(0,o.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:w},"Need another credential"),(0,o.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS"},(0,o.tZ)("button",{onClick:function(){g(!0),O(!1)},css:x},"Restart and create a new credential")))),null!=ne&&ne.children?(0,o.tZ)(d.cI,{sideContent:null==ne||null===(s=ne.children)||void 0===s||null===(n=s.props)||void 0===n?void 0:n.children}):null),te&&(0,o.tZ)(y.F,{variant:"success",message:"Copied to clipboard",disable:1e3,customDisableFunction:se}))}}}]);
//# sourceMappingURL=862bb76f-4755637750acb57c312c.js.map