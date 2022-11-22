self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aoa(d,e,f){var x,w,v,u,t
if(f<=C.c.gI(e))return C.c.gI(d)
if(f>=C.c.gJ(e))return C.c.gJ(d)
x=C.c.a60(e,new B.afp(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.D(w,u,(f-t)/(e[v]-t))
t.toString
return t},
ayJ(d,e,f,g,h){var x,w,v=E.a69(null,null,y.i)
v.N(0,e)
v.N(0,g)
x=A.a_(v,!1,v.$ti.c)
w=A.ag(x).j("am<1,n>")
return new B.a9u(A.a_(new A.am(x,new B.aeS(d,e,f,g,h),w),!1,w.j("b4.E")),x)},
ald(d,e,f){var x,w,v,u=d==null
if(u&&e==null)return null
if(u)return e.aB(0,f)
if(e==null)return d.aB(0,1-f)
x=B.ayJ(d.a,d.xu(),e.a,e.xu(),f)
u=A.tW(d.d,e.d,f)
u.toString
w=A.tW(d.e,e.e,f)
w.toString
v=f<0.5?d.f:e.f
return new B.qu(u,w,v,x.a,x.b,null)},
a9u:function a9u(d,e){this.a=d
this.b=e},
afp:function afp(d){this.a=d},
aeS:function aeS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Xl:function Xl(){},
qu:function qu(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
YT:function YT(d){this.a=d},
He:function He(d,e,f,g,h,i){var _=this
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
Hv:function Hv(d,e,f,g,h,i){var _=this
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
a1M:function a1M(d,e,f){this.a=d
this.b=e
this.c=f},
akZ(d,e,f){return new B.EE(f,e,d,null)},
EE:function EE(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
qv:function qv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Ik:function Ik(d,e){this.d=d
this.a=e},
avB(d){return new B.HC(d,null)},
HC:function HC(d,e){this.c=d
this.a=e},
a2g:function a2g(d,e){this.a=d
this.b=e},
a2d:function a2d(d){this.a=d},
a2e:function a2e(d){this.a=d},
a2c:function a2c(d,e){this.a=d
this.b=e},
a2f:function a2f(){},
qF:function qF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Mi:function Mi(d){this.a=null
this.b=d
this.c=null},
ac0:function ac0(d,e){this.a=d
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
B.a9u.prototype={}
B.Xl.prototype={
xu(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)A.X(A.br(u,0,4294967295,"length",null))
w=J.jW(new Array(u),y.i)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.qu.prototype={
a2Q(d,e,f){var x=this,w=x.d.ah(f).Nd(e),v=x.e.ah(f).Nd(e),u=x.xu()
return A.Xq(w,v,x.a,u,x.f,null)},
aB(d,e){var x=this,w=x.a,v=A.ag(w).j("am<1,n>")
return new B.qu(x.d,x.e,x.f,A.a_(new A.am(w,new B.YT(e),v),!0,v.j("b4.E")),x.b,null)},
ce(d,e){var x=B.ald(d,this,e)
return x},
cf(d,e){var x=B.ald(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.S(e)!==A.C(x))return!1
return e instanceof B.qu&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&A.cS(e.a,x.a)&&A.cS(e.b,x.b)},
gt(d){var x=this,w=A.cZ(x.a),v=x.b
v=v==null?null:A.cZ(v)
return A.N(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x=this,w=A.a(["begin: "+x.d.i(0),"end: "+x.e.i(0),"colors: "+A.e(x.a)],y.s),v=x.b
if(v!=null)w.push("stops: "+A.e(v))
w.push("tileMode: "+x.f.i(0))
return"LinearGradient("+C.c.ba(w,", ")+")"}}
B.He.prototype={
sC2(d){if(this.bY==d)return
this.bY=d
this.a1()},
sAj(d){if(this.c9===d)return
this.c9=d
this.a1()},
r7(d){var x,w,v=d.a,u=d.b,t=this.bY
if(t!=null){x=u*t
u=x
v=u}w=d.d*this.c9
return new A.aD(v,u,w,w)},
c5(d){var x=this.E$
if(x!=null)return d.bt(x.hH(this.r7(d)))
return d.bt(this.r7(d).bt(C.o))},
bE(){var x=this,w=x.E$,v=y.k
if(w!=null){w.cd(x.r7(v.a(A.y.prototype.gV.call(x))),!0)
w=v.a(A.y.prototype.gV.call(x))
v=x.E$.k3
v.toString
x.k3=w.bt(v)
x.yN()}else x.k3=v.a(A.y.prototype.gV.call(x)).bt(x.r7(v.a(A.y.prototype.gV.call(x))).bt(C.o))}}
B.Hv.prototype={
bE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3={},a4=y.S.a(A.y.prototype.gV.call(a1)),a5=a1.b5
a5.rx=!1
x=a4.d
w=x+a4.z
v=w+a4.Q
u=a4.a1j()
if(a1.S$==null)if(!a1.IJ()){a1.id=D.vK
a5.p_()
return}a3.a=null
t=a1.S$
s=t.e
s.toString
r=y.D
if(r.a(s).a==null){s=A.l(a1).j("a6.1")
q=0
while(!0){if(t!=null){p=t.e
p.toString
p=r.a(p).a==null}else p=!1
if(!p)break
p=t.e
p.toString
t=s.a(p).a6$;++q}a1.oF(q,0)
if(a1.S$==null)if(!a1.IJ()){a1.id=D.vK
a5.p_()
return}}t=a1.S$
s=t.e
s.toString
s=r.a(s).a
s.toString
o=s
n=a2
for(;o>w;o=m,n=t){t=a1.Aq(u,!0)
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
t=a1.Aq(u,!0)
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
l=new B.a1M(a3,a1,u)
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
p=A.l(a1).j("a6.1")
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
f=a5.Ku(a4,p,e,s.a,f)}s=a1.S$.e
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
B.EE.prototype={
aD(d){var x=new B.He(this.e,this.f,C.as,A.df(d),null,A.al())
x.aC()
x.sb_(null)
return x},
aH(d,e){e.siM(C.as)
e.sC2(this.e)
e.sAj(this.f)
e.sbs(A.df(d))}}
B.qv.prototype={
J9(d){return new B.Ik(this.R8,null)}}
B.Ik.prototype={
bq(d){return E.amo(this,!0)},
aD(d){var x=new B.Hv(y.F.a(d),A.A(y.q,y.x),0,null,null,A.al())
x.aC()
return x}}
B.HC.prototype={
O(d){return A.mX(new B.a2g(this,d),y.X)}}
B.qF.prototype={
af(){return new B.Mi(C.k)},
ga7(d){return this.d}}
B.Mi.prototype={
O(d){return A.mX(new B.ac0(this,d),y.X)}}
var z=a.updateTypes(["hb(R,bV,i?)","qv(R,bl<u<da>>)"])
B.afp.prototype={
$1(d){return d<=this.a},
$S:347}
B.aeS.prototype={
$1(d){var x=this,w=A.D(B.aoa(x.a,x.b,d),B.aoa(x.c,x.d,d),x.e)
w.toString
return w},
$S:348}
B.YT.prototype={
$1(d){var x=A.D(null,d,this.a)
x.toString
return x},
$S:51}
B.a1M.prototype={
$0(){var x,w,v,u=this.a,t=u.c,s=u.a
if(t==s)u.b=!1
x=this.b
t=t.e
t.toString
w=u.c=A.l(x).j("a6.1").a(t).a6$
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
if(t){w=x.Lk(v,s,!0)
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
$S:119}
B.a2g.prototype={
$3(d,e,f){var x=null,w=this.b,v=this.a.c,u=y.p
return F.ahR(C.j,A.l1(A.amf(A.HW(w).JE(!1),A.m3(C.b9,A.a([new A.eq(H.bW,x,x,new A.fN(G.cv,new A.dV(G.dI,B.akZ(A.l1(F.CY(A.a([F.m4(new B.a2d(w),"...",v.a,y.N),I.vI,D.MP,I.vJ],u),C.ca),x,x),0.3,x),x),x),x),new A.eq(H.bW,x,x,new A.fN(G.cv,new A.dV(G.dI,F.m4(new B.a2e(w),D.DA,v.c,y.G),x),x),x),new A.eq(G.bV,x,x,F.m4(new B.a2f(),new A.da("-",0,0,0,C.dE),v.e,y.E),x)],u),C.br)),x,x),x)},
$C:"$3",
$R:3,
$S:z+0}
B.a2d.prototype={
$2(d,e){var x=null
return A.hZ(e.gcg(),x,x,x,x,x,x,x,A.aX(this.a).RG.e,C.co,x,x)},
$S:86}
B.a2e.prototype={
$2(d,e){var x=null,w=J.bf(e.gcg())+2,v=!0
v=v?I.wp:x
return new B.qv(new E.Ig(new B.a2c(this.a,e),w,!0,!0,!0,x),x,C.aF,!1,x,x,v,!1,x,w,C.aH,I.v2,x,C.av,x)},
$S:z+1}
B.a2c.prototype={
$2(d,e){var x,w,v=null
if(e===0)return A.m0(v,this.a.a5(y.w).f.a.b*0.33,v)
x=this.b
if(e===J.bf(x.gcg())+1)return A.m0(v,this.a.a5(y.w).f.a.b*0.3,v)
w=e-1
if(J.h(J.B(x.gcg(),w).a.split(" ")[0],"lAqSCG4rIV"))return A.m0(v,v,v)
return new A.dV(D.B3,new B.qF(J.B(x.gcg(),w).e,J.B(x.gcg(),w).a,J.B(x.gcg(),w).b,J.B(x.gcg(),w).c,J.B(x.gcg(),w).d,v),v)},
$S:350}
B.a2f.prototype={
$2(d,e){var x=null
if(J.h(e.gcg().a.split(" ")[0],"lAqSCG4rIV")||J.h(e.gcg().a.split(" ")[0],"-"))return C.b2
return B.akZ(A.fn(x,new A.dV(D.Bf,new A.eq(G.bV,x,x,new A.fN(G.cv,new B.qF(e.gcg().e,e.gcg().a,e.gcg().b,e.gcg().c,e.gcg().d,x),x),x),x),C.u,x,x,D.x_,x,x,x,x,x,x,x),0.3,1)},
$S:351}
B.ac0.prototype={
$3(d,e,f){var x,w,v,u,t=null,s=A.fL(16),r=this.a,q=r.a,p=q.c,o=A.fL(16),n=F.agT(C.x,2),m=this.b,l=y.p
q=E.lg(A.a2r(A.a([E.lg(F.u9("#"+q.e,1,C.w_,A.aX(m).RG.c,t),2),D.vG,E.lg(F.u9(r.a.d,2,C.w_,A.aX(m).RG.c,t),6)],l),C.cE,C.hf,C.ca),6)
x=E.lg(F.u9("+"+C.d.P(r.a.r,2),1,t,A.aX(m).RG.x,t),1)
w=A.fL(12)
r=r.a
r.toString
v=A.fL(12)
u=F.agT(C.x,2.1)
return A.fn(t,new A.eq(H.bW,t,t,A.fn(t,new A.dV(D.Bd,A.a2r(A.a([q,E.lg(A.a2r(A.a([x,D.vG,E.lg(A.fn(t,new A.eq(H.bW,t,t,A.fn(t,A.l1(F.u9(C.d.P(r.f,2),1,t,A.aX(m).RG.x,t),t,t),C.u,t,t,new A.ec(C.lQ,t,u,v,t,t,C.at),t,38,t,t,t,t,1/0),t),C.u,t,t,new A.ec(C.x,t,t,w,t,t,C.at),t,45,t,t,t,t,t),1)],l),C.cE,C.Fv,C.ee),4)],l),C.cE,C.Fw,C.ee),t),C.u,t,t,new A.ec(p,t,n,o,t,t,C.at),t,85,t,t,t,t,t),t),C.u,t,t,new A.ec(C.x,t,t,s,t,t,C.at),t,90,t,t,t,t,t)},
$C:"$3",
$R:3,
$S:352};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[B.a9u,B.Xl])
x(A.bF,[B.afp,B.aeS,B.YT,B.a2g,B.ac0])
w(B.qu,B.Xl)
w(B.He,A.xm)
w(B.Hv,E.lR)
w(B.a1M,A.jD)
w(B.EE,A.aV)
w(B.qv,E.um)
w(B.Ik,E.kp)
w(B.HC,A.b2)
x(A.jE,[B.a2d,B.a2e,B.a2c,B.a2f])
w(B.qF,A.a2)
w(B.Mi,A.a4)})()
A.Ba(b.typeUniverse,JSON.parse('{"He":{"E":[],"aM":["E"],"y":[],"H":[],"ac":[]},"Hv":{"lR":[],"c4":[],"a6":["E","dZ"],"y":[],"H":[],"ac":[],"a6.1":"dZ","a6.0":"E"},"EE":{"aV":[],"ap":[],"i":[]},"qv":{"b2":[],"i":[]},"Ik":{"kp":[],"ap":[],"i":[]},"HC":{"b2":[],"i":[]},"qF":{"a2":[],"i":[]},"Mi":{"a4":["qF"]}}'))
var y=(function rtii(){var x=A.a1
return{k:x("aD"),s:x("o<m>"),p:x("o<i>"),G:x("u<da>"),w:x("fw"),x:x("E"),S:x("iX"),F:x("oj"),D:x("dZ"),N:x("m"),X:x("bV"),E:x("da"),i:x("K"),q:x("q")}})();(function constants(){var x=a.makeConstList
D.Dj=A.a(x([C.G0,C.a6]),A.a1("o<n>"))
D.Ca=new B.qu(G.bV,H.bW,C.aT,D.Dj,null,null)
D.x_=new A.ec(null,null,null,null,null,D.Ca,C.at)
D.B3=new A.aN(0,0,0,12)
D.Bd=new A.aN(15,20,15,20)
D.Bf=new A.aN(20,0,20,40)
D.DA=A.a(x([]),A.a1("o<da>"))
D.vG=new A.he(15,null,null,null)
D.vK=new E.Ih(0,0,0,0,0,0,!1,!1,null,0)
D.MP=new F.mf("\u041b\u0438\u0434\u0435\u0440\u0431\u043e\u0440\u0434",null)})()}
$__dart_deferred_initializers__["x9jZgYu5lY+sRTRA/gwO/KAqfts="] = $__dart_deferred_initializers__.current
