self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
apk(d,e,f){var x,w,v,u,t
if(f<=C.c.gI(e))return C.c.gI(d)
if(f>=C.c.gJ(e))return C.c.gJ(d)
x=C.c.a6v(e,new B.agj(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.D(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aAb(d,e,f,g,h){var x,w,v=E.a6W(null,null,y.i)
v.N(0,e)
v.N(0,g)
x=A.a1(v,!1,v.$ti.c)
w=A.ah(x).j("am<1,o>")
return new B.aaj(A.a1(new A.am(x,new B.afM(d,e,f,g,h),w),!1,w.j("b4.E")),x)},
amh(d,e,f){var x,w,v,u=d==null
if(u&&e==null)return null
if(u)return e.aB(0,f)
if(e==null)return d.aB(0,1-f)
x=B.aAb(d.a,d.xD(),e.a,e.xD(),f)
u=A.ue(d.d,e.d,f)
u.toString
w=A.ue(d.e,e.e,f)
w.toString
v=f<0.5?d.f:e.f
return new B.qF(u,w,v,x.a,x.b,null)},
aaj:function aaj(d,e){this.a=d
this.b=e},
agj:function agj(d){this.a=d},
afM:function afM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Y2:function Y2(){},
qF:function qF(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
ZB:function ZB(d){this.a=d},
Hx:function Hx(d,e,f,g,h,i){var _=this
_.bZ=d
_.cc=e
_.B=null
_.M=f
_.ag=g
_.E$=h
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=i
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
HO:function HO(d,e,f,g,h,i){var _=this
_.b7=d
_.bO=e
_.E=$
_.G=!0
_.cn$=f
_.U$=g
_.bR$=h
_.id=null
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=i
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
a2u:function a2u(d,e,f){this.a=d
this.b=e
this.c=f},
am2(d,e,f){return new B.EV(f,e,d,null)},
EV:function EV(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
qG:function qG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.R8=d
_.cx=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.a=r},
IF:function IF(d,e){this.d=d
this.a=e},
awY(d){return new B.HW(d,null)},
HW:function HW(d,e){this.c=d
this.a=e},
a30:function a30(d,e){this.a=d
this.b=e},
a2Y:function a2Y(d){this.a=d},
a2Z:function a2Z(d){this.a=d},
a2X:function a2X(d,e){this.a=d
this.b=e},
a3_:function a3_(){},
qQ:function qQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ME:function ME(d){this.a=null
this.b=d
this.c=null},
acS:function acS(d,e){this.a=d
this.b=e}},A,J,C,D,E,F,H,G,I
B=a.updateHolder(c[5],B)
A=c[0]
J=c[1]
C=c[2]
D=c[13]
E=c[6]
F=c[7]
H=c[10]
G=c[9]
I=c[12]
B.aaj.prototype={}
B.Y2.prototype={
xD(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)A.X(A.br(u,0,4294967295,"length",null))
w=J.k5(new Array(u),y.i)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.qF.prototype={
a3h(d,e,f){var x=this,w=x.d.ah(f).Ns(e),v=x.e.ah(f).Ns(e),u=x.xD()
return A.Y7(w,v,x.a,u,x.f,null)},
aB(d,e){var x=this,w=x.a,v=A.ah(w).j("am<1,o>")
return new B.qF(x.d,x.e,x.f,A.a1(new A.am(w,new B.ZB(e),v),!0,v.j("b4.E")),x.b,null)},
ci(d,e){var x=B.amh(d,this,e)
return x},
cj(d,e){var x=B.amh(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.T(e)!==A.C(x))return!1
return e instanceof B.qF&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&A.cW(e.a,x.a)&&A.cW(e.b,x.b)},
gt(d){var x=this,w=A.cQ(x.a),v=x.b
v=v==null?null:A.cQ(v)
return A.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x=this,w=A.a(["begin: "+x.d.i(0),"end: "+x.e.i(0),"colors: "+A.e(x.a)],y.s),v=x.b
if(v!=null)w.push("stops: "+A.e(v))
w.push("tileMode: "+x.f.i(0))
return"LinearGradient("+C.c.bc(w,", ")+")"}}
B.Hx.prototype={
sCe(d){if(this.bZ==d)return
this.bZ=d
this.a1()},
sAv(d){if(this.cc===d)return
this.cc=d
this.a1()},
ra(d){var x,w,v=d.a,u=d.b,t=this.bZ
if(t!=null){x=u*t
u=x
v=u}w=d.d*this.cc
return new A.aD(v,u,w,w)},
c7(d){var x=this.E$
if(x!=null)return d.bt(x.hM(this.ra(d)))
return d.bt(this.ra(d).bt(C.o))},
bF(){var x=this,w=x.E$,v=y.k
if(w!=null){w.cg(x.ra(v.a(A.y.prototype.gV.call(x))),!0)
w=v.a(A.y.prototype.gV.call(x))
v=x.E$.k3
v.toString
x.k3=w.bt(v)
x.z_()}else x.k3=v.a(A.y.prototype.gV.call(x)).bt(x.ra(v.a(A.y.prototype.gV.call(x))).bt(C.o))}}
B.HO.prototype={
bF(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3={},a4=y.S.a(A.y.prototype.gV.call(a1)),a5=a1.b7
a5.rx=!1
x=a4.d
w=x+a4.z
v=w+a4.Q
u=a4.a1I()
if(a1.U$==null)if(!a1.IY()){a1.id=D.vN
a5.p9()
return}a3.a=null
t=a1.U$
s=t.e
s.toString
r=y.D
if(r.a(s).a==null){s=A.l(a1).j("ab.1")
q=0
while(!0){if(t!=null){p=t.e
p.toString
p=r.a(p).a==null}else p=!1
if(!p)break
p=t.e
p.toString
t=s.a(p).a6$;++q}a1.oM(q,0)
if(a1.U$==null)if(!a1.IY()){a1.id=D.vN
a5.p9()
return}}t=a1.U$
s=t.e
s.toString
s=r.a(s).a
s.toString
o=s
n=a2
for(;o>w;o=m,n=t){t=a1.AC(u,!0)
if(t==null){s=a1.U$
p=s.e
p.toString
r.a(p).a=0
if(w===0){s.cg(u,!0)
t=a1.U$
if(a3.a==null)a3.a=t
n=t
break}else{a1.id=E.ks(a2,!1,a2,a2,0,0,0,0,-w)
return}}s=a1.U$
s.toString
m=o-a1.lx(s)
if(m<-1e-10){a1.id=E.ks(a2,!1,a2,a2,0,0,0,0,-m)
a5=a1.U$.e
a5.toString
r.a(a5).a=0
return}s=t.e
s.toString
r.a(s).a=m
if(a3.a==null)a3.a=t}if(w<1e-10)while(!0){s=a1.U$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
if(!(p>0))break
s=s.a
s.toString
t=a1.AC(u,!0)
p=a1.U$
p.toString
m=s-a1.lx(p)
p=a1.U$.e
p.toString
r.a(p).a=0
if(m<-1e-10){a1.id=E.ks(a2,!1,a2,a2,0,0,0,0,-m)
return}}if(n==null){t.cg(u,!0)
a3.a=t}a3.b=!0
a3.c=t
s=t.e
s.toString
r.a(s)
p=s.b
p.toString
a3.d=p
s=s.a
s.toString
a3.e=s+a1.lx(t)
l=new B.a2u(a3,a1,u)
for(k=0;a3.e<w;){++k
if(!l.$0()){a1.oM(k-1,0)
a5=a1.bR$
x=a5.e
x.toString
x=r.a(x).a
x.toString
j=x+a1.lx(a5)
a1.id=E.ks(a2,!1,a2,a2,j,0,0,j,a2)
return}}while(!0){if(!(a3.e<v)){i=!1
break}if(!l.$0()){i=!0
break}}s=a3.c
if(s!=null){s=s.e
s.toString
p=A.l(a1).j("ab.1")
s=a3.c=p.a(s).a6$
for(h=0;s!=null;s=g){++h
s=s.e
s.toString
g=p.a(s).a6$
a3.c=g}}else h=0
a1.oM(k,h)
f=a3.e
if(!i){s=a1.U$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
e=a1.bR$
e.toString
e=e.e
e.toString
e=r.a(e).b
e.toString
f=a5.KI(a4,p,e,s.a,f)}s=a1.U$.e
s.toString
s=r.a(s).a
s.toString
d=a1.hs(a4,s,a3.e)
s=a1.U$.e
s.toString
s=r.a(s).a
s.toString
a0=a1.mz(a4,s,a3.e)
s=a3.e
a1.id=E.ks(a0,s>x+a4.r||x>0,a2,a2,f,d,0,f,a2)
if(f===s)a5.rx=!0
a5.p9()}}
B.EV.prototype={
aD(d){var x=new B.Hx(this.e,this.f,C.at,A.dk(d),null,A.ap())
x.aC()
x.sb_(null)
return x},
aH(d,e){e.siP(C.at)
e.sCe(this.e)
e.sAv(this.f)
e.sbs(A.dk(d))}}
B.qG.prototype={
Jo(d){return new B.IF(this.R8,null)}}
B.IF.prototype={
bq(d){return E.ans(this,!0)},
aD(d){var x=new B.HO(y.F.a(d),A.A(y.q,y.x),0,null,null,A.ap())
x.aC()
return x}}
B.HW.prototype={
O(d){return A.n2(new B.a30(this,d),y.X)}}
B.qQ.prototype={
af(){return new B.ME(C.k)},
ga7(d){return this.d}}
B.ME.prototype={
O(d){return A.n2(new B.acS(this,d),y.X)}}
var z=a.updateTypes(["hi(R,bZ,i?)","qG(R,bn<p<df>>)"])
B.agj.prototype={
$1(d){return d<=this.a},
$S:356}
B.afM.prototype={
$1(d){var x=this,w=A.D(B.apk(x.a,x.b,d),B.apk(x.c,x.d,d),x.e)
w.toString
return w},
$S:357}
B.ZB.prototype={
$1(d){var x=A.D(null,d,this.a)
x.toString
return x},
$S:40}
B.a2u.prototype={
$0(){var x,w,v,u=this.a,t=u.c,s=u.a
if(t==s)u.b=!1
x=this.b
t=t.e
t.toString
w=u.c=A.l(x).j("ab.1").a(t).a6$
t=w==null
if(t)u.b=!1
v=++u.d
if(!u.b){if(!t){t=w.e
t.toString
t=y.D.a(t).b
t.toString
v=t!==v
t=v}else t=!0
v=this.c
if(t){w=x.Ly(v,s,!0)
u.c=w
if(w==null)return!1}else w.cg(v,!0)
t=u.a=u.c}else t=w
s=t.e
s.toString
y.D.a(s)
v=u.e
s.a=v
u.e=v+x.lx(t)
return!0},
$S:109}
B.a30.prototype={
$3(d,e,f){var x=null,w=this.b,v=this.a.c,u=y.p
return F.aiP(C.j,A.l8(A.anj(A.If(w).JS(!1),A.m8(C.bd,A.a([new A.eu(H.c0,x,x,new A.fT(G.cz,new A.dY(G.dP,B.am2(A.l8(F.De(A.a([F.m9(new B.a2Y(w),"...",v.a,y.N),I.vL,D.Nb,I.vM],u),C.ce),x,x),0.3,x),x),x),x),new A.eu(H.c0,x,x,new A.fT(G.cz,new A.dY(G.dP,F.m9(new B.a2Z(w),D.DW,v.c,y.G),x),x),x),new A.eu(G.c_,x,x,F.m9(new B.a3_(),new A.df("-",0,0,0,C.dL),v.e,y.E),x)],u),C.bu)),x,x),x)},
$C:"$3",
$R:3,
$S:z+0}
B.a2Y.prototype={
$2(d,e){var x=null
return A.i5(e.gck(),x,x,x,x,x,x,x,A.aY(this.a).RG.e,C.cs,x,x)},
$S:96}
B.a2Z.prototype={
$2(d,e){var x=null,w=J.bc(e.gck())+2,v=!0
v=v?I.ws:x
return new B.qG(new E.IB(new B.a2X(this.a,e),w,!0,!0,!0,x),x,C.aG,!1,x,x,v,!1,x,w,C.aI,I.v5,x,C.aw,x)},
$S:z+1}
B.a2X.prototype={
$2(d,e){var x,w,v=null
if(e===0)return A.m5(v,this.a.a5(y.w).f.a.b*0.33,v)
x=this.b
if(e===J.bc(x.gck())+1)return A.m5(v,this.a.a5(y.w).f.a.b*0.3,v)
w=e-1
if(J.h(J.B(x.gck(),w).a.split(" ")[0],"lAqSCG4rIV"))return A.m5(v,v,v)
return new A.dY(D.B8,new B.qQ(J.B(x.gck(),w).e,J.B(x.gck(),w).a,J.B(x.gck(),w).b,J.B(x.gck(),w).c,J.B(x.gck(),w).d,v),v)},
$S:359}
B.a3_.prototype={
$2(d,e){var x=null
if(J.h(e.gck().a.split(" ")[0],"lAqSCG4rIV")||J.h(e.gck().a.split(" ")[0],"-"))return C.b6
return B.am2(A.fr(x,new A.dY(D.Bk,new A.eu(G.c_,x,x,new A.fT(G.cz,new B.qQ(e.gck().e,e.gck().a,e.gck().b,e.gck().c,e.gck().d,x),x),x),x),C.v,x,x,D.x2,x,x,x,x,x,x,x),0.3,1)},
$S:360}
B.acS.prototype={
$3(d,e,f){var x,w,v,u,t=null,s=A.fR(16),r=this.a,q=r.a,p=q.c,o=A.fR(16),n=F.ahS(C.x,2),m=this.b,l=y.p
q=E.ln(A.a3b(A.a([E.ln(F.us("#"+q.e,1,C.w2,A.aY(m).RG.c,t,!0),2),D.vJ,E.ln(F.us(r.a.d,2,C.w2,A.aY(m).RG.c,t,!0),6)],l),C.cI,C.hj,C.ce),6)
x=E.ln(F.us("+"+C.d.R(r.a.r,2),1,t,A.aY(m).RG.x,t,!0),1)
w=A.fR(12)
r=r.a
r.toString
v=A.fR(12)
u=F.ahS(C.x,2.1)
return A.fr(t,new A.eu(H.c0,t,t,A.fr(t,new A.dY(D.Bi,A.a3b(A.a([q,E.ln(A.a3b(A.a([x,D.vJ,E.ln(A.fr(t,new A.eu(H.c0,t,t,A.fr(t,A.l8(F.us(C.d.R(r.f,2),1,t,A.aY(m).RG.x,t,!0),t,t),C.v,t,t,new A.ef(C.lV,t,u,v,t,t,C.au),t,38,t,t,t,t,1/0),t),C.v,t,t,new A.ef(C.x,t,t,w,t,t,C.au),t,45,t,t,t,t,t),1)],l),C.cI,C.FR,C.ek),4)],l),C.cI,C.FS,C.ek),t),C.v,t,t,new A.ef(p,t,n,o,t,t,C.au),t,85,t,t,t,t,t),t),C.v,t,t,new A.ef(C.x,t,t,s,t,t,C.au),t,90,t,t,t,t,t)},
$C:"$3",
$R:3,
$S:361};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[B.aaj,B.Y2])
x(A.bF,[B.agj,B.afM,B.ZB,B.a30,B.acS])
w(B.qF,B.Y2)
w(B.Hx,A.xF)
w(B.HO,E.lW)
w(B.a2u,A.jN)
w(B.EV,A.aW)
w(B.qG,E.uF)
w(B.IF,E.kv)
w(B.HW,A.b2)
x(A.jO,[B.a2Y,B.a2Z,B.a2X,B.a3_])
w(B.qQ,A.a2)
w(B.ME,A.a9)})()
A.Bu(b.typeUniverse,JSON.parse('{"Hx":{"E":[],"aM":["E"],"y":[],"H":[],"ad":[]},"HO":{"lW":[],"c7":[],"ab":["E","e1"],"y":[],"H":[],"ad":[],"ab.1":"e1","ab.0":"E"},"EV":{"aW":[],"as":[],"i":[]},"qG":{"b2":[],"i":[]},"IF":{"kv":[],"as":[],"i":[]},"HW":{"b2":[],"i":[]},"qQ":{"a2":[],"i":[]},"ME":{"a9":["qQ"]}}'))
var y=(function rtii(){var x=A.a0
return{k:x("aD"),s:x("q<k>"),p:x("q<i>"),G:x("p<df>"),w:x("fD"),x:x("E"),S:x("j7"),F:x("oq"),D:x("e1"),N:x("k"),X:x("bZ"),E:x("df"),i:x("K"),q:x("n")}})();(function constants(){var x=a.makeConstList
D.DF=A.a(x([C.Gn,C.a7]),A.a0("q<o>"))
D.Cv=new B.qF(G.c_,H.c0,C.aW,D.DF,null,null)
D.x2=new A.ef(null,null,null,null,null,D.Cv,C.au)
D.B8=new A.aN(0,0,0,12)
D.Bi=new A.aN(15,20,15,20)
D.Bk=new A.aN(20,0,20,40)
D.DW=A.a(x([]),A.a0("q<df>"))
D.vJ=new A.hl(15,null,null,null)
D.vN=new E.IC(0,0,0,0,0,0,!1,!1,null,0)
D.Nb=new F.mk("\u041b\u0438\u0434\u0435\u0440\u0431\u043e\u0440\u0434",null)})()}
$__dart_deferred_initializers__["8dEYb+foIYwHC8KwMlZpydZEl/M="] = $__dart_deferred_initializers__.current
