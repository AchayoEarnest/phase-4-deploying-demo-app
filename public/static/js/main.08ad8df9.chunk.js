(this["webpackJsonpphase-4-rails-putting-it-all-together-auth-client"]=this["webpackJsonpphase-4-rails-putting-it-all-together-auth-client"]||[]).push([[0],{200:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o=t(2),s=t(1),j=t(77),b=t.n(j),l=t(4),d=t(5),u=t(19),h=t(3),O=h.b.div(r||(r=Object(o.a)(["\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),\n    0 0 0 1px rgb(10 10 10 / 2%);\n  padding: 16px;\n"]))),p=t(82),x=t(81),m=t(0),g=["variant","color"],f={primary:{"--main":"indigo","--accent":"white"},secondary:{"--main":"lavenderblush","--accent":"indigo"}};var v,y,w,S,C,k,F,L=h.b.button(c||(c=Object(o.a)(["\n  cursor: pointer;\n  font-size: 1rem;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  padding: 8px 16px;\n  text-decoration: none;\n"]))),T=Object(h.b)(L)(i||(i=Object(o.a)(["\n  background-color: var(--main);\n  color: var(--accent);\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]))),U=Object(h.b)(L)(a||(a=Object(o.a)(["\n  background-color: white;\n  color: var(--main);\n  border: 2px solid var(--main);\n\n  &:hover {\n    background: hsl(235deg 85% 97%);\n  }\n"]))),P=function(e){var n,t=e.variant,r=void 0===t?"fill":t,c=e.color,i=void 0===c?"primary":c,a=Object(x.a)(e,g);return"fill"===r?n=T:"outline"===r&&(n=U),Object(m.jsx)(n,Object(p.a)({style:f[i]},a))},R=h.b.div(v||(v=Object(o.a)(["\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),_=h.b.input(y||(y=Object(o.a)(["\n  border-radius: 6px;\n  border: 1px solid transparent;\n  border-color: #dbdbdb;\n  -webkit-appearance: none;\n  max-width: 100%;\n  width: 100%;\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 4px;\n"]))),z=h.b.label(w||(w=Object(o.a)(["\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n"]))),I=h.b.textarea(S||(S=Object(o.a)(["\n  border-radius: 6px;\n  border: 1px solid transparent;\n  border-color: #dbdbdb;\n  -webkit-appearance: none;\n  max-width: 100%;\n  width: 100%;\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 4px;\n  resize: none;\n"])));var M,N,B,D=h.b.div(C||(C=Object(o.a)(["\n  color: red;\n  background-color: mistyrose;\n  border-radius: 6px;\n  display: flex;\n  padding: 8px;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0;\n"]))),E=h.b.span(k||(k=Object(o.a)(["\n  background-color: white;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  font-weight: bold;\n  display: grid;\n  place-content: center;\n"]))),J=h.b.p(F||(F=Object(o.a)(["\n  margin: 0;\n"]))),A=function(e){var n=e.children;return Object(m.jsxs)(D,{children:[Object(m.jsx)(E,{children:"!"}),Object(m.jsx)(J,{children:n})]})};var H=h.b.header(M||(M=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n"]))),q=h.b.h1(N||(N=Object(o.a)(['\n  font-family: "Permanent Marker", cursive;\n  font-size: 3rem;\n  color: deeppink;\n  margin: 0;\n  line-height: 1;\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n']))),G=h.b.nav(B||(B=Object(o.a)(["\n  display: flex;\n  gap: 4px;\n  position: absolute;\n  right: 8px;\n"]))),K=function(e){e.user;var n=e.setUser;return Object(m.jsxs)(H,{children:[Object(m.jsx)(q,{children:Object(m.jsx)(u.b,{to:"/",children:"Reciplease"})}),Object(m.jsxs)(G,{children:[Object(m.jsx)(P,{as:u.b,to:"/new",children:"New Recipe"}),Object(m.jsx)(P,{variant:"outline",onClick:function(){fetch("/api/logout",{method:"DELETE"}).then((function(e){e.ok&&n(null)}))},children:"Logout"})]})]})};var Q=function(e){var n=e.onLogin,t=Object(s.useState)(""),r=Object(l.a)(t,2),c=r[0],i=r[1],a=Object(s.useState)(""),o=Object(l.a)(a,2),j=o[0],b=o[1],d=Object(s.useState)([]),u=Object(l.a)(d,2),h=u[0],O=u[1],p=Object(s.useState)(!1),x=Object(l.a)(p,2),g=x[0],f=x[1];return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:j})}).then((function(e){f(!1),e.ok?e.json().then((function(e){return n(e)})):e.json().then((function(e){return O(e.errors)}))}))},children:[Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"username",children:"Username"}),Object(m.jsx)(_,{type:"text",id:"username",autoComplete:"off",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"password",children:"Password"}),Object(m.jsx)(_,{type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(m.jsx)(R,{children:Object(m.jsx)(P,{variant:"fill",color:"primary",type:"submit",children:g?"Loading...":"Login"})}),Object(m.jsx)(R,{children:h.map((function(e){return Object(m.jsx)(A,{children:e},e)}))})]})};var V,W,X,Y=function(e){var n=e.onLogin,t=Object(s.useState)(""),r=Object(l.a)(t,2),c=r[0],i=r[1],a=Object(s.useState)(""),o=Object(l.a)(a,2),j=o[0],b=o[1],d=Object(s.useState)(""),u=Object(l.a)(d,2),h=u[0],O=u[1],p=Object(s.useState)(""),x=Object(l.a)(p,2),g=x[0],f=x[1],v=Object(s.useState)(""),y=Object(l.a)(v,2),w=y[0],S=y[1],C=Object(s.useState)([]),k=Object(l.a)(C,2),F=k[0],L=k[1],T=Object(s.useState)(!1),U=Object(l.a)(T,2),M=U[0],N=U[1];return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),L([]),N(!0),fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:j,password_confirmation:h,image_url:g,bio:w})}).then((function(e){N(!1),e.ok?e.json().then((function(e){return n(e)})):e.json().then((function(e){return L(e.errors)}))}))},children:[Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"username",children:"Username"}),Object(m.jsx)(_,{type:"text",id:"username",autoComplete:"off",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"password",children:"Password"}),Object(m.jsx)(_,{type:"password",id:"password",value:j,onChange:function(e){return b(e.target.value)},autoComplete:"current-password"})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"password",children:"Password Confirmation"}),Object(m.jsx)(_,{type:"password",id:"password_confirmation",value:h,onChange:function(e){return O(e.target.value)},autoComplete:"current-password"})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"imageUrl",children:"Profile Image"}),Object(m.jsx)(_,{type:"text",id:"imageUrl",value:g,onChange:function(e){return f(e.target.value)}})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"bio",children:"Bio"}),Object(m.jsx)(I,{rows:"3",id:"bio",value:w,onChange:function(e){return S(e.target.value)}})]}),Object(m.jsx)(R,{children:Object(m.jsx)(P,{type:"submit",children:M?"Loading...":"Sign Up"})}),Object(m.jsx)(R,{children:F.map((function(e){return Object(m.jsx)(A,{children:e},e)}))})]})};var Z,$,ee=h.b.h1(V||(V=Object(o.a)(['\n  font-family: "Permanent Marker", cursive;\n  font-size: 3rem;\n  color: deeppink;\n  margin: 8px 0 16px;\n']))),ne=h.b.section(W||(W=Object(o.a)(["\n  max-width: 500px;\n  margin: 40px auto;\n  padding: 16px;\n"]))),te=h.b.hr(X||(X=Object(o.a)(["\n  border: none;\n  border-bottom: 1px solid #ccc;\n  margin: 16px 0;\n"]))),re=function(e){var n=e.onLogin,t=Object(s.useState)(!0),r=Object(l.a)(t,2),c=r[0],i=r[1];return Object(m.jsxs)(ne,{children:[Object(m.jsx)(ee,{children:"Reciplease"}),c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Q,{onLogin:n}),Object(m.jsx)(te,{}),Object(m.jsxs)("p",{children:["Don't have an account? \xa0",Object(m.jsx)(P,{color:"secondary",onClick:function(){return i(!1)},children:"Sign Up"})]})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Y,{onLogin:n}),Object(m.jsx)(te,{}),Object(m.jsxs)("p",{children:["Already have an account? \xa0",Object(m.jsx)(P,{color:"secondary",onClick:function(){return i(!0)},children:"Log In"})]})]})]})},ce=t(33),ie=t.n(ce);var ae,oe,se=h.b.section(Z||(Z=Object(o.a)(["\n  max-width: 800px;\n  margin: 40px auto;\n"]))),je=h.b.article($||($=Object(o.a)(["\n  margin-bottom: 24px;\n"]))),be=function(){var e=Object(s.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(s.useEffect)((function(){fetch("/api/recipes").then((function(e){return e.json()})).then(r)}),[]),Object(m.jsx)(se,{children:t.length>0?t.map((function(e){return Object(m.jsx)(je,{children:Object(m.jsxs)(O,{children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsxs)("p",{children:[Object(m.jsxs)("em",{children:["Time to Complete: ",e.minutes_to_complete," minutes"]}),"\xa0\xb7\xa0",Object(m.jsxs)("cite",{children:["By ",e.user.username]})]}),Object(m.jsx)(ie.a,{children:e.instructions})]})},e.id)})):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"No Recipes Found"}),Object(m.jsx)(P,{as:u.b,to:"/new",children:"Make a New Recipe"})]})})};var le=h.b.section(ae||(ae=Object(o.a)(["\n  max-width: 1000px;\n  margin: 40px auto;\n  padding: 16px;\n  display: flex;\n  gap: 24px;\n"]))),de=h.b.div(oe||(oe=Object(o.a)(["\n  flex: 1;\n"]))),ue=function(e){var n=e.user,t=Object(s.useState)("My Awesome Recipe"),r=Object(l.a)(t,2),c=r[0],i=r[1],a=Object(s.useState)("30"),o=Object(l.a)(a,2),j=o[0],b=o[1],u=Object(s.useState)("Here's how you make it.\n  \n## Ingredients\n\n- 1c Sugar\n- 1c Spice\n\n## Instructions\n\n**Mix** sugar and spice. _Bake_ for 30 minutes.\n  "),h=Object(l.a)(u,2),O=h[0],p=h[1],x=Object(s.useState)([]),g=Object(l.a)(x,2),f=g[0],v=g[1],y=Object(s.useState)(!1),w=Object(l.a)(y,2),S=w[0],C=w[1],k=Object(d.f)();return Object(m.jsxs)(le,{children:[Object(m.jsxs)(de,{children:[Object(m.jsx)("h2",{children:"Create Recipe"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(!0),fetch("/api/recipes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:c,instructions:O,minutes_to_complete:j})}).then((function(e){C(!1),e.ok?k.push("/"):e.json().then((function(e){return v(e.errors)}))}))},children:[Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"title",children:"Title"}),Object(m.jsx)(_,{type:"text",id:"title",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"minutesToComplete",children:"Minutes to complete"}),Object(m.jsx)(_,{type:"number",id:"minutesToComplete",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{htmlFor:"instructions",children:"Instructions"}),Object(m.jsx)(I,{id:"instructions",rows:"10",value:O,onChange:function(e){return p(e.target.value)}})]}),Object(m.jsx)(R,{children:Object(m.jsx)(P,{color:"primary",type:"submit",children:S?"Loading...":"Submit Recipe"})}),Object(m.jsx)(R,{children:f.map((function(e){return Object(m.jsx)(A,{children:e},e)}))})]})]}),Object(m.jsxs)(de,{children:[Object(m.jsx)("h1",{children:c}),Object(m.jsxs)("p",{children:[Object(m.jsxs)("em",{children:["Time to Complete: ",j," minutes"]}),"\xa0\xb7\xa0",Object(m.jsxs)("cite",{children:["By ",n.username]})]}),Object(m.jsx)(ie.a,{children:O})]})]})};var he,Oe=function(){var e=Object(s.useState)(null),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(s.useEffect)((function(){fetch("/api/me").then((function(e){e.ok&&e.json().then((function(e){return r(e)}))}))}),[]),t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(K,{user:t,setUser:r}),Object(m.jsx)("main",{children:Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/new",children:Object(m.jsx)(ue,{user:t})}),Object(m.jsx)(d.a,{path:"/",children:Object(m.jsx)(be,{})})]})})]}):Object(m.jsx)(re,{onLogin:r})},pe=Object(h.a)(he||(he=Object(o.a)(['\n  *,\n  *::before, \n  *::after {\n    box-sizing: border-box;\n  }\n\n  html, body {\n    margin: 0;\n  }\n\n  body {\n    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;\n  }\n'])));b.a.render(Object(m.jsxs)(u.a,{children:[Object(m.jsx)(pe,{}),Object(m.jsx)(Oe,{})]}),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.08ad8df9.chunk.js.map