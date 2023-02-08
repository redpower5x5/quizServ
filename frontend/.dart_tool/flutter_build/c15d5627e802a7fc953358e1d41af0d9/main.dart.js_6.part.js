self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
atm(d,e,f){var x,w,v,u,t
if(f<=C.c.gI(e))return C.c.gI(d)
if(f>=C.c.gK(e))return C.c.gK(d)
x=C.c.a8B(e,new B.ajB(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.D(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aEP(d,e,f,g,h){var x,w,v=E.aa7(null,null,y.i)
v.J(0,e)
v.J(0,g)
x=A.a8(v,!1,v.$ti.c)
w=A.ah(x).j("al<1,q>")
return new B.adx(A.a8(new A.al(x,new B.aj1(d,e,f,g,h),w),!1,w.j("b8.E")),x)},
aqf(d,e,f){var x,w,v,u=d==null
if(u&&e==null)return null
if(u)return e.aC(0,f)
if(e==null)return d.aC(0,1-f)
x=B.aEP(d.a,d.yo(),e.a,e.yo(),f)
u=A.vf(d.d,e.d,f)
u.toString
w=A.vf(d.e,e.e,f)
w.toString
v=f<0.5?d.f:e.f
return new B.rz(u,w,v,x.a,x.b,null)},
adx:function adx(d,e){this.a=d
this.b=e},
ajB:function ajB(d){this.a=d},
aj1:function aj1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a01:function a01(){},
rz:function rz(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
a1L:function a1L(d){this.a=d},
JS:function JS(d,e,f,g,h,i){var _=this
_.c7=d
_.ci=e
_.C=null
_.N=f
_.ai=g
_.F$=h
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
K8:function K8(d,e,f,g,h,i){var _=this
_.bd=d
_.bW=e
_.F=$
_.H=!0
_.cr$=f
_.V$=g
_.c_$=h
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
a5S:function a5S(d,e,f){this.a=d
this.b=e
this.c=f},
apZ(d,e,f){return new B.H9(f,e,d,null)},
H9:function H9(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
rA:function rA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
L9:function L9(d,e){this.d=d
this.a=e},
aBq(d){return new B.Kg(d,null)},
Kg:function Kg(d,e){this.c=d
this.a=e},
a6o:function a6o(d,e){this.a=d
this.b=e},
a6l:function a6l(d){this.a=d},
a6m:function a6m(d){this.a=d},
a6k:function a6k(d,e){this.a=d
this.b=e},
a6n:function a6n(){},
rJ:function rJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
P7:function P7(d){this.a=null
this.b=d
this.c=null},
ag5:function ag5(d,e){this.a=d
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
B.adx.prototype={}
B.a01.prototype={
yo(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)A.a_(A.bz(u,0,4294967295,"length",null))
w=J.kw(new Array(u),y.i)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.rz.prototype={
a5o(d,e,f){var x=this,w=x.d.ak(f).OS(e),v=x.e.ak(f).OS(e),u=x.yo()
return A.a06(w,v,x.a,u,x.f,null)},
aC(d,e){var x=this,w=x.a,v=A.ah(w).j("al<1,q>")
return new B.rz(x.d,x.e,x.f,A.a8(new A.al(w,new B.a1L(e),v),!0,v.j("b8.E")),x.b,null)},
cn(d,e){var x=B.aqf(d,this,e)
return x},
co(d,e){var x=B.aqf(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.T(e)!==A.C(x))return!1
return e instanceof B.rz&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&A.d9(e.a,x.a)&&A.d9(e.b,x.b)},
gu(d){var x=this,w=A.cW(x.a),v=x.b
v=v==null?null:A.cW(v)
return A.P(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x=this,w=A.a(["begin: "+x.d.i(0),"end: "+x.e.i(0),"colors: "+A.e(x.a)],y.s),v=x.b
if(v!=null)w.push("stops: "+A.e(v))
w.push("tileMode: "+x.f.i(0))
return"LinearGradient("+C.c.bb(w,", ")+")"}}
B.JS.prototype={
sD9(d){if(this.c7==d)return
this.c7=d
this.a3()},
sBl(d){if(this.ci===d)return
this.ci=d
this.a3()},
rM(d){var x,w,v=d.a,u=d.b,t=this.c7
if(t!=null){x=u*t
u=x
v=u}w=d.d*this.ci
return new A.aI(v,u,w,w)},
cd(d){var x=this.F$
if(x!=null)return d.bB(x.hZ(this.rM(d)))
return d.bB(this.rM(d).bB(C.p))},
bN(){var x=this,w=x.F$,v=y.k
if(w!=null){w.cm(x.rM(v.a(A.z.prototype.gY.call(x))),!0)
w=v.a(A.z.prototype.gY.call(x))
v=x.F$.k3
v.toString
x.k3=w.bB(v)
x.zM()}else x.k3=v.a(A.z.prototype.gY.call(x)).bB(x.rM(v.a(A.z.prototype.gY.call(x))).bB(C.p))}}
B.K8.prototype={
bN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3={},a4=y.S.a(A.z.prototype.gY.call(a1)),a5=a1.bd
a5.rx=!1
x=a4.d
w=x+a4.z
v=w+a4.Q
u=a4.a3P()
if(a1.V$==null)if(!a1.K5()){a1.id=D.w_
a5.pG()
return}a3.a=null
t=a1.V$
s=t.e
s.toString
r=y.D
if(r.a(s).a==null){s=A.k(a1).j("ai.1")
q=0
while(!0){if(t!=null){p=t.e
p.toString
p=r.a(p).a==null}else p=!1
if(!p)break
p=t.e
p.toString
t=s.a(p).aa$;++q}a1.pm(q,0)
if(a1.V$==null)if(!a1.K5()){a1.id=D.w_
a5.pG()
return}}t=a1.V$
s=t.e
s.toString
s=r.a(s).a
s.toString
o=s
n=a2
for(;o>w;o=m,n=t){t=a1.Bs(u,!0)
if(t==null){s=a1.V$
p=s.e
p.toString
r.a(p).a=0
if(w===0){s.cm(u,!0)
t=a1.V$
if(a3.a==null)a3.a=t
n=t
break}else{a1.id=E.kU(a2,!1,a2,a2,0,0,0,0,-w)
return}}s=a1.V$
s.toString
m=o-a1.lT(s)
if(m<-1e-10){a1.id=E.kU(a2,!1,a2,a2,0,0,0,0,-m)
a5=a1.V$.e
a5.toString
r.a(a5).a=0
return}s=t.e
s.toString
r.a(s).a=m
if(a3.a==null)a3.a=t}if(w<1e-10)while(!0){s=a1.V$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
if(!(p>0))break
s=s.a
s.toString
t=a1.Bs(u,!0)
p=a1.V$
p.toString
m=s-a1.lT(p)
p=a1.V$.e
p.toString
r.a(p).a=0
if(m<-1e-10){a1.id=E.kU(a2,!1,a2,a2,0,0,0,0,-m)
return}}if(n==null){t.cm(u,!0)
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
a3.e=s+a1.lT(t)
l=new B.a5S(a3,a1,u)
for(k=0;a3.e<w;){++k
if(!l.$0()){a1.pm(k-1,0)
a5=a1.c_$
x=a5.e
x.toString
x=r.a(x).a
x.toString
j=x+a1.lT(a5)
a1.id=E.kU(a2,!1,a2,a2,j,0,0,j,a2)
return}}while(!0){if(!(a3.e<v)){i=!1
break}if(!l.$0()){i=!0
break}}s=a3.c
if(s!=null){s=s.e
s.toString
p=A.k(a1).j("ai.1")
s=a3.c=p.a(s).aa$
for(h=0;s!=null;s=g){++h
s=s.e
s.toString
g=p.a(s).aa$
a3.c=g}}else h=0
a1.pm(k,h)
f=a3.e
if(!i){s=a1.V$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
e=a1.c_$
e.toString
e=e.e
e.toString
e=r.a(e).b
e.toString
f=a5.LW(a4,p,e,s.a,f)}s=a1.V$.e
s.toString
s=r.a(s).a
s.toString
d=a1.hH(a4,s,a3.e)
s=a1.V$.e
s.toString
s=r.a(s).a
s.toString
a0=a1.mY(a4,s,a3.e)
s=a3.e
a1.id=E.kU(a0,s>x+a4.r||x>0,a2,a2,f,d,0,f,a2)
if(f===s)a5.rx=!0
a5.pG()}}
B.H9.prototype={
aE(d){var x=new B.JS(this.e,this.f,C.av,A.dC(d),null,A.au())
x.aD()
x.sb4(null)
return x},
aI(d,e){e.sj3(C.av)
e.sD9(this.e)
e.sBl(this.f)
e.sbz(A.dC(d))}}
B.rA.prototype={
Kx(d){return new B.L9(this.R8,null)}}
B.L9.prototype={
bx(d){return E.arr(this,!0)},
aE(d){var x=new B.K8(y.F.a(d),A.y(y.q,y.x),0,null,null,A.au())
x.aD()
return x}}
B.Kg.prototype={
P(d){return A.nO(new B.a6o(this,d),y.X)}}
B.rJ.prototype={
ah(){return new B.P7(C.k)},
ga7(d){return this.d}}
B.P7.prototype={
P(d){return A.nO(new B.ag5(this,d),y.X)}}
var z=a.updateTypes(["hE(R,c7,i?)","rA(R,bt<p<dw>>)"])
B.ajB.prototype={
$1(d){return d<=this.a},
$S:375}
B.aj1.prototype={
$1(d){var x=this,w=A.D(B.atm(x.a,x.b,d),B.atm(x.c,x.d,d),x.e)
w.toString
return w},
$S:376}
B.a1L.prototype={
$1(d){var x=A.D(null,d,this.a)
x.toString
return x},
$S:47}
B.a5S.prototype={
$0(){var x,w,v,u=this.a,t=u.c,s=u.a
if(t==s)u.b=!1
x=this.b
t=t.e
t.toString
w=u.c=A.k(x).j("ai.1").a(t).aa$
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
if(t){w=x.MP(v,s,!0)
u.c=w
if(w==null)return!1}else w.cm(v,!0)
t=u.a=u.c}else t=w
s=t.e
s.toString
y.D.a(s)
v=u.e
s.a=v
u.e=v+x.lT(t)
return!0},
$S:94}
B.a6o.prototype={
$3(d,e,f){var x=null,w=this.b,v=this.a.c,u=y.p
return F.amt(C.j,A.lC(A.arf(A.KC(w).L4(!1),A.mO(C.bi,A.a([new A.eK(H.c4,x,x,new A.hf(G.cF,new A.ec(G.dV,B.apZ(A.lC(F.Fq(A.a([F.mP(new B.a6l(w),"...",v.a,y.N),I.vY,D.Pl,I.vZ],u),C.cj),x,x),0.3,x),x),x),x),new A.eK(H.c4,x,x,new A.hf(G.cF,new A.ec(G.dV,F.mP(new B.a6m(w),D.G1,v.c,y.G),x),x),x),new A.eK(G.c3,x,x,F.mP(new B.a6n(),new A.dw("-",0,0,0,C.cN),v.e,y.E),x)],u),C.bA)),x,x),x)},
$C:"$3",
$R:3,
$S:z+0}
B.a6l.prototype={
$2(d,e){var x=null
return A.iy(e.gcp(),x,x,x,x,x,x,x,A.b2(this.a).RG.e,C.cy,x,x)},
$S:141}
B.a6m.prototype={
$2(d,e){var x=null,w=J.bm(e.gcp())+2,v=!0
v=v?I.wI:x
return new B.rA(new E.L5(new B.a6k(this.a,e),w,!0,!0,!0,x),x,C.aI,!1,x,x,v,!1,x,w,C.aL,I.vj,x,C.ad,x)},
$S:z+1}
B.a6k.prototype={
$2(d,e){var x,w,v=null
if(e===0)return A.mD(v,this.a.a6(y.w).f.a.b*0.33,v)
x=this.b
if(e===J.bm(x.gcp())+1)return A.mD(v,this.a.a6(y.w).f.a.b*0.3,v)
w=e-1
if(J.h(J.B(x.gcp(),w).a.split(" ")[0],"lAqSCG4rIV"))return A.mD(v,v,v)
return new A.ec(D.CY,new B.rJ(J.B(x.gcp(),w).e,J.B(x.gcp(),w).a,J.B(x.gcp(),w).b,J.B(x.gcp(),w).c,J.B(x.gcp(),w).d,v),v)},
$S:378}
B.a6n.prototype={
$2(d,e){var x=null
if(J.h(e.gcp().a.split(" ")[0],"lAqSCG4rIV")||J.h(e.gcp().a.split(" ")[0],"-"))return C.ba
return B.apZ(A.fL(x,new A.ec(D.D9,new A.eK(G.c3,x,x,new A.hf(G.cF,new B.rJ(e.gcp().e,e.gcp().a,e.gcp().b,e.gcp().c,e.gcp().d,x),x),x),x),C.w,x,x,D.xi,x,x,x,x,x,x,x),0.3,1)},
$S:379}
B.ag5.prototype={
$3(d,e,f){var x,w,v,u,t=null,s=A.hd(16),r=this.a,q=r.a,p=q.c,o=A.hd(16),n=F.als(C.E,2),m=this.b,l=y.p
q=E.lS(A.a6z(A.a([E.lS(F.vu("#"+q.e,1,C.wh,A.b2(m).RG.c,t,!0),2),D.vW,E.lS(F.vu(r.a.d,2,C.wh,A.b2(m).RG.c,t,!0),6)],l),C.cP,C.hq,C.cj),6)
x=E.lS(F.vu("+"+C.d.S(r.a.r,2),1,t,A.b2(m).RG.x,t,!0),1)
w=A.hd(12)
r=r.a
r.toString
v=A.hd(12)
u=F.als(C.E,2.1)
return A.fL(t,new A.eK(H.c4,t,t,A.fL(t,new A.ec(D.D7,A.a6z(A.a([q,E.lS(A.a6z(A.a([x,D.vW,E.lS(A.fL(t,new A.eK(H.c4,t,t,A.fL(t,A.lC(F.vu(C.d.S(r.f,2),1,t,A.b2(m).RG.x,t,!0),t,t),C.w,t,t,new A.et(C.Ai,t,u,v,t,t,C.aw),t,38,t,t,t,t,1/0),t),C.w,t,t,new A.et(C.E,t,t,w,t,t,C.aw),t,45,t,t,t,t,t),1)],l),C.cP,C.HY,C.es),4)],l),C.cP,C.HZ,C.es),t),C.w,t,t,new A.et(p,t,n,o,t,t,C.aw),t,85,t,t,t,t,t),t),C.w,t,t,new A.et(C.E,t,t,s,t,t,C.aw),t,90,t,t,t,t,t)},
$C:"$3",
$R:3,
$S:380};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[B.adx,B.a01])
x(A.bO,[B.ajB,B.aj1,B.a1L,B.a6o,B.ag5])
w(B.rz,B.a01)
w(B.JS,A.yY)
w(B.K8,E.mt)
w(B.a5S,A.kc)
w(B.H9,A.b1)
w(B.rA,E.vH)
w(B.L9,E.kX)
w(B.Kg,A.b9)
x(A.kd,[B.a6l,B.a6m,B.a6k,B.a6n])
w(B.rJ,A.a9)
w(B.P7,A.ad)})()
A.CZ(b.typeUniverse,JSON.parse('{"JS":{"G":[],"aT":["G"],"z":[],"I":[],"ak":[]},"K8":{"mt":[],"ck":[],"ai":["G","eg"],"z":[],"I":[],"ak":[],"ai.1":"eg","ai.0":"G"},"H9":{"b1":[],"aw":[],"i":[]},"rA":{"b9":[],"i":[]},"L9":{"kX":[],"aw":[],"i":[]},"Kg":{"b9":[],"i":[]},"rJ":{"a9":[],"i":[]},"P7":{"ad":["rJ"]}}'))
var y=(function rtii(){var x=A.X
return{k:x("aI"),s:x("o<j>"),p:x("o<i>"),G:x("p<dw>"),w:x("fX"),x:x("G"),S:x("jx"),F:x("pb"),D:x("eg"),N:x("j"),X:x("c7"),E:x("dw"),i:x("N"),q:x("n")}})();(function constants(){var x=a.makeConstList
D.Fe=A.a(x([C.o,C.a0]),A.X("o<q>"))
D.Er=new B.rz(G.c3,H.c4,C.aZ,D.Fe,null,null)
D.xi=new A.et(null,null,null,null,null,D.Er,C.aw)
D.CY=new A.aU(0,0,0,12)
D.D7=new A.aU(15,20,15,20)
D.D9=new A.aU(20,0,20,40)
D.G1=A.a(x([]),A.X("o<dw>"))
D.vW=new A.hH(15,null,null,null)
D.w_=new E.L6(0,0,0,0,0,0,!1,!1,null,0)
D.Pl=new F.n0("\u041b\u0438\u0434\u0435\u0440\u0431\u043e\u0440\u0434",null)})()}
$__dart_deferred_initializers__["BhFj069yZrR70IAxtMUMF1YtaMk="] = $__dart_deferred_initializers__.current
