self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
akt(d,e,f){var x,w,v,u,t
if(f<=C.b.gI(e))return C.b.gI(d)
if(f>=C.b.gR(e))return C.b.gR(d)
x=C.b.a3q(e,new B.ac9(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.B(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aup(d,e,f,g,h){var x,w,v=E.a3z(null,null,y.i)
v.L(0,e)
v.L(0,g)
x=A.av(v,!1,v.$ti.c)
w=A.ag(x).j("aM<1,V>")
return new B.a6k(A.av(new A.aM(x,new B.abE(d,e,f,g,h),w),!1,w.j("bf.E")),x)},
ahC(d,e,f){var x,w,v,u=d==null
if(u&&e==null)return null
if(u)return e.aw(0,f)
if(e==null)return d.aw(0,1-f)
x=B.aup(d.a,d.wp(),e.a,e.wp(),f)
u=A.rR(d.d,e.d,f)
u.toString
w=A.rR(d.e,e.e,f)
w.toString
v=f<0.5?d.f:e.f
return new B.po(u,w,v,x.a,x.b,null)},
a6k:function a6k(d,e){this.a=d
this.b=e},
ac9:function ac9(d){this.a=d},
abE:function abE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
V6:function V6(){},
po:function po(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
Wv:function Wv(d){this.a=d},
Fh:function Fh(d,e,f,g,h,i){var _=this
_.bM=d
_.bW=e
_.C=null
_.N=f
_.ag=g
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
Fy:function Fy(d,e,f,g,h,i){var _=this
_.b3=d
_.bF=e
_.F=$
_.E=!0
_.c5$=f
_.P$=g
_.bH$=h
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
a_b:function a_b(d,e,f){this.a=d
this.b=e
this.c=f},
ahn(d,e,f){return new B.CQ(f,e,d,null)},
CQ:function CQ(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
pp:function pp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Go:function Go(d,e){this.d=d
this.a=e},
arx(d){return new B.FF(d,null)},
FF:function FF(d,e){this.c=d
this.a=e},
a_H:function a_H(d,e){this.a=d
this.b=e},
a_E:function a_E(d){this.a=d},
a_F:function a_F(d){this.a=d},
a_D:function a_D(d,e){this.a=d
this.b=e},
a_G:function a_G(){},
py:function py(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Kb:function Kb(d){this.a=null
this.b=d
this.c=null},
a8N:function a8N(d,e){this.a=d
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
B.a6k.prototype={}
B.V6.prototype={
wp(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)A.W(A.bm(u,0,4294967295,"length",null))
w=J.jj(new Array(u),y.i)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.po.prototype={
a0B(d,e,f){var x=this,w=x.d.ah(f).LB(e),v=x.e.ah(f).LB(e),u=x.wp()
return A.adV(w,v,x.a,u,x.f,null)},
aw(d,e){var x=this,w=x.a,v=A.ag(w).j("aM<1,V>")
return new B.po(x.d,x.e,x.f,A.av(new A.aM(w,new B.Wv(e),v),!0,v.j("bf.E")),x.b,null)},
c_(d,e){var x=B.ahC(d,this,e)
return x},
c0(d,e){var x=B.ahC(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.U(e)!==A.C(x))return!1
return e instanceof B.po&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&A.cE(e.a,x.a)&&A.cE(e.b,x.b)},
gq(d){var x=this,w=A.d5(x.a),v=x.b
v=v==null?null:A.d5(v)
return A.S(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x=this,w=A.a(["begin: "+x.d.i(0),"end: "+x.e.i(0),"colors: "+A.h(x.a)],y.s),v=x.b
if(v!=null)w.push("stops: "+A.h(v))
w.push("tileMode: "+x.f.i(0))
return"LinearGradient("+C.b.bb(w,", ")+")"}}
B.Fh.prototype={
sAY(d){if(this.bM==d)return
this.bM=d
this.a0()},
szb(d){if(this.bW===d)return
this.bW=d
this.a0()},
qd(d){var x,w,v=d.a,u=d.b,t=this.bM
if(t!=null){x=u*t
u=x
v=u}w=d.d*this.bW
return new A.aB(v,u,w,w)},
c9(d){var x=this.F$
if(x!=null)return d.bv(x.i1(this.qd(d)))
return d.bv(this.qd(d).bv(C.n))},
bC(){var x=this,w=x.F$,v=y.k
if(w!=null){w.c7(x.qd(v.a(A.w.prototype.gT.call(x))),!0)
w=v.a(A.w.prototype.gT.call(x))
v=x.F$.k3
v.toString
x.k3=w.bv(v)
x.xI()}else x.k3=v.a(A.w.prototype.gT.call(x)).bv(x.qd(v.a(A.w.prototype.gT.call(x))).bv(C.n))}}
B.Fy.prototype={
bC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3={},a4=y.S.a(A.w.prototype.gT.call(a1)),a5=a1.b3
a5.rx=!1
x=a4.d
w=x+a4.z
v=w+a4.Q
u=a4.a_d()
if(a1.P$==null)if(!a1.Hp()){a1.id=D.uZ
a5.oa()
return}a3.a=null
t=a1.P$
s=t.e
s.toString
r=y.D
if(r.a(s).a==null){s=A.k(a1).j("a3.1")
q=0
while(!0){if(t!=null){p=t.e
p.toString
p=r.a(p).a==null}else p=!1
if(!p)break
p=t.e
p.toString
t=s.a(p).a4$;++q}a1.nU(q,0)
if(a1.P$==null)if(!a1.Hp()){a1.id=D.uZ
a5.oa()
return}}t=a1.P$
s=t.e
s.toString
s=r.a(s).a
s.toString
o=s
n=a2
for(;o>w;o=m,n=t){t=a1.zh(u,!0)
if(t==null){s=a1.P$
p=s.e
p.toString
r.a(p).a=0
if(w===0){s.c7(u,!0)
t=a1.P$
if(a3.a==null)a3.a=t
n=t
break}else{a1.id=E.jC(a2,!1,a2,a2,0,0,0,0,-w)
return}}s=a1.P$
s.toString
m=o-a1.kT(s)
if(m<-1e-10){a1.id=E.jC(a2,!1,a2,a2,0,0,0,0,-m)
a5=a1.P$.e
a5.toString
r.a(a5).a=0
return}s=t.e
s.toString
r.a(s).a=m
if(a3.a==null)a3.a=t}if(w<1e-10)while(!0){s=a1.P$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
if(!(p>0))break
s=s.a
s.toString
t=a1.zh(u,!0)
p=a1.P$
p.toString
m=s-a1.kT(p)
p=a1.P$.e
p.toString
r.a(p).a=0
if(m<-1e-10){a1.id=E.jC(a2,!1,a2,a2,0,0,0,0,-m)
return}}if(n==null){t.c7(u,!0)
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
a3.e=s+a1.kT(t)
l=new B.a_b(a3,a1,u)
for(k=0;a3.e<w;){++k
if(!l.$0()){a1.nU(k-1,0)
a5=a1.bH$
x=a5.e
x.toString
x=r.a(x).a
x.toString
j=x+a1.kT(a5)
a1.id=E.jC(a2,!1,a2,a2,j,0,0,j,a2)
return}}while(!0){if(!(a3.e<v)){i=!1
break}if(!l.$0()){i=!0
break}}s=a3.c
if(s!=null){s=s.e
s.toString
p=A.k(a1).j("a3.1")
s=a3.c=p.a(s).a4$
for(h=0;s!=null;s=g){++h
s=s.e
s.toString
g=p.a(s).a4$
a3.c=g}}else h=0
a1.nU(k,h)
f=a3.e
if(!i){s=a1.P$
s.toString
s=s.e
s.toString
r.a(s)
p=s.b
p.toString
e=a1.bH$
e.toString
e=e.e
e.toString
e=r.a(e).b
e.toString
f=a5.IY(a4,p,e,s.a,f)}s=a1.P$.e
s.toString
s=r.a(s).a
s.toString
d=a1.h_(a4,s,a3.e)
s=a1.P$.e
s.toString
s=r.a(s).a
s.toString
a0=a1.lU(a4,s,a3.e)
s=a3.e
a1.id=E.jC(a0,s>x+a4.r||x>0,a2,a2,f,d,0,f,a2)
if(f===s)a5.rx=!0
a5.oa()}}
B.CQ.prototype={
aD(d){var x=new B.Fh(this.e,this.f,C.ax,A.dT(d),null,A.as())
x.aB()
x.sb0(null)
return x},
aG(d,e){e.skk(C.ax)
e.sAY(this.e)
e.szb(this.f)
e.sbD(A.dT(d))}}
B.pp.prototype={
HM(d){return new B.Go(this.R8,null)}}
B.Go.prototype={
bn(d){return E.aiK(this,!0)},
aD(d){var x=new B.Fy(y.F.a(d),A.y(y.q,y.x),0,null,null,A.as())
x.aB()
return x}}
B.FF.prototype={
M(d){return A.m1(new B.a_H(this,d),y.X)}}
B.py.prototype={
ae(){return new B.Kb(C.k)},
gac(d){return this.d}}
B.Kb.prototype={
M(d){return A.m1(new B.a8N(this,d),y.X)}}
var z=a.updateTypes(["fL(L,bM,i?)","pp(L,bd<A<cW>>)"])
B.ac9.prototype={
$1(d){return d<=this.a},
$S:345}
B.abE.prototype={
$1(d){var x=this,w=A.B(B.akt(x.a,x.b,d),B.akt(x.c,x.d,d),x.e)
w.toString
return w},
$S:346}
B.Wv.prototype={
$1(d){var x=A.B(null,d,this.a)
x.toString
return x},
$S:42}
B.a_b.prototype={
$0(){var x,w,v,u=this.a,t=u.c,s=u.a
if(t==s)u.b=!1
x=this.b
t=t.e
t.toString
w=u.c=A.k(x).j("a3.1").a(t).a4$
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
if(t){w=x.JO(v,s,!0)
u.c=w
if(w==null)return!1}else w.c7(v,!0)
t=u.a=u.c}else t=w
s=t.e
s.toString
y.D.a(s)
v=u.e
s.a=v
u.e=v+x.kT(t)
return!0},
$S:109}
B.a_H.prototype={
$3(d,e,f){var x=null,w=this.b,v=this.a.c,u=y.p
return F.aer(C.aV,A.kf(A.aiz(A.FZ(w).Ib(!1),A.lc(C.b9,A.a([new A.ey(H.bR,x,x,new A.fm(G.cq,new A.dX(G.dC,B.ahn(A.kf(F.Bl(A.a([F.ld(new B.a_E(w),"...",v.a,y.N),I.uX,D.J1,I.uY],u),C.c4),x,x),0.3,x),x),x),x),new A.ey(H.bR,x,x,new A.fm(G.cq,new A.dX(G.dC,F.ld(new B.a_F(w),D.Az,v.c,y.G),x),x),x),new A.ey(G.co,x,x,F.ld(new B.a_G(),new A.cW("-",0,0,0,C.cx),v.e,y.E),x)],u),C.bp)),x,x),x)},
$C:"$3",
$R:3,
$S:z+0}
B.a_E.prototype={
$2(d,e){var x=null
return A.ht(e.gc1(),x,x,x,x,x,x,x,A.aP(this.a).RG.e,C.cj,x,x)},
$S:98}
B.a_F.prototype={
$2(d,e){var x=null,w=J.b2(e.gc1())+2,v=!0
v=v?I.vA:x
return new B.pp(new E.Gk(new B.a_D(this.a,e),w,!0,!0,!0,x),x,C.aA,!1,x,x,v,!1,x,w,C.aC,I.ui,x,C.aK,x)},
$S:z+1}
B.a_D.prototype={
$2(d,e){var x,w,v=null
if(e===0)return A.nl(v,this.a.a3(y.w).f.a.b*0.33,v)
x=this.b
if(e===J.b2(x.gc1())+1)return A.nl(v,this.a.a3(y.w).f.a.b*0.3,v)
w=e-1
if(J.f(J.z(x.gc1(),w).a.split(" ")[0],"lAqSCG4rIV"))return A.nl(v,v,v)
return new A.dX(D.xY,new B.py(J.z(x.gc1(),w).e,J.z(x.gc1(),w).a,J.z(x.gc1(),w).b,J.z(x.gc1(),w).c,J.z(x.gc1(),w).d,v),v)},
$S:348}
B.a_G.prototype={
$2(d,e){var x=null
if(J.f(e.gc1().a.split(" ")[0],"lAqSCG4rIV")||J.f(e.gc1().a.split(" ")[0],"-"))return C.b2
return B.ahn(A.eX(x,new A.dX(D.y8,new A.ey(G.co,x,x,new A.fm(G.cq,new B.py(e.gc1().e,e.gc1().a,e.gc1().b,e.gc1().c,e.gc1().d,x),x),x),x),C.u,x,x,D.vY,x,x,x,x,x,x,x),0.3,1)},
$S:349}
B.a8N.prototype={
$3(d,e,f){var x,w,v,u,t=null,s=A.fk(16),r=this.a,q=r.a,p=q.c,o=A.fk(16),n=F.adv(C.h,2),m=this.b,l=y.p
q=E.kr(A.a_S(A.a([E.kr(F.t4("#"+q.e,1,C.va,A.aP(m).RG.c,t,!0),2),D.uV,E.kr(F.t4(r.a.d,2,C.va,A.aP(m).RG.c,t,!0),6)],l),C.cz,C.h0,C.c4),6)
x=E.kr(F.t4("+"+C.d.O(r.a.r,2),1,t,A.aP(m).RG.x,t,!0),1)
w=A.fk(12)
r=r.a
r.toString
v=A.fk(12)
u=F.adv(C.aV,2.1)
return A.eX(t,new A.ey(H.bR,t,t,A.eX(t,new A.dX(D.y6,A.a_S(A.a([q,E.kr(A.a_S(A.a([x,D.uV,E.kr(A.eX(t,new A.ey(H.bR,t,t,A.eX(t,A.kf(F.t4(C.d.O(r.f,2),1,t,A.aP(m).RG.x,t,!0),t,t),C.u,t,t,new A.dS(C.ls,t,u,v,t,t,C.an),t,38,t,t,t,t,1/0),t),C.u,t,t,new A.dS(C.aV,t,t,w,t,t,C.an),t,45,t,t,t,t,t),1)],l),C.cz,C.Ct,C.ea),4)],l),C.cz,C.Cu,C.ea),t),C.u,t,t,new A.dS(p,t,n,o,t,t,C.an),t,85,t,t,t,t,t),t),C.u,t,t,new A.dS(C.h,t,t,s,t,t,C.an),t,90,t,t,t,t,t)},
$C:"$3",
$R:3,
$S:350};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.H,[B.a6k,B.V6])
x(A.by,[B.ac9,B.abE,B.Wv,B.a_H,B.a8N])
w(B.po,B.V6)
w(B.Fh,A.w0)
w(B.Fy,E.l0)
w(B.a_b,A.j1)
w(B.CQ,A.aV)
w(B.pp,E.ti)
w(B.Go,E.jF)
w(B.FF,A.aY)
x(A.j2,[B.a_E,B.a_F,B.a_D,B.a_G])
w(B.py,A.X)
w(B.Kb,A.a1)})()
A.zF(b.typeUniverse,JSON.parse('{"Fh":{"D":[],"aK":["D"],"w":[],"F":[],"a6":[]},"Fy":{"l0":[],"bT":[],"a3":["D","dF"],"w":[],"F":[],"a6":[],"a3.1":"dF","a3.0":"D"},"CQ":{"aV":[],"ak":[],"i":[]},"pp":{"aY":[],"i":[]},"Go":{"jF":[],"ak":[],"i":[]},"FF":{"aY":[],"i":[]},"py":{"X":[],"i":[]},"Kb":{"a1":["py"]}}'))
var y=(function rtii(){var x=A.a5
return{k:x("aB"),s:x("r<v>"),p:x("r<i>"),G:x("A<cW>"),w:x("f4"),x:x("D"),S:x("is"),F:x("nm"),D:x("dF"),N:x("v"),X:x("bM"),E:x("cW"),i:x("O"),q:x("m")}})();(function constants(){var x=a.makeConstList
D.zZ=A.a(x([C.o,C.a9]),A.a5("r<V>"))
D.zi=new B.po(G.co,H.bR,C.de,D.zZ,null,null)
D.vY=new A.dS(null,null,null,null,null,D.zi,C.an)
D.xY=new A.aJ(0,0,0,12)
D.y6=new A.aJ(15,20,15,20)
D.y8=new A.aJ(20,0,20,40)
D.Az=A.a(x([]),A.a5("r<cW>"))
D.uV=new A.fO(15,null,null,null)
D.uZ=new E.Gl(0,0,0,0,0,0,!1,!1,null,0)
D.J1=new F.lm("\u041b\u0438\u0434\u0435\u0440\u0431\u043e\u0440\u0434",null)})()}
$__dart_deferred_initializers__["AiIQQu9R/j79RNUmhuCWdqqCwY8="] = $__dart_deferred_initializers__.current
