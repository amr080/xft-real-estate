(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5003],{79940:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contests",function(){return l(75443)}])},81375:function(e,a,l){"use strict";l.d(a,{z:function(){return i}});var r=l(52676),t=l(7810),s=l.n(t),n={src:"/_next/static/media/parcl-coin-logo.7f5365a5.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAh1BMVEVMaXGTUkc1gjhjTnxoOTAbOBqQTkM+JB0NCggbGA47d3g6aJlOWaA7XsNPLSUVEAqurKZ7QTXWxMR+T2Grw7E2hD0raS44hVYfTiFKT6BCWbw6YLM/X8NiZDjM0shwa3fQ09hDYLweJxZyW1HSxsKLVmJoYFd8g4I+iFknVSens8WxscoxdTVFj2HOAAAAHnRSTlMA9S/6+/kv/C+y+/v9L/7q+rT6sPrqsLTz87C06i/uqIOdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAS0lEQVR4nAXBBRKAIAAEwAMBlbBbB8Gu/7/PXYC2Uo0GoPUllZ8Mmq9yj/YDutue86t7cG6P2QUB4iVbt2IvEaVhwggRQBQnLBf4AbaJBKJeHzp8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};function i(){return(0,r.jsx)(s(),{height:24,width:24,src:n,alt:"$PRCL"})}},75443:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return eO}});var r=l(52676),t=l(79457),s=l(87088),n=l(64152),i=l(59363);let d=(0,n.a)(new Date("2024-05-01T00:00:00")),o=(0,n.a)(new Date("2024-05-31T23:59:59")),c=(0,i.R)(d,new Date);o.getTime(),d.getTime();let u={first:1e3,second:600,third:400};var x=l(91671),m=l(1151),f=l(51035),h=l(75271);function g(){return(0,r.jsx)("div",{className:"rounded-[4px] bg-decorative-reward-background p-xx-small",children:(0,r.jsx)(x.J,{name:"star",prefix:"sharp-solid",color:"warning",size:"x-small"})})}function p(){let[e,a]=(0,h.useState)(!0);return(0,r.jsx)("div",{className:"border rounded-lg mb-default p-default mt-default border-neutral-border-surface-default bg-neutral-fill-surface-default",children:(0,r.jsx)("div",{className:"flex flex-col items-start justify-center w-full",children:(0,r.jsx)(f.z,{transitionTime:250,easing:"cubic-bezier(0.76, 0, 0.24, 1)",open:e,trigger:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{onClick:()=>{a(!e)},children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(m.a,{category:"label",mode:"default",children:"Contest Rules"}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"text-neutral-label-default",children:e?(0,r.jsx)(x.J,{name:"minus",prefix:"sharp-regular",color:"default"}):(0,r.jsx)(x.J,{name:"plus",prefix:"sharp-regular",color:"default"})})})]})})}),children:(0,r.jsxs)("div",{className:"flex flex-col pt-default",children:[(0,r.jsxs)("div",{className:"flex items-start mb-default",children:[(0,r.jsx)(g,{}),(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",className:"ml-default",children:["Rankings are determined by total USDC earned -"," ",(0,r.jsx)(m.a,{className:"text-signal-warning-default",mode:"small",category:"label",children:"NOT"})," ","% return - during the contest window."]})]}),(0,r.jsxs)("div",{className:"flex items-start mb-default",children:[(0,r.jsx)(g,{}),(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",className:"ml-default",children:[(0,r.jsx)(m.a,{className:"text-signal-warning-default",mode:"small",category:"label",children:"Realized P&L ONLY"})," ","- the leaderboard will ONLY reflect realized P&L. Your P&L on actively open positions WILL NOT reflect on the leaderboard."]})]}),(0,r.jsxs)("div",{className:"flex items-start mb-default",children:[(0,r.jsx)(g,{}),(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",className:"ml-default",children:["Positions"," ",(0,r.jsx)(m.a,{className:"text-signal-warning-default",mode:"small",category:"label",children:"DO NOT"})," ","have to be opened during the contest window - but only realized P&L will be used on the leaderboard."]})]}),(0,r.jsxs)("div",{className:"flex items-start mb-default",children:[(0,r.jsx)(g,{}),(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",className:"ml-default",children:[(0,r.jsxs)(m.a,{category:"label",mode:"small",className:"text-signal-success-default",children:[" ","In the Money"]})," ","will be limited to 400 traders total. Traders that are"," ",(0,r.jsxs)(m.a,{category:"label",mode:"small",className:"text-signal-success-default",children:[" ","In the Money"]})," ","are eligible for a share of the prize pool paid as a tiered distribution where higher tiers receive a larger share of the distributions. Only"," ",(0,r.jsxs)(m.a,{category:"label",mode:"small",className:"text-signal-success-default",children:[" ","In the Money"]})," ","traders are eligible for raffled prizes."]})]})]})})})})}var j=l(81375),b=l(66626),v=l(95274);let w="get-leaderboard",N="get-user-position",y="get-participating";function A(){return(0,v.a)(["prize-pool"],async()=>(await (0,b.W)()).contest.getPrizes(!0))}var C=l(91040);function T(){return(0,v.a)([w],async()=>{let e=await (0,b.W)();return void 0===e?(0,C.E)("Client not initialized"):await e.contest.getLeaderboard(!0)},{enabled:c})}var k=l(99866),M=l(38850),S=l(49178),P=l(53765),z=l(96655),L=l.n(z),E=l(7810),D=l.n(E),U=l(4228),O=l(78433),B=l(78953),R=l(25382),F=l(21952),J=l(7017),_=l(55509);let Z=e=>0===e?"first":1===e?"second":2===e?"third":void 0,I=e=>"first"===e?"#FAE24C":"second"===e?"#A0B2C6":"third"===e?"#DF6C25":void 0;function V(){var e,a;let{data:l,isLoading:t,isError:s,refetch:n}=T(),i=null==l?void 0:l.inTheMoneyCount;return t?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-default",children:[(0,r.jsx)(S.o,{height:"50px",width:"100%"}),(0,r.jsx)(S.o,{height:"50px",width:"100%"}),(0,r.jsx)(S.o,{height:"50px",width:"100%"}),(0,r.jsx)(S.o,{height:"50px",width:"100%"}),(0,r.jsx)(S.o,{height:"50px",width:"100%"}),(0,r.jsx)(S.o,{height:"50px",width:"100%"}),(0,r.jsx)(S.o,{height:"50px",width:"100%"}),(0,r.jsx)(S.o,{height:"50px",width:"100%"})]})}):s?(0,r.jsx)("div",{className:"flex flex-col items-center justify-center mt-large",children:(0,r.jsx)(M.i,{variant:"xl",label:"Contest Leaderboard failed to load",content:"Please try again later",refetch:n})}):(0,r.jsxs)("div",{"data-cy":"leaderboard-section",children:[(0,r.jsx)(B.i,{className:"w-full",head:(0,r.jsxs)(J.S,{size:"header",children:[(0,r.jsx)(F.x,{children:(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",className:"flex items-center",children:[(0,r.jsx)(x.J,{name:"users",prefix:"sharp-regular",color:"default",className:"mr-x-small"}),null==l?void 0:l.leaderboard.length," Traders"]})}),(0,r.jsx)(F.x,{align:"right",className:"border-l border-neutral-fill-surface-default py-[25px] -my-[25px]",children:"Total Return"})]}),children:null==l?void 0:null===(e=l.leaderboard)||void 0===e?void 0:e.slice(0,l.inTheMoneyCount).map((e,a)=>{let l=Z(a),t=e.user.toString();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(J.S,{children:[(0,r.jsx)(H,{rank:a+1,inTheMoney:!0,place:l,user:t}),(0,r.jsx)(W,{tokenChange:e.tokenChange})]},t)})})}),l.leaderboard.length>0?(0,r.jsxs)("div",{className:"flex items-center w-full my-default",children:[(0,r.jsx)("div",{className:"w-[63px] h-[1px] bg-signal-success-default mr-default"}),(0,r.jsx)(x.J,{className:"min-w-[16px] min-h-[16px]",name:"dollar-sign",prefix:"sharp-solid",color:"success"}),(0,r.jsx)("div",{className:"w-full h-[1px] bg-signal-success-default ml-default"})]}):null,void 0!==i&&l.leaderboard.length>i&&(0,r.jsx)(B.i,{className:"w-full",children:null==l?void 0:null===(a=l.leaderboard)||void 0===a?void 0:a.slice(l.inTheMoneyCount).map((e,a)=>{let l=e.user.toString();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(J.S,{children:[(0,r.jsx)(H,{rank:i+a+1,inTheMoney:!1,place:void 0,user:l}),(0,r.jsx)(W,{tokenChange:e.tokenChange})]},l)})})})]})}function W(e){let{tokenChange:a}=e;return(0,r.jsx)(R.p,{align:"right",className:"border-l border-neutral-fill-surface-default py-[25px] -my-[25px]",children:(0,r.jsxs)(m.a,{category:"label",mode:"small",className:"flex flex-col justify-end items-end ".concat((0,_.nM)(a)?"text-signal-error-default":"text-signal-success-default"),children:[(0,_.nM)(a)?"- ":"+ ","$",(0,O.a)(Math.abs(null!=a?a:0))]})})}function H(e){let{rank:a,place:l,inTheMoney:t,user:s}=e;return(0,r.jsx)(R.p,{children:(0,r.jsxs)("div",{className:"min-w-[65px] mr-default ml-[5px] h-[32px] flex justify-center items-center",children:[(0,r.jsxs)(m.a,{category:"paragraph",className:"w-[50px]",children:[" ",a]}),(0,r.jsxs)("div",{className:"w-[20px] mr-x-small",children:[l&&a<=3&&(0,r.jsx)(x.J,{name:"crown",prefix:"sharp-solid",color:"auto",style:{fill:I(l)}}),t&&a>3&&(0,r.jsx)(x.J,{name:"dollar-sign",prefix:"sharp-solid",color:"success"}),!t&&!l&&(0,r.jsx)("div",{className:"w-full"})]}),(0,r.jsx)(m.a,{category:"label",mode:"default",children:(0,U.H)(s)})]})})}var G=l(68951);function Q(){let{data:e,isInitialLoading:a}=T(),l=null==e?void 0:e.count;return(0,r.jsxs)("div",{className:"flex flex-col border-b p-default border-neutral-border-surface-default",children:[(0,r.jsx)(m.a,{category:"label",mode:"small",children:"More Traders, More Prizes."}),(0,r.jsxs)(m.a,{className:"mb-default",category:"paragraph",mode:"small",children:["For every new trader"," ",(0,r.jsx)(m.a,{category:"label",mode:"small",className:"text-signal-success-default",children:"in the money"}),", ",Y," PRCL Tokens and ",function(e){if(void 0===e)return"--";let a=new P.Z(e);return e<1e3?a.toDP(2,P.Z.ROUND_DOWN).toString():e>=1e3&&e<1e6?"".concat(+a.div(1e3).toDP(2,P.Z.ROUND_DOWN).toString(),"K"):e>=1e6&&e<1e9?"".concat(+a.div(1e6).toDP(2,P.Z.ROUND_DOWN).toString(),"M"):e>=1e9&&e<1e12?"".concat(+a.div(1e9).toDP(2,P.Z.ROUND_DOWN).toString(),"B"):e>=1e12?"".concat(+a.div(1e12).toDP(2,P.Z.ROUND_DOWN).toString(),"T"):void 0}($)," ","Points will be added to the prize pool - distributed in tiers."]}),a?(0,r.jsx)(S.o,{height:"39px",width:"100%"}):(0,r.jsx)(G.$,{badgeContent:"Traders",content:"".concat(l||"0"),intent:"reward",clickable:!1})]})}let X=L()(()=>Promise.resolve().then(l.bind(l,54002)).then(e=>e.Timer),{loadableGenerated:{webpack:()=>[54002]},ssr:!1}),Y=125,$=25e5,K=()=>{let{isLoading:e,isError:a,refetch:l}=A(),{isError:t,refetch:s}=T();return(0,r.jsxs)("div",{"data-cy":"prize-pool-section",className:"flex flex-col w-full border rounded-lg border-neutral-border-surface-default bg-neutral-fill-surface-background",children:[(0,r.jsx)(Q,{}),t?(0,r.jsx)("div",{className:"border-b mt-default mx-default pb-default border-neutral-border-surface-default",children:(0,r.jsx)(M.i,{content:"Error fetching leaderboard",variant:"md",refetch:s})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex items-center w-full border-b py-default border-neutral-border-surface-default",children:(0,r.jsx)(ee,{})}),(0,r.jsx)("div",{className:"flex items-center w-full border-b border-neutral-border-surface-default py-default",children:(0,r.jsx)(q,{})})]}),a?(0,r.jsx)(M.i,{className:"border-b border-neutral-border-surface-default pb-medium",variant:"xl",refetch:l}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start border-b border-neutral-border-surface-default p-default",children:[(0,r.jsx)(m.a,{category:"overline",mode:"default",className:"mb-default",children:"Cash Prizes:"}),(0,r.jsxs)("div",{className:"flex items-center justify-start mb-default",children:[(0,r.jsx)("div",{className:"flex items-center mr-default",children:(0,r.jsx)(x.J,{name:"crown",prefix:"sharp-solid",color:"auto",size:"large",style:{fill:I("first")}})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(m.a,{category:"overline",mode:"default",children:"First"}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(m.a,{tag:"h4",category:"label",mode:"large",className:"mr-xx-small",children:["$",u.first]})})]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-start mb-default",children:[(0,r.jsxs)("div",{className:"flex items-center mr-default",children:[(0,r.jsx)(x.J,{name:"crown",prefix:"sharp-solid",color:"auto",size:"large",style:{fill:I("second")}})," "]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(m.a,{category:"overline",mode:"default",children:"second"}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(m.a,{tag:"h4",category:"label",mode:"large",className:"mr-xx-small",children:["$",u.second]})})]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-start w-full border-b mb-default pb-default border-neutral-border-surface-default",children:[(0,r.jsxs)("div",{className:"flex items-center mr-default",children:[(0,r.jsx)(x.J,{name:"crown",prefix:"sharp-solid",color:"auto",size:"large",style:{fill:I("third")}})," "]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(m.a,{category:"overline",mode:"default",children:"third"}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(m.a,{tag:"h4",category:"label",mode:"large",className:"mr-xx-small",children:["$",u.third]})})]})]}),(0,r.jsx)(m.a,{category:"overline",mode:"default",className:"mb-default",children:"In the Money Raffle:"}),(0,r.jsxs)("div",{className:"flex items-center mb-default",children:[(0,r.jsx)(D(),{src:"/images/contests/hoa_nfts.svg",alt:"prize nfts",width:60,height:30}),(0,r.jsx)(m.a,{category:"paragraph",mode:"small",children:"2 HOA NFTs"})]}),e?(0,r.jsx)(S.o,{height:"280px",width:"100%"}):(0,r.jsx)("div",{className:"flex flex-col w-full border rounded-lg p-default border-neutral-border-surface-default",children:(0,r.jsxs)("div",{className:"flex flex-col gap-default",children:[(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",children:["Top 20% of traders are"," ",(0,r.jsxs)(m.a,{category:"label",mode:"small",className:"text-signal-success-default",children:[" ","In the Money"]}),(0,r.jsx)("br",{}),"and will be eligible for a PRCL tokens and tiered point distribution, along with entry into an HOA raffle."]}),(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",children:["Maximum 400 traders. 50,000 PRCL + 1B Points. Tiers will be announced at the end of the contest."," "]})]})})]})}),(0,r.jsxs)("div",{className:"flex flex-col p-default",children:[(0,r.jsxs)("div",{className:"flex items-start mb-x-small",children:[(0,r.jsx)(m.a,{category:"paragraph",mode:"small",className:"mr-x-small",children:"Time Left:"}),(0,r.jsx)(X,{endDate:o,showDays:!0,className:"text-neutral-label-default text-75"})]}),(0,r.jsxs)(m.a,{tag:"p",category:"paragraph",mode:"small",children:[d.toLocaleString("en-US",{timeZone:"UTC",year:"numeric",month:"numeric",day:"numeric"})," ","—"," ",o.toLocaleString("en-US",{timeZone:"UTC",year:"numeric",month:"numeric",day:"numeric"})]})]})]})};function q(){var e;let{data:a,isLoading:l,isError:t}=T(),{data:s,isLoading:n,isError:i}=A();return t||i?null:l||n?(0,r.jsx)("div",{className:"flex w-full mx-default",children:(0,r.jsx)(S.o,{height:"39px",width:"100%"})}):(0,r.jsxs)("div",{className:"flex items-center w-full",children:[(0,r.jsx)(x.J,{size:"small",className:"mx-default",name:"points",prefix:"sharp-solid",color:"default"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)(m.a,{className:"mb-xx-small",category:"overline",mode:"default",children:["Positions 1 - ",null==a?void 0:a.inTheMoneyCount,":"]}),(0,r.jsx)(m.a,{tag:"h4",category:"label",mode:"large",className:"italic font-bold text-decorative-reward-default",children:(0,k._)(null!==(e=null==s?void 0:s.points)&&void 0!==e?e:0)})]})]})}function ee(){var e;let{data:a,isLoading:l,isError:t}=T();return t?null:l?(0,r.jsx)("div",{className:"flex w-full mx-default",children:(0,r.jsx)(S.o,{height:"39px",width:"100%"})}):(0,r.jsxs)("div",{className:"flex items-center w-full",children:[(0,r.jsx)("div",{className:"mx-default",children:(0,r.jsx)(j.z,{})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)(m.a,{className:"mb-xx-small",category:"overline",mode:"default",children:["Positions 1 - ",null==a?void 0:a.inTheMoneyCount,":"]}),(0,r.jsx)(m.a,{tag:"h4",category:"label",mode:"large",className:"",children:new P.Z(Y).mul(null!==(e=null==a?void 0:a.inTheMoneyCount)&&void 0!==e?e:3).toString()})]})]})}var ea=l(27677),el=l(22476),er=l(54002),et=l(49238),es=l(97881),en=l(90506),ei=l(272),ed=l(51779),eo=l(19206),ec=l(80003),eu=l(84263),ex=l(80714),em=l(48238),ef=l(45603),eh=l(5968),eg=l(42664),ep=l(30266),ej={src:"/_next/static/media/hero.36cbaebb.png",height:727,width:3143,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEUTEhApHBtGNTgrMFxCLTE3PV8gMSIhLDUgLislLUGUwyacAAAABXRSTlP39/rm3vLS+V0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2Bj42DnZGVlZmBgYGBkZGJiAQACzwA8Ke/OWwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2};function eb(){let{showModal:e,setModalContent:a}=(0,et.dd)(),[l,t]=(0,h.useState)(!1),{publicKey:s}=(0,ec.O)(),n=(0,em.a)(),{hideModal:i}=(0,et.dd)(),{mutate:d,isLoading:o,error:c}=function(){let{onMutate:e,onSuccess:a,onError:l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{publicKey:r}=(0,ec.O)(),t=(0,eu.NL)(),{setToast:s}=(0,en.pm)(),{setModalContent:n,hideModal:i,showModal:d}=(0,et.dd)();return(0,ex.D)(async e=>{if(!e.walletAddress)return(0,C.E)("No user key provided");let a=await (0,b.W)({walletAddress:e.walletAddress});return void 0===a?(0,C.E)("Client not initialized"):e.walletAddress?a.contest.participate(e.walletAddress,(0,ed.h)({publicKey:r})):(0,C.E)("Missing param: walletAddress")},{onMutate:a=>{console.log({mut:a}),null==e||e()},onSuccess:(e,l)=>{console.log({success:e,params:l}),t.invalidateQueries([w]),t.invalidateQueries([N]),t.invalidateQueries([y]),null==a||a()},onError:e=>{e instanceof Error?(console.error({error:e}),(0,eo.f)(e)&&((0,ei.q)({setModalContent:n,hideModal:i,showModal:d}),s({type:"error",msg:"Failed to join contest. Please verify wallet and try again."}))):null==l||l(e)},onSettled:e=>{console.log({settled:e})}})}({onMutate:()=>{},onSuccess:()=>{i()},onError:()=>{}});return(0,r.jsxs)("div",{"data-cy":"contest-opt-in-modal",className:"relative flex flex-col items-center justify-center pb-default",children:[(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsx)("div",{className:"absolute cursor-pointer p-x-small",onClick:i,children:(0,r.jsx)(x.J,{name:"xmark-large",prefix:"sharp-regular",color:"default",size:"medium",className:"fill-neutral-label-default ml-x-small mt-x-small"})}),(0,r.jsx)(D(),{className:"w-full lg:h-[295px] h-[200px] flex justify-center overflow-hidden lg:-mt-[70px] mb-default",src:ej,alt:"Contest modal img",style:{objectFit:"cover",objectPosition:"90% top"}})]}),(0,r.jsxs)("div",{className:"flex flex-col px-default",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold text-neutral-label-default mb-default",children:"Join the contest!"}),(0,r.jsx)("div",{className:"border-b pb-default border-neutral-border-surface-default",children:(0,r.jsx)("span",{className:"text-center text-neutral-paragraph-default",children:"Compete for a chance to win PRCL, perpetual points, cash prizes, NFTs, and more. Review contest rules to see changes from prior contests."})}),(0,r.jsx)("div",{className:"flex items-center justify-center w-full my-default",children:(0,r.jsx)(eg.X,{id:"join-contest",name:"join-contest",dataCy:"contest-opt-in-modal-checkbox",variant:"reward",label:"I understand the rules and regulations of this contest.",checked:l,onChange:e=>t(e.target.checked)})}),c&&(0,r.jsx)(eh.U,{className:"mb-default",intent:"danger",heading:"Something went wrong",body:"Please try again."}),(0,r.jsx)(ef.z,{onClick:()=>{if(!s){(0,es.t)({setModalContent:a,showModal:e});return}n({name:"participating_contest",event:{}}),d({walletAddress:null==s?void 0:s.toBase58()})},"data-cy":"contest-opt-in-modal-btn",intent:"reward",className:"w-full",disabled:!l,children:o?(0,r.jsx)(ep.$,{size:"small"}):"Join Contest"})]})]})}function ev(e){return(0,v.a)([y],async()=>{if(!e.walletAddress)return(0,C.E)("Please pass a wallet address");let a=await (0,b.W)({walletAddress:e.walletAddress.toBase58()});return void 0===a?(0,C.E)("Client not initialized"):a.contest.isParticipating(e.walletAddress,!0)},{enabled:!!e.walletAddress})}var ew=l(77312);function eN(){let{publicKey:e}=(0,ec.O)(),{data:a}=ev({walletAddress:e}),{setModalContent:l,showModal:t}=(0,et.dd)(),{isMobile:s}=(0,ew.d)(),i=(0,n.a)(new Date)>(0,n.a)(new Date(o));return(0,r.jsxs)("div",{className:"relative h-[350px] flex justify-start items-end rounded-lg w-full bg-right-top",children:[(0,r.jsxs)("div",{className:"flex flex-col flex-wrap items-start justify-end h-full lg:p-medium p-default",children:[(0,r.jsxs)("div",{className:"flex flex-col w-full md:justify-end",children:[(0,r.jsx)(m.a,{tag:"h1",category:"heading",className:"mb-x-small",mode:s?"small":"default",children:"May Trading Contest"}),(0,r.jsx)(m.a,{category:"paragraph",mode:"default",className:"text-agnostic-neutral-paragraph max-w-[750px]",children:"Trade and compete for your chance to win a share of up to 50,000 PRCL, 1B points, $2,000, and 2 HOA NFTs."})]}),c&&!a&&(0,r.jsx)("div",{className:"z-10 flex w-auto md:w-[170px] items-center mt-default",children:(0,r.jsx)(ef.z,{"data-cy":"join-contest-hero-btn",intent:"reward",className:"w-fit md:w-[170px] mr-default whitespace-nowrap",disabled:i,onClick:()=>{l({body:(0,r.jsx)(eb,{})}),t()},children:"Join Contest"})})]}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full rounded-lg border-width-decorative border-neutral-fill-surface-background",style:{boxShadow:"0px 25px 50px -12px rgba(0, 0, 0, 0.25)"}}),(0,r.jsx)(D(),{className:"absolute top-0 left-0 object-cover w-full h-full rounded-lg -z-20",src:ej,alt:"March Trading Contest",quality:100,priority:!0,placeholder:"blur",style:{boxShadow:"0px 25px 50px -12px rgba(0, 0, 0, 0.25)",objectFit:"cover",objectPosition:"right"}})]})}function ey(e){let{leaderboardWithUserInfo:a}=e,l=a.surroundingCtx.aboveRow,t=a.userRow,s=a.surroundingCtx.belowRow;return(0,r.jsx)(B.i,{"data-cy":"user-leaderboard-section",className:"w-full",children:(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsxs)(J.S,{className:"border-b-0",children:[(0,r.jsx)(H,{rank:l.index+1,inTheMoney:!1,place:Z(l.index),user:l.row.user.toString()}),(0,r.jsx)(W,{tokenChange:l.row.tokenChange})]}),(0,r.jsxs)(J.S,{className:"border-t border-b border-signal-info-default bg-signal-info-background",children:[(0,r.jsx)(H,{rank:t.index+1,inTheMoney:!1,place:Z(t.index),user:t.row.user.toString()}),(0,r.jsx)(W,{tokenChange:t.row.tokenChange})]}),s&&(0,r.jsxs)(J.S,{children:[(0,r.jsx)(H,{rank:s.index+1,inTheMoney:!1,place:Z(s.index),user:s.row.user.toString()}),(0,r.jsx)(W,{tokenChange:s.row.tokenChange})]})]})})}function eA(){let{publicKey:e}=(0,ec.O)(),{data:a}=ev({walletAddress:e}),{data:l,isSuccess:t}=function(e){let{publicKey:a}=(0,ec.O)(),{data:l}=ev({walletAddress:a});return(0,v.a)([N,null==a?void 0:a.toBase58()],async()=>{var a;let l=await (0,b.W)({walletAddress:null===(a=e.walletAddress)||void 0===a?void 0:a.toBase58()});return void 0===l?(0,C.E)("Client not initialized"):e.walletAddress?l.contest.getLeaderboardWithUserInfo(e.walletAddress,!0):(0,C.E)("Please pass a wallet address")},{enabled:!0===l})}({walletAddress:e});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(m.a,{category:"subheading",mode:"default",className:"text-neutral-label-default",children:"Contest Leaderboard"}),(0,r.jsx)(m.a,{category:"paragraph",mode:"default",className:"mb-default",children:"Trade any asset with a $5 minimum to participate for Cash prizes, NFTs, and $PRCL."}),t&&a&&(0,r.jsx)("div",{className:"mb-default",children:(0,r.jsx)(ey,{leaderboardWithUserInfo:l})}),(0,r.jsx)("div",{className:"overflow-x-scroll overflow-y-hidden border-t border-neutral-border-surface-default no-scrollbar",children:(0,r.jsx)(V,{})})]})})}var eC=l(5788),eT=l.n(eC);function ek(){return(0,r.jsx)("div",{className:"border rounded-lg p-default border-decorative-reward-default",style:{background:"rgba(250, 226, 76, 0.08)",boxShadow:"0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 12px 16px -4px rgba(0, 0, 0, 0.08)"},children:(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,r.jsxs)("div",{className:"flex flex-col items-start justify-center mb-default",children:[(0,r.jsxs)("div",{className:"flex items-center mb-xx-small",children:[(0,r.jsx)(x.J,{name:"points",prefix:"sharp-solid",color:"default",className:"mr-x-small"}),(0,r.jsx)(m.a,{category:"label",mode:"large",children:"Earn Perpetual Points"})]}),(0,r.jsx)(m.a,{category:"paragraph",mode:"default",children:"Earn Perpetual Points that count towards the next $PRCL allocation."})]}),(0,r.jsx)(eT(),{href:"/points",children:(0,r.jsx)(ef.z,{className:"w-fit",intent:"reward",compressed:!0,children:"View Page"})})]})})}function eM(){return(0,r.jsx)("div",{className:"border rounded-lg p-default bg-signal-success-background border-signal-success-background",style:{boxShadow:"0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 12px 16px -4px rgba(0, 0, 0, 0.08)"},children:(0,r.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,r.jsxs)("div",{className:"flex flex-col items-start justify-center mb-default",children:[(0,r.jsx)("div",{className:"flex items-center mb-xx-small",children:(0,r.jsx)(m.a,{category:"label",mode:"large",children:"Trade Markets to Participate"})}),(0,r.jsx)(m.a,{category:"paragraph",mode:"default",children:"Trade live markets in order to participate for contest prizes."})]}),(0,r.jsx)(eT(),{href:"/collection/active-markets",children:(0,r.jsx)(ef.z,{className:"w-fit",intent:"success",compressed:!0,children:"View Live Markets"})})]})})}var eS=l(85296);function eP(){return(0,r.jsx)("div",{style:{width:"1440px",height:"568px",flexShrink:"0",background:"#21cc99",filter:"blur(250px)",position:"fixed",zIndex:-1,top:"-814px",left:"156px"}})}function ez(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eP,{}),(0,r.jsx)(ea.B,{variant:"TWO_COLUMN",top:(0,r.jsx)(eN,{}),left:(0,r.jsxs)("div",{className:"flex flex-col w-full",children:[(0,r.jsxs)("div",{className:"grid w-full grid-cols-1 lg:grid-cols-2 gap-default mb-medium lg:mt-0 -mt-medium",children:[(0,r.jsx)(ek,{}),(0,r.jsx)(eM,{}),(0,r.jsx)("div",{className:"block lg:hidden mb-default",children:c?(0,r.jsx)(K,{}):(0,r.jsx)(eL,{})}),(0,r.jsx)("div",{className:"block lg:hidden mb-default",children:(0,r.jsx)(p,{})})]}),c?(0,r.jsx)(eA,{}):(0,r.jsxs)(m.a,{category:"paragraph",mode:"default",className:"italic mt-default pt-default",children:["Traders will appear on"," ",(0,eS.CV)(d,"utc","M/d/yyy HH:mm")," UTC when the contest begins."]})]}),right:(0,r.jsxs)("div",{className:"flex flex-col",children:[c?(0,r.jsx)(K,{}):(0,r.jsx)(eL,{}),(0,r.jsx)(p,{})]})})]})}function eL(){return(0,r.jsxs)(el.T,{className:"p-default",children:[(0,r.jsxs)("div",{className:"flex flex-col border-b border-neutral-border-surface-default pb-default -mx-default px-default",children:[(0,r.jsxs)(m.a,{category:"label",mode:"small",children:["Contest Starting"," ",(0,eS.CV)(d,"utc","M/d/yyy HH:mm")," UTC"]}),(0,r.jsx)(m.a,{category:"paragraph",mode:"small",children:"Check back soon for the contest prize updates."})]}),(0,r.jsxs)("div",{className:"flex items-baseline pt-default",children:[(0,r.jsx)(m.a,{category:"paragraph",mode:"small",className:"mr-x-small",children:"Time Until Start"}),(0,r.jsx)(er.Timer,{showDays:!0,endDate:d})]}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(m.a,{category:"paragraph",mode:"small",children:[(0,eS.CV)(d,"utc","M/d/yyy HH:mm")," UTC -",(0,eS.CV)(o,"utc","M/d/yyy HH:mm")," UTC"]})})]})}var eE=l(27150),eD=l(14224);let eU=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eE.PB,{title:t.t.title,description:t.t.description,defaultTitle:t.oc,canonical:"https://app.parcl.co/",openGraph:{url:"https://app.parcl.co/",title:t.t.title,description:t.t.description,images:[{url:"https://".concat(eD.env.VERCEL_URL,"/images/contests/2024_may/og.jpg"),width:1200,height:630,alt:"Parcl OG Image"}],site_name:"Parcl"},twitter:{handle:"@parcl",site:"@parcl",cardType:"summary_large_image"}}),(0,r.jsx)(s.I,{children:(0,r.jsx)(ez,{})})]});eU.getLayout=e=>e;var eO=eU},78433:function(e,a,l){"use strict";l.d(a,{a:function(){return t}});var r=l(34720);function t(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return isNaN(Number(e))||""===e||null==e?"--":0===Number(e)?"0.00":.01>Math.abs(Number(e))?(0,r.D)(e,6):(0,r.D)(e,a)}},68951:function(e,a,l){"use strict";l.d(a,{$:function(){return i}});var r=l(52676),t=l(91671),s=l(1151),n=l(2808);function i(e){let{badgeContent:a,content:l,intent:i,clickable:d}=e,o=(0,n.j)("flex items-center rounded-full p-[5px] pr-default w-fit border-width-focus",{variants:{intent:{reward:"bg-decorative-reward-background border-decorative-reward-default",success:"bg-agnostic-signal-success-background border-agnostic-signal-success-default",error:"bg-signal-error-background border-signal-error-default",info:"bg-signal-info-background border-signal-info-default",brand:"bg-brand-background border-brand-default"}}}),c=(0,n.j)("rounded-full px-[10px] py-xx-small",{variants:{intent:{reward:"bg-decorative-reward-default",success:"bg-signal-success-default",error:"bg-signal-error-default",info:"bg-signal-info-default",brand:"bg-brand-default"}}});return(0,r.jsxs)("div",{className:o({intent:i}),children:[(0,r.jsx)("div",{className:c({intent:i}),children:(0,r.jsx)(s.a,{category:"label",mode:"small",className:"brand"===i?"text-neutral-label-default":"text-neutral-border-canvas-default",children:a})}),(0,r.jsx)(s.a,{category:"paragraph",mode:"small",className:"text-neutral-label-default ml-x-small",children:l}),d&&(0,r.jsx)(t.J,{name:"arrow-up-right",prefix:"sharp-regular",color:"label",size:"x-small",className:"ml-medium"})]})}},54002:function(e,a,l){"use strict";l.r(a),l.d(a,{Timer:function(){return o}});var r=l(52676),t=l(19297),s=l(1151),n=l(45924),i=l(75271);function d(e,a){return e<0?{seconds:0,minutes:0,hours:0,days:0}:{seconds:Math.floor(e/1e3)%60,minutes:Math.floor(e/1e3/60)%60,hours:a?Math.floor(e/1e3/60/60%24):Math.floor(e/1e3/60/60),days:Math.floor(e/1e3/60/60/24)}}let o=e=>{let{endDate:a,showDays:l=!1,showSeconds:o=!1,className:c,charsFmt:u,timeOverride:x}=e,{utcTime:m}=(0,t.k)();if(!a)return null;let f=a.getTime(),[h,g]=(0,i.useState)(f-m);(0,i.useEffect)(()=>{if(void 0!==x||h<0)return;let e=0,a=setInterval(()=>{o&&30!==e?(e+=1,g(h-(o?1e3:3e4))):(g(f-new Date().getTime()),e=0)},o?1e3:3e4);return h<=0&&clearInterval(a),()=>clearInterval(a)},[f,o,h,x]);let{days:p,hours:j,minutes:b,seconds:v}=void 0!==x?d(x,l):d(h,l);return(0,r.jsxs)(s.a,{category:"label",mode:"large",className:(0,n.Z)("text-decorative-reward-default",c),tag:"p",children:[l&&(0,r.jsxs)(r.Fragment,{children:[p<10&&"0",p,u?"d ":":"]}),j<10&&"0",j,u?"h ":":",b<10&&"0",b,u?"m ":o?":":"",o&&(0,r.jsxs)(r.Fragment,{children:[v<10&&"0",v,u?"s":""]})]})}},51035:function(e,a,l){"use strict";l.d(a,{z:function(){return i}});var r=l(52676),t=l(75271),s=l(23522),n=l.n(s);function i(e){let a=(0,t.useId)();return(0,r.jsx)(n(),{transitionTime:250,easing:"cubic-bezier(0.76, 0, 0.24, 1)",...e,contentElementId:"collapsible-content-".concat(a),triggerElementProps:{...e.triggerElementProps,id:"collapsible-trigger-".concat(a)}})}},78953:function(e,a,l){"use strict";l.d(a,{i:function(){return s}});var r=l(52676),t=l(29524);let s=e=>{let{head:a,className:l="",children:s,...n}=e;return(0,r.jsxs)("table",{className:(0,t.m)("w-full",l),...n,children:[a&&(0,r.jsx)("thead",{children:a}),(0,r.jsx)("tbody",{children:s})]})}},25382:function(e,a,l){"use strict";l.d(a,{p:function(){return i}});var r=l(52676),t=l(1151),s=l(2808),n=l(29524);function i(e){let{children:a,align:l="left",className:i="",type:d="data",hideMobile:o=!1,colSpan:c=1}=e,u=(0,s.j)("lg:px-default text-neutral-paragraph-default font-normal w-full flex",{variants:{align:{left:"justify-start",right:"justify-end",center:"justify-center"},hideMobile:{true:"hidden lg:flex",false:""}}});return"header"===d?(0,r.jsx)("th",{scope:"col",style:{fontSize:"14px"},children:(0,r.jsx)("div",{className:(0,n.m)(u({align:l,hideMobile:o}),i),children:(0,r.jsx)(t.a,{category:"paragraph",mode:"small",children:a})})}):(0,r.jsx)("td",{colSpan:c,children:(0,r.jsx)("div",{className:(0,n.m)(u({align:l,hideMobile:o}),i),children:(0,r.jsx)("div",{children:a})})})}},21952:function(e,a,l){"use strict";l.d(a,{x:function(){return d}});var r=l(52676),t=l(91671),s=l(70023),n=l(2808),i=l(25382);function d(e){let{children:a,align:l="left",className:d,tooltipData:o,iconName:c,iconPosition:u="left",hideMobile:x}=e,m=(0,n.j)("flex items-center",{variants:{align:{left:"justify-start",center:"justify-center",right:"justify-end"}}});return(0,r.jsx)(i.p,{hideMobile:x,align:l,className:d,type:"header",children:o?(0,r.jsx)(s.u,{content:o.content,title:o.title,placement:"bottom",children:(0,r.jsxs)("div",{className:m({align:l}),children:[c&&"left"===u&&(0,r.jsx)("div",{className:"mr-xx-small",children:(0,r.jsx)(t.J,{color:"auto",name:c,size:"small",prefix:"sharp-solid"})}),(0,r.jsx)("div",{className:"mt-[2px]",children:a}),c&&"right"===u&&(0,r.jsx)("div",{className:"ml-xx-small",children:(0,r.jsx)(t.J,{color:"auto",name:c,size:"small",prefix:"sharp-solid"})})]})}):(0,r.jsxs)("div",{className:m({align:l}),children:[c&&"left"===u&&(0,r.jsx)("div",{className:"mr-xx-small",children:(0,r.jsx)(t.J,{color:"auto",name:c,size:"small",prefix:"sharp-solid"})}),(0,r.jsx)("div",{className:"mt-[2px]",children:a}),c&&"right"===u&&(0,r.jsx)("div",{className:"ml-xx-small",children:(0,r.jsx)(t.J,{color:"auto",name:c,size:"small",prefix:"sharp-solid"})})]})})}},7017:function(e,a,l){"use strict";l.d(a,{S:function(){return n}});var r=l(52676),t=l(39636),s=l(2808);let n=e=>{let{noBorder:a=!1,size:l="small",className:n="",children:i,onClick:d}=e,o=(0,s.j)("",{variants:{noBorder:{false:"border-b border-neutral-border-surface-default",true:""},size:{header:"h-[40px]",small:"h-[50px]",large:"h-[70px]"}}});return(0,r.jsx)("tr",{onClick:d,className:(0,t.m)(o({noBorder:a,size:l}),n),children:i})}},70023:function(e,a,l){"use strict";l.d(a,{u:function(){return d}});var r=l(52676),t=l(39636),s=l(45924),n=l(75271),i=l(99941);let d=(0,n.memo)(e=>{var a;let{getArrowProps:l,getTooltipProps:n,setTooltipRef:d,setTriggerRef:o,visible:c}=(0,i.O)({placement:null!==(a=e.placement)&&void 0!==a?a:"right"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:(0,t.m)("w-fit",e.className),ref:o,children:(0,r.jsx)("div",{className:(0,s.Z)("border-b border-dashed",{"border-transparent":e.noUnderline,"border-neutral-paragraph-default":!e.noUnderline}),children:e.children})}),c&&(0,r.jsxs)("div",{ref:d,...n({className:"tooltip-container border border-neutral-border-surface-default max-w-[271px] w-[271px] pointer-events-none flex flex-col rounded-lg bg-neutral-fill-surface-default p-default text-neutral-paragraph-default opacity-100 transition"}),children:[(0,r.jsxs)("span",{style:{fontSize:"13px"},className:"flex flex-col",children:[void 0!==e.title&&(0,r.jsx)("span",{className:"text-neutral-label-default",children:e.title}),e.content]}),(0,r.jsx)("div",{...l({className:"tooltip-arrow"})})]})]})})},55509:function(e,a,l){"use strict";l.d(a,{FX:function(){return i},Fc:function(){return d},Fr:function(){return o},lt:function(){return t},nM:function(){return s},xP:function(){return n}});var r=l(53765);function t(e,a){return e<a}function s(e){return!!e&&new r.Z(e).lt(0)}function n(e){if(!e)return!1;let a=new r.Z(e);return!a.isZero()&&!s(a)}function i(e){return new r.Z(e).lt(1)}function d(e){return new r.Z(e).lt(-1)}function o(e){return new r.Z(e).isZero()}}},function(e){e.O(0,[5805,8613,8714,1652,2994,9941,5766,7115,1037,4295,6653,7677,2888,9774,179],function(){return e(e.s=79940)}),_N_E=e.O()}]);