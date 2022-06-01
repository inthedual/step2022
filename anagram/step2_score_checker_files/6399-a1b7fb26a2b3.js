"use strict";(()=>{var b=Object.defineProperty;var v=(E,f)=>b(E,"name",{value:f,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[6399],{23001:(E,f,a)=>{a.d(f,{i:()=>e});var d=a(90420),_=a(58070),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends _.b{static build(o,r){const c=new e;return c.providerId=o,c.provider=r,c}connectedCallback(){this.setAttribute("data-targets","command-palette.clientDefinedProviderElements")}},"ClientDefinedProviderElement");l([d.Lj],e.prototype,"providerId",2),e=l([d.Ih],e)},1648:(E,f,a)=>{a.d(f,{Z:()=>y,o:()=>I});var d=a(90420),_=a(23001),m=a(65881),i=a(86004),l=a(26850),e=a(80425),o=a(3447),r=a(30474),c=a(99505),n=Object.defineProperty,t=Object.getOwnPropertyDescriptor,p=v((s,u,g,P)=>{for(var M=P>1?void 0:P?t(u,g):u,D=s.length-1,C;D>=0;D--)(C=s[D])&&(M=(P?C(u,g,M):C(M))||M);return P&&M&&n(u,g,M),M},"__decorateClass");const h=v(()=>navigator.platform.match(/Mac/),"isMac"),T=h()?"metaKey":"ctrlKey",O=h()?"Meta":"Control",I=v(s=>s instanceof KeyboardEvent?s[T]:!1,"isPlatformMetaKey"),S=450;let y=v(class extends HTMLElement{constructor(){super(...arguments);this.everActivated=!1,this.activated=!1,this.error=!1,this.query=new l.A("",""),this.setupComplete=!1,this.sessionId="",this.returnTo="",this.userId="",this.activationHotkey="Mod+k,Mod+Alt+k",this.commandModeHotkey="Mod+Shift+k,Control+K",this.memexActivationHotkey="Mod+p"}setup(){this.modes=Array.from(this.querySelectorAll("command-palette-mode")),this.defaultMode=this.querySelector(".js-command-palette-default-mode"),this.commandPaletteInput=this.querySelector("command-palette-input"),this.groups=this.querySelectorAll("command-palette-item-group"),new ResizeObserver(g=>{for(const P of g)this.commandPaletteInput.scopeElement.smallDisplay=P.contentRect.width<S}).observe(this),this.defaultOpen&&(this.manualToggle(!0),this.clearReturnToParams()),window.commandPalette=this,this.setupComplete=!0;const u=new Event("command-palette-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(u)}connectedCallback(){this.setupComplete||this.setup()}clear(s=!0){var u;this.clearProviderCaches(),this.pageStack.reset(((u=this.pjaxMeta)==null?void 0:u.resetPages)||[]),s&&this.resetInput()}clearCommands(s=!0){return this.everActivated&&(this.clearCommandProviderCaches(),s&&this.resetInput()),Promise.resolve()}resetInput(){this.commandPaletteInput.value=""}activate(){this.sessionId=this.generateSessionId(),this.commandPaletteInput.scopeElement.smallDisplay=this.offsetWidth<S,this.commandPaletteInput.focus(),this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.pageStack.commandPaletteActivated(),this.dispatchEvent(new CustomEvent("command-palette-activated",{detail:{previouslyActivated:this.everActivated}})),this.activated=!0,this.everActivated=!0,(0,c.j)("session_initiated")}deactivate(){this.activated=!1,this.pageStack.unbindListeners(),this.clear(),this.previouslyActiveElement&&this.previouslyActiveElement.focus(),(0,c.j)("session_terminated")}generateSessionId(){return(0,e.k)(`${Date.now()}_${this.userId}_${this.query.path}`).toString()}manualToggle(s){const u=this.closest("details");s?u.open=!0:u.removeAttribute("open")}dismiss(){this.manualToggle(!1),this.clear()}get defaultScopeId(){var s;return((s=this.pjaxMeta)==null?void 0:s.defaultScopeId)||""}get defaultScopeType(){var s;return((s=this.pjaxMeta)==null?void 0:s.defaultScopeType)||""}get pjaxMeta(){return(0,r.I)()}get secondaryActivationHotkey(){const s=this.activationHotkey.split(",");return s.length>1?s[s.length-1]:""}get platformActivationHotkey(){return this.platformHotkey(this.activationHotkey)}get platformSecondardActivationHotkey(){return this.platformHotkey(this.secondaryActivationHotkey)}get platformCommandModeHotkey(){return this.platformHotkey(this.commandModeHotkey)}get platformMemexActivationHotkey(){return this.platformHotkey(this.memexActivationHotkey)}platformHotkey(s){if(s==="none")return"";let u=s;if(h())u=u.replace(/Mod\+Alt/g,"Alt+Mod");else if(u.includes("Shift")){const g=u.charAt(u.length-1);u+=`,${u.replace(`Shift+${g}`,g.toUpperCase())}`}return u.replace(/Mod/g,O)}onInput(){!this.everActivated||(this.commandPaletteInput.typeahead="",this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.updateOverlay())}updateOverlay(){const s=this.getMode();this.commandPaletteInput.overlay=s;for(const u of this.groups)u.renderElement(s);if(s&&this.getTextWithoutMode()===""){const u=this.getModeElement().placeholder||"";this.commandPaletteInput.showModePlaceholder(u)}else this.commandPaletteInput.showModePlaceholder("")}itemsUpdated(s){if(!(s instanceof CustomEvent))return;const g=s.detail.items.filter(C=>C.group!==m.O.footerGroupId),P=g.filter(C=>!C.group||!m.O.helpGroupIds.includes(C.group)),M=g.length>P.length,D=P.length===0&&this.activated;P.length>0?this.toggleEmptyState(!1,M):D&&(this.toggleEmptyState(!0,M),this.toggleTips()),this.toggleErrorTips()}loadingStateChanged(s){s instanceof CustomEvent&&(this.commandPaletteInput.loading=s.detail.loading)}pageFetchError(s){s instanceof CustomEvent&&(this.error=!0,this.toggleErrorTips())}selectedItemChanged(s){if(!(s instanceof CustomEvent))return;const u=s.detail.item,g=s.detail.isDefaultSelection;this.updateTypeahead(u,g)}setActiveModeElement(){const s=this.commandPaletteInput.value.substring(0,1),u=this.modes.filter(g=>g.active(this.query.scope,s)).find(g=>g.character()===s);this.activeMode=u||this.defaultMode,this.pageStack.currentMode=this.activeMode.character()}setQuery(){this.query=new l.A(this.getTextWithoutMode().trimStart(),this.getMode(),{scope:this.commandPaletteInput.scope,subjectId:this.defaultScopeId,subjectType:this.defaultScopeType,returnTo:this.returnTo}),this.pageStack.currentQueryText=this.getTextWithoutMode().trimStart()}getModeElement(){return this.activeMode}getMode(){var s;return(s=this.getModeElement())==null?void 0:s.character()}getTextWithoutMode(){if(!this.commandPaletteInput)return"";const s=this.commandPaletteInput.value,u=this.getMode();return u&&s.startsWith(u)?s.substring(1):s}get selectedItem(){return this.pageStack.currentPage.selectedItem}onSelect(s){this.selectedItem?this.selectedItem.item.select(this):s.preventDefault()}autocomplete(s){const u=this.commandPaletteInput;s.typeahead!==void 0?u.value=u.overlay+s.typeahead:u.value=u.overlay+s.title}setScope(s){const u=s||this.commandPaletteInput.scope;for(const g of u.tokens){const P=g===u.tokens[u.tokens.length-1],M=new i.j({title:g.value,scopeId:g.id,scopeType:g.type});this.pageStack.push(M,!P)}this.commandPaletteInput.value=""}onDescope(){this.toggleEmptyState(!1,!1),this.pageStack.pop(),this.toggleTips()}onInputClear(){this.pageStack.clear()}onKeydown(s){var u;s.key==="Enter"&&this.selectedItem?((u=this.selectedItem)==null||u.activate(this,s),s.preventDefault(),s.stopPropagation()):s.key==="ArrowDown"?(this.navigateToItem(1),s.preventDefault(),s.stopPropagation()):s.key==="ArrowUp"?(this.navigateToItem(-1),s.preventDefault(),s.stopPropagation()):this.isCopyEvent(s)&&this.selectedItem&&(this.selectedItem.copy(this),s.preventDefault(),s.stopPropagation())}navigateToItem(s){this.pageStack.navigate(s)}toggleTips(){const s=this.modeTips.filter(g=>g.available(this.query)),u=s[Math.floor(Math.random()*s.length)];for(const g of this.modeTips)g.hidden=u!==g;this.pageStack.hasVisibleTip=!!u,this.pageStack.currentPage.recomputeStyles()}toggleEmptyState(s,u){for(const g of this.emptyStateElements)g.toggle(this.query,s);if(!u&&s){const g=this.serverDefinedProviderElements.find(P=>P.type==="help");g&&this.pageStack.currentPage.fetch([g.provider],{isEmpty:!0})}}toggleErrorTips(){for(const s of this.errorStateTips)s.toggle(this.query,!1,this.error)}updateInputScope(s){s instanceof CustomEvent&&(this.commandPaletteInput.scope=this.pageStack.scope,this.setQuery())}updateTypeahead(s,u=!1){var g,P;this.getTextWithoutMode()===""&&(!s||u)?this.commandPaletteInput.typeahead="":s&&(this.commandPaletteInput.typeahead=(P=(g=s.typeahead)!=null?g:s.title)!=null?P:"")}isCopyEvent(s){return this.commandPaletteInput.textSelected()?!1:h()?s.metaKey&&s.key==="c":s.ctrlKey&&s.key==="c"}setQueryScope(){this.query.scope=this.commandPaletteInput.scope}get providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get commandsProviderElements(){return this.providerElements.filter(s=>{var u;return(u=s.provider)==null?void 0:u.hasCommands})}clearProviderCaches(){var s;for(const u of this.providerElements)(s=u.provider)==null||s.clearCache()}clearCommandProviderCaches(){var s;for(const u of this.commandsProviderElements)(s=u.provider)==null||s.clearCache()}registerProvider(s,u){const g=this.querySelector(`client-defined-provider[data-provider-id="${s}"]`);g&&g.remove();const P=_.i.build(s,u);this.appendChild(P)}pushPage(s,u=!1){u&&this.pageStack.clear(!1),this.pageStack.push(s),this.resetInput()}get tipElements(){const s=this.querySelectorAll("command-palette-tip");return Array.from(s)}get modeTips(){return this.tipElements.filter(s=>!s.onEmpty&&!s.onError)}get emptyStateElements(){return this.tipElements.filter(s=>s.onEmpty)}get errorStateTips(){return this.tipElements.filter(s=>s.onError)}get placeholder(){return this.getAttribute("placeholder")||""}get defaultOpen(){return this.getAttribute("data-default-open")!==null}clearReturnToParams(){const s=new URLSearchParams(location.search);s.delete("command_palette_open"),s.delete("command_query"),s.delete("command_mode"),s.delete("clear_command_scope"),history.replaceState(null,"",`?${s}${location.hash}`)}displayFlash(s,u,g=5e3){const P=document.querySelector(".js-command-palette-toasts");if(!P)return;const M=P.querySelectorAll(".Toast");for(const A of M)A.hidden=!0;const D=P.querySelector(`.Toast.Toast--${s}`);if(!D)return;const C=D.querySelector(".Toast-content");C.textContent=u,D.hidden=!1,setTimeout(()=>{D.hidden=!0},g)}},"CommandPalette");y.tagName="command-palette",p([d.Lj],y.prototype,"returnTo",2),p([d.Lj],y.prototype,"userId",2),p([d.Lj],y.prototype,"activationHotkey",2),p([d.Lj],y.prototype,"commandModeHotkey",2),p([d.Lj],y.prototype,"memexActivationHotkey",2),p([d.fA],y.prototype,"pageStack",2),p([d.GO],y.prototype,"clientDefinedProviderElements",2),p([d.GO],y.prototype,"serverDefinedProviderElements",2),p([(0,o.D)(250)],y.prototype,"clearCommands",1),y=p([d.Ih],y)},65881:(E,f,a)=>{a.d(f,{O:()=>e});var d=a(90420),_=a(38772),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends HTMLElement{constructor(){super(...arguments);this.groupLimits="",this.defaultPriority=0,this.skipTemplate=!1}connectedCallback(){this.classList.add("py-2","border-top"),this.setAttribute("hidden","true"),this.skipTemplate||this.renderElement(""),this.skipTemplate=!0}prepareForNewItems(){this.list.innerHTML="",this.setAttribute("hidden","true"),this.classList.contains("border-top")||this.classList.add("border-top")}hasItem(o){return this.list.querySelectorAll(`[data-item-id="${o.id}"]`).length>0}renderElement(o){const r=v(()=>this.hasTitle?_.dy`
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              ${this.groupTitle}
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              ${o?"":this.groupHint}
            </span>
          </div>
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `:_.dy`
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `,"groupTemplate");(0,_.sY)(r(),this)}push(o){this.removeAttribute("hidden"),this.topGroup&&this.atLimit?o.itemId!==this.firstItem.itemId&&this.replaceTopGroupItem(o):this.list.append(o)}replaceTopGroupItem(o){this.list.replaceChild(o,this.firstItem)}groupLimitForScope(){const o=this.closest("command-palette");if(o){const r=o.query.scope.type;return JSON.parse(this.groupLimits)[r]}}get limit(){const o=this.groupLimitForScope();return this.topGroup?1:this.isModeActive()?50:o||e.defaultGroupLimit}get atLimit(){return this.list.children.length>=this.limit}parsedGroupLimits(){return this.groupLimits?JSON.parse(this.groupLimits):{}}limitForScopeType(o){const c=this.parsedGroupLimits()[o];return this.topGroup?1:this.isModeActive()?e.activeModeLimit:c||e.defaultGroupLimit}atLimitForScopeType(o){return this.list.children.length>=this.limitForScopeType(o)}isModeActive(){const o=this.closest("command-palette");return o?o.getMode():!1}get topGroup(){return this.groupId===e.topGroupId}get hasTitle(){return this.groupId!==e.footerGroupId&&this.groupId!==e.defaultGroupId}get itemNodes(){return this.list.querySelectorAll("command-palette-item")}get firstItem(){return this.itemNodes[0]}get lastItem(){return this.itemNodes[this.itemNodes.length-1]}},"CommandPaletteItemGroupElement");e.defaultGroupLimit=5,e.activeModeLimit=50,e.topGroupId="top",e.defaultGroupId="default",e.footerGroupId="footer",e.helpGroupIds=["modes_help","filters_help"],e.commandGroupIds=["commands"],e.topGroupScoreThreshold=9,l([d.Lj],e.prototype,"groupTitle",2),l([d.Lj],e.prototype,"groupHint",2),l([d.Lj],e.prototype,"groupId",2),l([d.Lj],e.prototype,"groupLimits",2),l([d.Lj],e.prototype,"defaultPriority",2),l([d.Lj],e.prototype,"skipTemplate",2),l([d.fA],e.prototype,"list",2),l([d.fA],e.prototype,"header",2),e=l([d.Ih],e)},34348:(E,f,a)=>{a.d(f,{v:()=>n});var d=a(90420),_=a(38772),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((t,p,h,T)=>{for(var O=T>1?void 0:T?i(p,h):p,I=t.length-1,S;I>=0;I--)(S=t[I])&&(O=(T?S(p,h,O):S(O))||O);return T&&O&&m(p,h,O),O},"__decorateClass");const e=14,o=20,r=20,c=55;let n=v(class extends HTMLElement{constructor(){super(...arguments);this.smallDisplay=!1}connectedCallback(){this.classList.add("d-inline-flex")}get lastToken(){return this.tokens[this.tokens.length-1]}get text(){return this.tokens.map(t=>t.text).join("/")}get id(){return this.lastToken?this.lastToken.id:n.emptyScope.id}get type(){return this.lastToken?this.lastToken.type:n.emptyScope.type}get scope(){return this.hasScope()?{text:this.text,type:this.type,id:this.id,tokens:this.tokens}:n.emptyScope}set scope(t){this.renderTokens(t.tokens)}renderTokens(t){this.clearScope();let p=0,h=t.length;const T=this.smallDisplay?e:r,O=this.smallDisplay?o:c;for(let y=t.length-1;y>=0&&!(p+Math.min(t[y].text.length,T)+5>O);y--)p+=Math.min(t[y].text.length,T)+5,h=y;const I=v(y=>_.dy`${y.map(S)}`,"tokensTemplate"),S=v((y,s)=>{const u=y.text.length>T?`${y.text.substring(0,T-3)}...`:y.text;return _.dy`
        <command-palette-token
          data-text="${y.text}"
          data-id="${y.id}"
          data-type="${y.type}"
          data-value="${y.value}"
          data-targets="command-palette-scope.tokens"
          hidden="${s<h}"
          class="color-fg-default text-semibold"
          style="white-space:nowrap;line-height:20px;"
          >${u}<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        </command-palette-token>
      `},"tokenTemplate");(0,_.sY)(I(t),this),this.hidden=!this.hasScope(),h!==0&&(this.placeholder.hidden=!1)}removeToken(){this.lastToken&&(this.lastRemovedToken=this.lastToken,this.lastToken.remove(),this.renderTokens(this.tokens))}hasScope(){return this.tokens.length>0&&this.type&&this.id&&this.text}clearScope(){for(const t of this.tokens)t.remove();this.placeholder.hidden=!0}attributeChangedCallback(t,p,h){!this.isConnected||t==="data-small-display"&&p!==h&&this.renderTokens(this.tokens)}},"CommandPaletteScopeElement");n.emptyScope={type:"",text:"",id:"",tokens:[]},l([d.Lj],n.prototype,"smallDisplay",2),l([d.fA],n.prototype,"placeholder",2),l([d.GO],n.prototype,"tokens",2),n=l([d.Ih],n)},76612:(E,f,a)=>{a.d(f,{z:()=>m});function d(i){const l=document.createElement("pre");return l.style.width="1px",l.style.height="1px",l.style.position="fixed",l.style.top="5px",l.textContent=i,l}v(d,"createNode");function _(i){if("clipboard"in navigator)return navigator.clipboard.writeText(i.textContent||"");const l=getSelection();if(l==null)return Promise.reject(new Error);l.removeAllRanges();const e=document.createRange();return e.selectNodeContents(i),l.addRange(e),document.execCommand("copy"),l.removeAllRanges(),Promise.resolve()}v(_,"copyNode");function m(i){if("clipboard"in navigator)return navigator.clipboard.writeText(i);const l=document.body;if(!l)return Promise.reject(new Error);const e=d(i);return l.appendChild(e),_(e),l.removeChild(e),Promise.resolve()}v(m,"copyText")},74365:(E,f,a)=>{a.d(f,{i:()=>e});var d=a(1648),_=a(9731),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends _.g{activate(o,r){r instanceof PointerEvent?super.activate(o,r):r instanceof KeyboardEvent&&this.activateLinkBehavior(o,r,(0,d.o)(r))}get key(){return this.title}},"AccessPolicyItem");e=l([_.O],e)},16517:(E,f,a)=>{a.d(f,{d:()=>e});var d=a(9731),_=a(37070),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends d.g{constructor(o){super(o);this.typeahead=o.title,this.group="commands"}get action(){return this._action}async activate(o){super.activate(o);const r=o.getAttribute("data-commands-path");if(!r)return;const c=o.query.params();c.set("command",this.action.id),o.commandPaletteInput.loading=!0;const n=await(0,_.Q)(r,{method:"POST",body:c});if(o.commandPaletteInput.loading=!1,n.ok){const t=await n.json();this.handleResponse(o,t.action,t.arguments)}else o.displayFlash("error","Failed to run command")}handleResponse(o,r,c){switch(r){case"displayFlash":o.displayFlash(c.type,c.message),o.dismiss();break}}},"CommandItem");e=l([d.O],e)},20181:(E,f,a)=>{a.d(f,{Z:()=>e});var d=a(9731),_=a(76612),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends d.g{constructor(o){super(o);this.priority=11,this.score=1,this.typeahead=o.title,this.group="commands"}get action(){return this._action}async activate(o){super.activate(o);try{await(0,_.z)(this.action.text),o.displayFlash("success",this.action.message),o.dismiss()}catch{o.displayFlash("error","Copy failed")}}},"CopyableItem");e=l([d.O],e)},52815:(E,f,a)=>{a.d(f,{B:()=>l});var d=a(9731),_=Object.defineProperty,m=Object.getOwnPropertyDescriptor,i=v((e,o,r,c)=>{for(var n=c>1?void 0:c?m(o,r):o,t=e.length-1,p;t>=0;t--)(p=e[t])&&(n=(c?p(o,r,n):p(n))||n);return c&&n&&_(o,r,n),n},"__decorateClass");let l=v(class extends d.g{static from(e){return new l({title:e.title,typeahead:"",priority:-10-e.index,score:-10,group:e.group,action:{type:"help",description:"",prefix:e.prefix},persistentHint:e.persistentHint})}constructor(e){super(e);this.persistentHint=e.persistentHint}activate(e,o){e.commandPaletteInput.value=this.action.prefix+e.getTextWithoutMode()}autocomplete(e){e.commandPaletteInput.value=this.action.prefix+e.getTextWithoutMode()}calculateScore(e){return 0}get action(){return this._action}},"HelpItem");l=i([d.O],l)},99780:(E,f,a)=>{a.d(f,{s:()=>e});var d=a(1648),_=a(9731),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends _.g{static from(o){return new e({title:o.title,typeahead:o.title,priority:1,score:1,group:o.group,action:{type:"jump_to",description:"",path:o.path},icon:{type:"octicon",id:o.icon}})}activate(o,r){r instanceof PointerEvent?super.activate(o,r):r instanceof KeyboardEvent&&this.activateLinkBehavior(o,r,(0,d.o)(r))}copy(o){super.copy(o);const r=new URL(this.action.path,window.location.origin);return this.copyToClipboardAndAnnounce(r.toString()),r.toString()}get key(){return`${super.key}/${this.action.path}`}get action(){return this._action}},"JumpToItem");e=l([_.O],e)},94634:(E,f,a)=>{a.d(f,{V:()=>e});var d=a(99780),_=a(9731),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends d.s{},"JumpToOrgItem");e=l([_.O],e)},32004:(E,f,a)=>{a.d(f,{W:()=>e});var d=a(99780),_=a(9731),m=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=v((o,r,c,n)=>{for(var t=n>1?void 0:n?i(r,c):r,p=o.length-1,h;p>=0;p--)(h=o[p])&&(t=(n?h(r,c,t):h(t))||t);return n&&t&&m(r,c,t),t},"__decorateClass");let e=v(class extends d.s{},"JumpToTeamItem");e=l([_.O],e)},46635:(E,f,a)=>{a.d(f,{U:()=>_});var d=a(33241);class _ extends d.ck{constructor(i,l){super({title:(e=l.title)!=null?e:i.title,subtitle:(o=l.subtitle)!=null?o:i.subtitle,typeahead:(r=l.title)!=null?r:i.title,priority:(c=l.priority)!=null?c:i.priority,group:(n=l.group)!=null?n:i.group,icon:{type:(t=l.iconType)!=null?t:i.iconType,id:(p=l.icon)!=null?p:i.icon},hint:"Run command"});var e,o,r,c,n,t,p;this.command=i}get path(){}copy(i){}activate(i){this.command.run(i),this.command.dismissAfterRun&&i.dismiss()}isApplicable(i){return this.command.isApplicable(i)}select(i){this.command.select?this.command.select(i):i.autocomplete(this)}}v(_,"MainWindowCommandItem")},3404:(E,f,a)=>{a.d(f,{K:()=>o});var d=a(9731),_=a(65881),m=a(99780),i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,e=v((r,c,n,t)=>{for(var p=t>1?void 0:t?l(c,n):c,h=r.length-1,T;h>=0;h--)(T=r[h])&&(p=(t?T(c,n,p):T(p))||p);return t&&p&&i(c,n,p),p},"__decorateClass");let o=v(class extends m.s{static create(r){let c,n;if(r.scope.type==="repository"){const t=r.scope.tokens.map(p=>p.text).join("/");c=`in ${t}`,n=`/${t}/search?q=${r.text}`}else if(r.scope.type==="owner"){const t=`org:${r.scope.text} ${r.text}`;c=`in ${r.scope.text}`,n=`/search?q=${t}`}else c="across all of GitHub",n=`/search?q=${r.text}`;return new o({title:`Search ${r.text}${c}`,typeahead:"",priority:-10,score:-10,group:_.O.footerGroupId,action:{type:"jump_to",description:"",path:n},icon:{type:"octicon",id:"search-color-fg-muted"},titleScope:c})}constructor(r){super(r);this.titleScope=r.titleScope}autocomplete(r){}calculateScore(r){return 0}},"SearchLinkItem");o=e([d.O],o)},9731:(E,f,a)=>{a.d(f,{O:()=>m,g:()=>l});var d=a(33241),_=a(65881);function m(e){l.register(e)}v(m,"serverDefinedItem");const i=v(class extends d.ck{constructor(e){super(e);this.position="",this.score=e.score,this.scope=e.scope,this.matchFields=e.match_fields,this._action=e.action}static register(e){this.itemClasses[e.itemType]=e}static get itemType(){return this.buildItemType(this.name)}static buildItemType(e){return e.replace(/([A-Z]($|[a-z]))/g,"_$1").replace(/(^_|_Item$)/g,"").toLowerCase()}static build(e){const o=this.itemClasses[e.action.type];if(o)return new o(e);throw new Error(`No item handler for ${e.action.type}`)}get action(){return this._action}get key(){return`${this.action.type}/${this.title}/${this.group}`}get path(){return this.action.path||""}get itemType(){return i.buildItemType(this.constructor.name)}select(e){this.scope?e.setScope(this.scope):e.autocomplete(this)}activate(e,o){}activateLinkBehavior(e,o,r){var c;(c=this.element)==null||c.activateLinkBehavior(e,o,r)}copy(e){}copyToClipboardAndAnnounce(e,o){var r;(r=this.element)==null||r.copyToClipboardAndAnnounce(e,o)}},"_ServerDefinedItem");let l=i;l.itemClasses={},l.defaultData={title:"",score:1,priority:1,action:{type:"",path:""},icon:{type:"octicon",id:"dash-color-fg-muted"},group:_.O.defaultGroupId}},86004:(E,f,a)=>{a.d(f,{j:()=>d});class d{constructor(m){this.title=m.title,this.scopeId=m.scopeId,this.scopeType=m.scopeType}get providers(){const m=[];for(const i of this._providerElements)i.provider&&m.push(i.provider);return m}get _providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get serverDefinedProviderElements(){const m=document.querySelectorAll("server-defined-provider");return Array.from(m)}get clientDefinedProviderElements(){const m=document.querySelectorAll("client-defined-provider");return Array.from(m)}}v(d,"GlobalProvidersPage")},30474:(E,f,a)=>{a.d(f,{I:()=>d});function d(){return document.querySelector(".js-command-palette-pjax-metadata")}v(d,"getPjaxMetadataElement")},58070:(E,f,a)=>{a.d(f,{b:()=>d});class d extends HTMLElement{async fetchWithDebounce(m,i){return this.provider?(this._lastFetchQuery=m,await this.delay(this.provider.debounce),this._lastFetchQuery!==m?{results:[]}:this.provider.fetch(m,i)):{results:[]}}delay(m){return new Promise(i=>setTimeout(i,m))}}v(d,"ProviderElement")},21314:(E,f,a)=>{a.d(f,{B:()=>d});class d{fuzzyFilter(m,i,l=0){if(i.isBlank())return m;const e=[];for(const o of m)o.calculateScore(i.text)>l&&e.push(o);return e}}v(d,"ProviderBase")},43832:(E,f,a)=>{a.d(f,{j:()=>_});var d=a(21314);class _ extends d.B{constructor(i){super();this.element=i}get type(){return this.element.type}get modes(){return this.element.modes}get debounce(){return this.element.debounce}get scopeTypes(){return this.element.scopeTypes}get src(){return this.element.src}get hasWildCard(){return this.element.hasWildCard}get hasCommands(){return this.element.hasCommands}fetch(i,l){throw new Error("Method not implemented.")}enabledFor(i){throw new Error("Method not implemented.")}clearCache(){throw new Error("Method not implemented.")}}v(_,"ServerDefinedProvider")},26850:(E,f,a)=>{a.d(f,{A:()=>_});var d=a(34348);class _{constructor(i,l,{scope:e,subjectId:o,subjectType:r,returnTo:c}={}){this.queryText=i,this.queryMode=l,this.scope=e!=null?e:d.v.emptyScope,this.subjectId=o,this.subjectType=r,this.returnTo=c}get text(){return this.queryText}get mode(){return this.queryMode}get path(){return this.buildPath(this)}buildPath(i,l=i.text){return`scope:${i.scope.type}-${i.scope.id}/mode:${i.mode}/query:${l}`}clearScope(){this.scope=d.v.emptyScope}hasScope(){return this.scope.id!==d.v.emptyScope.id}isBlank(){return this.text.trim().length===0}isPresent(){return!this.isBlank()}immutableCopy(){const i=this.text,l=this.mode,e={...this.scope};return new _(i,l,{scope:e,subjectId:this.subjectId,subjectType:this.subjectType,returnTo:this.returnTo})}hasSameScope(i){return this.scope.id===i.scope.id}params(){const i=new URLSearchParams;return this.isPresent()&&i.set("q",this.text),this.hasScope()&&i.set("scope",this.scope.id),this.mode&&i.set("mode",this.mode),this.returnTo&&i.set("return_to",this.returnTo),this.subjectId&&i.set("subject",this.subjectId),i}}v(_,"Query")},99505:(E,f,a)=>{a.d(f,{j:()=>r});var d=a(74365),_=a(16517),m=a(20181),i=a(99780),l=a(46635),e=a(9731),o=a(95186);function r(n,t){const p=document.querySelector("command-palette");let h="";t&&(t.group==="commands"||t.group==="global_commands")&&(h=t.title);const T={command_palette_session_id:p.sessionId,command_palette_scope:p.query.scope.type,command_palette_mode:p.getMode(),command_palette_title:h,command_palette_position:t==null?void 0:t.position,command_palette_score:t==null?void 0:t.score,command_palette_group:t==null?void 0:t.group,command_palette_item_type:t instanceof e.g?t==null?void 0:t.itemType:t==null?void 0:t.constructor.name};let O;n==="activate"?O=c(t):O=n,(0,o.q)(`command_palette_${O}`,T)}v(r,"sendTrackingEvent");function c(n){var t;return n instanceof d.i?"access_policy_executed":n instanceof _.d||n instanceof l.U||n instanceof m.Z?"command_executed":n instanceof i.s?((t=n.element)==null?void 0:t.newTabOpened)?"jump_to_new_tab":"jump_to":"activate"}v(c,"activateTrackingEventType")},95186:(E,f,a)=>{a.d(f,{Y:()=>o,q:()=>r});var d=a(88149),_=a(86058);const m="dimension_";let i;const l=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{const c=(0,d.n)("octolytics");delete c.baseContext,i=new _.R(c)}catch{}function e(c){const n=(0,d.n)("octolytics").baseContext||{};if(n){delete n.app_id,delete n.event_url,delete n.host;for(const h in n)h.startsWith(m)&&(n[h.replace(m,"")]=n[h],delete n[h])}const t=document.querySelector("meta[name=visitor-payload]");if(t){const h=JSON.parse(atob(t.content));Object.assign(n,h)}const p=new URLSearchParams(window.location.search);for(const[h,T]of p)l.includes(h.toLowerCase())&&(n[h]=T);return Object.assign(n,c)}v(e,"extendBaseContext");function o(c){i==null||i.sendPageView(e(c))}v(o,"sendPageView");function r(c,n){var t,p;const h=(p=(t=document.head)==null?void 0:t.querySelector('meta[name="current-catalog-service"]'))==null?void 0:p.content,T=h?{service:h}:{};for(const[O,I]of Object.entries(n))I!=null&&(T[O]=`${I}`);i==null||i.sendEvent(c||"unknown",e(T))}v(r,"sendEvent")},37070:(E,f,a)=>{a.d(f,{Q:()=>d});function d(m,i={}){if(m.match(/^https?:/))throw new Error("Can not make cross-origin requests from verifiedFetch");const l={...i.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(m,{...i,headers:l})}v(d,"verifiedFetch");function _(m,i){var l;const o={...(l=i==null?void 0:i.headers)!=null?l:{},Accept:"application/json","Content-Type":"application/json"},r=(i==null?void 0:i.body)?JSON.stringify(i.body):void 0;return d(m,{...i,body:r,headers:o})}v(_,"verifiedFetchJSON")}}]);})();

//# sourceMappingURL=6399-d8e085cd4960.js.map