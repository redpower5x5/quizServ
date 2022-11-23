self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aoj(d,e,f){var x,w,v,u,t
if(f<=C.c.gI(e))return C.c.gI(d)
if(f>=C.c.gJ(e))return C.c.gJ(d)
x=C.c.a64(e,new B.afx(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.D(w,u,(f-t)/(e[v]-t))
t.toString
return t},
ayY(d,e,f,g,h){var x,w,v=E.a6f(null,null,y.i)
v.N(0,e)
v.N(0,g)
x=A.a0(v,!1,v.$ti.c)
w=A.ah(x).j("an<1,n>")
return new B.a9C(A.a0(new A.an(x,new B.af_(d,e,f,g,h),w),!1,w.j("b5.E")),x)},
alm(d,e,f){var x,w,v,u=d==null
if(u&&e==null)return null
if(u)return e.aB(0,f)
if(e==null)return d.aB(0,1-f)
x=B.ayY(d.a,d.xw(),e.a,e.xw(),f)
u=A.tX(d.d,e.d,f)
u.toString
w=A.tX(d.e,e.e,f)
w.toString
v=f<0.5?d.f:e.f
return new B.qv(u,w,v,x.a,x.b,null)},
a9C:function a9C(d,e){this.a=d
this.b=e},
afx:function afx(d){this.a=d},
af_:function af_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Xm:function Xm(){},
qv:function qv(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
YV:function YV(d){this.a=d},
Hg:function Hg(d,e,f,g,h,i){var _=this
_.bY=d
_.c9=e
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
Hx:function Hx(d,e,f,g,h,i){var _=this
_.b5=d
_.bO=e
_.E=$
_.F=!0
_.cl$=f
_.S$=g
_.bQ$=h
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
a1S:function a1S(d,e,f){this.a=d
this.b=e
this.c=f},
al7(d,e,f){return new B.EF(f,e,d,null)},
EF:function EF(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
qw:function qw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Im:function Im(d,e){this.d=d
this.a=e},
avQ(d){return new B.HE(d,null)},
HE:function HE(d,e){this.c=d
this.a=e},
a2m:function a2m(d,e){this.a=d
this.b=e},
a2j:function a2j(d){this.a=d},
a2k:function a2k(d){this.a=d},
a2i:function a2i(d,e){this.a=d
this.b=e},
a2l:function a2l(){},
qG:function qG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Mk:function Mk(d){this.a=null
this.b=d
this.c=null},
ac8:function ac8(d,e){this.a=d
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
B.a9C.prototype={}
B.Xm.prototype={
xw(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)A.X(A.br(u,0,4294967295,"length",null))
w=J.jW(new Array(u),y.i)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.qv.prototype={
a2S(d,e,f){var x=this,w=x.d.ah(f).Nf(e),v=x.e.ah(f).Nf(e),u=x.xw()
return A.Xr(w,v,x.a,u,x.f,null)},
aB(d,e){var x=this,w=x.a,v=A.ah(w).j("an<1,n>")
return new B.qv(x.d,x.e,x.f,A.a0(new A.an(w,new B.YV(e),v),!0,v.j("b5.E")),x.b,null)},
ce(d,e){var x=B.alm(d,this,e)
return x},
cf(d,e){var x=B.alm(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.S(e)!==A.C(x))return!1
return e instanceof B.qv&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&A.cS(e.a,x.a)&&A.cS(e.b,x.b)},
gt(d){var x=this,w=A.cZ(x.a),v=x.b
v=v==null?null:A.cZ(v)
return A.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x=this,w=A.a(["begin: "+x.d.i(0),"end: "+x.e.i(0),"colors: "+A.e(x.a)],y.s),v=x.b
if(v!=null)w.push("stops: "+A.e(v))
w.push("tileMode: "+x.f.i(0))
return"LinearGradient("+C.c.ba(w,", ")+")"}}
B.Hg.prototype={
sC4(d){if(this.bY==d)return
this.bY=d
this.a1()},
sAl(d){if(this.c9===d)return
this.c9=d
this.a1()},
r8(d){var x,w,v=d.a,u=d.b,t=this.bY
if(t!=null){x=u*t
u=x
v=u}w=d.d*this.c9
return new A.aD(v,u,w,w)},
c5(d){var x=this.E$
if(x!=null)return d.bt(x.hH(this.r8(d)))
return d.bt(this.r8(d).bt(C.o))},
bE(){var x=this,w=x.E$,v=y.k
if(w!=null){w.cd(x.r8(v.a(A.y.prototype.gV.call(x))),!0)
w=v.a(A.y.prototype.gV.call(x))
v=x.E$.k3
v.toString
x.k3=w.bt(v)
x.yP()}else x.k3=v.a(A.y.prototype.gV.call(x)).bt(x.r8(v.a(A.y.prototype.gV.call(x))).bt(C.o))}}
B.Hx.prototype={
bE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3={},a4=y.S.a(A.y.prototype.gV.call(a1)),a5=a1.b5
a5.rx=!1
x=a4.d
w=x+a4.z
v=w+a4.Q
u=a4.a1l()
if(a1.S$==null)if(!a1.IK()){a1.id=D.vJ
a5.p_()
return}a3.a=null
t=a1.S$
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
t=s.a(p).a6$;++q}a1.oF(q,0)
if(a1.S$==null)if(!a1.IK()){a1.id=D.vJ
a5.p_()
return}}t=a1.S$
s=t.e
s.toString
s=r.a(s).a
s.toString
o=s
n=a2
for(;o>w;o=m,n=t){t=a1.As(u,!0)
if(t==null){s=a1.S$
p=s.e
p.toString
r.a(p).a=0
if(w===0){s.cd(u,!0)
t=a1.S$
if(a3.a==null)a3.a=t
n=t
break}else{a1.id=E.km(a2,!1,a2,a2,0,0,0,0,-w)
return}}s=a1.S$
s.toString
m=o-a1.lq(s)
if(m<-1e-10){a1.id=E.km(a2,!1,a2,a2,0,0,0,0,-m)
a5=a1.S$.e
a5.toString
r.a(a5).a=0
return}s=t.e
s.toString
r.a(s).a=m
if(a3.a==null)a3.a=t}if(w<1e-10)while(!0){s=a1.S$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
if(!(p>0))break
s=s.a
s.toString
t=a1.As(u,!0)
p=a1.S$
p.toString
m=s-a1.lq(p)
p=a1.S$.e
p.toString
r.a(p).a=0
if(m<-1e-10){a1.id=E.km(a2,!1,a2,a2,0,0,0,0,-m)
return}}if(n==null){t.cd(u,!0)
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
a3.e=s+a1.lq(t)
l=new B.a1S(a3,a1,u)
for(k=0;a3.e<w;){++k
if(!l.$0()){a1.oF(k-1,0)
a5=a1.bQ$
x=a5.e
x.toString
x=r.a(x).a
x.toString
j=x+a1.lq(a5)
a1.id=E.km(a2,!1,a2,a2,j,0,0,j,a2)
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
a1.oF(k,h)
f=a3.e
if(!i){s=a1.S$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
e=a1.bQ$
e.toString
e=e.e
e.toString
e=r.a(e).b
e.toString
f=a5.Kv(a4,p,e,s.a,f)}s=a1.S$.e
s.toString
s=r.a(s).a
s.toString
d=a1.ho(a4,s,a3.e)
s=a1.S$.e
s.toString
s=r.a(s).a
s.toString
a0=a1.mt(a4,s,a3.e)
s=a3.e
a1.id=E.km(a0,s>x+a4.r||x>0,a2,a2,f,d,0,f,a2)
if(f===s)a5.rx=!0
a5.p_()}}
B.EF.prototype={
aD(d){var x=new B.Hg(this.e,this.f,C.as,A.df(d),null,A.am())
x.aC()
x.sb_(null)
return x},
aH(d,e){e.siM(C.as)
e.sC4(this.e)
e.sAl(this.f)
e.sbs(A.df(d))}}
B.qw.prototype={
Ja(d){return new B.Im(this.R8,null)}}
B.Im.prototype={
bq(d){return E.amx(this,!0)},
aD(d){var x=new B.Hx(y.F.a(d),A.A(y.q,y.x),0,null,null,A.am())
x.aC()
return x}}
B.HE.prototype={
O(d){return A.mX(new B.a2m(this,d),y.X)}}
B.qG.prototype={
af(){return new B.Mk(C.k)},
ga7(d){return this.d}}
B.Mk.prototype={
O(d){return A.mX(new B.ac8(this,d),y.X)}}
var z=a.updateTypes(["hc(R,bV,i?)","qw(R,bl<u<da>>)"])
B.afx.prototype={
$1(d){return d<=this.a},
$S:348}
B.af_.prototype={
$1(d){var x=this,w=A.D(B.aoj(x.a,x.b,d),B.aoj(x.c,x.d,d),x.e)
w.toString
return w},
$S:349}
B.YV.prototype={
$1(d){var x=A.D(null,d,this.a)
x.toString
return x},
$S:51}
B.a1S.prototype={
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
if(t){w=x.Ll(v,s,!0)
u.c=w
if(w==null)return!1}else w.cd(v,!0)
t=u.a=u.c}else t=w
s=t.e
s.toString
y.D.a(s)
v=u.e
s.a=v
u.e=v+x.lq(t)
return!0},
$S:118}
B.a2m.prototype={
$3(d,e,f){var x=null,w=this.b,v=this.a.c,u=y.p
return F.ahZ(C.j,A.l1(A.amo(A.HY(w).JF(!1),A.m3(C.b9,A.a([new A.eq(H.bW,x,x,new A.fO(G.cv,new A.dV(G.dJ,B.al7(A.l1(F.CZ(A.a([D.I6,F.m4(new B.a2j(w),"...",v.a,y.N),D.I4,D.MR,I.vI],u),C.ca),x,x),0.3,x),x),x),x),new A.eq(H.bW,x,x,new A.fO(G.cv,new A.dV(G.dJ,F.m4(new B.a2k(w),D.Dz,v.c,y.G),x),x),x),new A.eq(G.bV,x,x,F.m4(new B.a2l(),new A.da("-",0,0,0,C.dF),v.e,y.E),x)],u),C.br)),x,x),x)},
$C:"$3",
$R:3,
$S:z+0}
B.a2j.prototype={
$2(d,e){var x=null
return A.hZ(e.gcg(),x,x,x,x,x,x,x,A.aX(this.a).RG.e,C.co,x,x)},
$S:86}
B.a2k.prototype={
$2(d,e){var x=null,w=J.bg(e.gcg())+2,v=!0
v=v?I.wo:x
return new B.qw(new E.Ii(new B.a2i(this.a,e),w,!0,!0,!0,x),x,C.aF,!1,x,x,v,!1,x,w,C.aH,I.v2,x,C.av,x)},
$S:z+1}
B.a2i.prototype={
$2(d,e){var x,w,v=null
if(e===0)return A.m0(v,this.a.a5(y.w).f.a.b*0.33,v)
x=this.b
if(e===J.bg(x.gcg())+1)return A.m0(v,this.a.a5(y.w).f.a.b*0.3,v)
w=e-1
if(J.h(J.B(x.gcg(),w).a.split(" ")[0],"lAqSCG4rIV"))return A.m0(v,v,v)
return new A.dV(D.B2,new B.qG(J.B(x.gcg(),w).e,J.B(x.gcg(),w).a,J.B(x.gcg(),w).b,J.B(x.gcg(),w).c,J.B(x.gcg(),w).d,v),v)},
$S:351}
B.a2l.prototype={
$2(d,e){var x=null
if(J.h(e.gcg().a.split(" ")[0],"lAqSCG4rIV")||J.h(e.gcg().a.split(" ")[0],"-"))return C.b2
return B.al7(A.fo(x,new A.dV(D.Be,new A.eq(G.bV,x,x,new A.fO(G.cv,new B.qG(e.gcg().e,e.gcg().a,e.gcg().b,e.gcg().c,e.gcg().d,x),x),x),x),C.u,x,x,D.wZ,x,x,x,x,x,x,x),0.3,1)},
$S:352}
B.ac8.prototype={
$3(d,e,f){var x,w,v,u,t=null,s=A.fM(16),r=this.a,q=r.a,p=q.c,o=A.fM(16),n=F.ah0(C.x,2),m=this.b,l=y.p
q=E.lg(A.a2x(A.a([E.lg(F.ua("#"+q.e,1/0,1,C.vZ,A.aX(m).RG.c,t,!0),2),D.vG,E.lg(F.ua(r.a.d,1/0,2,C.vZ,A.aX(m).RG.c,t,!0),6)],l),C.cE,C.hf,C.ca),6)
x=E.lg(F.ua("+"+C.d.P(r.a.r,2),1/0,1,t,A.aX(m).RG.x,t,!0),1)
w=A.fM(12)
r=r.a
r.toString
v=A.fM(12)
u=F.ah0(C.x,2.1)
return A.fo(t,new A.eq(H.bW,t,t,A.fo(t,new A.dV(D.Bc,A.a2x(A.a([q,E.lg(A.a2x(A.a([x,D.vG,E.lg(A.fo(t,new A.eq(H.bW,t,t,A.fo(t,A.l1(F.ua(C.d.P(r.f,2),1/0,1,t,A.aX(m).RG.x,t,!0),t,t),C.u,t,t,new A.ec(C.lQ,t,u,v,t,t,C.at),t,38,t,t,t,t,1/0),t),C.u,t,t,new A.ec(C.x,t,t,w,t,t,C.at),t,45,t,t,t,t,t),1)],l),C.cE,C.Fu,C.ef),4)],l),C.cE,C.Fv,C.ef),t),C.u,t,t,new A.ec(p,t,n,o,t,t,C.at),t,85,t,t,t,t,t),t),C.u,t,t,new A.ec(C.x,t,t,s,t,t,C.at),t,90,t,t,t,t,t)},
$C:"$3",
$R:3,
$S:353};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[B.a9C,B.Xm])
x(A.bF,[B.afx,B.af_,B.YV,B.a2m,B.ac8])
w(B.qv,B.Xm)
w(B.Hg,A.xn)
w(B.Hx,E.lR)
w(B.a1S,A.jD)
w(B.EF,A.aV)
w(B.qw,E.un)
w(B.Im,E.kp)
w(B.HE,A.b2)
x(A.jE,[B.a2j,B.a2k,B.a2i,B.a2l])
w(B.qG,A.a2)
w(B.Mk,A.a4)})()
A.Bb(b.typeUniverse,JSON.parse('{"Hg":{"E":[],"aM":["E"],"y":[],"H":[],"ac":[]},"Hx":{"lR":[],"c5":[],"ab":["E","dZ"],"y":[],"H":[],"ac":[],"ab.1":"dZ","ab.0":"E"},"EF":{"aV":[],"aq":[],"i":[]},"qw":{"b2":[],"i":[]},"Im":{"kp":[],"aq":[],"i":[]},"HE":{"b2":[],"i":[]},"qG":{"a2":[],"i":[]},"Mk":{"a4":["qG"]}}'))
var y=(function rtii(){var x=A.Z
return{k:x("aD"),s:x("q<m>"),p:x("q<i>"),G:x("u<da>"),w:x("fx"),x:x("E"),S:x("iX"),F:x("oj"),D:x("dZ"),N:x("m"),X:x("bV"),E:x("da"),i:x("K"),q:x("o")}})();(function constants(){var x=a.makeConstList
D.Di=A.a(x([C.G_,C.a6]),A.Z("q<n>"))
D.C9=new B.qv(G.bV,H.bW,C.aT,D.Di,null,null)
D.wZ=new A.ec(null,null,null,null,null,D.C9,C.at)
D.B2=new A.aN(0,0,0,12)
D.Bc=new A.aN(15,20,15,20)
D.Be=new A.aN(20,0,20,40)
D.Dz=A.a(x([]),A.Z("q<da>"))
D.vG=new A.f7(15,null,null,null)
D.I4=new A.f7(null,10,null,null)
D.I6=new A.f7(null,50,null,null)
D.vJ=new E.Ij(0,0,0,0,0,0,!1,!1,null,0)
D.MR=new F.mf("\u041b\u0438\u0434\u0435\u0440\u0431\u043e\u0440\u0434",null)})()}
$__dart_deferred_initializers__["GV9F2W8Bl0YBRatSNp5REMbO5xM="] = $__dart_deferred_initializers__.current
