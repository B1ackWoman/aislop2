(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const lr=i=>i===1?-1:1,cc=(i,e)=>i===0?e:1-e;function ef(i,e){const t=lr(e);return{...i,x:i.x*t,z:i.z*t}}const bl="180",tf=0,hc=1,nf=2,Uh=1,Nh=2,Kn=3,bi=0,an=1,dn=2,Mi=0,ys=1,uc=2,fc=3,dc=4,sf=5,Ui=100,rf=101,af=102,of=103,lf=104,cf=200,hf=201,uf=202,ff=203,Eo=204,wo=205,df=206,pf=207,mf=208,gf=209,_f=210,xf=211,vf=212,Mf=213,yf=214,To=0,Ao=1,Ro=2,Ts=3,Co=4,Po=5,Lo=6,Io=7,Fh=0,Sf=1,bf=2,yi=0,Ef=1,wf=2,Tf=3,ba=4,Af=5,Rf=6,Cf=7,Oh=300,As=301,Rs=302,Do=303,Uo=304,Ea=306,No=1e3,Fi=1001,Fo=1002,pn=1003,Pf=1004,Cr=1005,Un=1006,Fa=1007,Oi=1008,kn=1009,zh=1010,kh=1011,cr=1012,El=1013,Gi=1014,Nn=1015,vr=1016,wl=1017,Tl=1018,hr=1020,Bh=35902,Vh=35899,Hh=1021,Gh=1022,Rn=1023,ur=1026,fr=1027,Al=1028,Rl=1029,Wh=1030,Cl=1031,Pl=1033,ra=33776,aa=33777,oa=33778,la=33779,Oo=35840,zo=35841,ko=35842,Bo=35843,Vo=36196,Ho=37492,Go=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,$o=37812,jo=37813,Zo=37814,Jo=37815,Ko=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,ll=36284,cl=36285,hl=36286,Lf=3200,If=3201,Ll=0,Df=1,gi="",un="srgb",Cs="srgb-linear",da="linear",Mt="srgb",ts=7680,pc=519,Uf=512,Nf=513,Ff=514,Xh=515,Of=516,zf=517,kf=518,Bf=519,mc=35044,Vf=35048,gc="300 es",Fn=2e3,pa=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,ul=180/Math.PI;function zs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Hf(i,e){return(i%e+e)%e}function za(i,e,t){return(1-t)*i+t*e}function Gs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==f||u!==_){let m=1-o;const p=c*d+l*f+u*_+h*g,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,p*x);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const v=o*x;if(c=c*m+d*v,l=l*m+f*v,u=u*m+_*v,h=h*m+g*v,m===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*f-l*d,e[t+1]=c*_+u*d+l*h-o*f,e[t+2]=l*_+u*f+o*d-c*h,e[t+3]=u*_-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new L,_c=new Mr;class Je{constructor(e,t,n,s,r,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],x=s[1],M=s[4],v=s[7],T=s[2],w=s[5],R=s[8];return r[0]=a*g+o*x+c*T,r[3]=a*m+o*M+c*w,r[6]=a*p+o*v+c*R,r[1]=l*g+u*x+h*T,r[4]=l*m+u*M+h*w,r[7]=l*p+u*v+h*R,r[2]=d*g+f*x+_*T,r[5]=d*m+f*M+_*w,r[8]=d*p+f*v+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,_=t*h+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*l-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Je;function qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){const i=ma("canvas");return i.style.display="block",i}const xc={};function dr(i){i in xc||(xc[i]=!0,console.warn(i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const vc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){const i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cs]:{primaries:e,whitePoint:n,transfer:da,toXYZ:vc,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:vc,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const mt=Xf();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=ma("canvas")),ns.width=e.width,ns.height=e.height;const s=ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yf=0;class Il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Va(s[a].image)):r.push(Va(s[a]))}else r=Va(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $f=0;const Ha=new L;class tn extends Os{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Fi,s=Fi,r=Un,a=Oi,o=Rn,c=kn,l=tn.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=zs(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Oh;tn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,v=(f+1)/2,T=(p+1)/2,w=(u+d)/4,R=(h+g)/4,C=(_+m)/4;return M>v&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=C/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jf extends Os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new tn(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Il(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends jf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yh extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zf extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Lr.subVectors(this.max,Ws),is.subVectors(e.a,Ws),ss.subVectors(e.b,Ws),rs.subVectors(e.c,Ws),oi.subVectors(ss,is),li.subVectors(rs,ss),Ai.subVectors(is,rs);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!Ga(t,is,ss,rs,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,is,ss,rs,Lr))?!1:(Ir.crossVectors(oi,li),t=[Ir.x,Ir.y,Ir.z],Ga(t,is,ss,rs,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,Pr=new Ji,is=new L,ss=new L,rs=new L,oi=new L,li=new L,Ai=new L,Ws=new L,Lr=new L,Ir=new L,Ri=new L;function Ga(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Jf=new Ji,Xs=new L,Wa=new L;class yr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Wa)),this.expandByPoint(Xs.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new L,Xa=new L,Dr=new L,ci=new L,qa=new L,Ur=new L,Ya=new L;class $h{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xa.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Xa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=ci.dot(this.direction),c=-ci.dot(Dr),l=ci.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*c-o,d=a*o-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xa).addScaledVector(Dr,d),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){qa.subVectors(t,e),Ur.subVectors(n,e),Ya.crossVectors(qa,Ur);let a=this.direction.dot(Ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const c=o*this.direction.dot(Ur.crossVectors(ci,Ur));if(c<0)return null;const l=o*this.direction.dot(qa.cross(ci));if(l<0||c+l>a)return null;const u=-o*ci.dot(Ya);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,_,g,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,_,g,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+_*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=_*l-f,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*c,f=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kf,e,Qf)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(n,cn),hi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(n,cn)),hi.normalize(),Nr.crossVectors(cn,hi),s[0]=hi.x,s[4]=Nr.x,s[8]=cn.x,s[1]=hi.y,s[5]=Nr.y,s[9]=cn.y,s[2]=hi.z,s[6]=Nr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],T=n[15],w=s[0],R=s[4],C=s[8],S=s[12],y=s[1],P=s[5],D=s[9],U=s[13],N=s[2],F=s[6],B=s[10],X=s[14],H=s[3],ce=s[7],de=s[11],Se=s[15];return r[0]=a*w+o*y+c*N+l*H,r[4]=a*R+o*P+c*F+l*ce,r[8]=a*C+o*D+c*B+l*de,r[12]=a*S+o*U+c*X+l*Se,r[1]=u*w+h*y+d*N+f*H,r[5]=u*R+h*P+d*F+f*ce,r[9]=u*C+h*D+d*B+f*de,r[13]=u*S+h*U+d*X+f*Se,r[2]=_*w+g*y+m*N+p*H,r[6]=_*R+g*P+m*F+p*ce,r[10]=_*C+g*D+m*B+p*de,r[14]=_*S+g*U+m*X+p*Se,r[3]=x*w+M*y+v*N+T*H,r[7]=x*R+M*P+v*F+T*ce,r[11]=x*C+M*D+v*B+T*de,r[15]=x*S+M*U+v*X+T*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=h*m*l-g*d*l+g*c*f-o*m*f-h*c*p+o*d*p,M=_*d*l-u*m*l-_*c*f+a*m*f+u*c*p-a*d*p,v=u*g*l-_*h*l+_*o*f-a*g*f-u*o*p+a*h*p,T=_*h*c-u*g*c-_*o*d+a*g*d+u*o*m-a*h*m,w=t*x+n*M+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=x*R,e[1]=(g*d*r-h*m*r-g*s*f+n*m*f+h*s*p-n*d*p)*R,e[2]=(o*m*r-g*c*r+g*s*l-n*m*l-o*s*p+n*c*p)*R,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*R,e[4]=M*R,e[5]=(u*m*r-_*d*r+_*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(_*c*r-a*m*r-_*s*l+t*m*l+a*s*p-t*c*p)*R,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*R,e[8]=v*R,e[9]=(_*h*r-u*g*r-_*n*f+t*g*f+u*n*p-t*h*p)*R,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*R,e[12]=T*R,e[13]=(u*g*s-_*h*s+_*n*d-t*g*d-u*n*m+t*h*m)*R,e[14]=(_*o*s-a*g*s-_*n*c+t*g*c+a*n*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,_=r*h,g=a*u,m=a*h,p=o*h,x=c*l,M=c*u,v=c*h,T=n.x,w=n.y,R=n.z;return s[0]=(1-(g+p))*T,s[1]=(f+v)*T,s[2]=(_-M)*T,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(_+M)*R,s[9]=(m-x)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=as.set(s[0],s[1],s[2]).length();const a=as.set(s[4],s[5],s[6]).length(),o=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const l=1/r,u=1/a,h=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Fn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let _,g;if(c)_=r/(a-r),g=a*r/(a-r);else if(o===Fn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===pa)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let _,g;if(c)_=1/(a-r),g=a/(a-r);else if(o===Fn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===pa)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new L,Sn=new Et,Kf=new L(0,0,0),Qf=new L(1,1,1),hi=new L,Nr=new L,cn=new L,yc=new Et,Sc=new Mr;class Bn{constructor(e=0,t=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ed=0;const bc=new L,os=new Mr,$n=new Et,Fr=new L,qs=new L,td=new L,nd=new Mr,Ec=new L(1,0,0),wc=new L(0,1,0),Tc=new L(0,0,1),Ac={type:"added"},id={type:"removed"},ls={type:"childadded",child:null},$a={type:"childremoved",child:null};class zt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new L,t=new Bn,n=new Mr,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return bc.copy(e).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(qs,Fr,this.up):$n.lookAt(Fr,qs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),os.setFromRotationMatrix($n),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ac),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(id),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ac),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}zt.DEFAULT_UP=new L(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new L,jn=new L,ja=new L,Zn=new L,cs=new L,hs=new L,Rc=new L,Za=new L,Ja=new L,Ka=new L,Qa=new It,eo=new It,to=new It;class An{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),jn.subVectors(n,t),ja.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(jn),c=bn.dot(ja),l=jn.dot(jn),u=jn.dot(ja),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,_=(a*u-o*c)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Qa.setScalar(0),eo.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(e,t),eo.fromBufferAttribute(e,n),to.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qa,r.x),a.addScaledVector(eo,r.y),a.addScaledVector(to,r.z),a}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),jn.subVectors(e,t),bn.cross(jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),bn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;cs.subVectors(s,n),hs.subVectors(r,n),Za.subVectors(e,n);const c=cs.dot(Za),l=hs.dot(Za);if(c<=0&&l<=0)return t.copy(n);Ja.subVectors(e,s);const u=cs.dot(Ja),h=hs.dot(Ja);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(cs,a);Ka.subVectors(e,r);const f=cs.dot(Ka),_=hs.dot(Ka);if(_>=0&&f<=_)return t.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(hs,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return Rc.subVectors(r,s),o=(h-u)/(h-u+(f-_)),t.copy(s).addScaledVector(Rc,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Or={h:0,s:0,l:0};function no(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=Hf(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=no(a,r,e+1/3),this.g=no(a,r,e),this.b=no(a,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return mt.workingToColorSpace(Yt.copy(this),e),Math.round(at(Yt.r*255,0,255))*65536+Math.round(at(Yt.g*255,0,255))*256+Math.round(at(Yt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=un){mt.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Or);const n=za(ui.h,Or.h,t),s=za(ui.s,Or.s,t),r=za(ui.l,Or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new st;st.NAMES=jh;let sd=0;class ks extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ys,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=wo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new L,zr=new fe;let rd=0;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}}class Zh extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ad=0;const _n=new Et,io=new zt,us=new L,hn=new Ji,Ys=new Ji,Ht=new L;class Vt extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Jh:Zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(hn.min,Ys.min),hn.expandByPoint(Ht),Ht.addVectors(hn.max,Ys.max),hn.expandByPoint(Ht)):(hn.expandByPoint(Ys.min),hn.expandByPoint(Ys.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ht.fromBufferAttribute(o,l),c&&(us.fromBufferAttribute(e,l),Ht.add(us)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,u=new L,h=new L,d=new fe,f=new fe,_=new fe,g=new L,m=new L;function p(C,S,y){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),_.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(g),o[S].add(g),o[y].add(g),c[C].add(m),c[S].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,S=x.length;C<S;++C){const y=x[C],P=y.start,D=y.count;for(let U=P,N=P+D;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new L,v=new L,T=new L,w=new L;function R(C){T.fromBufferAttribute(s,C),w.copy(T);const S=o[C];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,S=x.length;C<S;++C){const y=x[C],P=y.start,D=y.count;for(let U=P,N=P+D;U<N;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*u;for(let p=0;p<u;p++)d[_++]=l[f++]}return new vn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new Et,Ci=new $h,kr=new yr,Pc=new L,Br=new L,Vr=new L,Hr=new L,so=new L,Gr=new L,Lc=new L,Wr=new L;class Ot extends zt{constructor(e=new Vt,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(so.fromBufferAttribute(h,e),a?Gr.addScaledVector(so,u):Gr.addScaledVector(so.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(kr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(kr,Pc)===null||Ci.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Cc.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=M;v<T;v+=3){const w=o.getX(v),R=o.getX(v+1),C=o.getX(v+2);s=Xr(this,p,e,n,l,u,h,w,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Xr(this,a,e,n,l,u,h,x,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=M;v<T;v+=3){const w=v,R=v+1,C=v+2;s=Xr(this,p,e,n,l,u,h,w,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=m,M=m+1,v=m+2;s=Xr(this,a,e,n,l,u,h,x,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function od(i,e,t,n,s,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===bi,o),c===null)return null;Wr.copy(o),Wr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Wr);return l<t.near||l>t.far?null:{distance:l,point:Wr.clone(),object:i}}function Xr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Br),i.getVertexPosition(c,Vr),i.getVertexPosition(l,Hr);const u=od(i,e,t,n,Br,Vr,Hr,Lc);if(u){const h=new L;An.getBarycoord(Lc,Br,Vr,Hr,h),s&&(u.uv=An.getInterpolatedAttribute(s,o,c,l,h,new fe)),r&&(u.uv1=An.getInterpolatedAttribute(r,o,c,l,h,new fe)),a&&(u.normal=An.getInterpolatedAttribute(a,o,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};An.getNormal(Br,Vr,Hr,d.normal),u.face=d,u.barycoord=h}return u}class Ie extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function _(g,m,p,x,M,v,T,w,R,C,S){const y=v/R,P=T/C,D=v/2,U=T/2,N=w/2,F=R+1,B=C+1;let X=0,H=0;const ce=new L;for(let de=0;de<B;de++){const Se=de*P-U;for(let Ge=0;Ge<F;Ge++){const Fe=Ge*y-D;ce[g]=Fe*x,ce[m]=Se*M,ce[p]=N,l.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[p]=w>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Ge/R),h.push(1-de/C),X+=1}}for(let de=0;de<C;de++)for(let Se=0;Se<R;Se++){const Ge=d+Se+F*de,Fe=d+Se+F*(de+1),Ue=d+(Se+1)+F*(de+1),Be=d+(Se+1)+F*de;c.push(Ge,Fe,Be),c.push(Fe,Ue,Be),H+=6}o.addGroup(f,H,S),f+=H,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=Ps(i[t]);for(const s in n)e[s]=n[s]}return e}function ld(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const cd={clone:Ps,merge:Kt};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qh extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,Ic=new fe,Dc=new fe;class fn extends Qh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ic,Dc),t.subVectors(Dc,Ic)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ds=1;class fd extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(fs,ds,e,t);s.layers=this.layers,this.add(s);const r=new fn(fs,ds,e,t);r.layers=this.layers,this.add(r);const a=new fn(fs,ds,e,t);a.layers=this.layers,this.add(a);const o=new fn(fs,ds,e,t);o.layers=this.layers,this.add(o);const c=new fn(fs,ds,e,t);c.layers=this.layers,this.add(c);const l=new fn(fs,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class eu extends tn{constructor(e=[],t=As,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dd extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new eu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ie(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Mi});r.uniforms.tEquirect.value=t;const a=new Ot(s,r),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Un),new fd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class nt extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ul{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=n}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nl extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class md extends tn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=pn,u=pn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Et,Nc=new Et,qr=[],Fc=new Ji,gd=new Et,$s=new Ot,js=new yr;class _d extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Fc.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Fc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),js.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),Nc.multiplyMatrices(n,ps),$s.matrixWorld=Nc,$s.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){const c=qr[a];c.instanceId=r,c.object=this,t.push(c)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(s*this.count),s,this.count,Al,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ao=new L,xd=new L,vd=new Je;class pi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ao.subVectors(n,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vd.getNormalMatrix(e),s=this.coplanarPoint(ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new yr,Md=new fe(.5,.5),Yr=new L;class Fl{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],g=r[9],m=r[10],p=r[11],x=r[12],M=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-a,f-u,p-_,T-x).normalize(),s[1].setComponents(l+a,f+u,p+_,T+x).normalize(),s[2].setComponents(l+o,f+h,p+g,T+M).normalize(),s[3].setComponents(l-o,f-h,p-g,T-M).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,T-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,T-v).normalize(),t===Fn)s[5].setComponents(l+c,f+d,p+m,T+v).normalize();else if(t===pa)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Md.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends tn{constructor(e,t,n=Gi,s,r,a,o=pn,c=pn,l,u=ur,h=1){if(u!==ur&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ls extends Vt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,_=n*2+r,g=s+1,m=new L,p=new L;for(let x=0;x<=_;x++){let M=0,v=0,T=0,w=0;if(x<=n){const S=x/n,y=S*Math.PI/2;v=-u-e*Math.cos(y),T=e*Math.sin(y),w=-e*Math.cos(y),M=S*h}else if(x<=n+r){const S=(x-n)/r;v=-u+S*t,T=e,w=0,M=h+S*d}else{const S=(x-n-r)/n,y=S*Math.PI/2;v=u+e*Math.sin(y),T=e*Math.cos(y),w=e*Math.sin(y),M=h+d+S*h}const R=Math.max(0,Math.min(1,M/f));let C=0;x===0?C=.5/s:x===_&&(C=-.5/s);for(let S=0;S<=s;S++){const y=S/s,P=y*Math.PI*2,D=Math.sin(P),U=Math.cos(P);p.x=-T*U,p.y=v,p.z=T*D,o.push(p.x,p.y,p.z),m.set(-T*U,w,T*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+C,R)}if(x>0){const S=(x-1)*g;for(let y=0;y<s;y++){const P=S+y,D=S+y+1,U=x*g+y,N=x*g+y+1;a.push(P,D,U),a.push(D,N,U)}}}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ol extends Vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new L,u=new fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class dt extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function x(){const v=new L,T=new L;let w=0;const R=(t-e)/n;for(let C=0;C<=r;C++){const S=[],y=C/r,P=y*(t-e)+e;for(let D=0;D<=s;D++){const U=D/s,N=U*c+o,F=Math.sin(N),B=Math.cos(N);T.x=P*F,T.y=-y*n+m,T.z=P*B,h.push(T.x,T.y,T.z),v.set(F,R,B).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-y),S.push(_++)}g.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const y=g[S][C],P=g[S+1][C],D=g[S+1][C+1],U=g[S][C+1];(e>0||S!==0)&&(u.push(y,P,U),w+=3),(t>0||S!==r-1)&&(u.push(P,D,U),w+=3)}l.addGroup(p,w,0),p+=w}function M(v){const T=_,w=new fe,R=new L;let C=0;const S=v===!0?e:t,y=v===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),_++;const P=_;for(let D=0;D<=s;D++){const N=D/s*c+o,F=Math.cos(N),B=Math.sin(N);R.x=S*B,R.y=m*y,R.z=S*F,h.push(R.x,R.y,R.z),d.push(0,y,0),w.x=F*.5+.5,w.y=B*.5*y+.5,f.push(w.x,w.y),_++}for(let D=0;D<s;D++){const U=T+D,N=P+D;v===!0?u.push(N,N+1,U):u.push(N+1,N,U),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tn extends dt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Tn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sr extends Vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new L,v=new L,T=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],v),f(t[w+2],T),c(M,v,T,x)}function c(x,M,v,T){const w=T+1,R=[];for(let C=0;C<=w;C++){R[C]=[];const S=x.clone().lerp(v,C/w),y=M.clone().lerp(v,C/w),P=w-C;for(let D=0;D<=P;D++)D===0&&C===w?R[C][D]=S:R[C][D]=S.clone().lerp(y,D/P)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const y=Math.floor(S/2);S%2===0?(d(R[C][y+1]),d(R[C+1][y]),d(R[C][y])):(d(R[C][y+1]),d(R[C+1][y+1]),d(R[C+1][y]))}}function l(x){const M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){const x=new L;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;a.push(v,1-T)}_(),h()}function h(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],T=a[x+4],w=Math.max(M,v,T),R=Math.min(M,v,T);w>.9&&R<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function _(){const x=new L,M=new L,v=new L,T=new L,w=new fe,R=new fe,C=new fe;for(let S=0,y=0;S<r.length;S+=9,y+=6){x.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),T.copy(x).add(M).add(v).divideScalar(3);const P=m(T);g(w,y+0,x,P),g(R,y+2,M,P),g(C,y+4,v,P)}}function g(x,M,v,T){T<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.vertices,e.indices,e.radius,e.details)}}class zl extends Sr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zl(e.radius,e.detail)}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],a=[],o=new L,c=new Et;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yd extends kl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const $r=new L,oo=new Bl,lo=new Bl,co=new Bl;class wa extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:($r.subVectors(s[0],s[1]).add(s[0]),l=$r);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:($r.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),oo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,_,g,m),lo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,_,g,m),co.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),lo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),co.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(oo.calc(c),lo.calc(c),co.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Sd(i,e){const t=1-i;return t*t*e}function bd(i,e){return 2*(1-i)*i*e}function Ed(i,e){return i*i*e}function tr(i,e,t,n){return Sd(i,e)+bd(i,t)+Ed(i,n)}function wd(i,e){const t=1-i;return t*t*t*e}function Td(i,e){const t=1-i;return 3*t*t*i*e}function Ad(i,e){return 3*(1-i)*i*i*e}function Rd(i,e){return i*i*i*e}function nr(i,e,t,n,s){return wd(i,e)+Td(i,t)+Ad(i,n)+Rd(i,s)}class iu extends Gn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(e,s.x,r.x,a.x,o.x),nr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cd extends Gn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(e,s.x,r.x,a.x,o.x),nr(e,s.y,r.y,a.y,o.y),nr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class su extends Gn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends Gn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ru extends Gn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(e,s.x,r.x,a.x),tr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class au extends Gn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(e,s.x,r.x,a.x),tr(e,s.y,r.y,a.y),tr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ou extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Oc(o,c.x,l.x,u.x,h.x),Oc(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var ga=Object.freeze({__proto__:null,ArcCurve:yd,CatmullRomCurve3:wa,CubicBezierCurve:iu,CubicBezierCurve3:Cd,EllipseCurve:kl,LineCurve:su,LineCurve3:Pd,QuadraticBezierCurve:ru,QuadraticBezierCurve3:au,SplineCurve:ou});class Ld extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ga[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ga[s.type]().fromJSON(s))}return this}}class zc extends Ld{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new su(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ru(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new iu(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ou(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new kl(e,t,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ki extends zc{constructor(e){super(e),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new zc().fromJSON(s))}return this}}function Id(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=lu(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Od(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){const f=i[d],_=i[d+1];f<o&&(o=f),_<c&&(c=_),f>u&&(u=f),_>h&&(h=_)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return pr(r,a,t,o,c,l,0),a}function lu(i,e,t,n,s){let r;if(s===$d(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=kc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=kc(a/n|0,i[a],i[a+1],r);return r&&Is(r,r.next)&&(gr(r),r=r.next),r}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Is(t,t.next)||Ct(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Hd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Ud(i,n,s,r):Dd(i)){e.push(c.i,i.i,l.i),gr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Nd(qi(i),e),pr(i,e,t,n,s,r,2)):a===2&&Fd(i,e,t,n,s,r):pr(qi(i),e,t,n,s,r,1);break}}}function Dd(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),h=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&Ks(s,o,r,c,a,l,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ud(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,c,l),_=Math.min(u,h,d),g=Math.max(o,c,l),m=Math.max(u,h,d),p=fl(f,_,e,t,n),x=fl(g,m,e,t,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=x;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&Ks(o,u,c,h,l,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Ks(o,u,c,h,l,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&Ks(o,u,c,h,l,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Ks(o,u,c,h,l,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Nd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Is(n,s)&&hu(n,t,t.next,s)&&mr(n,s)&&mr(s,n)&&(e.push(n.i,t.i,s.i),gr(t),gr(t.next),t=i=s),t=t.next}while(t!==i);return qi(t)}function Fd(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xd(a,o)){let c=uu(a,o);a=qi(a,a.next),c=qi(c,c.next),pr(a,e,t,n,s,r,0),pr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Od(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=lu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Wd(l))}s.sort(zd);for(let r=0;r<s.length;r++)t=kd(s[r],t);return t}function zd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function kd(i,e){const t=Bd(i,e);if(!t)return e;const n=uu(t,i);return qi(n,n.next),qi(t,t.next)}function Bd(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Is(i,t))return t;do{if(Is(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&cu(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);mr(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Vd(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Vd(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Hd(i,e,t,n){let s=i;do s.z===0&&(s.z=fl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gd(s)}function Gd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function fl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Wd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ks(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&cu(i,e,t,n,s,r,a,o)}function Xd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!qd(i,e)&&(mr(i,e)&&mr(e,i)&&Yd(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Is(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Is(i,e){return i.x===e.x&&i.y===e.y}function hu(i,e,t,n){const s=Zr(Ct(i,e,t)),r=Zr(Ct(i,e,n)),a=Zr(Ct(t,n,i)),o=Zr(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&jr(i,t,e)||r===0&&jr(i,n,e)||a===0&&jr(t,i,n)||o===0&&jr(t,e,n))}function jr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Zr(i){return i>0?1:i<0?-1:0}function qd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Yd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function uu(i,e){const t=dl(i.i,i.x,i.y),n=dl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kc(i,e,t,n){const s=dl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $d(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class jd{static triangulate(e,t,n=2){return Id(e,t,n)}}class ei{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ei.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Bc(e),Vc(n,e);let a=e.length;t.forEach(Bc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Vc(n,t[c]);const o=jd.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Bc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ta extends Vt{constructor(e=new Ki([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Zd;let M,v=!1,T,w,R,C;p&&(M=p.getSpacedPoints(u),v=!0,d=!1,T=p.computeFrenetFrames(u,!1),w=new L,R=new L,C=new L),d||(m=0,f=0,_=0,g=0);const S=o.extractPoints(l);let y=S.shape;const P=S.holes;if(!ei.isClockWise(y)){y=y.reverse();for(let ie=0,Q=P.length;ie<Q;ie++){const J=P[ie];ei.isClockWise(J)&&(P[ie]=J.reverse())}}function U(ie){const J=10000000000000001e-36;let K=ie[0];for(let pe=1;pe<=ie.length;pe++){const re=pe%ie.length,me=ie[re],qe=me.x-K.x,We=me.y-K.y,A=qe*qe+We*We,b=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(K.x),Math.abs(K.y)),V=J*b*b;if(A<=V){ie.splice(re,1),pe--;continue}K=me}}U(y),P.forEach(U);const N=P.length,F=y;for(let ie=0;ie<N;ie++){const Q=P[ie];y=y.concat(Q)}function B(ie,Q,J){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(Q,J)}const X=y.length;function H(ie,Q,J){let K,pe,re;const me=ie.x-Q.x,qe=ie.y-Q.y,We=J.x-ie.x,A=J.y-ie.y,b=me*me+qe*qe,V=me*A-qe*We;if(Math.abs(V)>Number.EPSILON){const Y=Math.sqrt(b),se=Math.sqrt(We*We+A*A),$=Q.x-qe/Y,Le=Q.y+me/Y,ue=J.x-A/se,Re=J.y+We/se,Ce=((ue-$)*A-(Re-Le)*We)/(me*A-qe*We);K=$+me*Ce-ie.x,pe=Le+qe*Ce-ie.y;const ae=K*K+pe*pe;if(ae<=2)return new fe(K,pe);re=Math.sqrt(ae/2)}else{let Y=!1;me>Number.EPSILON?We>Number.EPSILON&&(Y=!0):me<-Number.EPSILON?We<-Number.EPSILON&&(Y=!0):Math.sign(qe)===Math.sign(A)&&(Y=!0),Y?(K=-qe,pe=me,re=Math.sqrt(b)):(K=me,pe=qe,re=Math.sqrt(b/2))}return new fe(K/re,pe/re)}const ce=[];for(let ie=0,Q=F.length,J=Q-1,K=ie+1;ie<Q;ie++,J++,K++)J===Q&&(J=0),K===Q&&(K=0),ce[ie]=H(F[ie],F[J],F[K]);const de=[];let Se,Ge=ce.concat();for(let ie=0,Q=N;ie<Q;ie++){const J=P[ie];Se=[];for(let K=0,pe=J.length,re=pe-1,me=K+1;K<pe;K++,re++,me++)re===pe&&(re=0),me===pe&&(me=0),Se[K]=H(J[K],J[re],J[me]);de.push(Se),Ge=Ge.concat(Se)}let Fe;if(m===0)Fe=ei.triangulateShape(F,P);else{const ie=[],Q=[];for(let J=0;J<m;J++){const K=J/m,pe=f*Math.cos(K*Math.PI/2),re=_*Math.sin(K*Math.PI/2)+g;for(let me=0,qe=F.length;me<qe;me++){const We=B(F[me],ce[me],re);we(We.x,We.y,-pe),K===0&&ie.push(We)}for(let me=0,qe=N;me<qe;me++){const We=P[me];Se=de[me];const A=[];for(let b=0,V=We.length;b<V;b++){const Y=B(We[b],Se[b],re);we(Y.x,Y.y,-pe),K===0&&A.push(Y)}K===0&&Q.push(A)}}Fe=ei.triangulateShape(ie,Q)}const Ue=Fe.length,Be=_+g;for(let ie=0;ie<X;ie++){const Q=d?B(y[ie],Ge[ie],Be):y[ie];v?(R.copy(T.normals[0]).multiplyScalar(Q.x),w.copy(T.binormals[0]).multiplyScalar(Q.y),C.copy(M[0]).add(R).add(w),we(C.x,C.y,C.z)):we(Q.x,Q.y,0)}for(let ie=1;ie<=u;ie++)for(let Q=0;Q<X;Q++){const J=d?B(y[Q],Ge[Q],Be):y[Q];v?(R.copy(T.normals[ie]).multiplyScalar(J.x),w.copy(T.binormals[ie]).multiplyScalar(J.y),C.copy(M[ie]).add(R).add(w),we(C.x,C.y,C.z)):we(J.x,J.y,h/u*ie)}for(let ie=m-1;ie>=0;ie--){const Q=ie/m,J=f*Math.cos(Q*Math.PI/2),K=_*Math.sin(Q*Math.PI/2)+g;for(let pe=0,re=F.length;pe<re;pe++){const me=B(F[pe],ce[pe],K);we(me.x,me.y,h+J)}for(let pe=0,re=P.length;pe<re;pe++){const me=P[pe];Se=de[pe];for(let qe=0,We=me.length;qe<We;qe++){const A=B(me[qe],Se[qe],K);v?we(A.x,A.y+M[u-1].y,M[u-1].x+J):we(A.x,A.y,h+J)}}}q(),te();function q(){const ie=s.length/3;if(d){let Q=0,J=X*Q;for(let K=0;K<Ue;K++){const pe=Fe[K];Ee(pe[2]+J,pe[1]+J,pe[0]+J)}Q=u+m*2,J=X*Q;for(let K=0;K<Ue;K++){const pe=Fe[K];Ee(pe[0]+J,pe[1]+J,pe[2]+J)}}else{for(let Q=0;Q<Ue;Q++){const J=Fe[Q];Ee(J[2],J[1],J[0])}for(let Q=0;Q<Ue;Q++){const J=Fe[Q];Ee(J[0]+X*u,J[1]+X*u,J[2]+X*u)}}n.addGroup(ie,s.length/3-ie,0)}function te(){const ie=s.length/3;let Q=0;ye(F,Q),Q+=F.length;for(let J=0,K=P.length;J<K;J++){const pe=P[J];ye(pe,Q),Q+=pe.length}n.addGroup(ie,s.length/3-ie,1)}function ye(ie,Q){let J=ie.length;for(;--J>=0;){const K=J;let pe=J-1;pe<0&&(pe=ie.length-1);for(let re=0,me=u+m*2;re<me;re++){const qe=X*re,We=X*(re+1),A=Q+K+qe,b=Q+pe+qe,V=Q+pe+We,Y=Q+K+We;Ke(A,b,V,Y)}}}function we(ie,Q,J){c.push(ie),c.push(Q),c.push(J)}function Ee(ie,Q,J){lt(ie),lt(Q),lt(J);const K=s.length/3,pe=x.generateTopUV(n,s,K-3,K-2,K-1);I(pe[0]),I(pe[1]),I(pe[2])}function Ke(ie,Q,J,K){lt(ie),lt(Q),lt(K),lt(Q),lt(J),lt(K);const pe=s.length/3,re=x.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);I(re[0]),I(re[1]),I(re[3]),I(re[1]),I(re[2]),I(re[3])}function lt(ie){s.push(c[ie*3+0]),s.push(c[ie*3+1]),s.push(c[ie*3+2])}function I(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Jd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ga[s.type]().fromJSON(s)),new Ta(n,e.options)}}const Zd={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new fe(r,a),new fe(o,c),new fe(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],_=e[s*3+2],g=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-h),new fe(d,1-_),new fe(g,1-p)]:[new fe(o,1-c),new fe(u,1-h),new fe(f,1-_),new fe(m,1-p)]}};function Jd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class en extends Sr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new en(e.radius,e.detail)}}class _i extends Sr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _i(e.radius,e.detail)}}class br extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const x=p*d-a;for(let M=0;M<l;M++){const v=M*h-r;_.push(v,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+l*p,v=x+l*(p+1),T=x+1+l*(p+1),w=x+1+l*p;f.push(M,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}class Aa extends Vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new L,_=new fe;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let g=0;g<s;g++){const m=g*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,v=x+n+1,T=x+n+2,w=x+1;o.push(M,v,w),o.push(v,T,w)}}this.setIndex(o),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Er extends Vt{constructor(e=new Ki([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(a,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const _=d.holes;ei.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){const x=_[m];ei.isClockWise(x)===!0&&(_[m]=x.reverse())}const g=ei.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){const x=_[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=g.length;m<p;m++){const x=g[m],M=x[0]+h,v=x[1]+h,T=x[2]+h;n.push(M,v,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Kd(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Er(n,e.curveSegments)}}function Kd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ft extends Vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const w=T/t;h.x=-e*Math.cos(s+w*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(s+w*r)*Math.sin(a+M*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(w+v,1-M),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const M=u[p][x+1],v=u[p][x],T=u[p+1][x],w=u[p+1][x+1];(p!==0||a>0)&&f.push(M,v,w),(p!==n-1||c<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cn extends Vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const g=_/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,x=(s+1)*f+_;a.push(g,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ra extends Vt{constructor(e=new au(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new fe;let u=new L;const h=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function g(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),x(),p()}function m(M){u=e.getPointAt(M/t,u);const v=a.normals[M],T=a.binormals[M];for(let w=0;w<=s;w++){const R=w/s*Math.PI*2,C=Math.sin(R),S=-Math.cos(R);c.x=S*v.x+C*T.x,c.y=S*v.y+C*T.y,c.z=S*v.z+C*T.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){const T=(s+1)*(M-1)+(v-1),w=(s+1)*M+(v-1),R=(s+1)*M+v,C=(s+1)*(M-1)+v;_.push(T,w,C),_.push(w,R,C)}}function x(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)l.x=M/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ra(new ga[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fu extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends ks{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new st(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ep extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class du extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Vl extends du{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ho=new Et,Hc=new L,Gc=new L;class np{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gc),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hl extends Qh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ip extends np{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gl extends du{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ip}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sp extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wc=new Et;class rp{constructor(e,t,n=0,s=1/0){this.ray=new $h(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wc),this}intersectObject(e,t=!0,n=[]){return pl(e,this,n,t),n.sort(Xc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pl(e[s],this,n,t);return n.sort(Xc),n}}function Xc(i,e){return i.distance-e.distance}function pl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)pl(r[a],e,t,!0)}}function qc(i,e,t,n){const s=ap(n);switch(t){case Hh:return i*e;case Al:return i*e/s.components*s.byteLength;case Rl:return i*e/s.components*s.byteLength;case Wh:return i*e*2/s.components*s.byteLength;case Cl:return i*e*2/s.components*s.byteLength;case Gh:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case Pl:return i*e*4/s.components*s.byteLength;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:case Bo:return Math.max(i,16)*Math.max(e,8)/4;case Oo:case ko:return Math.max(i,8)*Math.max(e,8)/2;case Vo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sl:case rl:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cl:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(i){switch(i){case kn:case zh:return{byteLength:1,components:1};case cr:case kh:case vr:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case Gi:case El:case Nn:return{byteLength:4,components:1};case Bh:case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);function pu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function op(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:xp,beginnormal_vertex:vp,bsdfs:Mp,iridescence_fragment:yp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Bp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:$p,gradientmap_pars_fragment:jp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:xm,metalnessmap_pars_fragment:vm,morphinstance_vertex:Mm,morphcolor_vertex:ym,morphnormal_vertex:Sm,morphtarget_pars_vertex:bm,morphtarget_vertex:Em,normal_fragment_begin:wm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:zm,dithering_fragment:km,dithering_pars_fragment:Bm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:$m,skinning_vertex:jm,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:Km,tonemapping_fragment:Qm,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:f0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:_0,equirect_frag:x0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:y0,meshbasic_frag:S0,meshlambert_vert:b0,meshlambert_frag:E0,meshmatcap_vert:w0,meshmatcap_frag:T0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:I0,meshtoon_vert:D0,meshtoon_frag:U0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:z0,sprite_vert:k0,sprite_frag:B0},_e={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},In={basic:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Kt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Kt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Kt([_e.points,_e.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Kt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Kt([_e.common,_e.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Kt([_e.sprite,_e.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Kt([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Kt([_e.lights,_e.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};In.physical={uniforms:Kt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Jr={r:0,b:0,g:0},Li=new Bn,V0=new Et;function H0(i,e,t,n,s,r,a){const o=new st(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function g(M){let v=!1;const T=_(M);T===null?p(o,c):T&&T.isColor&&(p(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const T=_(v);T&&(T.isCubeTexture||T.mapping===Ea)?(u===void 0&&(u=new Ot(new Ie(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Ps(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Li.copy(v.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Li)),u.material.toneMapped=mt.getTransfer(T.colorSpace)!==Mt,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ot(new br(2,2),new Ei({name:"BackgroundMaterial",uniforms:Ps(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=mt.getTransfer(T.colorSpace)!==Mt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(Jr,Kh(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,v,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:g,addToRenderList:m,dispose:x}}function G0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,P,D,U,N){let F=!1;const B=h(U,D,P);r!==B&&(r=B,l(r.object)),F=f(y,U,D,N),F&&_(y,U,D,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(y,P,D,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,P,D){const U=D.wireframe===!0;let N=n[y.id];N===void 0&&(N={},n[y.id]=N);let F=N[P.id];F===void 0&&(F={},N[P.id]=F);let B=F[U];return B===void 0&&(B=d(c()),F[U]=B),B}function d(y){const P=[],D=[],U=[];for(let N=0;N<t;N++)P[N]=0,D[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,P,D,U){const N=r.attributes,F=P.attributes;let B=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){const de=N[H];let Se=F[H];if(Se===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),de===void 0||de.attribute!==Se||Se&&de.data!==Se.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function _(y,P,D,U){const N={},F=P.attributes;let B=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){let de=F[H];de===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const Se={};Se.attribute=de,de&&de.data&&(Se.data=de.data),N[H]=Se,B++}r.attributes=N,r.attributesNum=B,r.index=U}function g(){const y=r.newAttributes;for(let P=0,D=y.length;P<D;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const D=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;D[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),N[y]!==P&&(i.vertexAttribDivisor(y,P),N[y]=P)}function x(){const y=r.newAttributes,P=r.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==y[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function M(y,P,D,U,N,F,B){B===!0?i.vertexAttribIPointer(y,P,D,N,F):i.vertexAttribPointer(y,P,D,U,N,F)}function v(y,P,D,U){g();const N=U.attributes,F=D.getAttributes(),B=P.defaultAttributeValues;for(const X in F){const H=F[X];if(H.location>=0){let ce=N[X];if(ce===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const de=ce.normalized,Se=ce.itemSize,Ge=e.get(ce);if(Ge===void 0)continue;const Fe=Ge.buffer,Ue=Ge.type,Be=Ge.bytesPerElement,q=Ue===i.INT||Ue===i.UNSIGNED_INT||ce.gpuType===El;if(ce.isInterleavedBufferAttribute){const te=ce.data,ye=te.stride,we=ce.offset;if(te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)p(H.location+Ee,te.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ee=0;Ee<H.locationSize;Ee++)M(H.location+Ee,Se/H.locationSize,Ue,de,ye*Be,(we+Se/H.locationSize*Ee)*Be,q)}else{if(ce.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)p(H.location+te,ce.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let te=0;te<H.locationSize;te++)M(H.location+te,Se/H.locationSize,Ue,de,Se*Be,Se/H.locationSize*te*Be,q)}}else if(B!==void 0){const de=B[X];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(H.location,de);break;case 3:i.vertexAttrib3fv(H.location,de);break;case 4:i.vertexAttrib4fv(H.location,de);break;default:i.vertexAttrib1fv(H.location,de)}}}}x()}function T(){C();for(const y in n){const P=n[y];for(const D in P){const U=P[D];for(const N in U)u(U[N].object),delete U[N];delete P[D]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const D in P){const U=P[D];for(const N in U)u(U[N].object),delete U[N];delete P[D]}delete n[y.id]}function R(y){for(const P in n){const D=n[P];if(D[y.id]===void 0)continue;const U=D[y.id];for(const N in U)u(U[N].object),delete U[N];delete D[y.id]}}function C(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function W0(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function X0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Nn&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function q0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new pi,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;c.value=v,v=u(_,d,M,f);for(let T=0;T!==M;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==g;++M,v+=4)a.copy(h[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Y0(i){let e=new WeakMap;function t(a,o){return o===Do?a.mapping=As:o===Uo&&(a.mapping=Rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Do||o===Uo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new dd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const vs=4,Yc=[.125,.215,.35,.446,.526,.582],Ni=20,uo=new Hl,$c=new st;let fo=null,po=0,mo=0,go=!1;const Di=(1+Math.sqrt(5))/2,ms=1/Di,jc=[new L(-Di,ms,0),new L(Di,ms,0),new L(-ms,0,Di),new L(ms,0,Di),new L(0,Di,-ms),new L(0,Di,ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],$0=new L;class Zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=$0}=r;fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:vr,format:Rn,colorSpace:Cs,depthBuffer:!1},s=Jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=Z0(r,e,t)}return s}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,n,s,r){const c=new fn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($c),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const g=new Xi({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new Ot(new Ie,g);let p=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy($c),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));const T=this._cubeSize;Kr(s,v*T,M>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,uo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jc[(s-r-1)%jc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let x=0;for(let R=0;R<Ni;++R){const C=R/g,S=Math.exp(-C*C/2);p.push(S),R===0?x+=S:R<m&&(x+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const v=this._sizeLods[s],T=3*v*(s>M-vs?s-M+vs:0),w=4*(this._cubeSize-v);Kr(t,T,w,3*v,2*v),c.setRenderTarget(t),c.render(h,uo)}}function j0(i){const e=[],t=[],n=[];let s=i;const r=i-vs+1+Yc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-vs?c=Yc[a-i+vs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*f),M=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,C=w>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];x.set(S,g*_*w),M.set(d,m*_*w);const y=[w,w,w,w,w,w];v.set(y,p*_*w)}const T=new Vt;T.setAttribute("position",new vn(x,g)),T.setAttribute("uv",new vn(M,m)),T.setAttribute("faceIndex",new vn(v,p)),e.push(T),s>vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jc(i,e,t){const n=new Wi(i,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Z0(i,e,t){const n=new Float32Array(Ni),s=new L(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Kc(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Qc(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Do||c===Uo,u=c===As||c===Rs;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Zc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Zc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function K0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Q0(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,v=x.length;M<v;M+=3){const T=x[M+0],w=x[M+1],R=x[M+2];d.push(T,w,w,R,R,T)}}else if(_!==void 0){const x=_.array;g=_.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const T=M+0,w=M+1,R=M+2;d.push(T,w,w,R,R,T)}}else return;const m=new(qh(d)?Jh:Zh)(d,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function eg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*a,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x]*g[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,e,t){const n=new WeakMap,s=new It;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*h),C=new Yh(R,T,w,h);C.type=Nn,C.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const D=p[P],U=x[P],N=M[P],F=T*w*4*P;for(let B=0;B<D.count;B++){const X=B*S;_===!0&&(s.fromBufferAttribute(D,B),R[F+X+0]=s.x,R[F+X+1]=s.y,R[F+X+2]=s.z,R[F+X+3]=0),g===!0&&(s.fromBufferAttribute(U,B),R[F+X+4]=s.x,R[F+X+5]=s.y,R[F+X+6]=s.z,R[F+X+7]=0),m===!0&&(s.fromBufferAttribute(N,B),R[F+X+8]=s.x,R[F+X+9]=s.y,R[F+X+10]=s.z,R[F+X+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new fe(T,w)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ig(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const mu=new tn,eh=new tu(1,1),gu=new Yh,_u=new Zf,xu=new eu,th=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Bs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),Bt(t,n)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),Bt(t,n)}}function hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Bt(t,n)}}function ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=Xh,r=eh):r=mu,t.setTexture2D(e||r,s)}function Mg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_u,s)}function yg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xu,s)}function Sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gu,s)}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Eg(i,e){i.uniform1fv(this.addr,e)}function wg(i,e){const t=Bs(e,this.size,2);i.uniform2fv(this.addr,t)}function Tg(i,e){const t=Bs(e,this.size,3);i.uniform3fv(this.addr,t)}function Ag(i,e){const t=Bs(e,this.size,4);i.uniform4fv(this.addr,t)}function Rg(i,e){const t=Bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cg(i,e){const t=Bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pg(i,e){const t=Bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lg(i,e){i.uniform1iv(this.addr,e)}function Ig(i,e){i.uniform2iv(this.addr,e)}function Dg(i,e){i.uniform3iv(this.addr,e)}function Ug(i,e){i.uniform4iv(this.addr,e)}function Ng(i,e){i.uniform1uiv(this.addr,e)}function Fg(i,e){i.uniform2uiv(this.addr,e)}function Og(i,e){i.uniform3uiv(this.addr,e)}function zg(i,e){i.uniform4uiv(this.addr,e)}function kg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mu,r[a])}function Bg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_u,r[a])}function Vg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xu,r[a])}function Hg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gu,r[a])}function Gg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Hg}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}}class Xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gg(t.type)}}class qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function ah(i,e){i.seq.push(e),i.map[e.id]=e}function Yg(i,e,t){const n=i.name,s=n.length;for(_o.lastIndex=0;;){const r=_o.exec(n),a=_o.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ah(t,l===void 0?new Wg(o,i,e):new Xg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new qg(o),ah(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Yg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function oh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $g=37297;let jg=0;function Zg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lh=new Je;function Jg(i){mt._getMatrix(lh,mt.workingColorSpace,i);const e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case da:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ch(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zg(i.getShaderSource(e),o)}else return r}function Kg(i,e){const t=Jg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qg(i,e){let t;switch(e){case Ef:t="Linear";break;case wf:t="Reinhard";break;case Tf:t="Cineon";break;case ba:t="ACESFilmic";break;case Rf:t="AgX";break;case Cf:t="Neutral";break;case Af:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new L;function e_(){mt.getLuminanceCoefficients(Qr);const i=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function n_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(i){return i.replace(s_,a_)}const r_=new Map;function a_(i,e){let t=Qe[e];if(t===void 0){const n=r_.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ml(t)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(o_,l_)}function l_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function h_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function f_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case bf:e="ENVMAP_BLENDING_ADD";break}return e}function d_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function p_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=c_(t),l=h_(t),u=u_(t),h=f_(t),d=d_(t),f=t_(t),_=n_(r),g=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==yi?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Kg("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=ml(a),a=hh(a,t),a=uh(a,t),o=ml(o),o=hh(o,t),o=uh(o,t),a=fh(a),o=fh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,v=x+p+o,T=oh(s,s.VERTEX_SHADER,M),w=oh(s,s.FRAGMENT_SHADER,v);s.attachShader(g,T),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(w)||"",F=D.trim(),B=U.trim(),X=N.trim();let H=!0,ce=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,w);else{const de=ch(s,T,"vertex"),Se=ch(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+de+`
`+Se)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||X==="")&&(ce=!1);ce&&(P.diagnostics={runnable:H,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(T),s.deleteShader(w),C=new ca(s,g),S=i_(s,g)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,$g)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new __(e),t.set(e,n)),n}}class __{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function x_(i,e,t,n,s,r,a){const o=new Dl,c=new g_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,D,U){const N=D.fog,F=U.geometry,B=S.isMeshStandardMaterial?D.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),H=X&&X.mapping===Ea?X.image.height:null,ce=_[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const de=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Se=de!==void 0?de.length:0;let Ge=0;F.morphAttributes.position!==void 0&&(Ge=1),F.morphAttributes.normal!==void 0&&(Ge=2),F.morphAttributes.color!==void 0&&(Ge=3);let Fe,Ue,Be,q;if(ce){const _t=In[ce];Fe=_t.vertexShader,Ue=_t.fragmentShader}else Fe=S.vertexShader,Ue=S.fragmentShader,c.update(S),Be=c.getVertexShaderID(S),q=c.getFragmentShaderID(S);const te=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),we=U.isInstancedMesh===!0,Ee=U.isBatchedMesh===!0,Ke=!!S.map,lt=!!S.matcap,I=!!X,ie=!!S.aoMap,Q=!!S.lightMap,J=!!S.bumpMap,K=!!S.normalMap,pe=!!S.displacementMap,re=!!S.emissiveMap,me=!!S.metalnessMap,qe=!!S.roughnessMap,We=S.anisotropy>0,A=S.clearcoat>0,b=S.dispersion>0,V=S.iridescence>0,Y=S.sheen>0,se=S.transmission>0,$=We&&!!S.anisotropyMap,Le=A&&!!S.clearcoatMap,ue=A&&!!S.clearcoatNormalMap,Re=A&&!!S.clearcoatRoughnessMap,Ce=V&&!!S.iridescenceMap,ae=V&&!!S.iridescenceThicknessMap,Me=Y&&!!S.sheenColorMap,Ve=Y&&!!S.sheenRoughnessMap,De=!!S.specularMap,xe=!!S.specularColorMap,je=!!S.specularIntensityMap,O=se&&!!S.transmissionMap,he=se&&!!S.thicknessMap,ge=!!S.gradientMap,Te=!!S.alphaMap,oe=S.alphaTest>0,ee=!!S.alphaHash,Pe=!!S.extensions;let Ye=yi;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const St={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Fe,fragmentShader:Ue,defines:S.defines,customVertexShaderID:Be,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&U._colorsTexture!==null,instancing:we,instancingColor:we&&U.instanceColor!==null,instancingMorph:we&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Cs,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:lt,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:H,aoMap:ie,lightMap:Q,bumpMap:J,normalMap:K,displacementMap:d&&pe,emissiveMap:re,normalMapObjectSpace:K&&S.normalMapType===Df,normalMapTangentSpace:K&&S.normalMapType===Ll,metalnessMap:me,roughnessMap:qe,anisotropy:We,anisotropyMap:$,clearcoat:A,clearcoatMap:Le,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:b,iridescence:V,iridescenceMap:Ce,iridescenceThicknessMap:ae,sheen:Y,sheenColorMap:Me,sheenRoughnessMap:Ve,specularMap:De,specularColorMap:xe,specularIntensityMap:je,transmission:se,transmissionMap:O,thicknessMap:he,gradientMap:ge,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:oe,alphaHash:ee,combine:S.combine,mapUv:Ke&&g(S.map.channel),aoMapUv:ie&&g(S.aoMap.channel),lightMapUv:Q&&g(S.lightMap.channel),bumpMapUv:J&&g(S.bumpMap.channel),normalMapUv:K&&g(S.normalMap.channel),displacementMapUv:pe&&g(S.displacementMap.channel),emissiveMapUv:re&&g(S.emissiveMap.channel),metalnessMapUv:me&&g(S.metalnessMap.channel),roughnessMapUv:qe&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:Le&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(S.sheenRoughnessMap.channel),specularMapUv:De&&g(S.specularMap.channel),specularColorMapUv:xe&&g(S.specularColorMap.channel),specularIntensityMapUv:je&&g(S.specularIntensityMap.channel),transmissionMapUv:O&&g(S.transmissionMap.channel),thicknessMapUv:he&&g(S.thicknessMap.channel),alphaMapUv:Te&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(K||We),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Ke||Te),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=_[S.type];let P;if(y){const D=In[y];P=cd.clone(D.uniforms)}else P=S.uniforms;return P}function T(S,y){let P;for(let D=0,U=u.length;D<U;D++){const N=u[D];if(N.cacheKey===y){P=N,++P.usedTimes;break}}return P===void 0&&(P=new p_(i,y,S,r),u.push(P)),P}function w(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function R(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:C}}function v_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function M_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,_,g,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||M_),n.length>1&&n.sort(d||ph),s.length>1&&s.sort(d||ph)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function y_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new mh,i.set(n,[a])):s>=r.length?(a=new mh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function S_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new st};break;case"SpotLight":t={position:new L,direction:new L,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function b_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let E_=0;function w_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T_(i){const e=new S_,t=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Et,a=new Et;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,x=0,M=0,v=0,T=0,w=0,R=0;l.sort(w_);for(let S=0,y=l.length;S<y;S++){const P=l[S],D=P.color,U=P.intensity,N=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*U,h+=D.g*U,d+=D.b*U;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],U);R++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(D).multiplyScalar(U),B.distance=N,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[g]=B;const X=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=X.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=F,v++}g++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const X=P.shadow,H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=F,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=B,_++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(U),B.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=R,n.version=E_++)}function c(l,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function gh(i){const e=new T_(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function A_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gh(i),e.set(s,[o])):r>=a.length?(o=new gh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P_(i,e,t){let n=new Fl;const s=new fe,r=new fe,a=new It,o=new ep({depthPacking:If}),c=new tp,l={},u=t.maxTextureSize,h={[bi]:an,[an]:bi,[dn]:dn},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ot(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(w,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Mi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=p!==Kn&&this.type===Kn,N=p===Kn&&this.type!==Kn;for(let F=0,B=w.length;F<B;F++){const X=w[F],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ce=H.getFrameExtents();if(s.multiply(ce),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,H.mapSize.y=r.y)),H.map===null||U===!0||N===!0){const Se=this.type!==Kn?{minFilter:pn,magFilter:pn}:{};H.map!==null&&H.map.dispose(),H.map=new Wi(s.x,s.y,Se),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const de=H.getViewportCount();for(let Se=0;Se<de;Se++){const Ge=H.getViewport(Se);a.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),D.viewport(a),H.updateMatrices(X,Se),n=H.getFrustum(),v(R,C,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Kn&&x(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function x(w,R){const C=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,C,f,g,null)}function M(w,R,C,S){let y=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=y.uuid,U=R.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let F=N[U];F===void 0&&(F=y.clone(),N[U]=F,R.addEventListener("dispose",T)),y=F}if(y.visible=R.visible,y.wireframe=R.wireframe,S===Kn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=i.properties.get(y);D.light=C}return y}function v(w,R,C,S,y){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const U=e.update(w),N=w.material;if(Array.isArray(N)){const F=U.groups;for(let B=0,X=F.length;B<X;B++){const H=F[B],ce=N[H.materialIndex];if(ce&&ce.visible){const de=M(w,ce,S,y);w.onBeforeShadow(i,w,R,C,U,de,H),i.renderBufferDirect(C,null,U,de,w,H),w.onAfterShadow(i,w,R,C,U,de,H)}}}else if(N.visible){const F=M(w,N,S,y);w.onBeforeShadow(i,w,R,C,U,F,null),i.renderBufferDirect(C,null,U,F,w,null),w.onAfterShadow(i,w,R,C,U,F,null)}}const D=w.children;for(let U=0,N=D.length;U<N;U++)v(D[U],R,C,S,y)}function T(w){w.target.removeEventListener("dispose",T);for(const C in l){const S=l[C],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const L_={[To]:Ao,[Ro]:Lo,[Co]:Io,[Ts]:Po,[Ao]:To,[Lo]:Ro,[Io]:Co,[Po]:Ts};function I_(i,e){function t(){let O=!1;const he=new It;let ge=null;const Te=new It(0,0,0,0);return{setMask:function(oe){ge!==oe&&!O&&(i.colorMask(oe,oe,oe,oe),ge=oe)},setLocked:function(oe){O=oe},setClear:function(oe,ee,Pe,Ye,St){St===!0&&(oe*=Ye,ee*=Ye,Pe*=Ye),he.set(oe,ee,Pe,Ye),Te.equals(he)===!1&&(i.clearColor(oe,ee,Pe,Ye),Te.copy(he))},reset:function(){O=!1,ge=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,he=!1,ge=null,Te=null,oe=null;return{setReversed:function(ee){if(he!==ee){const Pe=e.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=ee;const Ye=oe;oe=null,this.setClear(Ye)}},getReversed:function(){return he},setTest:function(ee){ee?te(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ee){ge!==ee&&!O&&(i.depthMask(ee),ge=ee)},setFunc:function(ee){if(he&&(ee=L_[ee]),Te!==ee){switch(ee){case To:i.depthFunc(i.NEVER);break;case Ao:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ee}},setLocked:function(ee){O=ee},setClear:function(ee){oe!==ee&&(he&&(ee=1-ee),i.clearDepth(ee),oe=ee)},reset:function(){O=!1,ge=null,Te=null,oe=null,he=!1}}}function s(){let O=!1,he=null,ge=null,Te=null,oe=null,ee=null,Pe=null,Ye=null,St=null;return{setTest:function(_t){O||(_t?te(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(_t){he!==_t&&!O&&(i.stencilMask(_t),he=_t)},setFunc:function(_t,Xn,Pn){(ge!==_t||Te!==Xn||oe!==Pn)&&(i.stencilFunc(_t,Xn,Pn),ge=_t,Te=Xn,oe=Pn)},setOp:function(_t,Xn,Pn){(ee!==_t||Pe!==Xn||Ye!==Pn)&&(i.stencilOp(_t,Xn,Pn),ee=_t,Pe=Xn,Ye=Pn)},setLocked:function(_t){O=_t},setClear:function(_t){St!==_t&&(i.clearStencil(_t),St=_t)},reset:function(){O=!1,he=null,ge=null,Te=null,oe=null,ee=null,Pe=null,Ye=null,St=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,T=null,w=null,R=new st(0,0,0),C=0,S=!1,y=null,P=null,D=null,U=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=X>=2);let ce=null,de={};const Se=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Fe=new It().fromArray(Se),Ue=new It().fromArray(Ge);function Be(O,he,ge,Te){const oe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(O,ee),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<ge;Pe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(he+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ee}const q={};q[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Ts),J(!1),K(hc),te(i.CULL_FACE),ie(Mi);function te(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function ye(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function we(O,he){return h[O]!==he?(i.bindFramebuffer(O,he),h[O]=he,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Ee(O,he){let ge=f,Te=!1;if(O){ge=d.get(he),ge===void 0&&(ge=[],d.set(he,ge));const oe=O.textures;if(ge.length!==oe.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Pe=oe.length;ee<Pe;ee++)ge[ee]=i.COLOR_ATTACHMENT0+ee;ge.length=oe.length,Te=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ge)}function Ke(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const lt={[Ui]:i.FUNC_ADD,[rf]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};lt[of]=i.MIN,lt[lf]=i.MAX;const I={[cf]:i.ZERO,[hf]:i.ONE,[uf]:i.SRC_COLOR,[Eo]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[mf]:i.DST_COLOR,[df]:i.DST_ALPHA,[ff]:i.ONE_MINUS_SRC_COLOR,[wo]:i.ONE_MINUS_SRC_ALPHA,[gf]:i.ONE_MINUS_DST_COLOR,[pf]:i.ONE_MINUS_DST_ALPHA,[xf]:i.CONSTANT_COLOR,[vf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(O,he,ge,Te,oe,ee,Pe,Ye,St,_t){if(O===Mi){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),O!==sf){if(O!==m||_t!==S){if((p!==Ui||v!==Ui)&&(i.blendEquation(i.FUNC_ADD),p=Ui,v=Ui),_t)switch(O){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,T=null,w=null,R.set(0,0,0),C=0,m=O,S=_t}return}oe=oe||he,ee=ee||ge,Pe=Pe||Te,(he!==p||oe!==v)&&(i.blendEquationSeparate(lt[he],lt[oe]),p=he,v=oe),(ge!==x||Te!==M||ee!==T||Pe!==w)&&(i.blendFuncSeparate(I[ge],I[Te],I[ee],I[Pe]),x=ge,M=Te,T=ee,w=Pe),(Ye.equals(R)===!1||St!==C)&&(i.blendColor(Ye.r,Ye.g,Ye.b,St),R.copy(Ye),C=St),m=O,S=!1}function Q(O,he){O.side===dn?ye(i.CULL_FACE):te(i.CULL_FACE);let ge=O.side===an;he&&(ge=!ge),J(ge),O.blending===ys&&O.transparent===!1?ie(Mi):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Te=O.stencilWrite;o.setTest(Te),Te&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function K(O){O!==tf?(te(i.CULL_FACE),O!==P&&(O===hc?i.cullFace(i.BACK):O===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),P=O}function pe(O){O!==D&&(B&&i.lineWidth(O),D=O)}function re(O,he,ge){O?(te(i.POLYGON_OFFSET_FILL),(U!==he||N!==ge)&&(i.polygonOffset(he,ge),U=he,N=ge)):ye(i.POLYGON_OFFSET_FILL)}function me(O){O?te(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function qe(O){O===void 0&&(O=i.TEXTURE0+F-1),ce!==O&&(i.activeTexture(O),ce=O)}function We(O,he,ge){ge===void 0&&(ce===null?ge=i.TEXTURE0+F-1:ge=ce);let Te=de[ge];Te===void 0&&(Te={type:void 0,texture:void 0},de[ge]=Te),(Te.type!==O||Te.texture!==he)&&(ce!==ge&&(i.activeTexture(ge),ce=ge),i.bindTexture(O,he||q[O]),Te.type=O,Te.texture=he)}function A(){const O=de[ce];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(O){Fe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Fe.copy(O))}function Ve(O){Ue.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ue.copy(O))}function De(O,he){let ge=l.get(he);ge===void 0&&(ge=new WeakMap,l.set(he,ge));let Te=ge.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(he,O.name),ge.set(O,Te))}function xe(O,he){const Te=l.get(he).get(O);c.get(he)!==Te&&(i.uniformBlockBinding(he,Te,O.__bindingPointIndex),c.set(he,Te))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,de={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,M=null,v=null,T=null,w=null,R=new st(0,0,0),C=0,S=!1,y=null,P=null,D=null,U=null,N=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:we,drawBuffers:Ee,useProgram:Ke,setBlending:ie,setMaterial:Q,setFlipSided:J,setCullFace:K,setLineWidth:pe,setPolygonOffset:re,setScissorTest:me,activeTexture:qe,bindTexture:We,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:Ce,texImage3D:ae,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:ue,texStorage3D:Re,texSubImage2D:Y,texSubImage3D:se,compressedTexSubImage2D:$,compressedTexSubImage3D:Le,scissor:Me,viewport:Ve,reset:je}}function D_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return f?new OffscreenCanvas(A,b):ma("canvas")}function g(A,b,V){let Y=1;const se=We(A);if((se.width>V||se.height>V)&&(Y=V/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Y*se.width),Le=Math.floor(Y*se.height);h===void 0&&(h=_($,Le));const ue=b?_($,Le):h;return ue.width=$,ue.height=Le,ue.getContext("2d").drawImage(A,0,0,$,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+Le+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,b,V,Y,se=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),b===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),b===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),b===i.RGBA){const Le=se?da:mt.getTransfer(Y);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=Le===Mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(A,b){let V;return A?b===null||b===Gi||b===hr?V=i.DEPTH24_STENCIL8:b===Nn?V=i.DEPTH32F_STENCIL8:b===cr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===hr?V=i.DEPTH_COMPONENT24:b===Nn?V=i.DEPTH_COMPONENT32F:b===cr&&(V=i.DEPTH_COMPONENT16),V}function T(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==pn&&A.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){const b=A.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&u.delete(b)}function R(A){const b=A.target;b.removeEventListener("dispose",R),y(b)}function C(A){const b=n.get(A);if(b.__webglInit===void 0)return;const V=A.source,Y=d.get(V);if(Y){const se=Y[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(A),Object.keys(Y).length===0&&d.delete(V)}n.remove(A)}function S(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const V=A.source,Y=d.get(V);delete Y[b.__cacheKey],a.memory.textures--}function y(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let se=0;se<b.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(b.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=A.textures;for(let Y=0,se=V.length;Y<se;Y++){const $=n.get(V[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(A)}let P=0;function D(){P=0}function U(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function N(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function F(A,b){const V=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,A,b);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function B(A,b){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){q(V,A,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function X(A,b){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){q(V,A,b);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function H(A,b){const V=n.get(A);if(A.version>0&&V.__version!==A.version){te(V,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const ce={[No]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},de={[pn]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},Se={[Uf]:i.NEVER,[Bf]:i.ALWAYS,[Nf]:i.LESS,[Xh]:i.LEQUAL,[Ff]:i.EQUAL,[kf]:i.GEQUAL,[Of]:i.GREATER,[zf]:i.NOTEQUAL};function Ge(A,b){if(b.type===Nn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===Fa||b.magFilter===Cr||b.magFilter===Oi||b.minFilter===Un||b.minFilter===Fa||b.minFilter===Cr||b.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ce[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ce[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ce[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,de[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pn||b.minFilter!==Cr&&b.minFilter!==Oi||b.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Fe(A,b){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const Y=b.source;let se=d.get(Y);se===void 0&&(se={},d.set(Y,se));const $=N(b);if($!==A.__cacheKey){se[$]===void 0&&(se[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[$].usedTimes++;const Le=se[A.__cacheKey];Le!==void 0&&(se[A.__cacheKey].usedTimes--,Le.usedTimes===0&&S(b)),A.__cacheKey=$,A.__webglTexture=se[$].texture}return V}function Ue(A,b,V){return Math.floor(Math.floor(A/V)/b)}function Be(A,b,V,Y){const $=A.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,V,Y,b.data);else{$.sort((ae,Me)=>ae.start-Me.start);let Le=0;for(let ae=1;ae<$.length;ae++){const Me=$[Le],Ve=$[ae],De=Me.start+Me.count,xe=Ue(Ve.start,b.width,4),je=Ue(Me.start,b.width,4);Ve.start<=De+1&&xe===je&&Ue(Ve.start+Ve.count-1,b.width,4)===xe?Me.count=Math.max(Me.count,Ve.start+Ve.count-Me.start):(++Le,$[Le]=Ve)}$.length=Le+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ae=0,Me=$.length;ae<Me;ae++){const Ve=$[ae],De=Math.floor(Ve.start/4),xe=Math.ceil(Ve.count/4),je=De%b.width,O=Math.floor(De/b.width),he=xe,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,je,O,he,ge,V,Y,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function q(A,b,V){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const se=Fe(A,b),$=b.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+V);const Le=n.get($);if($.version!==Le.__version||se===!0){t.activeTexture(i.TEXTURE0+V);const ue=mt.getPrimaries(mt.workingColorSpace),Re=b.colorSpace===gi?null:mt.getPrimaries(b.colorSpace),Ce=b.colorSpace===gi||ue===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ae=g(b.image,!1,s.maxTextureSize);ae=qe(b,ae);const Me=r.convert(b.format,b.colorSpace),Ve=r.convert(b.type);let De=M(b.internalFormat,Me,Ve,b.colorSpace,b.isVideoTexture);Ge(Y,b);let xe;const je=b.mipmaps,O=b.isVideoTexture!==!0,he=Le.__version===void 0||se===!0,ge=$.dataReady,Te=T(b,ae);if(b.isDepthTexture)De=v(b.format===fr,b.type),he&&(O?t.texStorage2D(i.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,Me,Ve,null));else if(b.isDataTexture)if(je.length>0){O&&he&&t.texStorage2D(i.TEXTURE_2D,Te,De,je[0].width,je[0].height);for(let oe=0,ee=je.length;oe<ee;oe++)xe=je[oe],O?ge&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,xe.width,xe.height,Me,Ve,xe.data):t.texImage2D(i.TEXTURE_2D,oe,De,xe.width,xe.height,0,Me,Ve,xe.data);b.generateMipmaps=!1}else O?(he&&t.texStorage2D(i.TEXTURE_2D,Te,De,ae.width,ae.height),ge&&Be(b,ae,Me,Ve)):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,Me,Ve,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,De,je[0].width,je[0].height,ae.depth);for(let oe=0,ee=je.length;oe<ee;oe++)if(xe=je[oe],b.format!==Rn)if(Me!==null)if(O){if(ge)if(b.layerUpdates.size>0){const Pe=qc(xe.width,xe.height,b.format,b.type);for(const Ye of b.layerUpdates){const St=xe.data.subarray(Ye*Pe/xe.data.BYTES_PER_ELEMENT,(Ye+1)*Pe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ye,xe.width,xe.height,1,Me,St)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ae.depth,Me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,De,xe.width,xe.height,ae.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ae.depth,Me,Ve,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,De,xe.width,xe.height,ae.depth,0,Me,Ve,xe.data)}else{O&&he&&t.texStorage2D(i.TEXTURE_2D,Te,De,je[0].width,je[0].height);for(let oe=0,ee=je.length;oe<ee;oe++)xe=je[oe],b.format!==Rn?Me!==null?O?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ge&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,xe.width,xe.height,Me,Ve,xe.data):t.texImage2D(i.TEXTURE_2D,oe,De,xe.width,xe.height,0,Me,Ve,xe.data)}else if(b.isDataArrayTexture)if(O){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,De,ae.width,ae.height,ae.depth),ge)if(b.layerUpdates.size>0){const oe=qc(ae.width,ae.height,b.format,b.type);for(const ee of b.layerUpdates){const Pe=ae.data.subarray(ee*oe/ae.data.BYTES_PER_ELEMENT,(ee+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,Me,Ve,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ve,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,Me,Ve,ae.data);else if(b.isData3DTexture)O?(he&&t.texStorage3D(i.TEXTURE_3D,Te,De,ae.width,ae.height,ae.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ve,ae.data)):t.texImage3D(i.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,Me,Ve,ae.data);else if(b.isFramebufferTexture){if(he)if(O)t.texStorage2D(i.TEXTURE_2D,Te,De,ae.width,ae.height);else{let oe=ae.width,ee=ae.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,De,oe,ee,0,Me,Ve,null),oe>>=1,ee>>=1}}else if(je.length>0){if(O&&he){const oe=We(je[0]);t.texStorage2D(i.TEXTURE_2D,Te,De,oe.width,oe.height)}for(let oe=0,ee=je.length;oe<ee;oe++)xe=je[oe],O?ge&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Me,Ve,xe):t.texImage2D(i.TEXTURE_2D,oe,De,Me,Ve,xe);b.generateMipmaps=!1}else if(O){if(he){const oe=We(ae);t.texStorage2D(i.TEXTURE_2D,Te,De,oe.width,oe.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ve,ae)}else t.texImage2D(i.TEXTURE_2D,0,De,Me,Ve,ae);m(b)&&p(Y),Le.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function te(A,b,V){if(b.image.length!==6)return;const Y=Fe(A,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const $=n.get(se);if(se.version!==$.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);const Le=mt.getPrimaries(mt.workingColorSpace),ue=b.colorSpace===gi?null:mt.getPrimaries(b.colorSpace),Re=b.colorSpace===gi||Le===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!Ce&&!ae?Me[ee]=g(b.image[ee],!0,s.maxCubemapSize):Me[ee]=ae?b.image[ee].image:b.image[ee],Me[ee]=qe(b,Me[ee]);const Ve=Me[0],De=r.convert(b.format,b.colorSpace),xe=r.convert(b.type),je=M(b.internalFormat,De,xe,b.colorSpace),O=b.isVideoTexture!==!0,he=$.__version===void 0||Y===!0,ge=se.dataReady;let Te=T(b,Ve);Ge(i.TEXTURE_CUBE_MAP,b);let oe;if(Ce){O&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,je,Ve.width,Ve.height);for(let ee=0;ee<6;ee++){oe=Me[ee].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){const Ye=oe[Pe];b.format!==Rn?De!==null?O?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ye.width,Ye.height,De,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ye.width,Ye.height,De,xe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,je,Ye.width,Ye.height,0,De,xe,Ye.data)}}}else{if(oe=b.mipmaps,O&&he){oe.length>0&&Te++;const ee=We(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,De,xe,Me[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,Me[ee].width,Me[ee].height,0,De,xe,Me[ee].data);for(let Pe=0;Pe<oe.length;Pe++){const St=oe[Pe].image[ee].image;O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,St.width,St.height,De,xe,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,je,St.width,St.height,0,De,xe,St.data)}}else{O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,xe,Me[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,De,xe,Me[ee]);for(let Pe=0;Pe<oe.length;Pe++){const Ye=oe[Pe];O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,De,xe,Ye.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,je,De,xe,Ye.image[ee])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),$.__version=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ye(A,b,V,Y,se,$){const Le=r.convert(V.format,V.colorSpace),ue=r.convert(V.type),Re=M(V.internalFormat,Le,ue,V.colorSpace),Ce=n.get(b),ae=n.get(V);if(ae.__renderTarget=b,!Ce.__hasExternalTextures){const Me=Math.max(1,b.width>>$),Ve=Math.max(1,b.height>>$);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,$,Re,Me,Ve,b.depth,0,Le,ue,null):t.texImage2D(se,$,Re,Me,Ve,0,Le,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,ae.__webglTexture,0,pe(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,ae.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(A,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const Y=b.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,$=v(b.stencilBuffer,se),Le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=pe(b);re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,$,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,A)}else{const Y=b.textures;for(let se=0;se<Y.length;se++){const $=Y[se],Le=r.convert($.format,$.colorSpace),ue=r.convert($.type),Re=M($.internalFormat,Le,ue,$.colorSpace),Ce=pe(b);V&&re(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Re,b.width,b.height):re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const se=Y.__webglTexture,$=pe(b);if(b.depthTexture.format===ur)re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(b.depthTexture.format===fr)re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ke(A){const b=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=A.texture.mipmaps;Y&&Y.length>0?Ee(b.__webglFramebuffer[0],A):Ee(b.__webglFramebuffer,A)}else if(V){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),we(b.__webglDepthbuffer[Y],A,!1);else{const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),we(b.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,b,V){const Y=n.get(A);b!==void 0&&ye(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ke(A)}function I(A){const b=A.texture,V=n.get(A),Y=n.get(b);A.addEventListener("dispose",R);const se=A.textures,$=A.isWebGLCubeRenderTarget===!0,Le=se.length>1;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let Re=0;Re<b.mipmaps.length;Re++)V.__webglFramebuffer[ue][Re]=i.createFramebuffer()}else V.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)V.__webglFramebuffer[ue]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ue=0,Re=se.length;ue<Re;ue++){const Ce=n.get(se[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&re(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const Re=se[ue];V.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Ce=r.convert(Re.format,Re.colorSpace),ae=r.convert(Re.type),Me=M(Re.internalFormat,Ce,ae,Re.colorSpace,A.isXRRenderTarget===!0),Ve=pe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),we(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)ye(V.__webglFramebuffer[ue][Re],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else ye(V.__webglFramebuffer[ue],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ue=0,Re=se.length;ue<Re;ue++){const Ce=se[ue],ae=n.get(Ce);let Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ae.__webglTexture),Ge(Me,Ce),ye(V.__webglFramebuffer,A,Ce,i.COLOR_ATTACHMENT0+ue,Me,0),m(Ce)&&p(Me)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Y.__webglTexture),Ge(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)ye(V.__webglFramebuffer[Re],A,b,i.COLOR_ATTACHMENT0,ue,Re);else ye(V.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ue,0);m(b)&&p(ue),t.unbindTexture()}A.depthBuffer&&Ke(A)}function ie(A){const b=A.textures;for(let V=0,Y=b.length;V<Y;V++){const se=b[V];if(m(se)){const $=x(A),Le=n.get(se).__webglTexture;t.bindTexture($,Le),p($),t.unbindTexture()}}}const Q=[],J=[];function K(A){if(A.samples>0){if(re(A)===!1){const b=A.textures,V=A.width,Y=A.height;let se=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(A),ue=b.length>1;if(ue)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Re=A.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ae=n.get(b[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,se,i.NEAREST),c===!0&&(Q.length=0,J.length=0,Q.push(i.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push($),J.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ae=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function pe(A){return Math.min(s.maxSamples,A.samples)}function re(A){const b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function me(A){const b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function qe(A,b){const V=A.colorSpace,Y=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Cs&&V!==gi&&(mt.getTransfer(V)===Mt?(Y!==Rn||se!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function We(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=lt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=re}function U_(i,e){function t(n,s=gi){let r;const a=mt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===kh)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===Rn)return i.RGBA;if(n===ur)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===Al)return i.RED;if(n===Rl)return i.RED_INTEGER;if(n===Wh)return i.RG;if(n===Cl)return i.RG_INTEGER;if(n===Pl)return i.RGBA_INTEGER;if(n===ra||n===aa||n===oa||n===la)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===zo||n===ko||n===Bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Ho)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===jo||n===Zo||n===Jo||n===Ko||n===Qo||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ei({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends Os{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new O_,p={},x=t.getContextAttributes();let M=null,v=null;const T=[],w=[],R=new fe;let C=null;const S=new fn;S.viewport=new It;const y=new fn;y.viewport=new It;const P=[S,y],D=new sp;let U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=T[q];return te===void 0&&(te=new ro,T[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=T[q];return te===void 0&&(te=new ro,T[q]=te),te.getGripSpace()},this.getHand=function(q){let te=T[q];return te===void 0&&(te=new ro,T[q]=te),te.getHandSpace()};function F(q){const te=w.indexOf(q.inputSource);if(te===-1)return;const ye=T[te];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||a),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let q=0;q<T.length;q++){const te=w[q];te!==null&&(w[q]=null,T[q].disconnect(te))}U=null,N=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(M),f=null,d=null,h=null,s=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,we=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?fr:ur,we=x.stencil?hr:Gi);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Wi(d.textureWidth,d.textureHeight,{format:Rn,type:kn,depthTexture:new tu(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Wi(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let te=0;te<q.removed.length;te++){const ye=q.removed[te],we=w.indexOf(ye);we>=0&&(w[we]=null,T[we].disconnect(ye))}for(let te=0;te<q.added.length;te++){const ye=q.added[te];let we=w.indexOf(ye);if(we===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=w.length){w.push(ye),we=Ke;break}else if(w[Ke]===null){w[Ke]=ye,we=Ke;break}if(we===-1)break}const Ee=T[we];Ee&&Ee.connect(ye)}}const H=new L,ce=new L;function de(q,te,ye){H.setFromMatrixPosition(te.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const we=H.distanceTo(ce),Ee=te.projectionMatrix.elements,Ke=ye.projectionMatrix.elements,lt=Ee[14]/(Ee[10]-1),I=Ee[14]/(Ee[10]+1),ie=(Ee[9]+1)/Ee[5],Q=(Ee[9]-1)/Ee[5],J=(Ee[8]-1)/Ee[0],K=(Ke[8]+1)/Ke[0],pe=lt*J,re=lt*K,me=we/(-J+K),qe=me*-J;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(qe),q.translateZ(me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const We=lt+me,A=I+me,b=pe-qe,V=re+(we-qe),Y=ie*I/A*We,se=Q*I/A*We;q.projectionMatrix.makePerspective(b,V,Y,se,We,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Se(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,ye=q.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),D.near=y.near=S.near=te,D.far=y.far=S.far=ye,(U!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,N=D.far),D.layers.mask=q.layers.mask|6,S.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;const we=q.parent,Ee=D.cameras;Se(D,we);for(let Ke=0;Ke<Ee.length;Ke++)Se(Ee[Ke],we);Ee.length===2?de(D,S,y):D.projectionMatrix.copy(S.projectionMatrix),Ge(q,D,we)};function Ge(q,te,ye){ye===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ul*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return p[q]};let Fe=null;function Ue(q,te){if(u=te.getViewerPose(l||a),_=te,u!==null){const ye=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let we=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,we=!0);for(let I=0;I<ye.length;I++){const ie=ye[I];let Q=null;if(f!==null)Q=f.getViewport(ie);else{const K=h.getViewSubImage(d,ie);Q=K.viewport,I===0&&(e.setRenderTargetTextures(v,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(v))}let J=P[I];J===void 0&&(J=new fn,J.layers.enable(I),J.viewport=new It,P[I]=J),J.matrix.fromArray(ie.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ie.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(D.matrix.copy(J.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),we===!0&&D.cameras.push(J)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const I=h.getDepthInformation(ye[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let I=0;I<ye.length;I++){const ie=ye[I].camera;if(ie){let Q=p[ie];Q||(Q=new nu,p[ie]=Q);const J=h.getCameraImage(ie);Q.sourceTexture=J}}}}for(let ye=0;ye<T.length;ye++){const we=w[ye],Ee=T[ye];we!==null&&Ee!==void 0&&Ee.update(we,te,l||a)}Fe&&Fe(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Be=new pu;Be.setAnimationLoop(Ue),this.setAnimationLoop=function(q){Fe=q},this.dispose=function(){}}}const Ii=new Bn,k_=new Et;function B_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Ii)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function l(x,M){let v=s[x.id];v===void 0&&(_(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const w=e.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function u(x){const M=h();x.__bindingPointIndex=M;const v=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,R=v.length;w<R;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,y=C.length;S<y;S++){const P=C[S];if(f(P,w,S,T)===!0){const D=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let F=0;F<U.length;F++){const B=U[F],X=g(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,D+N,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,v,T){const w=x.value,R=M+"_"+v;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const C=T[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(x){const M=x.uniforms;let v=0;const T=16;for(let R=0,C=M.length;R<C;R++){const S=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,P=S.length;y<P;y++){const D=S[y],U=Array.isArray(D.value)?D.value:[D.value];for(let N=0,F=U.length;N<F;N++){const B=U[N],X=g(B),H=v%T,ce=H%X.boundary,de=H+ce;v+=ce,de!==0&&T-de<X.storage&&(v+=T-de),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=X.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Xl{constructor(e={}){const{canvas:t=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=un;let w=0,R=0,C=null,S=-1,y=null;const P=new It,D=new It;let U=null;const N=new st(0);let F=0,B=t.width,X=t.height,H=1,ce=null,de=null;const Se=new It(0,0,B,X),Ge=new It(0,0,B,X);let Fe=!1;const Ue=new Fl;let Be=!1,q=!1;const te=new Et,ye=new L,we=new It,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function lt(){return C===null?H:1}let I=n;function ie(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const z="webgl2";if(I=ie(z,E),I===null)throw ie(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,J,K,pe,re,me,qe,We,A,b,V,Y,se,$,Le,ue,Re,Ce,ae,Me,Ve,De,xe,je;function O(){Q=new K0(I),Q.init(),De=new U_(I,Q),J=new X0(I,Q,e,De),K=new I_(I,Q),J.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),pe=new tg(I),re=new v_,me=new D_(I,Q,K,re,J,De,pe),qe=new Y0(v),We=new J0(v),A=new op(I),xe=new G0(I,A),b=new Q0(I,A,pe,xe),V=new ig(I,b,A,pe),ae=new ng(I,J,me),ue=new q0(re),Y=new x_(v,qe,We,Q,J,xe,ue),se=new B_(v,re),$=new y_,Le=new A_(Q),Ce=new H0(v,qe,We,K,V,f,c),Re=new P_(v,V,J),je=new V_(I,pe,J,K),Me=new W0(I,Q,pe),Ve=new eg(I,Q,pe),pe.programs=Y.programs,v.capabilities=J,v.extensions=Q,v.properties=re,v.renderLists=$,v.shadowMap=Re,v.state=K,v.info=pe}O();const he=new z_(v,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(B,X,!1))},this.getSize=function(E){return E.set(B,X)},this.setSize=function(E,z,G=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,X=z,t.width=Math.floor(E*H),t.height=Math.floor(z*H),G===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(B*H,X*H).floor()},this.setDrawingBufferSize=function(E,z,G){B=E,X=z,H=G,t.width=Math.floor(E*G),t.height=Math.floor(z*G),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,z,G,W){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,z,G,W),K.viewport(P.copy(Se).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,z,G,W){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,z,G,W),K.scissor(D.copy(Ge).multiplyScalar(H).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){K.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,G=!0){let W=0;if(E){let k=!1;if(C!==null){const le=C.texture.format;k=le===Pl||le===Cl||le===Rl}if(k){const le=C.texture.type,ve=le===kn||le===Gi||le===cr||le===hr||le===wl||le===Tl,Ae=Ce.getClearColor(),be=Ce.getClearAlpha(),ke=Ae.r,He=Ae.g,Oe=Ae.b;ve?(_[0]=ke,_[1]=He,_[2]=Oe,_[3]=be,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=ke,g[1]=He,g[2]=Oe,g[3]=be,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}z&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ce.dispose(),$.dispose(),Le.dispose(),re.dispose(),qe.dispose(),We.dispose(),V.dispose(),xe.dispose(),je.dispose(),Y.dispose(),he.dispose(),he.removeEventListener("sessionstart",Pn),he.removeEventListener("sessionend",ic),wi.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=pe.autoReset,z=Re.enabled,G=Re.autoUpdate,W=Re.needsUpdate,k=Re.type;O(),pe.autoReset=E,Re.enabled=z,Re.autoUpdate=G,Re.needsUpdate=W,Re.type=k}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const z=E.target;z.removeEventListener("dispose",ee),Pe(z)}function Pe(E){Ye(E),re.remove(E)}function Ye(E){const z=re.get(E).programs;z!==void 0&&(z.forEach(function(G){Y.releaseProgram(G)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,G,W,k,le){z===null&&(z=Ee);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Ae=$u(E,z,G,W,k);K.setMaterial(W,ve);let be=G.index,ke=1;if(W.wireframe===!0){if(be=b.getWireframeAttribute(G),be===void 0)return;ke=2}const He=G.drawRange,Oe=G.attributes.position;let ct=He.start*ke,xt=(He.start+He.count)*ke;le!==null&&(ct=Math.max(ct,le.start*ke),xt=Math.min(xt,(le.start+le.count)*ke)),be!==null?(ct=Math.max(ct,0),xt=Math.min(xt,be.count)):Oe!=null&&(ct=Math.max(ct,0),xt=Math.min(xt,Oe.count));const Pt=xt-ct;if(Pt<0||Pt===1/0)return;xe.setup(k,W,Ae,G,be);let wt,yt=Me;if(be!==null&&(wt=A.get(be),yt=Ve,yt.setIndex(wt)),k.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*lt()),yt.setMode(I.LINES)):yt.setMode(I.TRIANGLES);else if(k.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),K.setLineWidth(ze*lt()),k.isLineSegments?yt.setMode(I.LINES):k.isLineLoop?yt.setMode(I.LINE_LOOP):yt.setMode(I.LINE_STRIP)}else k.isPoints?yt.setMode(I.POINTS):k.isSprite&&yt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))yt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,At=k._multiDrawCounts,pt=k._multiDrawCount,on=be?A.get(be).bytesPerElement:1,es=re.get(W).currentProgram.getUniforms();for(let ln=0;ln<pt;ln++)es.setValue(I,"_gl_DrawID",ln),yt.render(ze[ln]/on,At[ln])}else if(k.isInstancedMesh)yt.renderInstances(ct,Pt,k.count);else if(G.isInstancedBufferGeometry){const ze=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,At=Math.min(G.instanceCount,ze);yt.renderInstances(ct,Pt,At)}else yt.render(ct,Pt)};function St(E,z,G){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,Rr(E,z,G),E.side=bi,E.needsUpdate=!0,Rr(E,z,G),E.side=dn):Rr(E,z,G)}this.compile=function(E,z,G=null){G===null&&(G=E),p=Le.get(G),p.init(z),M.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==G&&E.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const W=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const le=k.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const Ae=le[ve];St(Ae,G,k),W.add(Ae)}else St(le,G,k),W.add(le)}),p=M.pop(),W},this.compileAsync=function(E,z,G=null){const W=this.compile(E,z,G);return new Promise(k=>{function le(){if(W.forEach(function(ve){re.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){k(E);return}setTimeout(le,10)}Q.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let _t=null;function Xn(E){_t&&_t(E)}function Pn(){wi.stop()}function ic(){wi.start()}const wi=new pu;wi.setAnimationLoop(Xn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(E){_t=E,he.setAnimationLoop(E),E===null?wi.stop():wi.start()},he.addEventListener("sessionstart",Pn),he.addEventListener("sessionend",ic),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(z),z=he.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,z,C),p=Le.get(E,M.length),p.init(z),M.push(p),te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ue.setFromProjectionMatrix(te,Fn,z.reversedDepth),q=this.localClippingEnabled,Be=ue.init(this.clippingPlanes,q),m=$.get(E,x.length),m.init(),x.push(m),he.enabled===!0&&he.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&Ua(le,z,-1/0,v.sortObjects)}Ua(E,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ce,de),Ke=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ke&&Ce.addToRenderList(m,E),this.info.render.frame++,Be===!0&&ue.beginShadows();const G=p.state.shadowsArray;Re.render(G,E,z),Be===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const le=z.cameras;if(k.length>0)for(let ve=0,Ae=le.length;ve<Ae;ve++){const be=le[ve];rc(W,k,E,be)}Ke&&Ce.render(E);for(let ve=0,Ae=le.length;ve<Ae;ve++){const be=le[ve];sc(m,E,be,be.viewport)}}else k.length>0&&rc(W,k,E,z),Ke&&Ce.render(E),sc(m,E,z);C!==null&&R===0&&(me.updateMultisampleRenderTarget(C),me.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,z),xe.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],Be===!0&&ue.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ua(E,z,G,W){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){W&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);const ve=V.update(E),Ae=E.material;Ae.visible&&m.push(E,ve,Ae,G,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){const ve=V.update(E),Ae=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),we.copy(ve.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(te)),Array.isArray(Ae)){const be=ve.groups;for(let ke=0,He=be.length;ke<He;ke++){const Oe=be[ke],ct=Ae[Oe.materialIndex];ct&&ct.visible&&m.push(E,ve,ct,G,we.z,Oe)}}else Ae.visible&&m.push(E,ve,Ae,G,we.z,null)}}const le=E.children;for(let ve=0,Ae=le.length;ve<Ae;ve++)Ua(le[ve],z,G,W)}function sc(E,z,G,W){const k=E.opaque,le=E.transmissive,ve=E.transparent;p.setupLightsView(G),Be===!0&&ue.setGlobalState(v.clippingPlanes,G),W&&K.viewport(P.copy(W)),k.length>0&&Ar(k,z,G),le.length>0&&Ar(le,z,G),ve.length>0&&Ar(ve,z,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function rc(E,z,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Wi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?vr:kn,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const le=p.state.transmissionRenderTarget[W.id],ve=W.viewport||P;le.setSize(ve.z*v.transmissionResolutionScale,ve.w*v.transmissionResolutionScale);const Ae=v.getRenderTarget(),be=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(N),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&Ce.render(G);const He=v.toneMapping;v.toneMapping=yi;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Be===!0&&ue.setGlobalState(v.clippingPlanes,W),Ar(E,G,W),me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let xt=0,Pt=z.length;xt<Pt;xt++){const wt=z[xt],yt=wt.object,ze=wt.geometry,At=wt.material,pt=wt.group;if(At.side===dn&&yt.layers.test(W.layers)){const on=At.side;At.side=an,At.needsUpdate=!0,ac(yt,G,W,ze,At,pt),At.side=on,At.needsUpdate=!0,ct=!0}}ct===!0&&(me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le))}v.setRenderTarget(Ae,be,ke),v.setClearColor(N,F),Oe!==void 0&&(W.viewport=Oe),v.toneMapping=He}function Ar(E,z,G){const W=z.isScene===!0?z.overrideMaterial:null;for(let k=0,le=E.length;k<le;k++){const ve=E[k],Ae=ve.object,be=ve.geometry,ke=ve.group;let He=ve.material;He.allowOverride===!0&&W!==null&&(He=W),Ae.layers.test(G.layers)&&ac(Ae,z,G,be,He,ke)}}function ac(E,z,G,W,k,le){E.onBeforeRender(v,z,G,W,k,le),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,z,G,W,E,le),k.transparent===!0&&k.side===dn&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,v.renderBufferDirect(G,z,W,k,E,le),k.side=bi,k.needsUpdate=!0,v.renderBufferDirect(G,z,W,k,E,le),k.side=dn):v.renderBufferDirect(G,z,W,k,E,le),E.onAfterRender(v,z,G,W,k,le)}function Rr(E,z,G){z.isScene!==!0&&(z=Ee);const W=re.get(E),k=p.state.lights,le=p.state.shadowsArray,ve=k.state.version,Ae=Y.getParameters(E,k.state,le,z,G),be=Y.getProgramCacheKey(Ae);let ke=W.programs;W.environment=E.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(E.isMeshStandardMaterial?We:qe).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",ee),ke=new Map,W.programs=ke);let He=ke.get(be);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===ve)return lc(E,Ae),He}else Ae.uniforms=Y.getUniforms(E),E.onBeforeCompile(Ae,v),He=Y.acquireProgram(Ae,be),ke.set(be,He),W.uniforms=Ae.uniforms;const Oe=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=ue.uniform),lc(E,Ae),W.needsLights=Zu(E),W.lightsStateVersion=ve,W.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMap.value=k.state.directionalShadowMap,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotShadowMap.value=k.state.spotShadowMap,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMap.value=k.state.pointShadowMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function oc(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=ca.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function lc(E,z){const G=re.get(E);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function $u(E,z,G,W,k){z.isScene!==!0&&(z=Ee),me.resetTextureUnits();const le=z.fog,ve=W.isMeshStandardMaterial?z.environment:null,Ae=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cs,be=(W.isMeshStandardMaterial?We:qe).get(W.envMap||ve),ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,xt=!!G.morphAttributes.color;let Pt=yi;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,yt=wt!==void 0?wt.length:0,ze=re.get(W),At=p.state.lights;if(Be===!0&&(q===!0||E!==y)){const Jt=E===y&&W.id===S;ue.setState(W,E,Jt)}let pt=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==At.state.version||ze.outputColorSpace!==Ae||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isBatchedMesh&&ze.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ze.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ze.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ze.instancingMorph===!1&&k.morphTexture!==null||ze.envMap!==be||W.fog===!0&&ze.fog!==le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ue.numPlanes||ze.numIntersection!==ue.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==He||ze.morphTargets!==Oe||ze.morphNormals!==ct||ze.morphColors!==xt||ze.toneMapping!==Pt||ze.morphTargetsCount!==yt)&&(pt=!0):(pt=!0,ze.__version=W.version);let on=ze.currentProgram;pt===!0&&(on=Rr(W,z,k));let es=!1,ln=!1,Hs=!1;const Rt=on.getUniforms(),mn=ze.uniforms;if(K.useProgram(on.program)&&(es=!0,ln=!0,Hs=!0),W.id!==S&&(S=W.id,ln=!0),es||y!==E){K.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Rt.setValue(I,"projectionMatrix",E.projectionMatrix),Rt.setValue(I,"viewMatrix",E.matrixWorldInverse);const sn=Rt.map.cameraPosition;sn!==void 0&&sn.setValue(I,ye.setFromMatrixPosition(E.matrixWorld)),J.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ln=!0,Hs=!0)}if(k.isSkinnedMesh){Rt.setOptional(I,k,"bindMatrix"),Rt.setOptional(I,k,"bindMatrixInverse");const Jt=k.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Rt.setValue(I,"boneTexture",Jt.boneTexture,me))}k.isBatchedMesh&&(Rt.setOptional(I,k,"batchingTexture"),Rt.setValue(I,"batchingTexture",k._matricesTexture,me),Rt.setOptional(I,k,"batchingIdTexture"),Rt.setValue(I,"batchingIdTexture",k._indirectTexture,me),Rt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",k._colorsTexture,me));const gn=G.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ae.update(k,G,on),(ln||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,Rt.setValue(I,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mn.envMap.value=be,mn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(mn.envMapIntensity.value=z.environmentIntensity),ln&&(Rt.setValue(I,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&ju(mn,Hs),le&&W.fog===!0&&se.refreshFogUniforms(mn,le),se.refreshMaterialUniforms(mn,W,H,X,p.state.transmissionRenderTarget[E.id]),ca.upload(I,oc(ze),mn,me)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ca.upload(I,oc(ze),mn,me),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Rt.setValue(I,"center",k.center),Rt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Rt.setValue(I,"normalMatrix",k.normalMatrix),Rt.setValue(I,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Jt=W.uniformsGroups;for(let sn=0,Na=Jt.length;sn<Na;sn++){const Ti=Jt[sn];je.update(Ti,on),je.bind(Ti,on)}}return on}function ju(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Zu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,z,G){const W=re.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),re.get(E.texture).__webglTexture=z,re.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const G=re.get(E);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0};const Ju=I.createFramebuffer();this.setRenderTarget=function(E,z=0,G=0){C=E,w=z,R=G;let W=!0,k=null,le=!1,ve=!1;if(E){const be=re.get(E);if(be.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)me.setupRenderTarget(E);else if(be.__hasExternalTextures)me.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(be.__boundDepthTexture!==Oe){if(Oe!==null&&re.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const He=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[z])?k=He[z][G]:k=He[z],le=!0):E.samples>0&&me.useMultisampledRTT(E)===!1?k=re.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[G]:k=He,P.copy(E.viewport),D.copy(E.scissor),U=E.scissorTest}else P.copy(Se).multiplyScalar(H).floor(),D.copy(Ge).multiplyScalar(H).floor(),U=Fe;if(G!==0&&(k=Ju),K.bindFramebuffer(I.FRAMEBUFFER,k)&&W&&K.drawBuffers(E,k),K.viewport(P),K.scissor(D),K.setScissorTest(U),le){const be=re.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,G)}else if(ve){const be=z;for(let ke=0;ke<E.textures.length;ke++){const He=re.get(E.textures[ke]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ke,He.__webglTexture,G,be)}}else if(E!==null&&G!==0){const be=re.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(E,z,G,W,k,le,ve,Ae=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){K.bindFramebuffer(I.FRAMEBUFFER,be);try{const ke=E.textures[Ae],He=ke.format,Oe=ke.type;if(!J.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-W&&G>=0&&G<=E.height-k&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(z,G,W,k,De.convert(He),De.convert(Oe),le))}finally{const ke=C!==null?re.get(C).__webglFramebuffer:null;K.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,z,G,W,k,le,ve,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(z>=0&&z<=E.width-W&&G>=0&&G<=E.height-k){K.bindFramebuffer(I.FRAMEBUFFER,be);const ke=E.textures[Ae],He=ke.format,Oe=ke.type;if(!J.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(z,G,W,k,De.convert(He),De.convert(Oe),0);const xt=C!==null?re.get(C).__webglFramebuffer:null;K.bindFramebuffer(I.FRAMEBUFFER,xt);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wf(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(ct),I.deleteSync(Pt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,G=0){const W=Math.pow(2,-G),k=Math.floor(E.image.width*W),le=Math.floor(E.image.height*W),ve=z!==null?z.x:0,Ae=z!==null?z.y:0;me.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ve,Ae,k,le),K.unbindTexture()};const Ku=I.createFramebuffer(),Qu=I.createFramebuffer();this.copyTextureToTexture=function(E,z,G=null,W=null,k=0,le=null){le===null&&(k!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=k,k=0):le=0);let ve,Ae,be,ke,He,Oe,ct,xt,Pt;const wt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(G!==null)ve=G.max.x-G.min.x,Ae=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,ke=G.min.x,He=G.min.y,Oe=G.isBox3?G.min.z:0;else{const gn=Math.pow(2,-k);ve=Math.floor(wt.width*gn),Ae=Math.floor(wt.height*gn),E.isDataArrayTexture?be=wt.depth:E.isData3DTexture?be=Math.floor(wt.depth*gn):be=1,ke=0,He=0,Oe=0}W!==null?(ct=W.x,xt=W.y,Pt=W.z):(ct=0,xt=0,Pt=0);const yt=De.convert(z.format),ze=De.convert(z.type);let At;z.isData3DTexture?(me.setTexture3D(z,0),At=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(me.setTexture2DArray(z,0),At=I.TEXTURE_2D_ARRAY):(me.setTexture2D(z,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const pt=I.getParameter(I.UNPACK_ROW_LENGTH),on=I.getParameter(I.UNPACK_IMAGE_HEIGHT),es=I.getParameter(I.UNPACK_SKIP_PIXELS),ln=I.getParameter(I.UNPACK_SKIP_ROWS),Hs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oe);const Rt=E.isDataArrayTexture||E.isData3DTexture,mn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const gn=re.get(E),Jt=re.get(z),sn=re.get(gn.__renderTarget),Na=re.get(Jt.__renderTarget);K.bindFramebuffer(I.READ_FRAMEBUFFER,sn.__webglFramebuffer),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Ti=0;Ti<be;Ti++)Rt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,re.get(E).__webglTexture,k,Oe+Ti),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,re.get(z).__webglTexture,le,Pt+Ti)),I.blitFramebuffer(ke,He,ve,Ae,ct,xt,ve,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST);K.bindFramebuffer(I.READ_FRAMEBUFFER,null),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||re.has(E)){const gn=re.get(E),Jt=re.get(z);K.bindFramebuffer(I.READ_FRAMEBUFFER,Ku),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qu);for(let sn=0;sn<be;sn++)Rt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gn.__webglTexture,k,Oe+sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gn.__webglTexture,k),mn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jt.__webglTexture,le,Pt+sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jt.__webglTexture,le),k!==0?I.blitFramebuffer(ke,He,ve,Ae,ct,xt,ve,Ae,I.COLOR_BUFFER_BIT,I.NEAREST):mn?I.copyTexSubImage3D(At,le,ct,xt,Pt+sn,ke,He,ve,Ae):I.copyTexSubImage2D(At,le,ct,xt,ke,He,ve,Ae);K.bindFramebuffer(I.READ_FRAMEBUFFER,null),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else mn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(At,le,ct,xt,Pt,ve,Ae,be,yt,ze,wt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(At,le,ct,xt,Pt,ve,Ae,be,yt,wt.data):I.texSubImage3D(At,le,ct,xt,Pt,ve,Ae,be,yt,ze,wt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,ct,xt,ve,Ae,yt,ze,wt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,ct,xt,wt.width,wt.height,yt,wt.data):I.texSubImage2D(I.TEXTURE_2D,le,ct,xt,ve,Ae,yt,ze,wt);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,on),I.pixelStorei(I.UNPACK_SKIP_PIXELS,es),I.pixelStorei(I.UNPACK_SKIP_ROWS,ln),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Hs),le===0&&z.generateMipmaps&&I.generateMipmap(At),K.unbindTexture()},this.initRenderTarget=function(E){re.get(E).__webglFramebuffer===void 0&&me.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,K.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const H_="1.15";function G_(i="",e=globalThis.location){const t=i.trim()||(e.protocol==="file:"?"":e.origin);if(!t)throw new Error("Укажи адрес сервера игры или открой игру на его сайте.");const n=new URL(t);if(!["http:","https:","ws:","wss:"].includes(n.protocol)||n.username||n.password)throw new Error("Нужен адрес вида https://игра.рф");if(n.protocol=["https:","wss:"].includes(n.protocol)?"wss:":"ws:",e.protocol==="https:"&&n.protocol!=="wss:")throw new Error("Для этой страницы нужен сервер с HTTPS.");return n.pathname="/rooms",n.search="",n.hash="",n.href}class W_{constructor(e,t=null){this.events={},this.open=!1,this.closed=!1,this.socket=new WebSocket(G_(e)),this.socket.onopen=()=>this.socket.send(JSON.stringify({action:t?"join":"create",code:t,version:H_})),this.socket.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}s.event==="created"&&this.emit("created",s.code),s.event==="paired"&&(this.open=!0,this.emit("open")),s.event==="data"&&this.open&&this.emit("data",s.data),s.event==="error"&&(this.failed=!0,this.emit("error",new Error(s.message)),this.close())},this.socket.onerror=()=>{this.failed=!0,this.emit("error",new Error("Сервер комнат недоступен. Проверь адрес и что на нём запущена серверная версия игры."))},this.socket.onclose=()=>{this.open=!1,this.closed=!0,this.emit("close")}}on(e,t){return(this.events[e]??=[]).push(t),this}emit(e,...t){for(const n of this.events[e]||[])n(...t)}removeAllListeners(){this.events={}}send(e){this.open&&this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify({action:"data",data:e}))}close(){this.open=!1,this.closed=!0,this.socket.close()}}const ht=(i,e,t,n,s,r="crate")=>({x:i,z:e,w:t,d:n,height:s,kind:r}),Bi=[{id:"cloud",name:"Облачный двор",subtitle:"Площадки, укрытия и длинные прострелы",width:28,depth:18,floor:"#a9c7a0",tile:"#bad4ae",trim:"#526d79",box:"#efdcb6",accent:"#d5ef68",spawns:[{x:-10,z:5},{x:10,z:-5}],obstacles:[ht(0,0,3,3,2),ht(-6,-4,3,2,1.65),ht(6,4,3,2,1.65),ht(5,-3,2,2,.85),ht(-5,3,2,2,.85),ht(0,-6,4,1.4,1.15),ht(0,6,4,1.4,1.15,"bench"),ht(-11,-7,2,2,1.6,"planter"),ht(11,7,2,2,1.6,"planter"),ht(-11,7,1.4,1.3,1.8,"arcade"),ht(11,-7,1.4,1.3,1.8,"arcade")]},{id:"candy",name:"Сахарный переполох",subtitle:"Цветные блоки и обходы по флангам",width:32,depth:22,floor:"#aa8cae",tile:"#caa9c3",trim:"#675378",box:"#f5b6b9",accent:"#f9dc83",spawns:[{x:-12,z:7},{x:12,z:-7}],obstacles:[ht(-3,0,2,7,2.2,"wall"),ht(3,0,2,7,2.2,"wall"),ht(0,-6,5,2,.85),ht(0,6,5,2,.85),ht(-9,-5,3,3,1.6),ht(9,5,3,3,1.6),ht(-9,5,3,2,.9),ht(9,-5,3,2,.9),ht(-13,-9.2,2,2,1.35,"gift"),ht(13,9.2,2,2,1.35,"gift"),ht(-13,9.2,2,2,1.6,"planter"),ht(13,-9.2,2,2,1.6,"planter")]},{id:"harbor",name:"Порт игрушек",subtitle:"Самая большая арена с контейнерами",width:36,depth:24,floor:"#739cad",tile:"#a0c2c7",trim:"#41627a",box:"#f0b67d",accent:"#8ee5e1",spawns:[{x:-14,z:8},{x:14,z:-8}],obstacles:[ht(-6,-5,6,2.5,2.4,"wall"),ht(6,5,6,2.5,2.4,"wall"),ht(0,0,2.5,5,1.8),ht(-10,4,3,3,1),ht(10,-4,3,3,1),ht(1,-8,4,2,.85),ht(-1,8,4,2,.85),ht(-13,-7,2,2,1.8),ht(13,7,2,2,1.8),ht(-15,0,1.8,1.6,1.9,"terminal"),ht(15,0,1.8,1.6,1.9,"terminal"),ht(-3,-10,2,1.5,1.2,"bench"),ht(3,10,2,1.5,1.2,"bench")]}];function Mn(i){return Bi.find(e=>e.id===i)||Bi[0]}const gl=["#79cbff","#ff8875","#d5ef68","#c8a3ff","#ffb6da","#ffce75","#83e0c0","#f3efe5"],vu=[{id:"none",name:"Без шапки"},{id:"beanie",name:"Шапочка"},{id:"crown",name:"Корона"},{id:"antenna",name:"Антенна"},{id:"starshades",name:"Звёздные очки"},{id:"headphones",name:"Наушники"},{id:"visor",name:"Козырёк"}],Mu=[{id:"happy",name:"Весельчак"},{id:"angry",name:"Серьёзный"},{id:"goofy",name:"Чудак"}];function jt(i={},e=0){return{color:gl.includes(i?.color)?i.color:gl[e%2],hat:vu.some(t=>t.id===i?.hat)?i.hat:"none",face:Mu.some(t=>t.id===i?.face)?i.face:"happy"}}const _l=[{id:"sky",name:"Бластер",color:"#79cbff",hat:"beanie",face:"happy"},{id:"pink",name:"Принцесса",color:"#ffb6da",hat:"crown",face:"goofy"},{id:"mint",name:"Пришелец",color:"#83e0c0",hat:"antenna",face:"angry"},{id:"sun",name:"Звезда",color:"#ffce75",hat:"starshades",face:"happy"},{id:"lilac",name:"Рокер",color:"#c8a3ff",hat:"headphones",face:"happy"},{id:"peach",name:"Капитан",color:"#ff8875",hat:"visor",face:"angry"}],On=8,yu=i=>Math.max(0,Math.min(On,Number.isFinite(i)?i:0)),ti=Object.freeze([Object.freeze({id:"pbj",name:"ПБЖ",icon:"🥪",bpm:120}),Object.freeze({id:"tenna",name:"Тенна",icon:"🎩",bpm:120}),Object.freeze({id:"die",name:"Умереть",icon:"💀",bpm:110}),Object.freeze({id:"paranoid",name:"Параноид",icon:"🌀",bpm:128}),Object.freeze({id:"sickriff",name:"Сикрифф",icon:"🎸",bpm:132}),Object.freeze({id:"teto",name:"Тето",icon:"🎶",bpm:130}),Object.freeze({id:"boom",name:"БУМ!",icon:"💥",bpm:120}),Object.freeze({id:"qualified",name:"Квалифицированный",icon:"✨",bpm:112}),Object.freeze({id:"griddy",name:"Гриди",icon:"👟",bpm:140}),Object.freeze({id:"metroswing",name:"Метрошвинги",icon:"🚇",bpm:120}),Object.freeze({id:"talking",name:"Говорили о",icon:"🎤",bpm:110}),Object.freeze({id:"kazotsky",name:"Казотский",icon:"🪗",bpm:130}),Object.freeze({id:"down",name:"ОНО СХОДИТ ВНИЗ",icon:"⬇",bpm:128}),Object.freeze({id:"shuba",name:"Шуба",icon:"🦆",bpm:120}),Object.freeze({id:"friends",name:"С друзьями",icon:"🤝",bpm:120}),Object.freeze({id:"aura",name:"Аура",icon:"🌟",bpm:110}),Object.freeze({id:"jackpot",name:"Джекпот",icon:"🎰",bpm:135})]),ir=Object.freeze(ti.map(i=>i.id)),X_={fireball:[.26,.15,.24],frost:[.25,.15,.22],lightning:[.32,.18,.25],meteor:[.55,.22,.35],charm:[.42,.2,.32],tongue:[.28,.65,.25],fart:[.28,.35,.3],shotgun:[.18,.1,.34],rocket:[.38,.12,.36],boomerang:[.24,.18,.28],dash:[.15,.36,.22],blink:[.25,.1,.2],heal:[.5,.5,.25],bubble:[.2,.22,.18],stomp:[.36,.28,.34],tornado:[.4,.2,.3],blackhole:[.48,.2,.35],mine:[.3,.25,.22],turret:[.4,.35,.28],banana:[.25,.18,.2],vampire:[.38,.35,.3],swap:[.38,.18,.3],decoy:[.38,.35,.28],laser:[.42,.3,.32]},Yi=[{id:"fireball",name:"Огненный шар",symbol:"🔥",desc:"Взрывной шар: 30 урона в радиусе 2 м.",color:"#ff7849",category:"Магия",cooldown:5,range:16},{id:"frost",name:"Ледяная плюшка",symbol:"❄",desc:"20 урона и замедление врага на 2,5 с.",color:"#86e7ff",category:"Магия",cooldown:6,range:16},{id:"lightning",name:"Разряд",symbol:"ϟ",desc:"Мгновенная молния: 24 урона и короткое оглушение.",color:"#ffe773",category:"Магия",cooldown:7,range:11},{id:"meteor",name:"Метеор-пончик",symbol:"☄",desc:"Через 0,7 с падает метеор: 40 урона в области.",color:"#ffad68",category:"Магия",cooldown:10,range:7},{id:"charm",name:"Сила обаяния",symbol:"♥",desc:"Сердечко мягко притягивает врага 1,2 с. Можно сопротивляться!",color:"#ff82c2",category:"Приколы",cooldown:8,range:14},{id:"tongue",name:"Язык-хватайка",symbol:"👅",desc:"Длинный язык подтягивает врага и наносит 12 урона.",color:"#ff779e",category:"Приколы",cooldown:7,range:9},{id:"fart",name:"Газовая атака",symbol:"💨",desc:"Облако на 3 с: 12 урона/с и медленные ножки.",color:"#b8e56e",category:"Приколы",cooldown:9,range:3},{id:"shotgun",name:"Конфетный дробовик",symbol:"⋔",desc:"Шесть конфет веером, по 9 урона каждая.",color:"#ffcb8b",category:"Оружие",cooldown:5,range:10},{id:"rocket",name:"Ракета-хлопушка",symbol:"🚀",desc:"Медленная ракета: 38 урона и мощный толчок.",color:"#ff8e6f",category:"Оружие",cooldown:8,range:18},{id:"boomerang",name:"Бумеранг-пицца",symbol:"↝",desc:"Летит, отскакивает от стен и возвращается: 20 урона.",color:"#ffcf67",category:"Оружие",cooldown:6,range:10},{id:"dash",name:"Таран пузиком",symbol:"➜",desc:"Рывок на 5 м: 20 урона при столкновении.",color:"#c8a3ff",category:"Движение",cooldown:5,range:5},{id:"blink",name:"Пшик-телепорт",symbol:"✧",desc:"Мгновенно перемещает на 7 м до ближайшего укрытия.",color:"#b6abff",category:"Движение",cooldown:8,range:7},{id:"heal",name:"Вкусная аптечка",symbol:"✚",desc:"Восстанавливает 35 здоровья. Обнимашки себе!",color:"#83edbd",category:"Защита",cooldown:12,range:0},{id:"bubble",name:"Мыльный щит",symbol:"◉",desc:"Пузырь отражает снаряды и блокирует магию 2 с.",color:"#a9edff",category:"Защита",cooldown:10,range:0},{id:"stomp",name:"Топот великана",symbol:"◎",desc:"Удар по земле: 24 урона и толчок в радиусе 4 м.",color:"#ffd09a",category:"Магия",cooldown:8,range:4},{id:"tornado",name:"Вихрь носков",symbol:"🌀",desc:"Вихрь на 3 с притягивает и наносит 9 урона/с.",color:"#b7dbff",category:"Магия",cooldown:10,range:5},{id:"blackhole",name:"Карманная дыра",symbol:"●",desc:"2,5 с притяжения, затем взрыв на 28 урона.",color:"#a18bff",category:"Магия",cooldown:12,range:6},{id:"mine",name:"Мина-подарок",symbol:"🎁",desc:"Подарок ждёт 12 с. Враг рядом — взрыв на 38 урона.",color:"#ff94b5",category:"Оружие",cooldown:8,range:1.5},{id:"turret",name:"Пушка-утёнок",symbol:"🦆",desc:"Утёнок 8 с стреляет по видимому врагу: 12 урона.",color:"#ffe17a",category:"Оружие",cooldown:14,range:1.5},{id:"banana",name:"Банановая ловушка",symbol:"🍌",desc:"Кожура на 9 с: враг скользит, теряет 8 HP и замедляется.",color:"#fff07d",category:"Приколы",cooldown:7,range:2},{id:"vampire",name:"Вампирский поцелуй",symbol:"🦇",desc:"Забирает у видимого врага до 28 HP и лечит тебя.",color:"#e09aff",category:"Магия",cooldown:10,range:9},{id:"swap",name:"Поменялись!",symbol:"⇄",desc:"Меняет тебя и видимого врага местами до 10 м.",color:"#9cebe4",category:"Движение",cooldown:12,range:10},{id:"decoy",name:"Надувной двойник",symbol:"♟",desc:"Двойник на 6 с перехватывает пули; лопается с уроном 18.",color:"#f3ace9",category:"Приколы",cooldown:10,range:2},{id:"laser",name:"Диско-лазер",symbol:"━",desc:"Луч до 19 м: 36 урона. Укрытия останавливают луч.",color:"#ff7ed4",category:"Оружие",cooldown:9,range:19}].map(i=>{const[e,t,n]=X_[i.id];return Object.freeze({...i,preview:i.id,timing:Object.freeze({preparation:e,active:t,recovery:n}),duration:e+t+n})});function Zt(i){return Yi.find(e=>e.id===i)}const Gt=.56,$i=1.55,Pa=.12,bt=1e-5;function _h(i){return{x:i?10:-10,z:i?-5:5,y:0,vy:0,grounded:!0,jumpHeld:!1,hp:100,max:100,speed:5,jumpPower:7.5,damage:22,cool:.42,shot:0,shield:0,shieldCD:0,angle:i?-Math.PI/2:Math.PI/2,score:0,upgrades:[],triple:!1,bounce:!1,shots:0,footsteps:0,jumps:0,shields:0,walkDistance:0,look:jt({},i),skills:[],skillCooldowns:[],skillHeld:[!1,!1,!1],ready:!1,casts:0,latestCast:null,cast:null,aimPoint:null,skillReleases:0,latestRelease:null,impulses:[],pull:null,dash:null,motion:{x:0,z:0,speed:0,inputSpeed:0},slow:0,stun:0,charm:0,charmOwner:-1}}function ql(i="cloud",e=!0,t=[],n={}){const s=Mn(i),r={mapId:s.id,rotateMaps:e,players:[_h(0),_h(1)],bullets:[],effects:[],effectId:0,projectileId:0,phase:n.phase==="fight"?"fight":"loadout",round:1,loser:-1,winner:-1,time:0,celebration:{emote:null,elapsed:0}};return r.draftSeed=Math.floor((n.random||Math.random)()*4294967296)>>>0||2654435769,r.players.forEach((a,o)=>{Object.assign(a,s.spawns[o]),a.look=jt(t[o],o),a.offers=bu(a,()=>Su(r))}),n.phase==="fight"&&r.players.forEach(a=>{a.skills=["fireball","dash","heal"],a.skillCooldowns=[0,0,0],a.ready=!0}),r}function La(i,e){return Number.isInteger(e)&&e>=0&&e<i.players.length}function Su(i){let e=i.draftSeed||2654435769;return e^=e<<13,e^=e>>>17,e^=e<<5,i.draftSeed=e>>>0,i.draftSeed/4294967296}function bu(i,e=Math.random){const t=Yi.map(n=>n.id).filter(n=>!i.skills.includes(n));for(let n=t.length-1;n>0;n--){const s=Math.floor(e()*(n+1));[t[n],t[s]]=[t[s],t[n]]}return t.slice(0,5)}function q_(i,e,t,n){if(!La(i,e)||!Zt(t)||i.phase!=="loadout"&&!(i.phase==="pick"&&e===i.loser))return!1;const s=i.players[e];if(!s.offers?.includes(t)||s.ready&&i.phase==="loadout"||s.skills.includes(t))return!1;const r=n??s.skills.length;return i.phase==="loadout"&&r!==0||i.phase==="pick"&&s.skills.length<3&&r!==s.skills.length||!Number.isInteger(r)||r<0||r>=3||r>s.skills.length?!1:(s.skills[r]=t,s.skillCooldowns[r]=0,!0)}function Yl(i,e,t){return i.phase!=="loadout"||!La(i,e)||i.players[e].ready||!Array.isArray(t)||t.length!==1||!Zt(t[0])||!i.players[e].offers?.includes(t[0])?!1:(i.players[e].skills=[...t],i.players[e].skillCooldowns=t.map(()=>0),!0)}function $l(i,e){return i.phase!=="loadout"||!La(i,e)||i.players[e].ready||i.players[e].skills.length!==1||!i.players[e].offers?.includes(i.players[e].skills[0])?!1:(i.players[e].ready=!0,i.players.every(t=>t.ready)&&(i.phase="fight",i.time=0),!0)}function jl(i,e,t){return i.phase!=="celebration"||e!==i.winner||i.celebration.emote||!ir.includes(t)?!1:(i.celebration={emote:t,elapsed:0,startedAt:i.celebration.startedAt??i.time},!0)}function Zl(i,e,t,n){return i.phase!=="pick"||e!==i.loser||t!=null&&!q_(i,e,t,n)?!1:(Y_(i),!0)}function Y_(i){i.bullets=[],i.effects=[],i.round++,i.phase="fight",i.time=0,i.celebration={emote:null,elapsed:0},i.winner=-1,i.loser=-1,i.rotateMaps&&!i.arena&&(i.mapId=Bi[(Bi.findIndex(t=>t.id===i.mapId)+1)%Bi.length].id);const e=Wn(i);i.players.forEach((t,n)=>Object.assign(t,e.spawns[n],{offers:[],y:0,vy:0,grounded:!0,jumpHeld:!1,hp:t.max,shot:0,shield:0,shieldCD:0,walkDistance:0,slow:0,stun:0,charm:0,charmOwner:-1,aimPoint:null,skillCooldowns:t.skills.map(()=>0),skillHeld:[!1,!1,!1],cast:null,impulses:[],pull:null,dash:null,motion:{x:0,z:0,speed:0,inputSpeed:0},latestCast:null,latestRelease:null}))}function Wn(i){return i.arena||Mn(i.mapId)}function Eu(i,e,t,n){const s=Math.max(n.x-n.w/2,Math.min(i,n.x+n.w/2)),r=Math.max(n.z-n.d/2,Math.min(e,n.z+n.d/2));return(i-s)**2+(e-r)**2<t**2-bt}function wu(i,e){for(let t=0;t<4;t++){let n=!1;for(const s of e){if(i.y>=s.height-bt||i.y+$i<=0)continue;const r=Math.max(s.x-s.w/2,Math.min(i.x,s.x+s.w/2)),a=Math.max(s.z-s.d/2,Math.min(i.z,s.z+s.d/2)),o=i.x-r,c=i.z-a,l=Math.hypot(o,c);if(!(l>=Gt-bt))if(n=!0,l>bt)i.x+=o/l*(Gt-l+bt),i.z+=c/l*(Gt-l+bt);else{const h=[{distance:i.x-(s.x-s.w/2),x:s.x-s.w/2-Gt,axis:"x"},{distance:s.x+s.w/2-i.x,x:s.x+s.w/2+Gt,axis:"x"},{distance:i.z-(s.z-s.d/2),z:s.z-s.d/2-Gt,axis:"z"},{distance:s.z+s.d/2-i.z,z:s.z+s.d/2+Gt,axis:"z"}].sort((d,f)=>d.distance-f.distance)[0];i[h.axis]=h[h.axis]}}if(!n)break}}function sr(i,e,t,n){const s=Math.max(1,Math.ceil(Math.hypot(e,t)/.18));for(let r=0;r<s;r++)i.x+=e/s,i.z+=t/s,wu(i,n)}function Jl(i,e,t,n=Pa){let s=0,r=1,a=0,o=0;for(const[c,l]of[["x",t.w/2+n],["z",t.d/2+n]]){const u=e[c]-i[c],h=t[c]-l,d=t[c]+l;if(Math.abs(u)<bt){if(i[c]<h||i[c]>d)return null;continue}let f=(h-i[c])/u,_=(d-i[c])/u;const g=u>0?-1:1;if(f>_&&([f,_]=[_,f]),f>=s&&(s=f,a=c==="x"?g:0,o=c==="z"?g:0),r=Math.min(r,_),s>r)return null}if(r<0||s>1)return null;if(!a&&!o){const c=e.x-i.x,l=e.z-i.z;Math.abs(c)>Math.abs(l)?a=-Math.sign(c):o=-Math.sign(l)||1}return{t:Math.max(0,s),nx:a,nz:o}}function _a(i,e,t,n=Pa){const s=e.x-i.x,r=e.z-i.z,a=i.x-t.x,o=i.z-t.z,c=s*s+r*r,l=2*(a*s+o*r),u=a*a+o*o-(Gt+n)**2;if(u<=0)return 0;const h=l*l-4*c*u;if(c<bt||h<0)return null;const d=(-l-Math.sqrt(h))/(2*c);return d>=0&&d<=1?d:null}function Ds(i,e,t,n=.65){return!t.some(s=>n<s.height+Pa&&Jl(i,e,s))}function Ft(i,e,t,n={}){const s=i.players[t],r=Zt(n.skill||e),a={id:++i.effectId,type:e,skill:r?.id||e,owner:t,x:s.x,y:s.y+.65,z:s.z,targetX:s.x,targetY:s.y+.65,targetZ:s.z,angle:s.cast?.aim??s.angle,color:r?.color||"#fff0b5",radius:1,life:.4,maxLife:.4,age:0,phase:"active",castSequence:s.cast?.sequence||0,...n};return a.maxLife=a.life,i.effects.push(a),a}function Si(i,e,t,n,s=.12,r=e.y+.85,a=!1){const o=Wn(i),c={x:e.x+Math.sin(t)*n,z:e.z+Math.cos(t)*n};let l=1;for(const u of o.obstacles){if(a?e.y>=u.height-bt:r-s>=u.height)continue;const h=Jl(e,c,u,s);h&&(l=Math.min(l,Math.max(0,h.t-.015/Math.max(1,n))))}for(const[u,h]of[["x",o.width/2-s-.05],["z",o.depth/2-s-.05]])Math.abs(c[u])>h&&(l=Math.min(l,Math.max(0,(Math.sign(c[u])*h-e[u])/(c[u]-e[u]))));return{x:e.x+(c.x-e.x)*l,y:r,z:e.z+(c.z-e.z)*l}}function xl(i,e,t=100){let n=0;for(const s of Wn(i).obstacles)Math.abs(e.x-s.x)<=s.w/2&&Math.abs(e.z-s.z)<=s.d/2&&s.height<=t+bt&&(n=Math.max(n,s.height));return n}function Us(i,e,t,n=!1,s=.12,r=i.players[e].cast?.id){const a=i.players[e],o=r==="tongue",c=o?0:n?.3:.6,l=o?.5:n?.65:.84,u={x:a.x+Math.cos(t)*c+Math.sin(t)*l,z:a.z-Math.sin(t)*c+Math.cos(t)*l},h=Math.atan2(u.x-a.x,u.z-a.z);return Si(i,a,h,Math.hypot(u.x-a.x,u.z-a.z),s,a.y+(o?.8:.85))}function $_(i,e,t,n=.28){const s=i.x-e.x,r=i.z-e.z,a=Math.hypot(s,r)||1;i.impulses.push({type:"knockback",vx:s/a*t*2/n,vz:r/a*t*2/n,life:n,maxLife:n})}function ni(i,e,t,n,s=0){if(e.shield>0||e.hp<=0)return 0;const r=Math.min(e.hp,Math.max(0,t));return e.hp-=r,s&&r&&$_(e,n,s),r}function _s(i,e,t,n=e.radius){const s=e.ground?e.y+.65:e.y;return Math.hypot(t.x-e.x,t.z-e.z)<=n+Gt&&Math.abs(t.y+.65-s)<1.6&&Ds(e,t,Wn(i).obstacles,Math.min(s,t.y+.65))}function zi(i,e,t,n,s,r,a=1){const o=Ft(i,"explosion",e,{...t,radius:n,color:r,life:.5}),c=i.players[1-e];_s(i,o,c)&&ni(i,c,s,o,a)}function mi(i,e,t,n,s,r,a={},o){const c=Zt(t),l=["fireball","frost","charm"].includes(t),u=o||Us(i,e,n,l,a.radius||.12),h={id:++i.projectileId,...u,vx:Math.sin(n)*r,vz:Math.cos(n)*r,owner:e,damage:s,life:c?c.range/r:4.5,bounce:!1,skill:t,color:c?.color||"#fff0b5",radius:.12,age:0,distance:0,...a};return i.bullets.push(h),h}function vl(i,e,t,n,s=!0){const r=Us(i,e,t,["vampire","tongue","lightning"].includes(i.players[e].cast?.id)),a=Si(i,r,t,n,.1,r.y),o=Wn(i);let c=null,l=2;const u=[{...i.players[1-e],ref:i.players[1-e],kind:"player"}];if(s)for(const h of i.effects)h.type==="decoy"&&h.owner!==e&&h.active&&h.hp>0&&u.push({...h,ref:h,kind:"decoy"});for(const h of u){if(r.y<h.y||r.y>h.y+$i||!Ds(r,h,o.obstacles,r.y))continue;const d=_a(r,a,h,.12);d!==null&&d<l&&(l=d,c={target:h.ref,kind:h.kind})}return{start:r,point:c?{x:r.x+(a.x-r.x)*l,y:r.y,z:r.z+(a.z-r.z)*l}:a,hit:c}}function Tu(i,e,t,n){return e.hit?e.hit.kind==="decoy"?(e.hit.target.hp-=t,0):ni(i,e.hit.target,t,e.start):0}function j_(i,e){i.elapsed<e.timing.preparation-bt?(i.phase="preparation",i.phaseElapsed=i.elapsed):i.elapsed<e.timing.preparation+e.timing.active-bt?(i.phase="active",i.phaseElapsed=i.elapsed-e.timing.preparation):(i.phase="recovery",i.phaseElapsed=Math.max(0,i.elapsed-e.timing.preparation-e.timing.active))}function Z_(i,e,t){if(i.phase!=="fight"||!La(i,e)||!Number.isInteger(t)||t<0||t>=3)return!1;const n=i.players[e],s=Zt(n.skills[t]);if(!s||n.cast||n.skillCooldowns[t]>0||n.hp<=0||n.stun>0)return!1;n.skillCooldowns[t]=s.cooldown,n.casts++,n.latestCast={id:s.id,time:i.time};const r=["meteor","tornado","blackhole","mine","turret","banana","decoy"].includes(s.id),a=["mine","turret","banana","decoy"].includes(s.id),o=r&&n.aimPoint?Math.min(s.range,Math.max(.8,Math.hypot(n.aimPoint.x-n.x,n.aimPoint.z-n.z))):s.range,c=Si(i,n,n.angle,o,a?s.id==="decoy"?Gt:.3:.12,a?n.y:n.y+.85,a);return c.y=xl(i,c,n.y+.2)+.08,n.cast={id:s.id,slot:t,sequence:n.casts,phase:"preparation",elapsed:0,phaseElapsed:0,duration:s.duration,fireAt:s.timing.preparation,fired:!1,startedAt:i.time,aim:n.angle,origin:{x:n.x,y:n.y,z:n.z},target:c},!0}function J_(i,e,t,n){const s=i.players[e],r=i.players[1-e],a=t.aim,o=t.id;s.skillReleases++,s.latestRelease={id:o,time:i.time,sequence:t.sequence},t.fired=!0,t.releaseOrigin=Us(i,e,a,["fireball","frost","charm","lightning","tongue","vampire"].includes(o));const c={angle:a,targetX:t.target.x,targetY:t.target.y,targetZ:t.target.z,castSequence:t.sequence};if(["fireball","frost","charm","rocket","shotgun","boomerang"].includes(o)){const l=[];if(o==="fireball"&&l.push(mi(i,e,o,a,30,16,{explosion:2,radius:.22})),o==="frost"&&l.push(mi(i,e,o,a,20,19,{slow:2.5,radius:.18,knockback:.2})),o==="charm"&&l.push(mi(i,e,o,a,5,15,{charm:1.2,radius:.2,knockback:0})),o==="rocket"&&l.push(mi(i,e,o,a,38,12,{explosion:2.8,knockback:2,radius:.2})),o==="shotgun")for(let u=0;u<6;u++)l.push(mi(i,e,o,a+(u-2.5)*.1,9,23,{},t.releaseOrigin));o==="boomerang"&&l.push(mi(i,e,o,a,20,18,{life:2,returns:!0,outboundTime:n.range/18,radius:.22})),Ft(i,"muzzle",e,{...t.releaseOrigin,...c,skill:o,radius:.3,life:.13});return}if(o==="lightning"||o==="laser"||o==="tongue"||o==="vampire"){const l=vl(i,e,a,n.range,o!=="vampire"),u=l.hit?.kind==="player"&&l.hit.target.shield>0,h=Ft(i,o,e,{...l.start,...c,targetX:l.point.x,targetY:l.point.y,targetZ:l.point.z,contact:!!l.hit&&!(o==="vampire"&&u),blocked:u,draining:!1,life:n.timing.active,radius:o==="laser"?.12:.2,follow:!0});t.effectId=h.id,o==="lightning"&&Tu(i,l,24)&&l.hit?.kind==="player"&&(l.hit.target.stun=.22),o==="tongue"&&l.hit?.kind==="player"&&r.shield<=0&&(ni(i,r,12,l.start),r.pull={type:"tongue",owner:e,life:.6,speed:11,stopDistance:1.55},h.targetPlayer=1-e);return}if(o==="meteor"&&Ft(i,o,e,{...t.target,...c,ground:!0,radius:3.2,delay:.7,life:1.3,active:!0}),o==="fart"){const l=Si(i,s,a+Math.PI,.65,.12,s.y+.25);Ft(i,o,e,{...l,...c,y:xl(i,l,s.y+.2)+.08,ground:!0,radius:3,life:3,active:!0})}if((o==="tornado"||o==="blackhole")&&Ft(i,o,e,{...t.target,...c,ground:!0,radius:o==="tornado"?2.8:3.8,life:o==="tornado"?3:2.5,active:!0}),["mine","turret","banana","decoy"].includes(o)){const l=Math.atan2(t.target.x-s.x,t.target.z-s.z),u=Math.hypot(t.target.x-s.x,t.target.z-s.z),h=Si(i,s,l,u,o==="decoy"?Gt:.3,s.y,!0),d={mine:12,turret:8,banana:9,decoy:6}[o],f=xl(i,h,s.y+.05)+.05;Ft(i,o,e,{...h,...c,y:f,ground:!0,targetX:h.x,targetY:f,targetZ:h.z,life:d,radius:o==="mine"?1.4:o==="banana"?.85:Gt,active:!0,tick:.4,triggered:!1,hp:40})}if(o==="dash"&&(s.dash={aim:a,elapsed:0,duration:n.timing.active,range:n.range,traveled:0,hit:!1},Ft(i,o,e,{...c,life:n.timing.active,follow:!0,radius:.8})),o==="blink"){const l={x:s.x,y:s.y,z:s.z},u=Si(i,s,a,n.range,Gt,s.y,!0);s.x=u.x,s.z=u.z,wu(s,Wn(i).obstacles),Ft(i,o,e,{...l,...c,targetX:s.x,targetY:s.y,targetZ:s.z,life:.3})}if(o==="heal"&&Ft(i,o,e,{...c,life:n.timing.active+.2,radius:1,follow:!0}),o==="bubble"&&(s.shield=Math.max(s.shield,2),s.shields++,Ft(i,o,e,{...c,life:2,radius:.95,follow:!0})),o==="stomp"&&Ft(i,o,e,{...c,y:s.y+.06,ground:!0,radius:4,life:.35,active:!0,triggered:!1}),o==="swap")if(vl(i,e,a,n.range,!1).hit?.kind==="player"&&r.shield<=0){const u={x:s.x,y:s.y,z:s.z},h={x:r.x,y:r.y,z:r.z},d={...u,vy:s.vy,grounded:s.grounded};Object.assign(s,{...h,vy:r.vy,grounded:r.grounded}),Object.assign(r,d),s.impulses=[],r.impulses=[],s.pull=null,r.pull=null,Ft(i,o,e,{...u,...c,targetX:h.x,targetY:h.y,targetZ:h.z,life:.4})}else Ft(i,"miss",e,{...t.releaseOrigin,...c,skill:o,life:.3,radius:.5})}function K_(i,e,t){const n=i.players[e],s=n.cast;if(!s)return;if(n.hp<=0||n.stun>0&&!s.fired){n.cast=null;return}const r=Zt(s.id),a=s.elapsed;s.elapsed+=t,j_(s,r),!s.fired&&s.elapsed>=s.fireAt-bt&&J_(i,e,s,r);const o=Math.max(0,Math.min(s.elapsed-s.fireAt,r.timing.active))-Math.max(0,Math.min(a-s.fireAt,r.timing.active));if(o>0&&n.stun<=0&&(s.id==="heal"&&(n.hp=Math.min(n.max,n.hp+35*o/r.timing.active)),s.id==="laser"||s.id==="vampire")){const c=vl(i,e,s.aim,r.range,s.id!=="vampire"),l=i.effects.find(h=>h.id===s.effectId),u=Tu(i,c,(s.id==="laser"?36:28)*o/r.timing.active);l&&Object.assign(l,{...c.start,targetX:c.point.x,targetY:c.point.y,targetZ:c.point.z,contact:!!c.hit&&(s.id!=="vampire"||u>0),blocked:c.hit?.kind==="player"&&c.hit.target.shield>0,draining:s.id==="vampire"&&u>0}),s.id==="vampire"&&(n.hp=Math.min(n.max,n.hp+u))}s.elapsed>=s.duration-bt&&(n.cast=null)}function Au(i,e,t=!0){for(const n of[...i.effects]){n.life-=e,n.age+=e;const s=i.players[n.owner];if(n.follow&&!["tongue","lightning","laser","vampire"].includes(n.type)&&(n.x=s.x,n.y=s.y+.65,n.z=s.z),n.type==="tongue"){const o=Us(i,n.owner,n.angle,!0,.12,"tongue");if(Object.assign(n,o),Number.isInteger(n.targetPlayer)){const c=i.players[n.targetPlayer];n.targetX=c.x,n.targetY=c.y+.65,n.targetZ=c.z}}if(!t||!n.active)continue;const r=i.players[1-n.owner],a=Wn(i);if(n.type==="meteor"&&(n.delay-=e,n.delay<=0&&(zi(i,n.owner,{x:n.x,y:n.y+.65,z:n.z},n.radius,40,n.color,1.5),n.active=!1,n.life=.2)),n.type==="fart"&&_s(i,n,r)&&(ni(i,r,12*e,n),r.shield<=0&&(r.slow=Math.max(r.slow,.25))),(n.type==="tornado"||n.type==="blackhole")&&_s(i,n,r)&&r.shield<=0){const o=n.x-r.x,c=n.z-r.z,l=Math.hypot(o,c),u=n.type==="tornado"?2.8:3.8;if(l>.4){const h=Math.min(u,(l-.4)/e);r.fieldVX+=o/l*h,r.fieldVZ+=c/l*h}n.type==="tornado"?ni(i,r,9*e,n):r.slow=Math.max(r.slow,.15)}if(n.type==="blackhole"&&n.life<=0&&(zi(i,n.owner,{x:n.x,y:n.y+.65,z:n.z},n.radius,28,n.color,1.7),n.active=!1),n.type==="stomp"&&!n.triggered&&_s(i,n,r,n.radius*Math.min(1,n.age/.24))&&(ni(i,r,24,n,2.3),n.triggered=!0),n.type==="mine"&&n.age>=.35&&_s(i,n,r)&&(zi(i,n.owner,{x:n.x,y:n.y+.65,z:n.z},2.6,38,n.color,1.8),n.life=0),n.type==="banana"&&!n.triggered&&_s(i,n,r)&&r.shield<=0&&(r.slow=Math.max(r.slow,1.5),r.stun=.2,ni(i,r,8,n),n.triggered=!0,n.life=.35),n.type==="turret"){n.tick-=e;const o={x:n.x,y:n.y+.8,z:n.z};if(n.tick<=0&&r.hp>0&&Math.hypot(n.x-r.x,n.z-r.z)<15&&o.y>=r.y&&o.y<=r.y+$i&&Ds(o,r,a.obstacles,o.y)){n.tick=.65;const c=Math.atan2(r.x-n.x,r.z-n.z),l=Si(i,o,c,.5,.12,o.y);mi(i,n.owner,"turret",c,12,17,{life:15/17},l),Ft(i,"muzzle",n.owner,{...l,skill:"turret",angle:c,targetX:r.x,targetY:r.y+.65,targetZ:r.z,radius:.2,life:.12}),n.angle=c,n.targetX=r.x,n.targetY=r.y+.65,n.targetZ=r.z}}n.type==="decoy"&&(n.hp<=0||n.life<=0)&&(zi(i,n.owner,{x:n.x,y:n.y+.65,z:n.z},2.5,18,n.color,1),n.life=0,n.active=!1)}i.effects=i.effects.filter(n=>n.life>0).slice(-128)}function Q_(i,e,t,n){const s=Wn(i),r={x:e.x,z:e.z,y:e.y};let a=Math.max(-1,Math.min(1,Number(t.x)||0)),o=Math.max(-1,Math.min(1,Number(t.z)||0));(e.stun>0||e.hp<=0)&&(a=0,o=0);const c=Math.max(1,Math.hypot(a,o)),l=e.speed*(e.slow>0?.4:1);t.jump&&!e.jumpHeld&&e.grounded&&e.stun<=0&&e.hp>0&&(e.vy=e.jumpPower,e.grounded=!1,e.jumps++),e.jumpHeld=!!t.jump,e.vy-=19*n,e.y+=e.vy*n,e.grounded&&(e.y=r.y);const u=e.y;e.vy<0&&(e.y=Math.max(r.y,e.y)),sr(e,a/c*l*n,o/c*l*n,s.obstacles);const h=Math.hypot(e.x-r.x,e.z-r.z);let d=e.fieldVX||0,f=e.fieldVZ||0;for(const g of e.impulses){const m=Math.max(0,(g.life-n/2)/g.maxLife);d+=g.vx*m,f+=g.vz*m,g.life-=n}if(e.impulses=e.impulses.filter(g=>g.life>bt),e.pull){const g=e.pull,m=i.players[g.owner],p=m.x-e.x,x=m.z-e.z,M=Math.hypot(p,x);if(g.life<=0||m.hp<=0||e.shield>0||Math.abs(m.y-e.y)>1.5||!Ds(e,m,s.obstacles,Math.min(e.y,m.y)+.65))e.pull=null;else{if(M>g.stopDistance){const v=Math.min(g.speed,(M-g.stopDistance)/n);d+=p/M*v,f+=x/M*v}g.life-=n}}if((d||f)&&sr(e,d*n,f*n,s.obstacles),e.dash){const g=e.dash,m={x:e.x,z:e.z},p=Math.min(g.duration,g.elapsed+n),x=(g.elapsed+p)/(2*g.duration),M=Math.min(g.range-g.traveled,g.range/g.duration*Math.PI/2*Math.sin(Math.PI*x)*n),v=Si(i,e,g.aim,M,Gt,e.y,!0);sr(e,v.x-e.x,v.z-e.z,s.obstacles);const T=Math.hypot(e.x-m.x,e.z-m.z);g.traveled+=T,g.elapsed=p;const w=i.players[e===i.players[0]?1:0];!g.hit&&Math.abs(e.y-w.y)<$i&&_a(m,e,w,Gt)!==null&&Ds(m,w,s.obstacles,e.y+.65)&&(ni(i,w,20,m,1.6),g.hit=!0),(T<M*.7||g.elapsed>=g.duration-bt||g.traveled>=g.range-bt)&&(e.dash=null)}e.y=u;let _=0;for(const g of s.obstacles)r.y>=g.height-bt&&e.y<=g.height&&Eu(e.x,e.z,Gt-.025,g)&&(_=Math.max(_,g.height));if(e.grounded=e.y<=_&&e.vy<=0,e.grounded&&(e.y=_,e.vy=0),e.y<0&&(e.y=0,e.vy=0,e.grounded=!0),e.motion={x:(e.x-r.x)/n,z:(e.z-r.z)/n,speed:Math.hypot(e.x-r.x,e.z-r.z)/n,inputSpeed:h/n},e.grounded)for(e.walkDistance+=h;e.walkDistance>=1.25;)e.walkDistance-=1.25,e.footsteps++}function ex(i,e){const t=Wn(i);for(const n of i.bullets){if(n.life-=e,n.life<=0)continue;n.age=(n.age||0)+e;const s=n.radius||Pa;if(n.returns&&n.age>=n.outboundTime){const a=i.players[n.owner],o=a.x-n.x,c=a.z-n.z,l=Math.hypot(o,c);if(n.returning=!0,l<.65){n.life=0;continue}const u=18,h=Math.atan2(o,c),d=Math.atan2(n.vx,n.vz),f=Math.atan2(Math.sin(h-d),Math.cos(h-d)),_=d+Math.max(-e*12,Math.min(e*12,f));n.vx=Math.sin(_)*u,n.vz=Math.cos(_)*u}let r=e;for(let a=0;a<4&&r>bt&&n.life>0;a++){const o={x:n.x,z:n.z},c={x:o.x+n.vx*r,z:o.z+n.vz*r};let l=null;for(const f of t.obstacles){if(n.y-s>=f.height||n.y+s<=0)continue;const _=Jl(o,c,f,s);_&&(!l||_.t<l.t)&&(l={..._,type:"box"})}for(const[f,_]of[["x",t.width/2-s],["z",t.depth/2-s]]){if(Math.abs(c[f])<=_)continue;const g=c[f]-o[f];if(Math.abs(g)<bt)continue;const m=Math.max(0,(Math.sign(c[f])*_-o[f])/g);m<=1&&(!l||m<l.t)&&(l={t:m,nx:f==="x"?-Math.sign(c.x):0,nz:f==="z"?-Math.sign(c.z):0,type:"box"})}for(const f of i.effects)if(f.type==="decoy"&&f.owner!==n.owner&&f.hp>0&&f.active&&n.y+s>=f.y&&n.y-s<=f.y+$i){const _=_a(o,c,f,s);_!==null&&(!l||_<l.t-bt)&&(l={t:_,type:"decoy",target:f})}const u=i.players[1-n.owner];if(!(n.returns&&(n.returning?n.hitReturning:n.hitOutbound))&&n.y+s>=u.y&&n.y-s<=u.y+$i){const f=_a(o,c,u,s);f!==null&&(!l||f<l.t-bt)&&(l={t:f,type:"player",target:u})}if(!l){n.x=c.x,n.z=c.z,n.distance=(n.distance||0)+Math.hypot(c.x-o.x,c.z-o.z);break}n.x=o.x+(c.x-o.x)*l.t,n.z=o.z+(c.z-o.z)*l.t,r*=1-l.t;const d={x:n.x,y:n.y,z:n.z};if(l.type==="player"&&l.target.shield>0){n.owner=1-n.owner,n.vx*=-1,n.vz*=-1;const f=Math.hypot(n.vx,n.vz)||1;n.x+=n.vx/f*.03,n.z+=n.vz/f*.03,Ft(i,"hit",n.owner,{...d,skill:"bubble",radius:.3,life:.2})}else if(l.type==="player")n.explosion?zi(i,n.owner,d,n.explosion,n.damage,n.color,n.knockback??1):ni(i,l.target,n.damage,{x:n.x-n.vx,z:n.z-n.vz},n.knockback??.3),n.slow&&(l.target.slow=Math.max(l.target.slow,n.slow)),n.charm&&(l.target.charm=n.charm,l.target.charmOwner=n.owner,l.target.pull={type:"charm",owner:n.owner,life:n.charm,speed:2.2,stopDistance:1.9}),Ft(i,"hit",n.owner,{...d,skill:n.skill,color:n.color,radius:.35,life:.25}),n.returns?(n[n.returning?"hitReturning":"hitOutbound"]=!0,n.x+=n.vx*.005,n.z+=n.vz*.005):n.life=0;else if(l.type==="decoy")l.target.hp-=n.damage,n.explosion&&zi(i,n.owner,d,n.explosion,n.damage,n.color,n.knockback??1),n.life=0,Ft(i,"hit",n.owner,{...d,skill:n.skill,color:n.color,radius:.4,life:.25});else if(Ft(i,"hit",n.owner,{...d,skill:n.skill,color:n.color,radius:.25,life:.2}),n.returns){n.returning=!0,n.outboundTime=0;const f=n.vx*l.nx+n.vz*l.nz;n.vx-=2*f*l.nx,n.vz-=2*f*l.nz,n.x+=l.nx*.02,n.z+=l.nz*.02}else if(n.bounce){const f=n.vx*l.nx+n.vz*l.nz;n.vx-=2*f*l.nx,n.vz-=2*f*l.nz,n.x+=l.nx*.001,n.z+=l.nz*.001}else n.explosion&&zi(i,n.owner,d,n.explosion,n.damage,n.color,n.knockback??1),n.life=0}}i.bullets=i.bullets.filter(n=>n.life>0)}function tx(i,e,t){const n=Wn(i),s=i.players.map(c=>({x:c.x,z:c.z}));i.time+=t;for(let c=0;c<2;c++){const l=i.players[c],u=e[c]||{};l.fieldVX=0,l.fieldVZ=0;for(const h of["shot","shield","shieldCD","slow","stun","charm"])l[h]=Math.max(0,l[h]-t);l.skillCooldowns=l.skillCooldowns.map(h=>Math.max(0,h-t)),Number.isFinite(u.angle)&&(l.angle=u.angle),Number.isFinite(u.aimX)&&Number.isFinite(u.aimZ)&&(l.aimPoint={x:Math.max(-n.width/2+.1,Math.min(n.width/2-.1,u.aimX)),z:Math.max(-n.depth/2+.1,Math.min(n.depth/2-.1,u.aimZ))});for(let h=0;h<3;h++){const d=!!u.skills?.[h];d&&!l.skillHeld[h]&&Z_(i,c,h),l.skillHeld[h]=d}if(K_(i,c,t),u.shield&&l.shieldCD===0&&l.stun<=0&&l.hp>0&&(l.shield=Math.max(l.shield,.7),l.shieldCD=3.5,l.shields++),u.fire&&l.shot===0&&l.stun<=0&&l.hp>0&&!l.cast){l.shot=l.cool,l.shots++;const h=Us(i,c,l.angle);for(const d of l.triple?[-.2,0,.2]:[0])mi(i,c,"bullet",l.angle+d,l.damage*(l.triple?.65:1),18,{bounce:l.bounce},h);Ft(i,"muzzle",c,{...h,skill:"bullet",angle:l.angle,targetX:h.x+Math.sin(l.angle),targetY:h.y,targetZ:h.z+Math.cos(l.angle),radius:.25,life:.12})}}Au(i,t);for(let c=0;c<2;c++)Q_(i,i.players[c],e[c]||{},t);const[r,a]=i.players;if(Math.abs(r.y-a.y)<$i){const c=a.x-r.x,l=a.z-r.z,u=Math.hypot(c,l);if(u<Gt*2){const h=u>bt?c/u:1,d=u>bt?l/u:0,f=(Gt*2-u)/2+bt;sr(r,-h*f,-d*f,n.obstacles),sr(a,h*f,d*f,n.obstacles)}}ex(i,t),i.players.forEach((c,l)=>{c.motion.x=(c.x-s[l].x)/t,c.motion.z=(c.z-s[l].z)/t,c.motion.speed=Math.hypot(c.motion.x,c.motion.z)});for(const c of i.effects){const l=i.players[c.owner];if(c.follow&&!["tongue","lightning","laser","vampire"].includes(c.type)&&(c.x=l.x,c.y=l.y+.65,c.z=l.z),c.type==="tongue"&&Number.isInteger(c.targetPlayer)){Object.assign(c,Us(i,c.owner,c.angle,!0,.12,"tongue"));const u=i.players[c.targetPlayer];c.targetX=u.x,c.targetY=u.y+.65,c.targetZ=u.z}}for(const c of i.players)(Math.abs(c.x)>n.width/2+.4||Math.abs(c.z)>n.depth/2+.4)&&(c.hp=0);const o=i.players.findIndex(c=>c.hp<=0);if(o!==-1){i.players[o].offers=bu(i.players[o],()=>Su(i)),i.loser=o,i.winner=1-o,i.players[i.winner].score++,i.phase="celebration",i.celebration={emote:null,elapsed:0,startedAt:i.time},i.bullets=[],i.effects=i.effects.filter(c=>!c.active);for(const c of i.players)c.cast=null,c.dash=null,c.pull=null,c.impulses=[],c.motion={x:0,z:0,speed:0,inputSpeed:0}}}function Ru(i,e=[{},{}],t){if(!Number.isFinite(t)||t<=0)return;if(i.phase==="celebration"){i.time+=t,Au(i,t,!1),i.celebration.emote&&(i.celebration.elapsed+=t,i.celebration.elapsed>=On-bt&&(i.phase=i.players[i.winner].score>=5?"over":"pick"));return}if(i.phase!=="fight")return;const n=Math.max(1,Math.ceil(Math.min(t,.25)/(1/120)));for(let s=0;s<n&&i.phase==="fight";s++)tx(i,e,Math.min(t,.25)/n)}function Cu(i){if(!Zt(i))throw new Error("Unknown skill: "+i);const t=ql("cloud",!1,[],{phase:"fight"});t.arena={id:"demo",width:24,depth:18,obstacles:[],spawns:[{x:-4,z:0},{x:4,z:0}]},i==="boomerang"&&t.arena.obstacles.push({x:5,z:0,w:.8,d:2,height:1.4,kind:"crate"});const n={meteor:7,tornado:5,blackhole:6,tongue:6,charm:5,mine:5,banana:5,decoy:4,bubble:6,fart:2,turret:6}[i]||3.5;return Object.assign(t.players[0],{x:-4,y:0,z:0,angle:Math.PI/2,skills:[i],skillCooldowns:[0]}),Object.assign(t.players[1],{x:-4+n,y:0,z:0,angle:-Math.PI/2,skills:[],skillCooldowns:[]}),(i==="tornado"||i==="blackhole")&&(t.players[1].x+=i==="tornado"?1.4:1.8,t.players[1].z=.6),(i==="heal"||i==="vampire")&&(t.players[0].hp=45),i==="turret"&&(t.players[1].hp=t.players[1].max=250),t}function nx(i){return Bi.map(e=>`<button class="map-choice" data-map="${e.id}" aria-pressed="${i===e.id}"><svg viewBox="0 0 ${e.width} ${e.depth}" aria-hidden="true"><rect width="${e.width}" height="${e.depth}" fill="${e.floor}"/>${e.obstacles.map(t=>`<rect x="${t.x+e.width/2-t.w/2}" y="${t.z+e.depth/2-t.d/2}" width="${t.w}" height="${t.d}" rx=".15" fill="${e.box}" stroke="${e.trim}" stroke-width=".15"/>`).join("")}${e.spawns.map((t,n)=>`<circle cx="${t.x+e.width/2}" cy="${t.z+e.depth/2}" r=".7" fill="${n?"#ff8875":"#79cbff"}" stroke="#fffbee" stroke-width=".2"/>`).join("")}</svg><span>${e.name}</span><small>${e.width} × ${e.depth}</small><i aria-hidden="true">✓</i></button>`).join("")}function xo(i="none",e="happy"){const t={none:"",beanie:'<path d="M24 29a24 24 0 0 1 48 0" fill="#a391d8" stroke="#39354c" stroke-width="2"/><rect x="22" y="25" width="52" height="8" rx="3" fill="#c9b9f0" stroke="#39354c" stroke-width="2"/><circle cx="48" cy="5" r="5" fill="#fff8e7" stroke="#39354c" stroke-width="2"/>',crown:'<path d="m29 27-3-18 13 9 9-15 9 15 13-9-3 18Z" fill="#ffe58a" stroke="#39354c" stroke-width="2"/>',antenna:'<path d="M48 23V9" stroke="#39354c" stroke-width="3"/><circle cx="48" cy="7" r="6" fill="#ddf695" stroke="#39354c" stroke-width="2"/>'};return t.headphones='<path d="M18 41a30 30 0 0 1 60 0" fill="none" stroke="#fff3df" stroke-width="6"/><rect x="14" y="31" width="12" height="22" rx="4" fill="#91d7dc" stroke="#39354c" stroke-width="2"/><rect x="70" y="31" width="12" height="22" rx="4" fill="#91d7dc" stroke="#39354c" stroke-width="2"/>',t.visor='<path d="m23 27 50-1v7l-50 2Z" fill="#91d7dc" stroke="#39354c" stroke-width="2"/><path d="m40 29 37 1 7 9-36-1Z" fill="#91d7dc" stroke="#39354c" stroke-width="2"/>',t.starshades='<path d="m35 29 4 8 9 1-6 7 1 10-8-5-9 5 2-10-7-7 10-1Zm26 0 4 8 9 1-6 7 1 10-8-5-9 5 2-10-7-7 10-1Z" fill="#39354c" stroke="#a391d8" stroke-width="3"/><path d="M46 40h5" stroke="#a391d8" stroke-width="3"/>',`<svg viewBox="0 0 96 82" aria-hidden="true"><ellipse cx="48" cy="73" rx="27" ry="4" fill="#39354c" opacity=".12"/><path d="M24 43 13 51m59-8 11 8" stroke="var(--fighter-color,#79cbff)" stroke-width="8" stroke-linecap="round"/><path d="m48 17 17 6 10 14v17L64 67l-16 4-18-6-10-14 1-16 11-13Z" fill="var(--fighter-color,#79cbff)" stroke="#39354c" stroke-width="2"/><path d="m48 17-6 22-21-4m54 2-17 5 6 25m-34-2 12-26 16 3-10 29Z" stroke="#fff" stroke-opacity=".2" fill="none"/><ellipse cx="38" cy="41" rx="8" ry="${e==="goofy"?10:8}" fill="#fffdf4"/><ellipse cx="58" cy="41" rx="8" ry="8" fill="#fffdf4"/><circle cx="39" cy="42" r="3" fill="#39354c"/><circle cx="57" cy="42" r="3" fill="#39354c"/>${e==="angry"?'<path d="m32 32 10 4m12 0 10-4" stroke="#39354c" stroke-width="3"/>':""}<path d="M39 54q9 ${e==="angry"?-4:10} 18 0" fill="none" stroke="#39354c" stroke-width="2.5" stroke-linecap="round"/><path d="M34 68v5m28-5v5" stroke="var(--fighter-color,#79cbff)" stroke-width="10" stroke-linecap="round"/>${t[i]}</svg>`}function ix(i){const e=jt(i);return`<div class="eyebrow">ГАРДЕРОБ БОЙЦА</div><h2>Круглый. И неповторимый.</h2><div class="custom-grid" style="--fighter-color:${e.color}"><div class="preview-wrap"><div class="mini-window-title"><span>PLAYER_01</span><span>✦</span></div><canvas id="character-preview" width="300" height="300" aria-label="Предпросмотр круглого персонажа"></canvas><span>ТВОЙ НОВЫЙ ОБЛИК</span></div><div class="custom-controls"><div class="choice-label">00 / Образы с картинки</div><div class="preset-choices" role="group" aria-label="Готовый образ">${_l.map(t=>`<button class="look-choice preset-choice" data-preset="${t.id}" style="--fighter-color:${t.color}" aria-pressed="${JSON.stringify(jt(t))===JSON.stringify(e)}">${xo(t.hat,t.face)}<span>${t.name}</span><i aria-hidden="true">✓</i></button>`).join("")}</div><div class="choice-label">01 / Цвет</div><div class="swatches" role="group" aria-label="Цвет бойца">${gl.map(t=>`<button class="swatch" data-color="${t}" style="--swatch:${t}" aria-label="Цвет ${t}" aria-pressed="${e.color===t}"></button>`).join("")}</div><div class="choice-label">02 / Аксессуар</div><div class="accessory-choices" role="group" aria-label="Аксессуар на голове">${vu.map(t=>`<button class="look-choice" data-hat="${t.id}" aria-pressed="${e.hat===t.id}">${xo(t.id)}<span>${t.name}</span><i aria-hidden="true">✓</i></button>`).join("")}</div><div class="choice-label">03 / Настроение</div><div class="face-choices" role="group" aria-label="Выражение лица">${Mu.map(t=>`<button class="look-choice" data-face="${t.id}" aria-pressed="${e.face===t.id}">${xo("none",t.id)}<span>${t.name}</span><i aria-hidden="true">✓</i></button>`).join("")}</div></div></div><p class="small-note">Выбирай прямо на карточках. Облик сохраняется и виден другу в сетевой игре.</p><button id="save-look" class="primary">Готово, я красавчик! ↗</button>`}function sx(i,e){if(!i||typeof i.src!="string"||!i.src.trim())return null;const t=new URL(i.src,e);if(!["http:","https:"].includes(t.protocol)||t.username||t.password)throw new Error("Нужна ссылка на аудиофайл HTTP/HTTPS.");return{src:t.href,name:String(i.title||i.name||t.pathname.split("/").pop()).slice(0,120),start:Number.isFinite(i.start)?Math.max(0,i.start):0}}class rx{constructor(e){this.audio=e,this.tracks=new Map,this.server=new Map,this.local=new Map,this.epoch=0,this.source=null,this.finished=!1}async loadEmbedded(){if(this.embedded)return this.embedded;const e=typeof document<"u"&&document.getElementById("roundish-emote-bundle");if(e)return this.embedded=(async()=>{const t=JSON.parse(e.textContent);for(const n of ir){const s=t[n];if(s?.audio)try{const r=Uint8Array.from(atob(s.audio),c=>c.charCodeAt(0)),a=await this.audio.context.decodeAudioData(r.buffer),o={name:String(s.title).slice(0,120),start:0,buffer:a,local:!1,embedded:!0};this.server.set(n,o),this.local.has(n)||this.tracks.set(n,o)}catch{this.local.has(n)||this.tracks.set(n,{error:"Не удалось прочитать встроенную песню."})}}})(),this.embedded}async load(e=""){const t=++this.epoch;try{if(await this.loadEmbedded(),t!==this.epoch)return;const n=new URL(e||location.href);if(n.protocol==="file:")return;n.protocol==="ws:"&&(n.protocol="http:"),n.protocol==="wss:"&&(n.protocol="https:");const s=new URL("/emotes/tracks.json",n),r=await fetch(s,{cache:"no-store",signal:AbortSignal.timeout(1e4)});if(!r.ok)throw new Error("Не удалось открыть список песен сервера.");const a=await r.json();if(t!==this.epoch)return;this.server.clear(),this.tracks=new Map(this.local),this.error=null,await Promise.all(ir.map(async o=>{let c;try{if(c=sx(a[o],s),!c)return;if(n.protocol==="https:"&&new URL(c.src).protocol!=="https:")throw new Error("Для этой песни нужна ссылка HTTPS.");this.local.has(o)||this.tracks.set(o,{...c,loading:!0});const l=await fetch(c.src,{signal:AbortSignal.timeout(2e4)});if(!l.ok)throw new Error("Аудиофайл не найден.");if(Number(l.headers.get("content-length"))>20*1024*1024)throw new Error("Аудиофайл больше 20 МБ.");const u=await l.arrayBuffer();if(u.byteLength>20*1024*1024)throw new Error("Аудиофайл больше 20 МБ.");const h=await this.audio.context.decodeAudioData(u);if(c.start>=h.duration)throw new Error("Начало фрагмента находится за концом песни.");if(t!==this.epoch)return;const d={...c,buffer:h,local:!1};this.server.set(o,d),this.local.has(o)||this.tracks.set(o,d)}catch(l){t===this.epoch&&!this.local.has(o)&&this.tracks.set(o,{...c,error:l.message})}}))}catch(n){t===this.epoch&&(this.error=n.message)}}async import(e,t,n=0){if(!ir.includes(e))throw new Error("Неизвестная эмоция.");if(t.size>20*1024*1024)throw new Error("Выбери аудиофайл до 20 МБ.");await this.audio.unlock();let s;try{s=await this.audio.context.decodeAudioData(await t.arrayBuffer())}catch{throw new Error("Браузер не смог прочитать аудио. Попробуй MP3, WAV или OGG.")}if(n=Number.isFinite(n)?Math.max(0,n):0,n>=s.duration)throw new Error("Начало фрагмента находится за концом песни.");const r={name:t.name,buffer:s,start:n,local:!0};return this.local.set(e,r),this.tracks.set(e,r),this.audio.emoteId===e&&this.stop(),r}remove(e){this.local.delete(e),this.server.has(e)?this.tracks.set(e,this.server.get(e)):this.tracks.delete(e),this.audio.emoteId===e&&this.stop()}caption(e){const t=this.tracks.get(e);return t?.buffer?"♫ "+t.name:t?.loading?"Песня загружается…":t?.error||"Песня ещё не добавлена"}stop(){const e=this.source;if(this.source=null,this.finished=!1,e){try{e.stop()}catch{}e.disconnect()}}sync(e){const{context:t,emoteId:n,emoteAnchor:s,emoteMusic:r}=this.audio,a=this.tracks.get(n);if(!e||!a?.buffer){this.stop();return}if(this.source||this.finished)return;const o=Math.max(0,t.currentTime-s),c=a.start+o,l=Math.min(On-o,a.buffer.duration-c);if(l<=.015){this.finished=!0;return}const u=t.createBufferSource();u.buffer=a.buffer,u.connect(r),this.source=u,u.onended=()=>{this.source===u&&(this.source=null,this.finished=!0,u.disconnect())},u.start(t.currentTime,c,l)}}const xh=i=>440*2**((i-69)/12),ax=()=>typeof document<"u"&&document.hidden;class ox{constructor(e={}){this.enabled=e.enabled!==!1,this.musicVolume=Number.isFinite(e.musicVolume)?Math.max(0,Math.min(1,e.musicVolume)):.35,this.effectsVolume=Number.isFinite(e.effectsVolume)?Math.max(0,Math.min(1,e.effectsVolume)):.65,this.context=null,this.menu=!0,this.unlocked=!1,this.tick=0,this.nextNote=0,this.counters=null,this.emoteId=null,this.emoteElapsed=0,this.emoteAnchor=0,this.emoteTick=0,this.voices=new Set,this.noiseBuffer=null,this.recordings=new rx(this)}async unlock(){this.context||(this.context=new AudioContext,this.master=this.context.createGain(),this.limiter=this.context.createDynamicsCompressor(),this.limiter.threshold.value=-10,this.limiter.knee.value=8,this.limiter.ratio.value=4,this.limiter.attack.value=.003,this.limiter.release.value=.12,this.master.connect(this.limiter),this.limiter.connect(this.context.destination),this.music=this.context.createGain(),this.music.connect(this.master),this.emoteMusic=this.context.createGain(),this.emoteMusic.connect(this.master),this.effects=this.context.createGain(),this.effects.connect(this.master),this.nextNote=this.context.currentTime+.03,this.emoteAnchor=this.context.currentTime-this.emoteElapsed,this.emoteTick=Math.floor(this.emoteElapsed/.125),this.timer=setInterval(()=>this.schedule(),40)),await this.context.resume(),this.unlocked=this.context.state==="running",this.updateVolumes(),this.schedule()}updateVolumes(){if(!this.context)return;const e=this.context.currentTime;this.master.gain.setTargetAtTime(this.enabled?.85:0,e,.025),this.music.gain.setTargetAtTime(this.menu&&!this.emoteId?this.musicVolume*.4:0,e,.08),this.emoteMusic.gain.setTargetAtTime(this.emoteId?this.musicVolume*.85:0,e,.035),this.effects.gain.setTargetAtTime(this.effectsVolume*.72,e,.03)}setMenu(e){this.menu!==e&&(this.menu=e,this.context&&(this.stopVoices(this.music),e&&(this.nextNote=this.context.currentTime+.03,this.tick=0)),this.updateVolumes())}setEmote(e,t=0){e=ir.includes(e)?e:null;const n=Number.isFinite(t)?Math.max(0,t):0,s=e!==this.emoteId;this.emoteElapsed=n,s?(this.stopVoices(this.emoteMusic),this.recordings.stop(),e&&this.stopVoices(this.music),this.emoteId=e,this.emoteAnchor=(this.context?.currentTime||0)-n,this.emoteTick=Math.floor(n/.125),this.updateVolumes(),this.schedule()):e&&this.context&&Math.abs(this.context.currentTime-this.emoteAnchor-n)>.24&&(this.stopVoices(this.emoteMusic),this.recordings.stop(),this.emoteAnchor=this.context.currentTime-n,this.emoteTick=Math.ceil(n/.125))}setEnabled(e){this.enabled=e,e||(this.stopVoices(this.emoteMusic),this.recordings.stop()),this.updateVolumes()}setVolume(e,t){this[e==="music"?"musicVolume":"effectsVolume"]=Math.max(0,Math.min(1,t)),this.updateVolumes()}settings(){return{enabled:this.enabled,musicVolume:this.musicVolume,effectsVolume:this.effectsVolume}}registerVoice(e,t,n,s,r){const a={sources:e,nodes:t,envelope:n,bus:s,end:r,ended:!1};this.voices.add(a);let o=e.length;for(const c of e)c.onended=()=>{if(!(--o>0||a.ended)){a.ended=!0;for(const l of t)l.disconnect();this.voices.delete(a)}};return a}stopVoices(e){if(!this.context||!e)return;const t=this.context.currentTime;for(const n of this.voices)if(n.bus===e&&!n.ended){n.envelope.gain.cancelScheduledValues(t),n.envelope.gain.setTargetAtTime(1e-4,t,.008);for(const s of n.sources)try{s.stop(t+.045)}catch{}}}tone(e,t,n,s,r="sine",a=this.effects,o=e){if(!this.context||!a)return;t=Math.max(t,this.context.currentTime+.002);const c=this.context.createOscillator(),l=this.context.createGain();c.type=r,c.frequency.setValueAtTime(Math.max(20,e),t),c.frequency.exponentialRampToValueAtTime(Math.max(20,o),t+n),l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),t+.006),l.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(l),l.connect(a),this.registerVoice([c],[c,l],l,a,t+n),c.start(t),c.stop(t+n+.025)}noise(e,t,n,s,r="lowpass",a=this.effects){if(!this.context||!a)return;if(e=Math.max(e,this.context.currentTime+.002),!this.noiseBuffer){this.noiseBuffer=this.context.createBuffer(1,this.context.sampleRate,this.context.sampleRate);const u=this.noiseBuffer.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1}const o=this.context.createBufferSource(),c=this.context.createBiquadFilter(),l=this.context.createGain();o.buffer=this.noiseBuffer,c.type=r,c.frequency.value=s,l.gain.setValueAtTime(Math.max(2e-4,n),e),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(c),c.connect(l),l.connect(a),this.registerVoice([o],[o,c,l],l,a,e+t),o.start(e,0,t),o.stop(e+t+.01)}instrument(e,t,n,s,r="piano",a=this.emoteMusic){if(!this.context||!a)return;t=Math.max(t,this.context.currentTime+.002);const o=this.context,c=xh(e),l=o.createGain(),u=o.createBiquadFilter(),h={piano:{waves:["triangle","sine"],partials:[1,2],gains:[.8,.18],cutoff:3400,endCutoff:1100,attack:.003,sustain:.07},marimba:{waves:["sine","sine"],partials:[1,3.99],gains:[1,.16],cutoff:6e3,endCutoff:3e3,attack:.002,sustain:.035},harp:{waves:["triangle","sine"],partials:[1,2],gains:[.8,.17],cutoff:4500,endCutoff:1500,attack:.003,sustain:.055},pluck:{waves:["sawtooth","triangle"],partials:[1,1],gains:[.45,.5],cutoff:5200,endCutoff:450,attack:.003,sustain:.09,detune:6},synth:{waves:["sawtooth","sawtooth"],partials:[1,1],gains:[.5,.5],cutoff:4100,endCutoff:1700,attack:.01,sustain:.38,detune:9},organ:{waves:["sine","sine","sine"],partials:[1,2,4],gains:[.66,.25,.13],cutoff:5e3,endCutoff:5e3,attack:.008,sustain:.75},brass:{waves:["sawtooth","square"],partials:[1,1],gains:[.65,.2],cutoff:3400,endCutoff:1700,attack:.03,sustain:.6,detune:4},strings:{waves:["sawtooth","sawtooth"],partials:[1,1],gains:[.43,.43],cutoff:3e3,endCutoff:2200,attack:.035,sustain:.6,detune:11},pad:{waves:["triangle","sawtooth"],partials:[1,1],gains:[.7,.2],cutoff:2e3,endCutoff:1100,attack:.05,sustain:.55,detune:8},guitar:{waves:["sawtooth","square"],partials:[1,2],gains:[.65,.1],cutoff:3800,endCutoff:1400,attack:.004,sustain:.2,distort:1.7},robot:{waves:["sawtooth","square"],partials:[1,1],gains:[.55,.25],cutoff:1600,endCutoff:400,attack:.007,sustain:.3,formant:!0},comic:{waves:["triangle","square"],partials:[1,1],gains:[.85,.13],cutoff:2100,endCutoff:950,attack:.018,sustain:.22,slide:.975},round:{waves:["sine","triangle"],partials:[1,1],gains:[.72,.3],cutoff:800,endCutoff:400,attack:.006,sustain:.5},sub:{waves:["sine","triangle"],partials:[1,1],gains:[.85,.18],cutoff:430,endCutoff:220,attack:.008,sustain:.72,slide:1.03},electro:{waves:["sawtooth","square"],partials:[1,.5],gains:[.6,.23],cutoff:1250,endCutoff:300,attack:.007,sustain:.3},funk:{waves:["triangle","sawtooth"],partials:[1,2],gains:[.8,.16],cutoff:1700,endCutoff:400,attack:.004,sustain:.16},rock:{waves:["sawtooth","triangle"],partials:[1,1],gains:[.5,.5],cutoff:1400,endCutoff:650,attack:.006,sustain:.4}},d=h[r]||h.piano;u.type=d.formant?"bandpass":"lowpass",u.Q.value=d.formant?2.4:.65,u.frequency.setValueAtTime(d.cutoff,t),u.frequency.exponentialRampToValueAtTime(d.endCutoff,t+n*.75);const f=Math.min(d.attack,n*.15),_=t+Math.min(n*.45,.09);l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),t+f),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,s*d.sustain),_),l.gain.exponentialRampToValueAtTime(1e-4,t+n);const g=[],m=[l,u];for(let p=0;p<d.waves.length;p++){const x=o.createOscillator(),M=o.createGain();x.type=d.waves[p],x.frequency.setValueAtTime(c*d.partials[p]*(d.slide||1),t),d.slide&&x.frequency.exponentialRampToValueAtTime(c*d.partials[p],t+.07),x.detune.value=p%2?d.detune||0:-(d.detune||0),M.gain.value=d.gains[p],x.connect(M),M.connect(u),g.push(x),m.push(x,M)}if(u.connect(l),d.distort){const p=o.createWaveShaper(),x=new Float32Array(256);for(let M=0;M<x.length;M++)x[M]=Math.tanh((M/127.5-1)*d.distort);p.curve=x,p.oversample="2x",l.connect(p),p.connect(a),m.push(p)}else l.connect(a);this.registerVoice(g,m,l,a,t+n);for(const p of g)p.start(t),p.stop(t+n+.025)}effect(e,t=!1,n=null){if(!this.enabled||!this.unlocked||!this.context||this.context.state!=="running")return;const s=this.context.currentTime,r=t?.7:1;e==="shot"&&(this.tone(175,s,.14,.4*r,"triangle",this.effects,48),this.noise(s,.055,.37*r,3500,"lowpass"),this.noise(s+.015,.13,.16*r,900,"bandpass"),this.tone(820,s,.032,.08*r,"square",this.effects,160)),e==="step"&&(this.noise(s,.05,.095*r,800),this.tone(95,s,.05,.1*r,"sine",this.effects,58)),e==="jump"&&this.tone(180,s,.16,.12*r,"triangle",this.effects,650),e==="shield"&&(this.tone(650,s,.22,.13*r,"sine",this.effects,1100),this.noise(s,.11,.08*r,5200,"highpass")),e==="hit"&&(this.noise(s,.11,.22*r,1100),this.tone(150,s,.13,.18*r,"triangle",this.effects,45)),e==="pick"&&[440,554,660].forEach((a,o)=>this.tone(a,s+o*.06,.16,.13,"triangle")),e==="victory"&&[392,494,587,784].forEach((a,o)=>this.tone(a,s+o*.1,.3,.12,"triangle")),e==="skill"&&(n==="fart"?(this.noise(s,.48,.25*r,240),this.tone(85,s,.4,.2*r,"sawtooth",this.effects,35)):["charm","heal","vampire","bubble"].includes(n)?[523,659,784].forEach((a,o)=>this.tone(a,s+o*.07,.24,.11*r,"sine")):n==="tongue"?(this.tone(130,s,.25,.2*r,"triangle",this.effects,800),this.noise(s+.1,.1,.07*r,1900,"bandpass")):["shotgun","rocket","turret","mine","laser"].includes(n)?(this.noise(s,.15,.27*r,1800),this.tone(180,s,.2,.25*r,"triangle",this.effects,45)):(this.tone(320,s,.22,.15*r,"triangle",this.effects,1100),this.noise(s,.18,.08*r,2900,"bandpass"))),e==="click"&&this.tone(580,s,.055,.08,"sine",this.effects,760)}observe(e,t,n){const s=e.map(r=>({shots:r.shots,footsteps:r.footsteps,jumps:r.jumps,shields:r.shields,releases:r.skillReleases??r.casts??0,hp:r.hp}));n&&this.counters&&e.forEach((r,a)=>{for(const[o,c]of[["shots","shot"],["footsteps","step"],["jumps","jump"],["shields","shield"]])s[a][o]>this.counters[a][o]&&this.effect(c,a!==t);s[a].releases>(this.counters[a].releases||0)&&this.effect("skill",a!==t,r.latestRelease?.id||r.latestCast?.id),r.hp<this.counters[a].hp&&this.effect("hit",a!==t)}),this.counters=s}reset(e){this.counters=null,this.observe(e,0,!1)}schedule(){if(!this.context)return;const e=this.context,t=this.enabled&&this.unlocked&&e.state==="running"&&!ax()&&this.musicVolume>0;if(this.emoteId){this.recordings.sync(t);return}if(!t||!this.menu){this.nextNote=e.currentTime+.03;return}const n=60/104/2;for(this.nextNote<e.currentTime&&(this.nextNote=e.currentTime+.02);this.nextNote<e.currentTime+.18;){const s=this.nextNote,r=this.tick%64,a=Math.floor(r/16),o=r%16,c=[48,53,45,55],l=c[a],u=[12,null,19,16,null,19,21,null,16,null,14,12,null,7,14,null];u[o]!==null&&(this.instrument(l+u[o]+12,s,.23,.15,"marimba",this.music),this.tone(xh(l+u[o]),s,.18,.035,"triangle",this.music)),o%4===0&&this.instrument(l+(o===8?7:0),s,.34,.2,"round",this.music),o%8===0&&this.tone(130,s,.13,.28,"sine",this.music,40),o%8===4&&this.noise(s,.09,.08,1500,"bandpass",this.music),o%2===1&&this.noise(s,.035,.018,6500,"highpass",this.music),this.tick++,this.nextNote+=n}}async dispose(){clearInterval(this.timer),this.recordings.stop(),++this.recordings.epoch,this.stopVoices(this.music),this.stopVoices(this.emoteMusic),this.stopVoices(this.effects),this.context&&this.context.state!=="closed"&&await this.context.close(),this.voices.clear(),this.context=null,this.noiseBuffer=null,this.unlocked=!1}}const lx=new Set(["KeyW","KeyA","KeyS","KeyD","Space","KeyE"]);class cx{constructor(){this.keys=new Set,this.fire=!1,this.casts=[!1,!1,!1]}down(e,t=!1){return/^Digit[123]$/.test(e)?(t||this.cast(Number(e.slice(-1))-1),!0):lx.has(e)?(this.keys.add(e),!0):!1}up(e){this.keys.delete(e)}cast(e){Number.isInteger(e)&&e>=0&&e<3&&(this.casts[e]=!0)}read(e=!0){return{x:e?Number(this.keys.has("KeyD"))-Number(this.keys.has("KeyA")):0,z:e?Number(this.keys.has("KeyS"))-Number(this.keys.has("KeyW")):0,fire:e&&this.fire,jump:e&&this.keys.has("Space"),shield:e&&this.keys.has("KeyE"),skills:this.casts.map(t=>e&&t)}}consumeCasts(){this.casts.fill(!1)}clear(){this.keys.clear(),this.fire=!1,this.consumeCasts()}}class hx{constructor(){this.clear()}receive(e,t,n=!1){if(this.latest=e&&typeof e=="object"?e:{},this.receivedAt=t,n)this.consumeCasts();else for(let s=0;s<3;s++)this.casts[s]||=!!this.latest.skills?.[s]}read(e){return e-this.receivedAt>600?(this.consumeCasts(),{}):{...this.latest,skills:[...this.casts]}}consumeCasts(){this.casts.fill(!1)}clear(){this.latest={},this.receivedAt=-1/0,this.casts=[!1,!1,!1]}}function ux(){return new Promise((i,e)=>{const t=indexedDB.open("roundish-emote-files",1);t.onupgradeneeded=()=>t.result.createObjectStore("tracks",{keyPath:"id"}),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function fx(){const i=await ux();try{return await new Promise((e,t)=>{const n=i.transaction("tracks").objectStore("tracks").getAll();n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}finally{i.close()}}const wn=i=>new fu({color:i,roughness:.82,metalness:0,flatShading:!0}),ha="#fff3df",ki="#9672d4",Pu="#34304c",xa="#f39598",rr="#91d7dc";function et(i,e,t,n=0,s=0,r=0){const a=new Ot(e,wn(t));return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function _r(i,e=.035){const t=new Ki;t.moveTo(...i[0]);for(const n of i.slice(1))t.lineTo(...n);return t.closePath(),new Ta(t,{depth:e,bevelEnabled:!1,steps:1})}function Ml(i){return Array.from({length:10},(e,t)=>{const n=Math.PI/2+t*Math.PI/5,s=t%2?i*.46:i;return[Math.cos(n)*s,Math.sin(n)*s]})}function dx(i,e){if(i.userData.accessory=e,e==="beanie"){et(i,new ft(.53,12,6,0,Math.PI*2,0,Math.PI/2),ki,0,.34),et(i,new dt(.535,.535,.11,12),"#8060b5",0,.37);for(let t=0;t<12;t++){const n=t*Math.PI/6,s=et(i,new Ie(.025,.11,.025),"#a88be0",Math.sin(n)*.532,.37,Math.cos(n)*.532);s.rotation.y=n}et(i,new en(.135,1),"#d5c5ee",0,.91)}else if(e==="crown"){et(i,new dt(.34,.38,.13,8),"#f0c96c",0,.55);for(let t=0;t<5;t++){const n=t*Math.PI*2/5;et(i,new Tn(.115,.23,4),"#ffdc81",Math.sin(n)*.3,.72,Math.cos(n)*.3);const s=et(i,new _i(.055),"#ed98b7",Math.sin(n)*.365,.57,Math.cos(n)*.365);s.rotation.y=n}}else if(e==="antenna"){const t=new wa([new L(0,.56,0),new L(-.02,.76,0),new L(-.13,.95,0)]);et(i,new Ra(t,4,.022,5,!1),"#709780"),et(i,new en(.13,0),"#c5e58c",-.13,.98)}else if(e==="headphones"){const t=et(i,new Cn(.605,.048,4,16,Math.PI),ha,0,.08);t.rotation.z=0;for(const n of[-1,1])et(i,new Ie(.075,.12,.12),xa,n*.595,.24),et(i,new dt(.18,.18,.12,10),ha,n*.61,.04).rotation.z=Math.PI/2,et(i,new dt(.13,.13,.135,10),rr,n*.65,.04).rotation.z=Math.PI/2}else if(e==="visor")et(i,new dt(.5,.5,.085,12),rr,0,.41),et(i,new dt(.43,.46,.055,8),rr,0,.39,.45).scale.set(1.35,1,.67),et(i,new dt(.505,.505,.022,12),"#c6f0ee",0,.43);else if(e==="starshades"){for(const t of[-1,1]){et(i,_r(Ml(.24),.04),ki,t*.21,.2,.61),et(i,_r(Ml(.177),.015),Pu,t*.21,.2,.655);const n=et(i,new Ie(.025,.063,.008),ha,t*.21-.035,.255,.678);n.rotation.z=-.45;const s=et(i,new Ie(.035,.035,.3),ki,t*.43,.2,.47);s.rotation.y=t*-.35}et(i,new Ie(.12,.035,.035),ki,0,.23,.65)}}function px(i){i.userData.design="pastel-toy-blaster",et(i,new Ie(.22,.2,.41),"#ffe19a",0,.035,.19),et(i,new Ie(.16,.2,.12),ki,0,-.14,.03),et(i,new Ie(.2,.05,.1),ki,0,.16,.09),et(i,new dt(.115,.115,.27,8),"#f9d582",0,.035,.46).rotation.x=Math.PI/2,et(i,new dt(.15,.15,.095,8),"#ee9b91",0,.035,.64).rotation.x=Math.PI/2,et(i,new Ol(.102,8),"#976775",0,.035,.689);for(const e of[-1,1])et(i,new Ie(.013,.1,.17),"#fff0c7",e*.116,.035,.2)}function mx(i){i.userData.design="coral-retro-guitar",et(i,_r([[-.32,-.16],[-.29,-.25],[-.13,-.25],[-.04,-.14],[.1,-.16],[.16,-.08],[.1,-.01],[.16,.12],[.06,.2],[-.05,.13],[-.16,.24],[-.3,.2],[-.33,.09],[-.21,.01]],.075),xa),et(i,new Ie(.43,.078,.06),"#70525f",.29,.04,.04),et(i,new Ie(.115,.15,.065),xa,.55,.04,.04).rotation.z=.18,et(i,_r([[-.24,-.08],[-.2,.09],[-.1,.12],[.01,.02],[-.05,-.1]],.01),"#ffe6c8",0,0,.077),et(i,new Ie(.025,.11,.025),Pu,-.17,.03,.09);for(let t=0;t<4;t++)et(i,new Ie(.7,.004,.007),ha,.15,.015+t*.016,.096),et(i,new Ie(.01,.073,.012),"#d4bdad",.14+t*.085,.04,.075);for(const t of[-.055,.14])for(const n of[.5,.55,.6])et(i,new en(.022,0),rr,n,t,.045);for(const t of[-.12,-.045])et(i,new dt(.019,.019,.02,8),rr,t,-.135,.095).rotation.x=Math.PI/2}function gx(i){et(i,new dt(.022,.022,.32,6),ki,0,.14),et(i,new dt(.026,.026,.035,6),xa,0,.02),et(i,_r(Ml(.13),.035),"#ffdb81",0,.38,-.018)}function gs(i,e,t,n=0,s=0,r=0){const a=new Ot(e,t);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function _x(i,e,t){const n=wn("#e7d6bf");gs(i,new ft(.135,10,6),t,0,-.025,0).scale.set(1.08,1.13,.86),gs(i,new dt(.102,.132,.075,10),n,0,.115),gs(i,new dt(.108,.138,.04,10),t,0,.145),gs(i,new Cn(.113,.021,4,10),t,0,.153).rotation.x=Math.PI/2;const r=[];for(let c=0;c<4;c++){const l=new nt;l.position.set((c-1.5)*.054,c===0||c===3?-.058:-.076,.064),i.add(l),gs(l,new Ls(.035,.047,2,7),t,0,-.041,0).scale.set(1,1,1.04),r.push(l)}const a=new nt;a.position.set(-e*.105,.015,.032),i.add(a),a.rotation.z=-e*.55,gs(a,new Ls(.053,.062,2,8),t,0,-.022,.025);const o=[];return i.traverse(c=>{c.geometry&&o.push(c)}),{fingers:r,thumb:a,side:e,parts:o}}function xx(i,{mode:e,weapon:t,guitar:n,prop:s,time:r=0}){for(const[a,o]of(i.hands||[]).entries()){const c=t&&a===1||n||s&&a===1&&s!=="buddy";o.fingers.forEach((l,u)=>{l.rotation.x=c?-1.05:e==="emote"?.12:0,l.rotation.z=c?0:(u-1.5)*.055}),o.thumb.rotation.x=c?-.45:0}}function vh(i,e,t,n,s,r){const c=new Float32Array(408),l=[];for(let d=0;d<16;d++)for(let f=0;f<8;f++){const _=d*8+f,g=d*8+(f+1)%8;l.push(_,g,_+8,g,g+8,_+8)}const u=new Vt;u.setAttribute("position",new vn(c,3).setUsage(Vf)),u.setIndex(l);const h=new Ot(u,r);return h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1,i.add(h),{mesh:h,start:e,middle:t,end:n,radius:s,segments:16,sides:8}}const Mh=new L,yh=new L,Sh=new L,ea=new L,ta=new L,Zs=new L,na=new L,vo=new L;function vx(i){i.rig.updateWorldMatrix(!0,!0);for(const e of i.limbVisuals||[]){i.rig.worldToLocal(e.start.getWorldPosition(Mh)),i.rig.worldToLocal(e.middle.getWorldPosition(yh)),i.rig.worldToLocal(e.end.getWorldPosition(Sh));const t=new wa([Mh.clone(),yh.clone(),Sh.clone()]),n=e.mesh.geometry.attributes.position;for(let s=0;s<=e.segments;s++){const r=s/e.segments;t.getPoint(r,ea),t.getTangent(r,ta).normalize(),vo.set(0,0,1),Math.abs(ta.z)>.95&&vo.set(1,0,0),Zs.crossVectors(ta,vo).normalize(),na.crossVectors(ta,Zs).normalize();const a=e.radius*(.96+.04*Math.sin(r*Math.PI));for(let o=0;o<e.sides;o++){const c=o/e.sides*Math.PI*2;n.setXYZ(s*e.sides+o,ea.x+a*(Zs.x*Math.cos(c)+na.x*Math.sin(c)),ea.y+a*(Zs.y*Math.cos(c)+na.y*Math.sin(c)),ea.z+a*(Zs.z*Math.cos(c)+na.z*Math.sin(c)))}}n.needsUpdate=!0,e.mesh.geometry.computeVertexNormals()}}const ar=Array.from({length:12},(i,e)=>{const t=e/12*Math.PI*2;return[Math.sin(t)*.19,Math.cos(t)*(Math.cos(t)>0?.29:.17)]});function Mx(){const i=[[-.045,1,0],[.015,1,0],[.095,.93,-.012],[.15,.75,-.035],[.18,.48,-.065]],e=[],t=[];for(const[s,r,a]of i)for(const[o,c]of ar)e.push(o*r,s-Math.max(0,c)*.18,c*r+a);const n=new Vt;for(let s=0;s<4;s++)for(let r=0;r<12;r++){const a=s*12+r,o=s*12+(r+1)%12,c=t.length;t.push(a,o,a+12,o,o+12,a+12);const l=(ar[r][1]+ar[(r+1)%12][1])/2<.1;n.addGroup(c,6,s>0&&l?1:0)}for(let s=1;s<11;s++){const r=t.length;t.push(48,48+s,49+s),n.addGroup(r,3,0)}return n.setAttribute("position",new ot(e,3)),n.setIndex(t),n.computeVertexNormals(),n}function bh(){const i=new Ki;i.moveTo(...ar[0]);for(const t of ar.slice(1))i.lineTo(...t);i.closePath();const e=new Ta(i,{depth:.055,bevelEnabled:!1});return e.rotateX(Math.PI/2),e.translate(0,-.035,0),e}const Lt=[[-.68,-.43,.08],[.68,-.43,.08]],Ne=[[-.43,-.03,.62],[.43,-.03,.62]],Xe=[[-1.13,.1,.06],[1.13,.1,.06]],Nt=[[-.91,.65,.12],[.91,.65,.12]],Jn=[[-.62,.42,.46],[.62,.42,.46]],ut=[[-.2,.09,.07],[.2,.09,.07]],tt=(i,e=.22,t=.16)=>ut.map((n,s)=>s===i?[n[0],e,t]:[...n]),j=(i=Lt,e=0,t=ut,n=0,s=0)=>({hands:i,arms:[[0,0,-.15,-.12,0],[0,0,.15,-.12,0]],torso:[s,0,e],feet:t,pos:[0,n,0],head:[0,0,-e*.25],legs:null}),Wt=(i,e,t=null)=>({step:60/i/2,frames:e,prop:t}),Lu={pbj:Wt(120,[j(Lt,-.1,tt(0)),j(Xe,-.04),j(Nt,.07),j(Xe,.03),j(Lt,.1,tt(1)),j(Xe,.04),j(Nt,-.07),j(Xe,-.03)]),tenna:Wt(120,[j([Nt[0],Lt[1]],-.09,tt(0,.24)),j([Xe[0],Ne[1]],-.03),j(Ne,.07,tt(1,.23)),j([Lt[0],Xe[1]],.09),j([Lt[0],Nt[1]],.09,tt(1,.24)),j([Ne[0],Xe[1]],.03),j(Ne,-.07,tt(0,.23)),j(Xe,-.09)],"cane"),die:Wt(110,[j(Ne,-.08,ut,-.045,.12),j(Jn,-.04,tt(0,.13),-.02,.08),j([Jn[0],Ne[1]],.07,ut,-.04,.13),j(Ne,.04,ut,-.02,.08),j(Ne,.08,ut,-.045,.12),j(Jn,.04,tt(1,.13),-.02,.08),j([Ne[0],Jn[1]],-.07,ut,-.04,.13),j(Ne,-.04,ut,-.02,.08)]),paranoid:{...Wt(128,Array.from({length:8},(i,e)=>{const t=Math.sin(e*Math.PI/4);return{...j([[-1.1,.3,.1],[.82,-.38,.15]],0,null,.65),legs:[[t*.7,0,-.7,.15],[-t*.7,0,.7,.15]]}})),floor:!0},sickriff:Wt(132,[j(Ne,-.09,ut,-.02,.08),j(Ne,-.03,tt(0,.13),0,.03),j(Ne,.07,ut,-.03,.15),j(Ne,.03,ut,0,.02),j(Ne,.09,ut,-.02,.08),j(Ne,.03,tt(1,.13),0,.03),j(Ne,-.07,ut,-.03,.15),j(Ne,-.03,ut,0,.02)],"guitar"),teto:Wt(130,[j(Lt,-.09,tt(0,.14)),j([[-.79,-.28,.2],[.79,-.28,.2]],-.04),j(Lt,.09,tt(1,.14)),j([[-.79,-.28,.2],[.79,-.28,.2]],.04)]),boom:Wt(120,[j([Ne[0],Xe[1]],-.08,tt(0)),j([[-.57,.04,.63],[1.15,.12,.12]],-.03),j([Xe[0],Ne[1]],.08,tt(1)),j([[-1.15,.12,.12],[.57,.04,.63]],.03),j(Nt,-.04,ut,.055),j(Xe,.04),j(Ne,-.08,ut,-.045,.1),j(Lt,.04)]),qualified:Wt(112,[j([Jn[0],Lt[1]],-.08,tt(0,.16)),j([Ne[0],Xe[1]],-.03),j([Lt[0],Jn[1]],.08,tt(1,.16)),j([Xe[0],Ne[1]],.03),j(Xe,-.08),j([Nt[0],Ne[1]],-.02),j(Xe,.08),j([Ne[0],Nt[1]],.02)]),griddy:Wt(140,[j(Ne,-.04,tt(0,.23,-.1),-.025,.13),j([[-.65,-.23,.42],[.65,-.23,.42]],0,tt(0,.12,.29),0,.12),j(Lt,.03,ut,.01,.08),j(Jn,0,ut,-.01,.06),j(Ne,.04,tt(1,.23,-.1),-.025,.13),j([[-.65,-.23,.42],[.65,-.23,.42]],0,tt(1,.12,.29),0,.12),j(Lt,-.03,ut,.01,.08),j(Jn,0,ut,-.01,.06)]),metroswing:Wt(120,[j([Nt[0],Xe[1]],-.08,tt(0,.17)),j([[-1.06,.31,.3],[.88,-.23,.25]],-.04),j([Xe[0],Lt[1]],0),j([Ne[0],Xe[1]],.04),j([Xe[0],Nt[1]],.08,tt(1,.17)),j([[-.88,-.23,.25],[1.06,.31,.3]],.04),j([Lt[0],Xe[1]],0),j([Xe[0],Ne[1]],-.04)]),talking:Wt(110,[j([Ne[0],Ne[1]],-.04),j([Xe[0],Ne[1]],0),j([Nt[0],Ne[1]],.06,tt(0,.15)),j([Xe[0],Ne[1]],.03),j([Ne[0],Ne[1]],.04),j([[-.93,-.12,.35],Ne[1]],0),j([Lt[0],Ne[1]],-.06,tt(1,.15)),j([Xe[0],Ne[1]],-.03)],"mic"),kazotsky:Wt(130,[j(Ne,-.03,[[-.21,.1,.36],[.21,.09,-.04]],-.22,.04),j(Ne,0,[[-.21,.23,.22],[.21,.09,-.04]],-.16),j(Ne,.03,[[-.21,.09,-.04],[.21,.1,.36]],-.22,.04),j(Ne,0,[[-.21,.09,-.04],[.21,.23,.22]],-.16),j(Xe,-.05,[[-.21,.1,.36],[.21,.09,-.04]],-.22),j(Ne,0,ut,-.16),j(Xe,.05,[[-.21,.09,-.04],[.21,.1,.36]],-.22),j(Ne,0,ut,-.16)]),down:Wt(128,[j(Nt,-.04,ut,.06),j(Xe,.04,tt(0)),j(Ne,-.08,ut,-.075,.12),j(Lt,-.04,ut,-.03),j([Ne[0],Nt[1]],.08,tt(1)),j(Xe,.04),j(Ne,.08,ut,-.075,.12),j(Lt,.04)]),shuba:Wt(120,[j(Lt,-.1,tt(0,.16)),j([[-.82,-.28,.08],[.82,-.28,.08]],-.04),j(Lt,.1,tt(1,.16)),j([[-.82,-.28,.08],[.82,-.28,.08]],.04),j(Xe,-.1,tt(0,.16)),j([Nt[0],Xe[1]],-.04),j(Xe,.1,tt(1,.16)),j([Xe[0],Nt[1]],.04)],"buddy"),friends:Wt(120,[j(Ne,-.08,ut,-.08,.06),j(Lt,-.03,ut,.025),j([Ne[0],Xe[1]],.08,tt(0)),j(Xe,.03),j(Ne,.08,ut,-.08,.06),j(Lt,.03,ut,.025),j([Xe[0],Ne[1]],-.08,tt(1)),j(Xe,-.03)]),aura:Wt(110,[j(Xe,-.06,tt(0,.33,.27),.04),j(Xe,-.02,ut),j(Xe,.06,tt(1,.33,.27),.04),j(Xe,.02,ut),j(Ne,-.06,tt(0,.27,.3)),j(Xe,-.02,ut),j(Ne,.06,tt(1,.27,.3)),j(Xe,.02,ut)]),jackpot:Wt(135,[j(Nt,-.09,tt(0,.22)),j(Nt,-.03),j(Nt,.09,tt(1,.22)),j(Nt,.03),j([Xe[0],Nt[1]],-.08),j(Jn,-.03,ut,-.03,.06),j([Nt[0],Xe[1]],.08),j(Xe,.03)])};Object.freeze(Object.keys(Lu));const ua=(i,e,t)=>Array.isArray(i)?i.map((n,s)=>ua(n,e[s],t)):i+(e-i)*t;function yx(i,e){const t=Lu[i];if(!t)return null;const n=yu(e),s=n/t.step,r=Math.floor(s)%t.frames.length,a=t.frames[r],o=t.frames[(r+1)%t.frames.length],c=s%1,l=c*c*(3-2*c),u={weapon:!1,guitar:t.prop==="guitar",prop:t.prop||null,scale:[1,1,1],rot:[0,0,0],torsoPos:[0,0,0],face:i==="talking"?.2:0};for(const h of["arms","hands","torso","pos","head"])u[h]=ua(a[h],o[h],l);return u.legs=a.legs?ua(a.legs,o.legs,l):[[0,0,0,0],[0,0,0,0]],u.footTargets=a.feet?ua(a.feet,o.feet,l):null,t.floor&&(u.rot=[0,0,Math.PI/2],u.floor=!0),u}const va=i=>Math.max(0,Math.min(1,i)),Ms=i=>(i=va(i),i*i*(3-2*i)),xi=Math.sin,Sx=Math.cos,Ma=new L(0,-1,0);function or(){return{pos:[0,0,0],rot:[0,0,0],torso:[0,0,0],torsoPos:[0,0,0],scale:[1,1,1],head:[0,0,0],arms:[[-.1,0,-.15,-.2,0],[-.1,0,.15,-.2,0]],legs:[[0,0,0,0],[0,0,0,0]],face:0,weapon:!0,guitar:!1}}function bx(i,e,t=1){const{rig:n,upper:s,body:r,arms:a,elbows:o,legPivots:c,knees:l,feet:u,gun:h}=i;n.position.set(...e.pos.map(d=>d*t)),n.rotation.set(...e.rot.map(d=>d*t)),n.scale.set(...e.scale.map(d=>1+(d-1)*t)),s.position.set(e.torsoPos[0]*t,.74+e.torsoPos[1]*t,e.torsoPos[2]*t),s.rotation.set(...e.torso.map(d=>d*t)),s.scale.set(1,1,1),r.position.set(0,.13,0),r.rotation.set(0,0,0),r.scale.set(1,1,1),i.head.rotation.set(...e.head.map(d=>d*t)),a.forEach((d,f)=>{const _=e.arms[f];d.position.set(f?.57:-.57,.1,0),d.rotation.set(_[0]*t,_[1]*t,(f?.15:-.15)*(1-t)+_[2]*t),o[f].position.set(0,-.33,0),o[f].rotation.set(_[3]*t,0,_[4]*t)}),c.forEach((d,f)=>{const _=e.legs[f];d.position.set(f?.2:-.2,.52,0),d.rotation.set(_[0]*t,_[1]*t,_[2]*t),l[f].rotation.set(_[3]*t,0,0),u[f].position.set(0,0,.07),u[f].rotation.set(0,0,0),u[f].scale.set(1,1,1),i.ankles[f].rotation.set(0,0,0)}),h.visible=e.weapon,h.position.set(0,0,0),h.rotation.set(Math.PI/2,0,0),h.scale.set(1,1,.6),i.guitar.visible=e.guitar&&t>0,Object.entries(i.props).forEach(([d,f])=>{f.visible=d===e.prop&&t>0}),Object.values(i.gunKinds).forEach(d=>d.visible=!1),i.face.scale.setScalar(1),i.mouth&&(i.mouth.scale.y=1+e.face*t)}function xs(i,e,t,n=new L(0,-1,0)){const s=i.arms[e],r=i.elbows[e],a=s.position,o=t.clone().sub(a),c=Math.max(.015,Math.min(.679,o.length()));o.normalize();const l=(.33**2-.35**2+c**2)/(2*c),u=Math.sqrt(Math.max(0,.33**2-l**2)),h=n.clone().addScaledVector(o,-n.dot(o)).normalize(),d=o.clone().multiplyScalar(l).addScaledVector(h,u);s.quaternion.setFromUnitVectors(Ma,d.clone().normalize());const f=o.clone().multiplyScalar(c).sub(d).applyQuaternion(s.quaternion.clone().invert());r.quaternion.setFromUnitVectors(Ma,f.normalize())}function Eh(i,e=0){i.rig.updateMatrix(),i.upper.updateMatrix();const t=i.upper.matrix.clone().invert().multiply(i.rig.matrix.clone().invert());xs(i,1,new L(.6,.85,.41-e).applyMatrix4(t),new L(1,-.3,0)),i.gun.quaternion.copy(i.rig.quaternion).multiply(i.upper.quaternion).multiply(i.arms[1].quaternion).multiply(i.elbows[1].quaternion).invert()}function Ex(i,e,t){i.rig.updateMatrix();const n=i.rig.matrix.clone().invert();e.forEach((s,r)=>{const o=new L(r?.2:-.2,.09,.07).lerp(new L(...s),t).applyMatrix4(n),c=i.legPivots[r],l=i.knees[r],u=o.clone().sub(c.position),h=Math.max(.025,Math.min(.489,u.length()));u.normalize();const d=(.25**2-.24**2+h**2)/(2*h),f=Math.sqrt(Math.max(0,.25**2-d**2)),_=new L(0,0,1).addScaledVector(u,-u.z).normalize(),g=u.clone().multiplyScalar(d).addScaledVector(_,f);c.quaternion.setFromUnitVectors(Ma,g.clone().normalize());const m=u.clone().multiplyScalar(h).sub(g).applyQuaternion(c.quaternion.clone().invert());l.quaternion.setFromUnitVectors(Ma,m.normalize()),i.ankles[r].quaternion.copy(i.rig.quaternion).multiply(c.quaternion).multiply(l.quaternion).invert()})}function wx(i,e=!1){i.rig.updateWorldMatrix(!0,!0);const t=i.group.getWorldPosition(new L).y;let n=1/0;const s=[...i.feet,...i.soles,i.body,...i.head.children.filter(a=>a.geometry),...i.hands?i.hands.flatMap(a=>a.parts):i.palms.flatMap(a=>a.children)];for(const a of s){const o=a.matrixWorld.elements,c=a.geometry?.parameters?.radius;Number.isFinite(c)&&a.geometry.type!=="CapsuleGeometry"?n=Math.min(n,o[13]-c*Math.hypot(o[1],o[5],o[9])-t):a.geometry&&(a.geometry.boundingBox||a.geometry.computeBoundingBox(),n=Math.min(n,a.geometry.boundingBox.clone().applyMatrix4(a.matrixWorld).min.y-t))}const r=e?-n:Math.max(0,-n);return Math.abs(r)>1e-6&&(i.rig.position.y+=r),r}function Tx(i,e,t){const n=or(),s=Zt(i),r=s?.timing||{preparation:.3,active:.35,recovery:.35},a=r.preparation,o=r.active,c=a+o+r.recovery,l=Number.isFinite(e?.elapsed)?e.elapsed:t,u=Ms(l/Math.max(.01,a)),h=Ms((l-a)/Math.max(.05,o*.55)),d=1-Ms((l-a-o)/Math.max(.01,r.recovery)),f=u*d,_=xi(h*Math.PI),g=1-h;switch(n.weapon=["shotgun","rocket","laser","turret"].includes(i),i){case"fireball":n.arms=[[-.8*f,.15,-.6*f,-1.1*f,0],[(-.6-h*.8)*f,-.15,.2,(-1.4+h*1.2)*f,0]],n.torso[1]=-.25*g*f,n.torso[0]=-.06*_;break;case"frost":n.arms=[[-.3,.15,-1.15*f,-.9*f,0],[-1.35*f,-.25,.25,-.35*f,0]],n.torso[2]=-.12*f;break;case"lightning":n.arms=[[-1.45*f,.25,-.6*f,-.3,0],[-1.45*f,-.25,.6*f,-.3,0]],n.torso[0]=-.16*_,n.legs=[[0,0,-.17,.15*f],[0,0,.17,.15*f]];break;case"meteor":n.arms=[[-.15,0,-2.65*u+1.1*h,-.45,0],[-.15,0,2.65*u-1.1*h,-.45,0]],n.torso[0]=.12*h*f,n.torsoPos[1]=.05*g*f;break;case"charm":n.arms=[[-.7*f,.45,-.1,-1.6*f,0],[(-.5-h*.85)*f,-.25,.1,(-1.5+h*1.15)*f,0]],n.torso[2]=-.15*f,n.face=.45*f;break;case"tongue":n.arms=[[-.25,0,-.65*f,-.3,0],[-.25,0,.65*f,-.3,0]],n.torso[0]=-.18*h*f,n.torsoPos[2]=.12*h*f,n.face=1.2*f;break;case"fart":n.rot[1]=-.12*f,n.torso[0]=.32*f,n.arms=[[.3*f,.2,-.25,-.4,0],[.3*f,-.2,.25,-.4,0]],n.legs=[[-.15*f,0,-.2,.3*f],[-.15*f,0,.2,.3*f]],n.torsoPos[1]=-.03*f;break;case"shotgun":n.torso[0]=.07*g*f-.13*_,n.legs=[[0,0,-.12,.1],[0,0,.15,.15]];break;case"rocket":n.torso[0]=.1*g*f-.22*_,n.torso[2]=-.08*f,n.legs=[[.1,0,-.2,.15],[-.1,0,.2,.18]];break;case"boomerang":n.weapon=!1,n.arms=[[-.25,.2,-.5*f,-.4,0],[(-.2-h*1.1)*f,(-1.1*g+.2*h)*f,(1.25*g+.15*h)*f,(-.7+h*.5)*f,0]],n.torso[1]=-.45*g*f+.15*h*f;break;case"dash":n.arms=[[.55*f,0,-.4,-.5,0],[.55*f,0,.4,-.5,0]],n.torso[0]=.35*f,n.legs=[[-.2*f,0,-.12,.55*f],[.25*f,0,.12,.4*f]];break;case"blink":n.arms=[[-.2,.4,-.5*f,-1.4*f,0],[-.2,-.4,.5*f,-1.4*f,0]],n.torso[0]=-.16*f,n.scale=[1-.06*_,1+.08*_,1-.06*_];break;case"heal":n.arms=[[-.5*f,.55,.2,-1.3*f,0],[-.5*f,-.55,-.2,-1.3*f,0]],n.torso[0]=-.1*f,n.face=.3*f;break;case"bubble":n.arms=[[-.2,.2,-1.5*h*f,-.8*g,0],[-.2,-.2,1.5*h*f,-.8*g,0]],n.torso[0]=-.08*f;break;case"stomp":n.arms=[[-.2,0,-2.5*g*f-.5*h,-.45,0],[-.2,0,2.5*g*f+.5*h,-.45,0]],n.legs=[[-.35*g*f,0,-.2,.7*g*f],[-.35*g*f,0,.2,.7*g*f]],n.pos[1]=.17*xi(u*Math.PI)-.035*_,n.torso[0]=.18*_;break;case"tornado":n.arms=[[-1*f,.5*f,-xi(l*7)*.65*f,-.65,0],[-1*f,-.5*f,Sx(l*7)*.65*f,-.65,0]],n.torso[1]=xi(l*4)*.15*f;break;case"blackhole":n.arms=[[-.9*f,.45,-.7*f,-1*g*f,0],[-.9*f,-.45,.7*f,-1*g*f,0]],n.torso[0]=-.1*h*f,n.legs=[[0,0,-.15,.1],[0,0,.15,.1]];break;case"mine":n.arms=[[-.3,.1,-.4,-.5,0],[(-1.1*g+.15*h)*f,-.2,.1,-.6*g*f,0]],n.torso[0]=.4*f,n.legs=[[-.3*f,0,-.15,.65*f],[-.3*f,0,.15,.65*f]];break;case"turret":n.torso[0]=.28*f,n.arms=[[-1*f,.1,-.2,-.5,0],[-1*f,-.1,.2,-.5,0]],n.legs=[[-.2*f,0,-.1,.4*f],[-.2*f,0,.1,.4*f]],n.weapon=!1;break;case"banana":n.arms=[[-.3,0,-.5*f,-.6,0],[(-.4-h*.9)*f,-.7*g,.7*g*f,-.5*g*f,0]],n.torso[1]=-.25*g*f;break;case"vampire":n.arms=[[-.4,.2,-.85*f,-1*f,0],[-1.3*f,-.25,.3,-.4,0]],n.torso[0]=-.13*f,n.face=.6*f;break;case"swap":n.arms=[[-1.15*f,.8*g,-.6*f,-.3,0],[-1.15*f,-.8*g,.6*f,-.3,0]],n.torso[1]=(.35*g-.35*h)*f;break;case"decoy":n.arms=[[-.6*f,.5,-.15,-1.2*f,0],[-.6*f,-.5,.15,-1.2*f,0]],n.torso[0]=.16*g*f-.12*h*f,n.face=.8*g*f;break;case"laser":n.torso[0]=-.08*h*f,n.torso[1]=-.08*g*f,n.legs=[[0,0,-.12,.1],[0,0,.12,.1]];break}if(l>=a+o){const p=or();for(const x of["pos","rot","torso","torsoPos"])n[x]=n[x].map(M=>M*d);n.arms=n.arms.map((x,M)=>x.map((v,T)=>p.arms[M][T]+(v-p.arms[M][T])*d)),n.legs=n.legs.map(x=>x.map(M=>M*d)),n.face*=d,d<.3&&(n.weapon=!0)}const m=Ms(l/Math.min(.12,a));if(m<1){const p=or();for(const x of["pos","rot","torso","torsoPos"])n[x]=n[x].map(M=>M*m);n.arms=n.arms.map((x,M)=>x.map((v,T)=>p.arms[M][T]+(v-p.arms[M][T])*m)),n.legs=n.legs.map(x=>x.map(M=>M*m))}return["fireball","frost","lightning","meteor","heal","bubble","blackhole"].includes(i)&&l<a+o+r.recovery*.7&&(n.prop="wand"),n.weight=va(l<c?1:0),n}function wr(i,{mode:e="idle",time:t=0,elapsed:n,emoteId:s=ti[0].id,skillId:r="",speed:a=0,grounded:o=!0,vy:c=0,moveX:l=0,moveZ:u=0,cast:h=null,recoil:d=0,status:f={}}={}){if(!i.rig||!i.elbows)return;const _=e==="emote"?yu(t):Number.isFinite(t)?t:0;let g=or(),m=1;if(e==="emote")g=yx(s,_)||or(),m=Ms(_/.18)*Ms((On-_)/.25);else if(e==="cast")g=Tx(h?.id||r,h,Number.isFinite(n)?n:_);else if(e==="stun")g.weapon=!1,g.torso=[-.2,Math.sin(_*18)*.04,Math.sin(_*24)*.055],g.arms=[[-.25,.15,-.7,-.6,0],[-.25,-.15,.7,-.6,0]],g.legs=[[-.23,0,-.1,.5],[-.23,0,.1,.5]],g.face=.8;else if(e==="drag"){const p=Math.sign(u||1),x=Math.max(-1,Math.min(1,l/Math.max(.2,Math.hypot(l,u))));g.weapon=!1,g.torso=[-.2*p,0,-x*.13],g.arms=[[-.3,.1,-.6,-.55,0],[-.3,-.1,.6,-.55,0]],g.legs=[[-.1*p,0,-.1,.22],[-.1*p,0,.1,.22]],f.knockback&&(g.torso[0]=-.3*p,g.arms[0][2]=-.95,g.arms[1][2]=.95)}else if(e==="jump"||!o)g.arms=[[-.45,.1,-.35,-.6,0],[-.4,-.1,.35,-.65,0]],g.legs=[[-.18,0,-.03,c>0?.6:.25],[-.18,0,.03,c>0?.6:.25]],g.torso[0]=c>0?-.06:.06;else if((e==="walk"||e==="charmed")&&a>.12){const p=_*9.5,x=Math.min(1,a/5),M=xi(p);g.pos[1]=Math.abs(M)*.032*x,g.torso[0]=.05*x,g.torso[2]=M*.028*x,g.legs=[[0,0,0,0],[0,0,0,0]],g.arms=[[-M*.35*x,0,-.18,-.3,0],[M*.2*x,0,.18,-.4,0]]}else g.torsoPos[1]=xi(_*2)*.012,g.arms[0][0]=-.12+xi(_*1.8)*.03;if(o&&a>.12&&(e==="cast"||e==="walk"||e==="charmed")){const p=Math.min(1,a/5),x=xi(_*9.5),M=Math.abs(l)+Math.abs(u)>.05?u/Math.max(.1,Math.hypot(l,u)):1,v=Math.abs(l)+Math.abs(u)>.05?l/Math.max(.1,Math.hypot(l,u)):0;g.legs.forEach((T,w)=>{const R=w?-x:x,C=e==="cast"?.65:1,S=Math.abs(M)>.1?-R*Math.sign(M):R*Math.sign(v||1);T[0]+=R*.5*p*M*C,T[2]+=-R*.25*p*v*C,T[3]+=Math.max(0,S)*.75*p*C}),e==="cast"&&(g.pos[1]+=Math.abs(x)*.018*p)}if(e==="charmed"&&(g.weapon=!1,g.torso[0]+=.08,g.torso[2]+=Math.sin(_*3)*.045,g.arms[0]=[-.25,0,-.5,-.65,0],g.arms[1]=[-.25,0,.5,-.65,0],g.face=.3),f.dragged&&e==="cast"&&(g.torso[0]-=.1*Math.sign(u||1)),f.slow&&a>.12&&(g.torso[0]*=.65,g.legs.forEach(p=>{p[0]*=.65,p[3]+=.1})),bx(i,g,m),g.weapon&&e!=="emote"){const p=e==="cast"&&h?.phase==="preparation"?Math.sin(va(h.phaseElapsed/Math.max(.01,h.fireAt))*Math.PI)*.14:0;Eh(i,p+Math.max(0,d)*.075),e==="cast"&&i.gunKinds[h?.id||r]&&(i.gunKinds[h?.id||r].visible=!0)}if(e==="cast"&&["fireball","frost","charm","lightning","vampire"].includes(h?.id||r)&&h?.phase==="active"){i.upper.updateMatrix();const p=new L(.3,.85,.65).applyMatrix4(i.upper.matrix.clone().invert());xs(i,1,p,new L(1,0,0))}if(e==="emote"&&g.hands&&g.hands.forEach((p,x)=>xs(i,x,new L(x?.68:-.68,-.43,.08).lerp(new L(...p),m),new L(x?1:-1,-.3,.3))),e==="emote"&&g.footTargets&&Ex(i,g.footTargets,m),e==="emote"&&g.prop==="buddy"){const p=i.props.buddy;p.position.set(.85,.24+Math.abs(Math.sin(_*Math.PI*2.5))*.16,.12),p.rotation.set(0,-.25,Math.sin(_*Math.PI*2.5)*.16)}if(e==="emote"&&g.prop==="mic"&&xs(i,1,new L(.5,.35,.65)),e==="emote"&&g.guitar){i.guitar.updateMatrix();const p=new L(.38,.04,.06).applyMatrix4(i.guitar.matrix),x=new L(-.18,.02+Math.sin(_*Math.PI*8)*.055,.06).applyMatrix4(i.guitar.matrix);xs(i,0,new L(-.4,-.45,.1).lerp(p,m)),xs(i,1,new L(.4,-.45,.1).lerp(x,m))}if(xx(i,{mode:e,weapon:g.weapon,guitar:g.guitar,prop:g.prop,time:_}),o&&e!=="jump"&&wx(i,e==="emote"&&!!g.floor)>1e-6&&g.weapon&&e!=="emote"){const x=e==="cast"&&h?.phase==="preparation"?Math.sin(va(h.phaseElapsed/Math.max(.01,h.fireAt))*Math.PI)*.14:0;Eh(i,x+Math.max(0,d)*.075)}vx(i),i.visualState.mode=e}function Dt(i,e,t,n,s,r){const a=new Ot(e,wn(t));return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Ax(i,e,t){const n=new nt;n.position.set(e.x,0,e.z),n.name="arena-prop-"+e.kind,i.add(n);const{w:s,d:r,height:a}=e;if(e.kind==="planter"){Dt(n,new Ie(s,a*.3,r),"#e8d7b9",0,a*.15,0),Dt(n,new Ie(s*.95,a*.08,r*.95),"#927988",0,a*.31,0),Dt(n,new en(1,1),t.id==="candy"?"#e9a3d1":"#94bd88",0,a*.66,0).scale.set(s*.5,a*.34,r*.5);for(const c of[-1,1])Dt(n,new en(.13,0),t.id==="candy"?"#ffe39b":"#f5bed6",c*s*.2,a*.78,r*.32)}else if(e.kind==="arcade"){Dt(n,new Ie(s,a,r),"#b7a0d8",0,a/2,0),Dt(n,new Ie(s*.78,a*.32,.03),"#39415c",0,a*.65,r/2+.008),Dt(n,new Ie(s*.6,a*.23,.035),"#8cd0d0",0,a*.65,r/2+.012),Dt(n,new Ie(s*.8,a*.1,.03),"#ffe39b",0,a*.92,r/2+.008);for(const o of[-1,1])Dt(n,new en(.07,0),o<0?"#ffacbd":"#d7ed99",o*s*.2,a*.38,r/2+.025);Dt(n,new Ie(s*.54,.025,.025),"#f5edf5",0,a*.15,r/2+.017)}else if(e.kind==="gift"){Dt(n,new Ie(s,a,r),"#e8a9c6",0,a/2,0),Dt(n,new Ie(s+.01,a*.15,r+.01),"#ffe5a3",0,a*.65,0),Dt(n,new Ie(s*.15,a+.02,r+.02),"#ffe5a3",0,a/2,0);for(const o of[-1,1])Dt(n,new en(.26,0),"#d596c0",o*.2,a-.15,0).scale.set(1,.5,.75)}else if(e.kind==="terminal"){Dt(n,new Ie(s,a,r),"#8cbcc2",0,a/2,0),Dt(n,new Ie(s*.74,a*.48,.03),"#40516b",0,a*.65,r/2+.015);for(let o=0;o<3;o++)Dt(n,new Ie(s*.5,.06,.035),"#d7f0c0",0,a*(.54+o*.11),r/2+.02);Dt(n,new Ie(s*.3,a*.12,.025),"#fff0c8",0,a*.18,r/2+.015)}else if(e.kind==="bench"){Dt(n,new Ie(s,a*.78,r),"#c6b1dd",0,a*.39,0),Dt(n,new Ie(s,a*.22,r),"#fff0d1",0,a*.89,0);for(let o=-1;o<=1;o++)Dt(n,new Ie(s*.015,.014,r*.9),"#bfa7c7",o*s*.24,a+.004,0)}return n}const Rx=new Set(["planter","arcade","gift","terminal","bench"]),wh=Math.PI*2,Qt=i=>new Qd({color:i});function Ze(i,e,t,n=0,s=0,r=0){const a=new Ot(e,t);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function bs(i){const e=new Set,t=new Set;i.traverse(n=>{if(n.isInstancedMesh&&n.dispose(),n.geometry&&e.add(n.geometry),n.material)for(const s of Array.isArray(n.material)?n.material:[n.material])t.add(s)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),i.clear()}function Iu(i){const e=new nt;i.add(e);let t;return{group:e,show(n){if(t===n)return;t=n,bs(e);const s=typeof n=="object"?{...Mn("cloud"),...n}:Mn(n);Ze(e,new Ie(s.width,.7,s.depth),Qt(s.floor),0,-.35),Ze(e,new Ie(s.width+.2,.25,s.depth+.2),Qt(s.trim),0,-.825);const r=new _d(new br(1.94,1.94),Qt(s.tile),s.width/2*(s.depth/2));r.receiveShadow=!0;const a=new zt;a.rotation.x=-Math.PI/2;let o=0;for(let d=-s.width/2+1;d<s.width/2;d+=2)for(let f=-s.depth/2+1;f<s.depth/2;f+=2)a.position.set(d,.012,f),a.updateMatrix(),r.setMatrixAt(o++,a.matrix);e.add(r);const c=Qt(s.box),l=Qt("#fff0da"),u=Qt(s.trim);for(const d of s.obstacles){if(Rx.has(d.kind)){Ax(e,d,s);continue}if(Ze(e,new Ie(d.w-.03,d.height-.09,d.d-.03),c,d.x,(d.height-.09)/2,d.z),Ze(e,new Ie(d.w,.09,d.d),l,d.x,d.height-.045,d.z),d.kind==="wall")for(let f=-.4*d.w;f<d.w*.5;f+=.8)Ze(e,new Ie(.08,d.height-.12,d.d),u,d.x+f,d.height/2,d.z);else Ze(e,new Ie(d.w,.12,d.d),u,d.x,d.height*.36,d.z)}const h=Qt(s.accent);for(const d of[-s.width/2+.025,s.width/2-.025]){const f=Ze(e,new Ie(.05,.01,s.depth),h,d,.025);f.castShadow=!1}for(const d of[-s.depth/2+.025,s.depth/2-.025]){const f=Ze(e,new Ie(s.width,.01,.05),h,0,.025,d);f.castShadow=!1}for(const d of s.spawns){const f=Ze(e,new Aa(.85,1,32),h,d.x,.026,d.z);f.rotation.x=-Math.PI/2,f.castShadow=!1}},dispose(){i.remove(e),bs(e),t=null}}}function xr(i,e={}){const t=new nt;i.add(t);const n=new nt;t.add(n);const s=new nt;s.position.y=.74,n.add(s);const r=wn("#79cbff"),a=wn("#34304c"),o=wn("#fff3df"),c=wn("#9672d4"),l=Ze(s,new en(.6,2),r,0,.13),u=new nt;u.position.y=.13,s.add(u);const h=new nt;h.scale.setScalar(1),u.add(h);const d=new nt;d.scale.setScalar(1),u.add(d);const f=[],_=[],g=[],m=[],p=[];for(const Fe of[-1,1]){const Ue=new nt;Ue.position.set(Fe*.57,.1,0),s.add(Ue);const Be=new nt;Be.position.y=-.33,Ue.add(Be);const q=new nt;q.position.y=-.35,Be.add(q),m.push(_x(q,Fe,o)),p.push(vh(n,Ue,Be,q,.095,r)),f.push(Ue),_.push(Be),g.push(q)}const x=[],M=[],v=[],T=[],w=[];for(const Fe of[-1,1]){const Ue=new nt;Ue.position.set(Fe*.2,.52,0),n.add(Ue);const Be=new nt;Be.position.y=-.25,Ue.add(Be);const q=new nt;q.position.y=-.24,Be.add(q);const te=Ze(q,Mx(),[o,c],0,0,.07);M.push(Ze(q,bh(),o,0,0,.07));const ye=Ze(q,bh(),c,0,-.052,.07);ye.scale.y=.42,Ze(q,new dt(.115,.135,.105,8),c,0,.17,-.005);const we=Ze(q,new Ie(.16,.06,.13),c,0,.16,.075);we.rotation.x=.25;for(const Ee of[.045,.1,.15]){const Ke=Ze(q,new Ie(.145,.018,.025),o,0,.176-(Ee-.045)*.35,Ee);Ke.rotation.x=.25}p.push(vh(n,Ue,Be,q,.095,r)),x.push(te),v.push(Ue),T.push(Be),w.push(q)}const R=new nt;g[1].add(R),R.rotation.x=Math.PI/2,px(R);const C={};for(const Fe of["shotgun","rocket","laser"]){const Ue=new nt;R.add(Ue),Ue.visible=!1,C[Fe]=Ue}for(const Fe of[-.085,.085])Ze(C.shotgun,new dt(.075,.09,.58,10),Qt("#df7b46"),Fe,.01,.36).rotation.x=Math.PI/2;Ze(C.shotgun,new Ie(.3,.2,.2),Qt("#f0b16a"),0,-.015,-.12),Ze(C.rocket,new dt(.2,.18,.67,14),Qt("#82b995"),0,.03,.31).rotation.x=Math.PI/2,Ze(C.rocket,new Ie(.06,.09,.3),a,0,.25,.33);const S=new Xi({color:"#ff74cc"});for(let Fe=0;Fe<3;Fe++)Ze(C.laser,new Cn(.15,.025,6,16),S,0,.035,.36+Fe*.11);const y=new zt;y.position.set(0,0,.72),R.add(y);const P=new nt;s.add(P),P.position.set(.03,-.2,.76),P.scale.set(-.95,.95,.95),P.rotation.z=-.35,P.visible=!1,mx(P);const D={},U=new nt;g[1].add(U),D.wand=U,gx(U);const N=new nt;g[1].add(N),D.cane=N,Ze(N,new dt(.025,.025,.7,10),a,0,-.28,0);const F=Ze(N,new Cn(.075,.025,8,16,Math.PI),Qt("#ffda65"),0,.075,0);F.rotation.z=0;const B=new nt;g[1].add(B),D.mic=B,Ze(B,new dt(.035,.035,.18,10),a,0,.09,0),Ze(B,new ft(.065,12,8),Qt("#ff8fba"),0,.21,0);const X=new nt;t.add(X),D.buddy=X,Ze(X,new ft(.23,18,12),Qt("#67d0ff")).scale.set(1.25,.85,1),Ze(X,new dt(.21,.22,.16,16),a,0,.21),Ze(X,new dt(.29,.29,.035,20),a,0,.13),Ze(X,new dt(.215,.22,.025,16),o,0,.15);for(const Fe of[-.09,.09])Ze(X,new ft(.025,8,6),a,Fe,.015,.215);Ze(X,new ft(.045,10,8),Qt("#ffb6c6"),0,-.07,.21).scale.set(1,.75,.4),Object.values(D).forEach(Fe=>Fe.visible=!1);const H=Ze(t,new ft(.96,24,16),new Xi({color:"#79cbff",transparent:!0,opacity:.12,depthWrite:!1}),0,.68);H.visible=!1;let ce,de;function Se(Fe){const Ue=jt(Fe),Be=JSON.stringify(Ue);if(Be===ce)return;ce=Be,r.color.set(Ue.color),H.material.color.set(Ue.color),bs(h),bs(d);const q=wn("#fff3df"),te=wn("#34304c"),ye={"#79cbff":"#9672d4","#ffb6da":"#ef92b4","#83e0c0":"#a28bd2","#ffce75":"#91d7dc","#c8a3ff":"#ed999c","#ff8875":"#91d7dc","#d5ef68":"#a28bd2","#f3efe5":"#91d7dc"};c.color.set(ye[Ue.color]||"#9672d4");for(const lt of[-.19,.19]){const I=Ue.face==="goofy"&&lt>0?.24:.19;if(Ze(h,new ft(.16,12,8),q,lt,I,.535).scale.set(.94,Ue.face==="goofy"&&lt<0?1.4:1.24,.65),Ze(h,new ft(.069,10,6),te,lt+(Ue.face==="goofy"?.025:0),I,.626).scale.set(.9,1.25,.4),Ze(h,new en(.019,0),q,lt-.018,I+.04,.655),Ue.face==="angry"){const J=Ze(h,new Ie(.24,.06,.055),te,lt,.38,.55);J.rotation.z=lt<0?-.25:.25}}const we=new Ki;we.moveTo(-.12,-.07),we.quadraticCurveTo(0,-.13,.12,-.07),we.quadraticCurveTo(.1,-.23,0,-.23),we.quadraticCurveTo(-.1,-.21,-.12,-.07),de=Ze(h,new Er(we,6),te,0,0,.603),Ze(de,new ft(.052,8,6),wn("#f390a8"),.015,-.195,.008).scale.set(1.35,.6,.15),Ue.face==="goofy"&&Ze(de,new Ie(.065,.075,.015),q,.035,-.11,.012);const Ke=wn("#f5a0b0");for(const lt of[-.3,.3])Ze(h,new ft(.057,8,6),Ke,lt,-.055,.525).scale.set(1.3,.75,.25);dx(d,Ue.hat)}const Ge={group:t,rig:n,limbVisuals:p,upper:s,body:l,head:u,face:h,accessories:d,feet:x,soles:M,legPivots:v,knees:T,ankles:w,arms:f,elbows:_,palms:g,hands:m,gun:R,gunKinds:C,muzzle:y,guitar:P,props:D,shield:H,outfit:Se,get mouth(){return de},visualState:{},dispose:()=>{i.remove(t),bs(t)}};return Se(e),wr(Ge,{mode:"idle",time:0}),Ge}function Kl(i,e,t=null){const n=new Nl;n.background=new st("#e6ddf3"),n.add(new Vl(16777215,10324654,1.8));const s=new Gl(16772555,2.2);s.position.set(3,5,4),n.add(s);const r=new fn(32,1,.1,20);r.position.set(0,1.9,5.4),r.lookAt(0,.95,0);const a=new Xl({canvas:i,antialias:!0});a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setSize(240,240,!1),a.toneMapping=ba,a.toneMappingExposure=1.1;const o=xr(n,e),c=Ze(n,new dt(1.25,1.35,.16,32),Qt("#b5aad2"),0,-.08);let l=240,u=240;return{character:o,render(h){const d=Math.max(1,i.clientWidth||240),f=Math.max(1,i.clientHeight||240);(d!==l||f!==u)&&(l=d,u=f,a.setSize(l,u,!1),r.aspect=l/u,r.updateProjectionMatrix());const _=t?t(h):{mode:"idle",time:h/1e3};r.position.z=_.emoteId==="paranoid"?6.5:5.4,o.group.rotation.y=t?.12:Math.sin(h*7e-4)*.45,wr(o,_),a.render(n,r)},dispose(){o.dispose(),c.geometry.dispose(),c.material.dispose(),a.dispose()}}}const Cx={fireball:"#ff873c",frost:"#83eaff",lightning:"#ffe873",meteor:"#ff653f",charm:"#ff83cb",tongue:"#ff709c",fart:"#b5df60",shotgun:"#ffd799",rocket:"#ff8059",boomerang:"#ffd174",dash:"#80f0dc",blink:"#ba95ff",heal:"#8bf8bd",bubble:"#89dfff",stomp:"#ffb97c",tornado:"#b8ecff",blackhole:"#ab87ff",mine:"#ff8181",turret:"#ffe07f",banana:"#ffe46e",vampire:"#f983b6",swap:"#bca4ff",decoy:"#a9dff5",laser:"#ff6db2",hit:"#fff4bd",explosion:"#ff9363"};function di(i,e=.9){return new Xi({color:i,transparent:!0,opacity:e,depthWrite:!1,side:dn})}function rt(i,e,t,n=0,s=0,r=0){const a=new Ot(e,t);return a.position.set(n,s,r),i.add(a),a}function En(i,e,t,n=.04,s=.07){const r=rt(i,new Cn(e,s,6,36),t,0,n);return r.rotation.x=Math.PI/2,r}function Th(i,e,t,n){const s=new wa(e.map(r=>new L(...r)));return rt(i,new Ra(s,Math.max(8,e.length*4),t,6,!1),n)}function Px(i=.22){const e=new Ki;e.moveTo(0,-.9),e.bezierCurveTo(-1.2,-.1,-1.1,.8,-.55,.8),e.bezierCurveTo(-.22,.8,0,.55,0,.38),e.bezierCurveTo(0,.55,.22,.8,.55,.8),e.bezierCurveTo(1.1,.8,1.2,-.1,0,-.9);const t=new Er(e,8);return t.scale(i,i,i),t}function Lx(i){const e=new nt;i.add(e);const t=new Map,n=new L(0,1,0);function s(c,l,u){return rt(c,new dt(l,l,1,10),u)}function r(c,l,u){const h=new L(...l),d=new L(...u),f=d.sub(h);c.position.copy(h).addScaledVector(f,.5),c.scale.set(1,Math.max(.001,f.length()),1),c.quaternion.setFromUnitVectors(n,f.normalize())}function a(c){const l=new nt;e.add(l);const u=c.color||Cx[c.type]||"#fff0af",h=di(u),d=di(u,.22),f=di("#fffbe9"),_=di("#222239"),g={group:l,mat:h,soft:d,white:f,dark:_,meshes:[],type:c.type,rings:[],hearts:[],particles:[]},m=Math.max(.1,Number(c.radius)||1);switch(c.type){case"laser":g.meshes.push(s(l,.055,f),s(l,.12,h),s(l,.25,d));break;case"lightning":for(let x=0;x<11;x++)g.meshes.push(s(l,x%3?.055:.075,x%3?h:f));break;case"tongue":for(let x=0;x<12;x++)g.meshes.push(s(l,.09,h));g.tip=rt(l,new ft(.14,12,8),h);break;case"vampire":g.meshes.push(s(l,.045,h),s(l,.12,d));for(let x=0;x<7;x++)g.hearts.push(rt(l,Px(.16),h));break;case"fart":for(let x=0;x<12;x++){const M=x*2.4,v=m*Math.sqrt((x+1)/13)*.7,T=rt(l,new ft(m*(.18+x%3*.02),14,10),d,Math.sin(M)*v,.38+x%3*.15,Math.cos(M)*v);g.meshes.push(T)}g.rings.push(En(l,m,di(u,.28),.025,.025));for(let x=0;x<4;x++){const M=x*Math.PI/2;g.particles.push(rt(l,new en(.07),h,Math.sin(M)*m*.6,.65,Math.cos(M)*m*.6))}break;case"meteor":g.rings.push(En(l,m,h,.025,.06),En(l,m*.82,d,.028,.025)),g.meshes.push(rt(l,new en(.65,1),h),rt(l,new Tn(.5,2.2,12),d));for(let x=0;x<7;x++)g.particles.push(rt(l,new en(.11,0),f));break;case"heal":g.rings.push(En(l,.65,d,-.57,.035));for(let x=0;x<7;x++){const M=new nt;l.add(M),rt(M,new Ie(.1,.32,.06),h),rt(M,new Ie(.32,.1,.06),h),g.meshes.push(M)}break;case"bubble":g.meshes.push(rt(l,new ft(m,28,20),di(u,.12)));for(let x=0;x<3;x++){const M=rt(l,new Cn(m,.025,6,48),x===0?h:d);M.rotation.set(x*.6,x*.8,x*.5),g.rings.push(M)}g.particles.push(rt(l,new ft(.13,12,8),f,-.4,.4,.65));break;case"stomp":for(let x=0;x<3;x++)g.rings.push(En(l,m,x?d:h,.025+x*.012,x?.03:.09));for(let x=0;x<14;x++)g.particles.push(rt(l,new zl(.13,0),x%3?h:f));break;case"explosion":case"hit":case"miss":{const x=c.type!=="explosion";g.meshes.push(rt(l,new en(x?.2:.4,1),f),rt(l,new ft(x?.25:.58,12,8),d));for(let M=0;M<(x?7:16);M++)g.particles.push(rt(l,new _i(x?.07:.14),M%3?h:f));x||g.rings.push(En(l,m,h,0,.08));break}case"tornado":for(let x=0;x<4;x++){const M=[];for(let v=0;v<=32;v++){const T=v/32*Math.PI*5+x,w=m*(.28+v/32*.55);M.push([Math.sin(T)*w,v/32*2.4,Math.cos(T)*w])}g.meshes.push(Th(l,M,x%2?.045:.075,x%2?d:h))}g.rings.push(En(l,m,d,.025,.035));for(let x=0;x<4;x++){const M=rt(l,new Ie(.12,.32,.09),x%2?f:h);g.particles.push(M)}break;case"blackhole":g.meshes.push(rt(l,new ft(.65,24,16),_,0,.85));for(let x=0;x<3;x++){const M=En(l,.88+x*.22,x===0?h:d,.85,.055);M.rotation.x+=x*.18,g.rings.push(M)}g.rings.push(En(l,m,di(u,.22),.03,.025));for(let x=0;x<18;x++)g.particles.push(rt(l,new ft(.055,8,6),x%4?h:f));break;case"mine":{rt(l,new Ie(.62,.44,.62),h,0,.22),rt(l,new Ie(.68,.12,.68),f,0,.49),rt(l,new Ie(.13,.46,.64),_,0,.23),rt(l,new Ie(.64,.46,.13),_,0,.23),g.meshes.push(rt(l,new ft(.095,10,8),f,0,.62)),g.rings.push(En(l,m,d,.025,.022));break}case"turret":{rt(l,new dt(.4,.45,.18,16),_,0,.09);const x=new nt;x.position.y=.55,l.add(x),rt(x,new ft(.37,18,12),h).scale.set(1,.86,1.25),rt(x,new ft(.24,16,10),h,0,.28,.22);for(const M of[-.13,.13])rt(x,new ft(.045,8,6),_,M,.36,.39);rt(x,new Ie(.25,.095,.2),di("#ffaf63"),0,.25,.46),rt(x,new dt(.09,.11,.42,10),_,0,-.01,.37).rotation.x=Math.PI/2,g.meshes.push(x);break}case"banana":{for(let x=0;x<3;x++){const M=x*wh/3;g.meshes.push(Th(l,[[0,.24,0],[Math.sin(M)*.2,.28,Math.cos(M)*.2],[Math.sin(M)*.42,.05,Math.cos(M)*.42]],.065,h))}rt(l,new dt(.035,.045,.14,6),_,0,.32);break}case"decoy":g.character=xr(l,c.look||{color:c.color}),g.character.gun.visible=!1,g.character.group.scale.setScalar(.98),g.character.body.material.transparent=!0,g.character.body.material.opacity=.65,rt(l,new Tn(.055,.16,6),h,0,.03),g.rings.push(En(l,.62,d,.02,.035));break;case"dash":for(let x=0;x<5;x++)g.meshes.push(rt(l,new Ls(.04,.8,3,6),x%2?f:h));break;case"blink":case"swap":for(let x=0;x<2;x++){const M=new nt;l.add(M);for(let v=0;v<2;v++)rt(M,new Cn(.68+v*.12,v?.02:.055,6,36),v?d:h,0,.68).rotation.y=.2;g.meshes.push(M)}break}const p=new Set;l.traverse(x=>{x.material&&p.add(x.material)});for(const x of[h,d,f,_])p.has(x)||x.dispose();return g}function o(c){const l=t.get(c);l&&(e.remove(l.group),bs(l.group),t.delete(c))}return{update(c=[],l=0){const u=new Set;for(const h of c){if(!h||h.type==="muzzle"||!(h.life>0)||!Number.isFinite(h.x)||!Number.isFinite(h.z))continue;const d=String(h.id);u.add(d);let f=t.get(d);f&&f.type!==h.type&&(o(d),f=null),f||(f=a(h),t.set(d,f));const{group:_,meshes:g,rings:m,hearts:p,particles:x,mat:M,soft:v,white:T}=f,w=Number(l)||0,R=Number.isFinite(h.age)?h.age:Math.max(0,(h.maxLife||h.life)-h.life),C=Math.max(.01,h.maxLife||h.life),S=Math.min(1,R/C),y=h.radius||1,P=Math.min(1,h.life/Math.min(.2,C*.5));M.opacity=.9*P,v.opacity=.22*P,T.opacity=.95*P,_.position.set(h.x,Number(h.y)||0,h.z),_.rotation.set(0,0,0),_.scale.set(1,1,1);const D=[(Number.isFinite(h.targetX)?h.targetX:h.x)-h.x,(Number.isFinite(h.targetY)?h.targetY:h.y)-h.y,(Number.isFinite(h.targetZ)?h.targetZ:h.z)-h.z];if(["laser","lightning","tongue","vampire"].includes(h.type)){if(h.type==="laser"||h.type==="vampire")g.forEach(U=>r(U,[0,0,0],D));else for(let U=0;U<g.length;U++){const N=U/g.length,F=(U+1)/g.length,B=h.type==="lightning"?.12:.04,X=H=>[D[0]*H+Math.sin(H*Math.PI)*Math.sin(U*3.4+w*35)*B,D[1]*H+Math.sin(H*Math.PI)*(h.type==="lightning"?U%2?.11:-.11:-.05),D[2]*H];r(g[U],X(N),X(F))}f.tip&&f.tip.position.set(...D),p.forEach((U,N)=>{const F=(R*2+N/p.length)%1;U.visible=!!h.draining,U.position.set(D[0]*(1-F),D[1]*(1-F)+.12*Math.sin(F*Math.PI),D[2]*(1-F)),U.rotation.y=h.angle||0})}switch(h.type){case"fart":g.forEach((U,N)=>{U.scale.setScalar(.8+.12*Math.sin(w*3+N)),U.position.y=.4+N%3*.15+Math.sin(w*2+N)*.06}),x.forEach((U,N)=>{U.position.y=.5+(R*.5+N*.2)%1,U.rotation.y=w});break;case"meteor":{const U=Math.min(1,R/.7);g[0].position.y=.65+(1-U)*8,g[0].rotation.set(w*2,w*1.5,w*.7),g[1].position.y=g[0].position.y+1.25,x.forEach((N,F)=>N.position.set(Math.sin(F*2.4+w)*.5,g[0].position.y+.5+F*.22,Math.cos(F*2.4+w)*.5)),m[0].scale.setScalar(.93+Math.sin(R*20)*.04);break}case"heal":g.forEach((U,N)=>{const F=N*2.4+w*.3,B=(R*.9+N/g.length)%1;U.position.set(Math.sin(F)*.62,-.25+B*1.1,Math.cos(F)*.62),U.rotation.y=-F});break;case"bubble":m.forEach((U,N)=>{U.rotation.y=w*.2+N}),x[0].position.x=-.4+Math.sin(w*.7)*.04;break;case"stomp":m.forEach((U,N)=>U.scale.setScalar(Math.max(.025,Math.min(1,R/.24)-N*.07))),x.forEach((U,N)=>{const F=N*wh/x.length,B=y*Math.min(1,R/.24);U.position.set(Math.sin(F)*B,.05+Math.sin(S*Math.PI)*.3,Math.cos(F)*B),U.rotation.set(w*2,w,0)});break;case"explosion":case"hit":case"miss":g.forEach((U,N)=>U.scale.setScalar((.4+S*1.9)*(N?1.1:1))),x.forEach((U,N)=>{const F=N*2.4,B=y*S;U.position.set(Math.sin(F)*B,Math.sin(N*1.7)*B*.6+Math.sin(S*Math.PI)*.15,Math.cos(F)*B),U.rotation.set(w*2+N,w*3,0)}),m.forEach(U=>U.scale.setScalar(.15+S));break;case"tornado":_.rotation.y=w*5,x.forEach((U,N)=>{const F=w*7+N*1.6,B=(R*.5+N*.23)%1;U.position.set(Math.sin(F)*(y*.4+B*.4),B*2,Math.cos(F)*(y*.4+B*.4)),U.rotation.z=F});break;case"blackhole":m.slice(0,3).forEach((U,N)=>{U.rotation.z=w*(N%2?-1:1)}),x.forEach((U,N)=>{const F=(R*.45+N/x.length)%1,B=y*(1-F),X=N*2.4+R*4;U.position.set(Math.sin(X)*B,.5+F*.35,Math.cos(X)*B),U.scale.setScalar(.8+F*.5)});break;case"mine":g[0].scale.setScalar(.8+Math.abs(Math.sin(w*7))*.2);break;case"turret":g[0].rotation.y=h.angle||0;break;case"banana":_.rotation.y=h.angle||.5,h.triggered&&_.scale.setScalar(Math.max(.1,P));break;case"decoy":_.rotation.y=h.angle||0,wr(f.character,{mode:"idle",time:w}),f.character.gun.visible=!1;break;case"dash":{const U=h.angle||0,N=new L(Math.sin(U),0,Math.cos(U));g.forEach((F,B)=>{F.quaternion.setFromUnitVectors(n,N),F.position.set(-N.x*(.4+B*.13)+Math.cos(U)*(B-2)*.16,(B%3-1)*.16,-N.z*(.4+B*.13)-Math.sin(U)*(B-2)*.16)});break}case"blink":case"swap":g.forEach((U,N)=>{U.position.set(N?D[0]:0,N?D[1]:0,N?D[2]:0),U.rotation.y=h.angle||0,U.scale.setScalar(.75+Math.sin(S*Math.PI)*.2)});break}}for(const h of[...t.keys()])u.has(h)||o(h)},clear(){for(const c of[...t.keys()])o(c)},dispose(){this.clear(),i.remove(e)}}}function Ix(){return`<div class="eyebrow">ТАНЦЫ И ПЕСНИ</div><h2>Нажми — и танцуй.</h2><p class="small-note">Выбери любую эмоцию: боец покажет танец под её музыку.</p><div class="emote-gallery"><div class="emote-demo"><canvas id="emote-demo" aria-label="Предпросмотр танца"></canvas><p id="emote-track-name" role="status">Выбери танец справа</p><button id="preview-emote" class="primary" hidden>■ Остановить</button><div class="demo-timeline"><i id="demo-time"></i></div></div><div class="emote-song-grid" role="group" aria-label="Все танцы с музыкой">${ti.map(i=>`<button class="song-choice" data-song="${i.id}" aria-pressed="false"><span class="song-icon" aria-hidden="true">${i.icon}</span><b>${i.name}</b><small><span class="song-play">▶</span> ${On} сек.</small></button>`).join("")}</div></div>`}function Dx(i,e,t,n=()=>{}){const s=m=>i.querySelector("#"+m);let r=ti[0].id,a=!1,o=0,c=!1,l=0;const u=m=>Math.max(0,(m-o)/1e3),h=Kl(s("emote-demo"),t,m=>a?{mode:"emote",emoteId:r,time:Math.min(On,u(m))}:{mode:"idle",time:m/1e3}),d=[...i.querySelectorAll("[data-song]")];function f(){for(const m of d){const p=a&&m.dataset.song===r;m.setAttribute("aria-pressed",String(p)),m.querySelector(".song-play").textContent=p?"♫":"▶"}s("preview-emote").hidden=!a}function _(){l++,a=!1,e.setEmote(null),f()}async function g(m){_(),r=m;const p=++l;e.setEnabled(!0),n();try{if(await e.unlock(),c||p!==l)return;o=performance.now(),a=!0,f()}catch{!c&&p===l&&(s("emote-track-name").textContent="Нажми ещё раз, чтобы разрешить звук.")}}for(const m of d)m.onclick=()=>g(m.dataset.song);return s("preview-emote").onclick=_,{get emote(){return a&&u(performance.now())<On?r:null},elapsed:u,render(){const m=performance.now();a&&u(m)>=On&&_(),h.render(m),s("demo-time").style.width=a?Math.min(100,u(m)/On*100)+"%":"0%",a&&(s("emote-track-name").textContent=e.recordings.caption(r))},dispose(){c=!0,_(),h.dispose()}}}const Mo=Math.PI*2,Ah=i=>Math.max(0,Math.min(1,i)),yo=new L(0,0,1);new L(0,1,0);function xn(i,e=1){return new Xi({color:i,transparent:!0,opacity:e,depthWrite:!1})}function vt(i,e,t,n=0,s=0,r=0){const a=new Ot(e,t);return a.position.set(n,s,r),i.add(a),a}function Ux(i){const e=new Set,t=new Set;i.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(const s of Array.isArray(n.material)?n.material:[n.material])t.add(s)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),i.clear()}function So(i){const e=new Ki;e.moveTo(0,-.9),e.bezierCurveTo(-1.2,-.1,-1.1,.8,-.55,.8),e.bezierCurveTo(-.2,.8,0,.55,0,.4),e.bezierCurveTo(0,.55,.2,.8,.55,.8),e.bezierCurveTo(1.1,.8,1.2,-.1,0,-.9);const t=new Er(e,8);return t.scale(i,i,i),t}function Nx(i,e=0){if(!i)return null;const t=Zt(i.id);if(!t)return null;const n=i.phase,s=Math.max(0,t.timing[n]-i.phaseElapsed-.001),r=Math.min(t.duration,i.elapsed+Math.min(Math.max(0,e),s));return{...i,elapsed:r,phase:n,phaseElapsed:n==="preparation"?r:n==="active"?r-t.timing.preparation:r-t.timing.preparation-t.timing.active}}function Du(i,e,t=1/60,{time:n=e.time||0,castSnapshotAge:s=0,poseOnly:r=!1,stageY:a=0,winnerFacing:o=0}={}){const c=e.phase==="celebration",l=e.celebration?.emote;i.forEach((u,h)=>{const d=e.players[h];if(!d)return;r||(u.outfit(d.look),u.group.visible=!c||h===e.winner,u.group.position.set(d.x,c?a:d.y,d.z),u.group.rotation.y=c?o:d.cast?.aim??d.angle);const f=e.phase==="fight",_=f?Nx(d.cast,s):null;let g=f&&d.motion?.inputSpeed||0;const m=f&&d.impulses?.length>0,p=f&&d.pull?.type==="charm"&&(d.motion?.speed||0)>.12,x=f&&(d.pull?.type==="tongue"||m||!p&&(d.motion?.speed||0)>.25&&g<.12);p&&(g=d.motion.speed);const M=c?l?"emote":"idle":e.phase!=="fight"?"idle":d.stun>0?"stun":_?"cast":d.grounded?x?"drag":p?"charmed":g>.12?"walk":"idle":"jump",v=d.motion||{},T=d.cast?.aim??d.angle;wr(u,{mode:M,time:c?(e.celebration?.elapsed||0)+Math.max(0,n-(e.time||0)):n,cast:_,elapsed:_?.elapsed,skillId:_?.id,emoteId:l,grounded:f?d.grounded:!0,vy:f?d.vy:0,speed:g,moveX:(v.x||0)*Math.cos(T)-(v.z||0)*Math.sin(T),moveZ:(v.x||0)*Math.sin(T)+(v.z||0)*Math.cos(T),status:{slow:d.slow>0,knockback:m,dragged:x},recoil:u.visualState.recoil||0}),c&&(u.gun.visible=!1),u.shield.visible=f&&d.shield>0&&!e.effects?.some(w=>w.type==="bubble"&&w.owner===h&&w.life>0)})}function Uu(i,e){const t=new nt;t.name="combat-visuals",i.add(t);const n=Lx(i),s=new Map,r=new Map,a=new Map,o=new Map;let c=null,l=-1;function u(m){const p=new nt;t.add(p);const x=!m.skill||m.skill==="bullet"?"#ff8d35":m.color||"#ffd786",M=Math.max(.075,m.radius||.12),v=xn(x),T=xn("#fffbe6"),w=xn(x,.22),R=xn(x,.55),C={group:p,color:x,radius:M,bright:v,white:T,glow:w,fade:R,type:m.skill||"bullet",ornaments:[]};if((!m.skill||m.skill==="bullet")&&(R.opacity=.95),m.skill==="frost"){C.core=vt(p,new _i(M),T),C.core.rotation.z=.4,vt(p,new _i(M*1.15),w);for(let S=0;S<3;S++)C.ornaments.push(vt(p,new _i(M*.35),v,S%2?-.1:.1,S%2?.06:-.06,-.25-S*.18))}else if(m.skill==="charm"){C.core=vt(p,So(M*.7),v),C.core.material.side=dn,vt(p,new ft(M*1.4,12,8),w);for(let S=0;S<3;S++){const y=vt(p,So(M*.4),R,0,0,-.25-S*.2);y.material.side=dn,C.ornaments.push(y)}}else if(m.skill==="rocket"){C.core=vt(p,new Ls(M*.7,M*1.3,4,12),T),C.core.rotation.x=Math.PI/2,vt(p,new Tn(M*.8,M*1.1,12),v,0,0,M*1.1).rotation.x=Math.PI/2;for(let S=0;S<3;S++){const y=vt(p,new Ie(M*1.8,.035,M*1.1),v,0,0,-M*.7);y.rotation.z=S*Math.PI/3}C.exhaust=vt(p,new Tn(M*.65,.55,10),w,0,0,-.43),C.exhaust.rotation.x=-Math.PI/2}else if(m.skill==="boomerang"){const S=new Tn(M*1.1,M*1.7,3);C.core=vt(p,S,v),C.core.rotation.x=Math.PI/2;for(const[y,P]of[[-.075,-.045],[.065,-.05],[0,.09]])C.ornaments.push(vt(p,new ft(.032,8,6),xn("#f87964"),y,.025,P))}else{if(C.core=vt(p,new ft(M,16,10),m.skill==="fireball"||m.skill==="bullet"?v:T),m.skill==="bullet"&&vt(p,new ft(M*.55,12,8),T),vt(p,new ft(M*(m.skill==="fireball"?1.65:1.3),12,8),w),m.skill==="fireball")for(let S=0;S<4;S++)C.ornaments.push(vt(p,new ft(M*.34,8,6),S%2?T:v,0,0,-.2-S*.12));if(m.skill==="shotgun"){const S=vt(p,new Cn(M*.78,.025,4,10),v);S.rotation.y=.5}}return C.tracer=vt(p,new dt(M*.9,.025,1,8),R),C.tracer.rotation.x=Math.PI/2,C.halo=vt(p,new dt(M*.85,.02,1,8),w),C.halo.rotation.x=Math.PI/2,C}function h(m){const p=new nt;t.add(p),p.name="muzzle-flash";const x=Zt(m.skill)?.color||"#ffda8d",M=xn(x),v=xn("#fffbe3"),T=xn(x,.25);vt(p,new ft(.14,12,8),v),vt(p,new Tn(.15,.65,8),v,0,0,.2).rotation.x=Math.PI/2,vt(p,new Tn(.28,.85,8),T,0,0,.25).rotation.x=Math.PI/2;for(let w=0;w<6;w++){const R=w*Mo/6,C=vt(p,new Tn(.04,.32,4),M,Math.sin(R)*.17,Math.cos(R)*.17,.12);C.rotation.z=-R}return{group:p,bright:M,white:v,glow:T}}function d(m){const p=new nt;t.add(p);const x=Zt(m.id)?.color||"#cfb4ff",M=xn(x,.18),v=xn(x,.75),T=vt(p,new ft(.18,14,10),v);vt(p,new ft(.28,12,8),M);let w=null;const R={meteor:3.2,tornado:2.8,blackhole:3.8,mine:1.4,banana:.85}[m.id];return R&&(w=vt(t,new Aa(R-.035,R,48),M),w.rotation.x=-Math.PI/2),{group:p,orb:T,target:w,type:m.id}}function f(){const m=new nt;t.add(m);const p=[],x=[];for(let M=0;M<3;M++){const v=vt(m,So(.1),xn("#ff6faa",.9));v.material.side=dn,p.push(v),x.push(vt(m,new _i(.085),xn("#ffd565")))}return{group:m,hearts:p,stars:x}}function _(m,p){const x=m.get(p);x&&(t.remove(x.group),Ux(x.group),x.target&&(t.remove(x.target),x.target.geometry.dispose(),x.target.material.dispose()),m.delete(p))}function g(){for(const m of[...s.keys()])_(s,m);for(const m of[...r.keys()])_(r,m);for(const m of[...a.keys()])_(a,m);for(const m of[...o.keys()])_(o,m);n.clear(),e.forEach(m=>m.visualState.recoil=0),l=-1,c=null}return{root:t,update(m,p=1/60,{time:x=m?.time||0,smooth:M=!1}={}){if(!m||m.phase!=="fight"){g();return}c!==null&&(m.round!==c||m.time<l-.1)&&g(),c=m.round,l=m.time;const v=Number(x)||0,T=new Set;for(const y of m.bullets||[]){if(!(y.life>0))continue;const P=String(y.id);T.add(P);let D=s.get(P);D&&D.type!==(y.skill||"bullet")&&(_(s,P),D=null),D||(D=u(y),s.set(P,D));const U=new L(y.x,y.y,y.z);M&&D.hasPosition?D.group.position.lerp(U,1-Math.exp(-Math.max(.001,p)*60)):D.group.position.copy(U),D.hasPosition=!0;const N=new L(y.vx??0,0,y.vz??0);N.lengthSq()<1e-6&&N.copy(yo);const F=N.length();D.group.quaternion.setFromUnitVectors(yo,N.normalize());const B=Number.isFinite(y.distance)?y.distance:F*(y.age||0),X=Math.min(B,Math.max(.4,F*.07));D.tracer.scale.y=Math.max(.025,X),D.tracer.position.z=-X/2,D.halo.scale.y=Math.max(.025,X*1.15),D.halo.position.z=-X*.57,y.skill==="boomerang"&&(D.core.rotation.z=v*14,D.ornaments.forEach((H,ce)=>{const de=v*14+ce*2.1;H.position.set(Math.cos(de)*.08,.025,Math.sin(de)*.08)})),y.skill==="charm"&&(D.core.rotation.z=Math.sin(v*9)*.12,D.ornaments.forEach((H,ce)=>{H.position.y=Math.sin(v*8-ce)*.05})),y.skill==="fireball"&&D.ornaments.forEach((H,ce)=>{const de=v*15+ce;H.position.set(Math.sin(de)*.1,Math.cos(de)*.1,-.18-ce*.12)}),D.exhaust&&(D.exhaust.scale.y=.8+Math.sin(v*30)*.15)}for(const y of[...s.keys()])T.has(y)||_(s,y);const w=new Set,R=e.map(y=>Math.max(0,(y.visualState.recoil||0)-p*7));for(const y of m.effects||[]){if(y.type!=="muzzle"||!(y.life>0))continue;const P=Number.isFinite(y.age)?y.age:Math.max(0,(y.maxLife||.13)-y.life),D=Ah(1-P/Math.max(.08,y.maxLife||.13));if(D<=0)continue;const U=String(y.id);w.add(U);let N=r.get(U);N||(N=h(y),r.set(U,N));const F=new L(y.x,y.y,y.z),B=e[y.owner];if(B&&["bullet","shotgun","rocket"].includes(y.skill)&&B.gun.visible){const X=B.muzzle.getWorldPosition(new L);X.distanceTo(F)<.28&&F.copy(X)}N.group.position.copy(F),N.group.quaternion.setFromUnitVectors(yo,new L(Math.sin(y.angle||0),0,Math.cos(y.angle||0))),N.group.scale.setScalar(.6+D*.7),N.bright.opacity=D,N.white.opacity=D,N.glow.opacity=D*.25,B&&y.skill!=="turret"&&(R[y.owner]=Math.max(R[y.owner],D*(y.skill==="rocket"?1.25:y.skill==="shotgun"?1:.6)))}for(const y of[...r.keys()])w.has(y)||_(r,y);e.forEach((y,P)=>{y.visualState.recoil=R[P],y.gun.visible&&(y.gun.position.z-=R[P]*.075)});const C=new Set,S=new Set;m.players.forEach((y,P)=>{const D=e[P],U=y.cast;if(D&&U?.phase==="preparation"&&!["shotgun","rocket","laser","dash","tongue","fart"].includes(U.id)){const N=String(P);C.add(N);let F=a.get(N);F&&F.type!==U.id&&(_(a,N),F=null),F||(F=d(U),a.set(N,F));const B=Ah(U.elapsed/Math.max(.01,U.fireAt)),X=D.palms[1].getWorldPosition(new L);F.group.position.copy(X),F.group.scale.setScalar(.25+B*.75),F.orb.rotation.set(v*3,v*4,0),F.target&&F.target.position.set(U.target.x,U.target.y+.02,U.target.z)}if(D&&(y.charm>0||y.stun>0)){const N=String(P);S.add(N);let F=o.get(N);F||(F=f(),o.set(N,F)),F.group.position.copy(D.group.position),F.group.position.y+=1.52,F.hearts.forEach((B,X)=>{B.visible=y.charm>0;const H=v*2+X*Mo/3;B.position.set(Math.sin(H)*.32,.05+Math.sin(v*3+X)*.06,Math.cos(H)*.32),B.rotation.y=-H}),F.stars.forEach((B,X)=>{B.visible=y.stun>0;const H=v*7+X*Mo/3;B.position.set(Math.sin(H)*.34,0,Math.cos(H)*.34),B.rotation.set(H,H,0)})}});for(const y of[...a.keys()])C.has(y)||_(a,y);for(const y of[...o.keys()])S.has(y)||_(o,y);n.update(m.effects||[],v)},clear:g,dispose(){g(),n.dispose(),i.remove(t)}}}const ia=1/120,Fx=.8,Ox=Object.freeze({fireball:3.5,frost:4.6,lightning:3.5,meteor:3.8,charm:4,tongue:4,fart:5.3,shotgun:3.5,rocket:3.6,boomerang:4.8,dash:3.7,blink:3.7,heal:3.8,bubble:4.4,stomp:4,tornado:5.3,blackhole:4.8,mine:5,turret:11,banana:5,vampire:4,swap:3.7,decoy:4.5,laser:3.6});function zx(i,e={}){if(!Zt(i))throw new Error(`Unknown demonstration skill: ${i}`);const n=jt(e),s={skillId:i,look:n,state:Cu(i),elapsed:0,accumulator:0,duration:Ox[i],cycle:0,castAt:Fx,triggered:!1,hit:!1,initialHealth:[],releasedAt:null};return Nu(s),s}function Nu(i){i.state.players[0].look={...i.look},i.state.players[1].look=jt({color:i.look.color==="#ff8875"?"#79cbff":"#ff8875",face:"goofy"},1),i.initialHealth=i.state.players.map(e=>e.hp)}function Fu(i){return i.state=Cu(i.skillId),i.elapsed=0,i.accumulator=0,i.triggered=!1,i.hit=!1,i.releasedAt=null,i.cycle++,Nu(i),i}function kx(i){const{state:e,skillId:t,elapsed:n}=i,[s,r]=e.players,a=e.players.map((c,l)=>({x:0,z:0,angle:l?-Math.PI/2:Math.PI/2,fire:!1,jump:!1,shield:!1,skills:[!1,!1,!1]}));n>=i.castAt&&s.casts===0&&(a[0].skills[0]=!0);const o=a[1];if(o.angle=Math.atan2(s.x-r.x,s.z-r.z),t==="bubble"){const c=Math.hypot(s.x-r.x,s.z-r.z)/18;o.fire=s.shield>c+.1}else if(t==="decoy"){const c=e.effects.find(l=>l.type==="decoy"&&l.life>0);c&&n>i.castAt+.65&&(o.angle=Math.atan2(c.x-r.x,c.z-r.z),o.fire=!0)}else if(t==="mine"||t==="banana"){const c=e.effects.find(l=>l.type===t&&l.life>0);if(c&&n>i.castAt+.9&&!i.triggered){const l=c.x-r.x,u=c.z-r.z,h=Math.hypot(l,u);h>.15&&(o.x=l/h,o.z=u/h)}}else t==="frost"&&r.slow>0&&n<4.8&&(o.z=.3);return a}function Bx(i,e,t){for(i.accumulator+=Math.min(.15,Math.max(0,Number(e)||0));i.accumulator+1e-10>=ia;){const n=kx(i);Ru(i.state,n,ia),i.elapsed+=ia,i.accumulator-=ia;const s=i.state.players[0],r=i.state.players[1];if(i.releasedAt===null&&(s.cast?.released||s.cast?.fired)&&(i.releasedAt=i.elapsed),i.hit||=r.hp<i.initialHealth[1],(i.skillId==="mine"||i.skillId==="banana")&&(i.triggered||=r.hp<i.initialHealth[1]||r.stun>0||r.slow>0),i.elapsed>=i.duration){Fu(i);break}}return i}function Vx(i){const{state:e,skillId:t}=i,[n,s]=e.players;if(i.elapsed<i.castAt)return"Прицеливание";if(n.cast?.phase==="preparation")return"Подготовка";if(t==="boomerang"&&e.bullets.some(r=>r.skill==="boomerang"))return"Бросок и возвращение";if(t==="charm"&&s.charm>0)return"Сердечко притягивает";if(t==="tongue"&&(s.pull||n.cast?.phase==="active"))return"Захват и подтягивание";if(t==="frost"&&s.slow>0)return"Замедление: попробуй идти";if(t==="bubble"&&n.shield>0)return"Щит отражает выстрелы";if(t==="heal"&&n.hp>i.initialHealth[0])return`Лечение: +${Math.round(n.hp-i.initialHealth[0])} HP`;if(t==="vampire"&&n.hp>i.initialHealth[0])return`Вампиризм: +${Math.round(n.hp-i.initialHealth[0])} HP`;if(t==="turret"&&e.effects.some(r=>r.type==="turret"))return"Турель стреляет 8 секунд";if(t==="mine"||t==="banana"){if(i.triggered)return t==="mine"?"Мина сработала":"Подскользнулся и замедлился";if(e.effects.some(r=>r.type===t))return"Противник входит в ловушку"}if(t==="decoy"){if(e.effects.some(r=>r.type===t))return"Копия принимает выстрелы";if(i.releasedAt!==null)return"Копия взорвалась"}return n.cast?.phase==="active"?"Применение":e.bullets.length||e.effects.some(r=>r.active)?"Действие навыка":i.hit?`Попадание: −${Math.round(i.initialHealth[1]-s.hp)} HP`:i.elapsed>i.castAt+1.5?"Завершение":"Применение"}const Hx=50,Gx=(i,e)=>i.bottom>e.top&&i.top<e.bottom&&i.right>e.left&&i.left<e.right;function yl(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0;const a=(u,h,d=.8)=>{t=Math.min(t,u-d),n=Math.max(n,u+d),s=Math.min(s,h-d),r=Math.max(r,h+d)};i.players.forEach(u=>a(u.x,u.z)),i.bullets.forEach(u=>a(u.x,u.z,.35));for(const u of i.effects)["meteor","fart","tornado","blackhole","stomp","explosion"].includes(u.type)?a(u.x,u.z,Math.min(4,u.radius||1)):a(u.x,u.z,.8),["tongue","laser","lightning","vampire","blink","swap"].includes(u.type)&&Number.isFinite(u.targetX)&&a(u.targetX,u.targetZ,.6);const o=(t+n)/2,c=(s+r)/2,l=Math.max(3.5,(n-t)*.6,((r-s)*.28+1.25)*e);return{centerX:o,centerZ:c,horizontal:l}}function Wx(i,e){const t=zx(i,e),n=new Nl;n.background=new st("#ded3ee"),n.add(new Vl("#e6f1ff","#657088",2.1));const s=new Gl("#fff3d7",3.2);s.position.set(-5,9,6),n.add(s);const r=Iu(n);r.show({...t.state.arena,floor:"#b4cab4",tile:"#c8dbc0",trim:"#9c88b0",box:"#f2d5ac",accent:"#bda4dc"});const a=t.state.players.map(u=>xr(n,u.look)),o=Uu(n,a),c=new Hl(-3.5,3.5,2,-2,.1,80),l=yl(t.state,16/9);return c.position.set(l.centerX,6.5,l.centerZ+10),c.lookAt(l.centerX,.65,l.centerZ),{demo:t,scene:n,camera:c,arena:r,fighters:a,combat:o,view:l,lastNow:null,cycle:0}}function Xx(i,e,t,n,s){const[r,a]=n.demo.state.players,o=9,c=Math.min(78,(e-50)/2);i.save(),i.textBaseline="top",i.font="700 9px system-ui, sans-serif";for(const[l,u,h,d]of[[r,o,"ВЫ","#9bdfc6"],[a,e-o-c,"МАНЕКЕН","#ffb7a9"]])i.fillStyle="#fffbeeeb",i.fillRect(u-3,5,c+6,26),i.fillStyle="#514563",i.fillText(h,u,7),i.textAlign="right",i.fillText(`${Math.max(0,Math.ceil(l.hp))}`,u+c,7),i.textAlign="left",i.fillStyle="#293449",i.fillRect(u,21,c,4),i.fillStyle=d,i.fillRect(u,21,c*Math.max(0,Math.min(1,l.hp/l.max)),4);i.fillStyle="#ece1f5f2",i.fillRect(0,t-23,e,23),i.font="600 9px system-ui, sans-serif",i.fillStyle="#514563",i.textAlign="center",i.fillText(Vx(n.demo),e/2,t-18,e-16),i.fillStyle="#53617c",i.fillRect(0,t-2,e,2),i.fillStyle=s||"#d5ef68",i.fillRect(0,t-2,e*n.demo.elapsed/n.demo.duration,2),i.restore()}function qx(i,e,t={}){let n=jt(t),s=!1,r=-1/0;const a=new Map(e.map(u=>[u.id,u])),o=new Map,c=new WeakMap,l=new Xl({antialias:!0,alpha:!1,powerPreference:"low-power"});return l.setPixelRatio(1),l.outputColorSpace=un,l.toneMapping=ba,l.toneMappingExposure=1.08,{setLook(u){n=jt(u);for(const h of o.values())h.demo.look={...n},h.demo.state.players[0].look={...n}},reset(u){const h=o.get(u);!h||s||(Fu(h.demo),h.combat.clear(),h.lastNow=null,r=-1/0)},inspect(u){const h=o.get(u);return h?{elapsed:h.demo.elapsed,duration:h.demo.duration,cycle:h.demo.cycle,state:structuredClone(h.demo.state)}:null},render(u){const h=Number(u)||0;if(s||!i?.isConnected||h-r<Hx)return;r=h;const d=i.querySelector(".skill-catalog")?.getBoundingClientRect()||i.getBoundingClientRect(),f={top:0,left:0,bottom:globalThis.innerHeight||1e4,right:globalThis.innerWidth||1e4},_={top:Math.max(f.top,d.top),left:Math.max(f.left,d.left),bottom:Math.min(f.bottom,d.bottom),right:Math.min(f.right,d.right)},g=new Set;for(const m of i.querySelectorAll("canvas[data-skill-preview]")){const p=m.dataset.skillPreview,x=a.get(p);if(!x||m.closest("[data-skill-card]")?.hidden||!Gx(m.getBoundingClientRect(),_))continue;g.add(p);let M=c.get(m);if(!M){if(M=m.getContext("2d",{alpha:!1}),!M)continue;c.set(m,M)}let v=o.get(p);v||(v=Wx(p,n),o.set(p,v));const T=v.lastNow===null?0:Math.min(.1,Math.max(0,(h-v.lastNow)/1e3));v.lastNow=h,Bx(v.demo,T),v.cycle!==v.demo.cycle&&(v.cycle=v.demo.cycle,v.combat.clear(),v.view=yl(v.demo.state,16/9)),Du(v.fighters,v.demo.state,T),v.combat.update(v.demo.state,T);const w=Math.max(160,m.clientWidth||240),R=Math.max(84,m.clientHeight||125),C=Math.min(globalThis.devicePixelRatio||1,1.5),S=Math.round(w*C),y=Math.round(R*C);(m.width!==S||m.height!==y)&&(m.width=S,m.height=y),l.setSize(S,y,!1);const P=yl(v.demo.state,S/y),D=T>0?1-Math.exp(-T*8):1;v.view.centerX+=(P.centerX-v.view.centerX)*D,v.view.centerZ+=(P.centerZ-v.view.centerZ)*D;const U=P.horizontal+Math.abs(P.centerX-v.view.centerX)+Math.abs(P.centerZ-v.view.centerZ)*.28*S/y;v.view.horizontal=U>v.view.horizontal?U:v.view.horizontal+(U-v.view.horizontal)*D;const N=v.view.horizontal,F=N*y/S;v.camera.position.set(v.view.centerX,6.5,v.view.centerZ+10),v.camera.lookAt(v.view.centerX,.65,v.view.centerZ),v.camera.left=-N,v.camera.right=N,v.camera.top=F,v.camera.bottom=-F,v.camera.updateProjectionMatrix(),l.render(v.scene,v.camera),M.setTransform(1,0,0,1,0,0),M.drawImage(l.domElement,0,0,S,y),M.setTransform(C,0,0,C,0,0),Xx(M,w,R,v,x.color),m.dataset.previewPhase=v.demo.state.players[0].cast?.phase||(v.demo.elapsed<v.demo.castAt?"ready":"result"),m.dataset.previewCycle=String(v.demo.cycle)}for(const[m,p]of o)g.has(m)||(p.lastNow=null)},dispose(){if(!s){s=!0;for(const u of o.values())u.combat.dispose(),u.fighters.forEach(h=>h.dispose()),u.arena.dispose(),u.scene.clear();o.clear(),l.dispose(),l.forceContextLoss()}}}}function Ou(i){return[...new Set(i)].map(e=>Yi.find(t=>t.id===e)).filter(Boolean).slice(0,5)}function Yx(i,e=[],t=[]){const n=i==="replace",s=n&&e.length===3;return`<div class="draft-screen">
    <div class="draft-titlebar"><span>✦ PICK_ONE.EXE</span><span>ROUNDISH / SKILL SELECT</span><span aria-hidden="true">_ □</span></div>
    <div class="draft-heading"><div><div class="eyebrow">${n?"ПОРАЖЕНИЕ — ЭТО АПГРЕЙД":"ТВОЙ ПЕРВЫЙ ХОД"}</div>
    <h2>${s?"СМЕНИ ТАКТИКУ.":n?"СТАНЬ СИЛЬНЕЕ.":"ВЫБЕРИ УМЕНИЕ."}</h2>
    <p class="picker-intro">${s?"Одно новое умение. Один слот на замену.":n?"Возьми одно умение после поражения. Следующий раунд будет твоим.":"Пять карточек. Один выбор. Каким будет твой первый ход?"}</p></div><div class="draft-pick-stamp"><b id="draft-count">0<span>/1</span></b><small>ВЫБОР ЗА ТОБОЙ</small></div></div>
    <div class="draft-scroll-hint">ЛИСТАЙ КАРТОЧКИ →</div>
    <div class="skill-catalog skill-offers" aria-label="Пять умений на выбор">${Ou(t).map((r,a)=>`<article class="skill-card" data-skill-card="${r.id}" tabindex="0" aria-label="${r.name}: ${r.desc}" style="--skill-color:${r.color};--card-angle:${(a-2)*1.4}deg;--card-index:${a}"><div class="draft-card-top"><span class="draft-card-number">${String(a+1).padStart(2,"0")}</span><span>${r.category}</span><i aria-hidden="true">✦</i></div><div class="draft-card-art"><canvas data-skill-preview="${r.id}" width="320" height="180" aria-label="Анимация умения ${r.name}"></canvas><span class="draft-card-symbol" aria-hidden="true">${r.symbol}</span></div><div class="skill-preview-actions"><span>ПРИМЕР В БОЮ</span><button data-replay-skill="${r.id}" aria-label="Повторить применение: ${r.name}">↻</button></div><div class="skill-card-copy"><h3>${r.name}</h3><p>${r.desc}</p><div class="skill-card-meta"><small>↻ ${r.cooldown} СЕК.</small><span>${r.range?"ДО "+r.range+" М":"НА СЕБЯ"}</span></div><button class="skill-select" data-select-skill="${r.id}" aria-pressed="false">ВЫБРАТЬ <span aria-hidden="true">→</span></button></div><span class="draft-selected-badge" aria-hidden="true">✓ ТВОЙ ВЫБОР</span></article>`).join("")}</div>
    <div id="replacement-hint" class="replacement-hint" role="status">${s?"Выбери карточку, затем слот для замены.":"Нажми на карточку. Подтверди, когда будешь готов."}</div>
    <div class="draft-bar"><div id="draft-slots" aria-label="Три слота умений">${[0,1,2].map(r=>`<button class="draft-slot" data-draft-slot="${r}" disabled><kbd>${r+1}</kbd><span>${Yi.find(a=>a.id===e[r])?.name||"Пустой слот"}</span><small>${s?"Заменить":r===e.length?"Новое умение":e[r]?"В наборе":"После поражения"}</small></button>`).join("")}</div><div class="draft-actions">${n?'<button id="skip-skill" class="secondary">Оставить набор</button>':""}<button id="confirm-loadout" class="primary" disabled>${s?"Выбери слот ↓":"ПОГНАЛИ →"}</button></div></div>
    <div class="draft-statusbar"><span>✿ ТРИ СЛОТА. МНОГО ПРИКОЛОВ.</span><span>НАВЕДИ / ВЫБЕРИ / ПОБЕЖДАЙ</span></div></div>`}function $x(i,{kind:e,equipped:t=[],offers:n=[],look:s,onConfirm:r,onReplace:a,onSkip:o}){let c=null;const l=Ou(n),u=qx(i,l,s),h=e==="replace",d=h&&t.length===3;function f(){i.querySelectorAll("[data-select-skill]").forEach(g=>{const m=g.dataset.selectSkill===c;g.setAttribute("aria-pressed",String(m)),g.innerHTML=m?'ВЫБРАНО <span aria-hidden="true">✓</span>':'ВЫБРАТЬ <span aria-hidden="true">→</span>',g.closest(".skill-card").classList.toggle("selected",m)}),i.querySelectorAll("[data-draft-slot]").forEach(g=>{const m=Number(g.dataset.draftSlot),p=t[m]||(!d&&m===t.length?c:null);g.querySelector("span").textContent=Yi.find(x=>x.id===p)?.name||"Пустой слот",g.disabled=!d||!c,g.classList.toggle("replace-ready",d&&!!c)});const _=i.querySelector("#confirm-loadout");_.hidden=d,_.disabled=!c,_.textContent=h?"ВЗЯТЬ УМЕНИЕ →":"ПОГНАЛИ →",i.querySelector("#draft-count").innerHTML=`${c?1:0}<span>/1</span>`,i.querySelector("#replacement-hint").textContent=d?c?"Нажми на один из трёх слотов внизу, чтобы заменить его.":"Сначала выбери карточку, затем нажми на заменяемый слот.":c?`«${Yi.find(g=>g.id===c).name}» займёт слот ${t.length+1}.`:"Выбери одну карточку. Можно изменить выбор до подтверждения."}return i.querySelectorAll("[data-select-skill]").forEach(_=>_.onclick=()=>{c=_.dataset.selectSkill,f()}),i.querySelectorAll("[data-skill-card]").forEach(_=>{const g=()=>_.querySelector("[data-select-skill]").click();_.onclick=m=>{m.target.closest("button")||g()},_.onkeydown=m=>{m.target===_&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),g())}}),i.querySelectorAll("[data-draft-slot]").forEach(_=>_.onclick=()=>{d&&c&&a(c,Number(_.dataset.draftSlot))}),i.querySelector("#confirm-loadout").onclick=()=>{!c||d||(h?a(c):r([c]))},h&&(i.querySelector("#skip-skill").onclick=o),i.querySelectorAll("[data-replay-skill]").forEach(_=>_.onclick=()=>u.reset(_.dataset.replaySkill)),f(),{inspect:_=>u.inspect(_),render:_=>u.render(_),dispose:()=>u.dispose()}}const ne=i=>document.getElementById(i);let Qn={};try{Qn=JSON.parse(localStorage.getItem("roundish-settings-v2")||"{}")||{}}catch{}const $e={roomServer:typeof Qn.roomServer=="string"?Qn.roomServer.slice(0,2048):"",mapId:Mn(Qn.mapId).id,rotateMaps:Qn.rotateMaps!==!1,look:jt(Qn.look),audio:Qn.audio||{},loadout:Array.isArray(Qn.loadout)?[...new Set(Qn.loadout)].filter(i=>Yi.some(e=>e.id===i)).slice(0,3):[]},it=new ox($e.audio);function Vn(){$e.audio=it.settings();try{localStorage.setItem("roundish-settings-v2",JSON.stringify($e))}catch{}}let Z=ql($e.mapId,$e.rotateMaps),Tt="menu",gt=0,ii,ji="",Ns=null,sa=0,Es,Vi=0,bo={},Ln=[],Dn=null,ya=null,fa=0,zu=0;const nn=new cx,Fs=new hx,ku=new fe,Rh=new rp,Ch=new pi(new L(0,1,0),0),Js=new L,er=[new L,new L],Hn=new Nl;Hn.background=new st("#b6a4d1");Hn.fog=new Ul("#b6a4d1",60,140);const Qi=new Xl({canvas:ne("world"),antialias:!0});Qi.setPixelRatio(Math.min(devicePixelRatio,2));Qi.toneMapping=ba;Qi.toneMappingExposure=1.1;Qi.shadowMap.enabled=!0;Qi.shadowMap.type=Nh;const $t=new fn(36,innerWidth/innerHeight,.5,180);$t.position.set(29,34,44);Hn.add(new Vl(14149631,5329269,2.4));const Vs=new Gl(16773333,3);Vs.position.set(8,25,10);Vs.castShadow=!0;Vs.shadow.mapSize.set(2048,2048);Object.assign(Vs.shadow.camera,{left:-24,right:24,top:24,bottom:-24,far:80});Vs.shadow.bias=-25e-5;Hn.add(Vs);const Ql=Iu(Hn);Ql.show($e.mapId);const Bu=Kl(ne("menu-character"),$e.look,i=>({mode:"idle",time:i/1e3})),ws=[xr(Hn,$e.look),xr(Hn,jt({color:"#ff8875",hat:"beanie"},1))],Sl=Uu(Hn,ws),Zi=new nt;Hn.add(Zi);const Ia=new Ot(new dt(1.22,1.38,.22,32),new fu({color:"#d5ef68",roughness:.6}));Ia.castShadow=!0;Ia.receiveShadow=!0;Ia.position.y=-.14;Zi.add(Ia);const Da=new Ot(new Cn(1.55,.035,8,64),new Xi({color:"#fff2aa"}));Da.rotation.x=Math.PI/2;Da.position.y=.04;Zi.add(Da);Zi.visible=!1;const Hi=new L(-8,0,0);function Vu(){Qi.setSize(innerWidth,innerHeight),$t.aspect=innerWidth/innerHeight,$t.updateProjectionMatrix()}addEventListener("resize",Vu);Vu();function ri(i){ne("toast").textContent=i,ne("toast").classList.add("show"),clearTimeout(ri.timer),ri.timer=setTimeout(()=>ne("toast").classList.remove("show"),4200)}function ai(){Dn?.dispose(),Dn=null,ya?.dispose(),ya=null,ne("modal").hidden=!0,ne("modal").classList.remove("skill-picker")}function zn(i,e=!0){ai(),ne("dialog-content").innerHTML=i,ne("modal").hidden=!1,ne("close").hidden=!e}function Xt(i){ii?.open&&ii.send(i)}function Tr(){ne("sound").textContent=it.enabled?"♫ Звук: вкл.":"♫ Звук: выкл.",ne("sound").setAttribute("aria-pressed",String(it.enabled))}Tr();let jx;function Hu(){return jx||=(async()=>{try{for(const i of await fx())try{await it.recordings.import(i.id,i.file,i.start)}catch{}}catch{}await it.recordings.load($e.roomServer)})()}function ec(){it.unlock().then(()=>{Hu(),ne("audio-hint")&&(ne("audio-hint").hidden=!0),Tr()}).catch(()=>ri("Браузер заблокировал звук. Нажми кнопку звука ещё раз."))}addEventListener("pointerdown",ec,{once:!0,capture:!0});addEventListener("keydown",ec,{once:!0,capture:!0});ne("sound").onclick=()=>{it.setEnabled(!it.enabled),it.enabled&&ec(),Tr(),Vn()};ne("emote-settings").onclick=()=>{zn(Ix()),Dn=Dx(ne("dialog-content"),it,$e.look,()=>{Tr(),Vn()})};ne("audio-settings").onclick=()=>{zn('<div class="eyebrow">ГРОМКОСТЬ</div><h2>Звучит как хаос.</h2><p>Музыка играет в меню и во время победных танцев. Выстрелы, шаги и умения звучат на арене.</p><label class="volume-row">Музыка <input id="music-volume" type="range" min="0" max="100" value="'+Math.round(it.musicVolume*100)+'"><output id="music-value">'+Math.round(it.musicVolume*100)+'%</output></label><label class="volume-row">Эффекты <input id="effects-volume" type="range" min="0" max="100" value="'+Math.round(it.effectsVolume*100)+'"><output id="effects-value">'+Math.round(it.effectsVolume*100)+'%</output></label><button id="test-sound" class="secondary">Послушать выстрел</button>');for(const i of["music","effects"])ne(i+"-volume").oninput=e=>{it.setVolume(i,Number(e.target.value)/100),ne(i+"-value").textContent=e.target.value+"%",Vn()};ne("test-sound").onclick=()=>{it.setEnabled(!0),Tr(),it.unlock().then(()=>it.effect("shot")),Vn()}};ne("customize").onclick=()=>{it.effect("click"),zn(ix($e.look)),Dn=Kl(ne("character-preview"),$e.look);function i(){$e.look=jt($e.look),Dn.character.outfit($e.look),ws[0].outfit($e.look),Bu.character.outfit($e.look),Vn();const e=ne("dialog-content");e.querySelector(".custom-grid").style.setProperty("--fighter-color",$e.look.color),e.querySelectorAll("[data-preset]").forEach(t=>t.setAttribute("aria-pressed",String(JSON.stringify(jt(_l.find(n=>n.id===t.dataset.preset)))===JSON.stringify($e.look))));for(const t of["color","hat","face"])e.querySelectorAll("[data-"+t+"]").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset[t]===$e.look[t])))}for(const e of["color","hat","face"])ne("dialog-content").querySelectorAll("[data-"+e+"]").forEach(t=>t.onclick=()=>{$e.look[e]=t.dataset[e],i(),it.effect("click")});ne("dialog-content").querySelectorAll("[data-preset]").forEach(e=>e.onclick=()=>{$e.look=jt(_l.find(t=>t.id===e.dataset.preset)),i(),it.effect("pick")}),ne("save-look").onclick=()=>{ai(),it.effect("pick")}};ne("menu-character").onclick=()=>ne("customize").click();ne("menu-character").onkeydown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),ne("customize").click())};ne("map-choices").innerHTML=nx($e.mapId);ne("rotate-maps").checked=$e.rotateMaps;function Gu(){const i=Mn($e.mapId);ne("arena-title").textContent=String(Bi.indexOf(i)+1).padStart(2,"0")+" / "+i.name.toUpperCase(),ne("arena-subtitle").textContent=i.subtitle,document.querySelectorAll("[data-map]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.map===$e.mapId)))}Gu();for(const i of document.querySelectorAll("[data-map]"))i.onclick=()=>{$e.mapId=i.dataset.map,Ql.show($e.mapId),Gu(),Vn(),it.effect("click")};ne("rotate-maps").onchange=i=>{$e.rotateMaps=i.target.checked,Vn()};function Wu(i){Tt=i,gt=i==="guest"?1:0,Z=ql($e.mapId,$e.rotateMaps,gt===0?[$e.look,jt({color:"#ff8875",hat:"beanie",face:"angry"},1)]:[void 0,$e.look]),ji="",Ns=null,fa=0,nn.consumeCasts(),Vi=0,Ln=[],nn.clear(),Fs.clear(),it.setMenu(!1),it.reset(Z.players),ne("menu").hidden=!0,ne("hud").hidden=!1,ne("exit").hidden=!1,ne("footer-mark").hidden=!0,ai(),document.body.classList.add("playing"),ne("name0").textContent="ТЫ",ne("name1").textContent=i==="bot"?"БОТ":"ДРУГ";const e=Mn(Z.mapId),t=Math.max(e.depth*1.65,e.width/$t.aspect*1.13);$t.position.set(0,t,t*.88*lr(gt)),Hi.set(0,0,0),$t.lookAt(Hi),i==="guest"&&(Z.phase="connecting"),i==="bot"&&(Yl(Z,1,[Z.players[1].offers[Math.floor(Math.random()*5)]]),$l(Z,1)),ri("Выбери одно из пяти умений. После поражения сможешь взять ещё одно.")}ne("bot").onclick=()=>Wu("bot");function Sa(){clearTimeout(Es),ii&&(ii.removeAllListeners(),ii.close()),ii=null,Fs.clear()}ne("exit").onclick=()=>{Sa(),Tt="menu",ne("audio-settings").disabled=!1,nn.clear(),it.setMenu(!0),it.setEmote(null),Sl.clear(),Zi.visible=!1,ne("victory-showcase").hidden=!0,ne("skill-hud").hidden=!0,document.body.classList.remove("celebrating"),ne("menu").hidden=!1,ne("hud").hidden=!0,ne("exit").hidden=!0,ne("footer-mark").hidden=!1,ai(),document.body.classList.remove("playing"),ws[0].outfit($e.look)};ne("close").onclick=()=>{ai(),Tt==="menu"?Sa():ji=""};ne("online").onclick=()=>{zn('<div class="eyebrow">ПРИВАТНАЯ ДУЭЛЬ</div><h2>Две пушки.<br>Одна дружба.</h2><p>Создай комнату и передай код другу. Карты и их смену выбирает хозяин комнаты. Каждый играет своим бойцом.</p><label for="room-server">Адрес сервера игры</label><input id="room-server" aria-label="Адрес сервера игры" placeholder="https://игра.рф"><p class="small-note">Если игра открыта на своём сервере, оставь поле пустым. Для игры с другом у обоих должен быть один адрес сервера.</p><div class="room-actions"><button class="primary" id="host">Создать комнату ›</button></div><div class="room-actions"><input id="code" aria-label="Код комнаты" placeholder="Код комнаты" maxlength="6"><button class="secondary" id="join">Войти</button></div><p id="netstatus">Оба игрока должны открыть эту версию игры. Для соединения нужен интернет.</p>'),ne("room-server").value=$e.roomServer,ne("room-server").style.textTransform="none",ne("host").onclick=Jx,ne("join").onclick=Kx};function vi(i){ne("netstatus")?ne("netstatus").textContent=i:ri(i)}function Xu(i,e=null){Sa(),$e.roomServer=ne("room-server").value.trim(),Vn();try{const t=new W_($e.roomServer,e);t.on("created",n=>{clearTimeout(Es),vi("Ждём друга. Передай ему код:"),document.querySelector(".room-code")?.remove();const s=document.createElement("div");s.className="room-code",s.textContent=n,ne("netstatus").after(s)}),t.on("error",n=>{vi(n.message),clearTimeout(Es),ne("host")&&(ne("host").disabled=!1),ne("join")&&(ne("join").disabled=!1)}),Zx(t,i),Es=setTimeout(()=>{vi("Сервер не ответил. На этом адресе должен быть запущен сервер ROUNDISH 1.15, а не только HTML-файл."),Sa(),ne("host")&&(ne("host").disabled=!1),ne("join")&&(ne("join").disabled=!1)},1e4)}catch(t){vi(t.message),ne("host")&&(ne("host").disabled=!1),ne("join")&&(ne("join").disabled=!1)}}function Zx(i,e){if(ii&&ii!==i){i.close();return}ii=i,i.on("open",()=>{clearTimeout(Es),Wu(e?"host":"guest"),it.unlock().then(()=>Hu()).then(()=>it.recordings.load($e.roomServer)).catch(()=>{}),e&&Xt({type:"start",game:Z}),Xt({type:"look",look:$e.look})}),i.on("data",t=>{!t||typeof t!="object"||(Tt==="host"?(t.type==="input"&&Fs.receive(t.input,performance.now(),!!t.reset),t.type==="look"&&(Z.players[1].look=jt(t.look,1),Xt({type:"state",game:Z})),t.type==="loadout"&&Z.phase==="loadout"&&(Array.isArray(t.ids)&&t.ids.length===1&&Yl(Z,1,t.ids)&&$l(Z,1)?Xt({type:"state",game:Z}):Xt({type:"reject",reason:"Выбери одно умение из предложенных пяти."})),t.type==="pick"&&Z.phase==="pick"&&Z.loser===1&&(Zl(Z,1,t.id??null,t.slot)?(Vi=0,Xt({type:"state",game:Z})):Xt({type:"reject",reason:"Выбери одно из предложенных умений и подходящий слот."})),t.type==="emote"&&jl(Z,1,t.id)&&Xt({type:"state",game:Z})):Tt==="guest"&&((t.type==="state"||t.type==="start")&&t.game?.players?.length===2&&(Z=t.game,zu=performance.now(),(Z.players[1].ready||Z.phase!=="loadout")&&(Ns=null)),t.type==="start"&&(ji="",it.reset(Z.players)),t.type==="reject"&&(Ns=null,ji="",ri(t.reason||"Не удалось выбрать умения."))))}),i.on("close",()=>{clearTimeout(Es),Tt==="menu"&&!i.failed&&(vi("Соединение с сервером закрыто. Создай комнату заново."),ne("host")&&(ne("host").disabled=!1),ne("join")&&(ne("join").disabled=!1)),Tt!=="menu"&&(Z.phase="disconnected",ai(),ri("Друг отключился. Вернись в меню, чтобы начать новую игру."))})}function Jx(){vi("Создаём комнату…"),ne("host").disabled=!0,Xu(!0)}function Kx(){const i=ne("code").value.trim().toUpperCase();if(!/^[A-Z2-9]{6}$/.test(i)){vi("Введи код из 6 символов.");return}vi("Подключаемся…"),ne("join").disabled=!0,Xu(!1,i)}function Qx(i){if($e.loadout=i,Vn(),Tt==="guest"){Ns=i,Xt({type:"loadout",ids:i}),ji="";return}Yl(Z,gt,i)&&$l(Z,gt)&&(ai(),it.effect("pick"),Xt({type:"state",game:Z}))}function Ph(i,e){if(Tt==="guest"){Xt({type:"pick",id:i,slot:e}),zn('<div class="waiting-screen"><div class="waiting-dots">● ● ●</div><h2>Готовимся к раунду…</h2></div>',!1);return}Zl(Z,gt,i,e)&&(Vi=0,Ln=[],ai(),it.effect("pick"),Xt({type:"state",game:Z}))}function Lh(i){const e=Z.players[gt].skills,t=Z.players[gt].offers||[];zn(Yx(i,e,t),!1),ne("modal").classList.add("skill-picker"),ya=$x(ne("dialog-content"),{kind:i,equipped:e,offers:t,look:$e.look,onConfirm:Qx,onReplace:Ph,onSkip:()=>Ph(null)})}function ev(i){Z.phase!=="celebration"||Z.winner!==gt||(Tt==="guest"?Xt({type:"emote",id:i}):jl(Z,gt,i)&&(Xt({type:"state",game:Z}),it.effect("pick")))}function Ih(){const i=Z.phase+":"+(Z.phase==="loadout"?!!(Z.players[gt].ready||Ns):Z.phase==="celebration"?Z.celebration?.emote||"":Z.round)+":"+(["loadout","pick"].includes(Z.phase)?(Z.players[gt].offers||[]).join(","):"");if(i!==ji){if(ji=i,ai(),tc(),Fs.consumeCasts(),Z.phase==="fight"&&Z.players.forEach((e,t)=>er[t].set(e.x,e.y,e.z)),ne("audio-settings").disabled=["loadout","pick","celebration"].includes(Z.phase),ne("victory-showcase").hidden=Z.phase!=="celebration",ne("skill-hud").hidden=Z.phase!=="fight",document.body.classList.toggle("celebrating",Z.phase==="celebration"),Z.phase==="connecting"&&zn('<div class="waiting-screen"><h2>Готовим выбор умений…</h2><p>Ждём варианты от хозяина комнаты.</p></div>',!1),Z.phase==="loadout"&&(Z.players[gt].ready||Ns?zn('<div class="waiting-screen"><div class="eyebrow">НАБОР ГОТОВ</div><div class="waiting-dots">● ● ●</div><h2>Друг выбирает первое умение.</h2><p>Он тоже выбирает одно из пяти. Бой начнётся, когда готовы оба.</p></div>',!1):Lh("initial")),Z.phase==="celebration"){const e=Z.winner===gt,t=Z.celebration?.emote;if(t||it.effect("victory"),ne("toast").classList.remove("show"),ne("winner-name").textContent=e?"ТВОЙ ВЫХОД!":Tt==="bot"?"БОТ УМЕЕТ ПРАЗДНОВАТЬ":"ВЫХОД ДРУГА",ne("emote-caption").textContent=t?(ti.find(n=>n.id===t)?.name||"Победная эмоция")+" · "+it.recordings.caption(t):e?"Выбери эмоцию — её увидят оба игрока":"Победитель выбирает свою эмоцию…",ne("emote-progress").hidden=!t,ne("emote-buttons").innerHTML=!t&&e?ti.map(n=>`<button class="emote-choice" data-emote="${n.id}"><span>${n.icon}</span>${n.name}</button>`).join(""):"",document.querySelectorAll("[data-emote]").forEach(n=>n.onclick=()=>ev(n.dataset.emote)),Tt==="bot"&&!e&&!t){const n=Z.round;setTimeout(()=>{Tt==="bot"&&Z.phase==="celebration"&&Z.round===n&&!Z.celebration.emote&&jl(Z,1,ti[Math.floor(Math.random()*ti.length)].id)},1e3)}}if(Z.phase==="pick")if(Z.loser===gt)Lh("replace");else if(Tt==="bot"){ri("Бот выбирает новое умение…");const e=Z.round;setTimeout(()=>{if(Tt==="bot"&&Z.phase==="pick"&&Z.round===e){const t=Z.players[1].offers;Zl(Z,1,t[Math.floor(Math.random()*t.length)],Z.players[1].skills.length===3?Math.floor(Math.random()*3):void 0),Vi=0}},1400)}else zn('<div class="waiting-screen"><div class="eyebrow">РАУНД ЗА ТОБОЙ</div><div class="waiting-dots">● ● ●</div><h2>Друг меняет тактику.</h2><p>Он выбирает одно из пяти новых умений. При трёх занятых слотах — заменяет одно.</p></div>',!1);if(Z.phase==="over"&&(zn('<div class="eyebrow">GG · ХОРОШАЯ ИГРА</div><h2>'+(Z.winner===gt?"Победа! Ты — легенда.":"Реванш?")+"</h2><p>Итоговый счёт: "+Z.players[gt].score+" : "+Z.players[1-gt].score+'</p><button id="again" class="primary">В меню ›</button>',!1),ne("again").onclick=()=>ne("exit").click()),Z.phase==="fight"){const e=Mn(Z.mapId),t=Math.max(e.depth*1.65,e.width/$t.aspect*1.13);$t.position.set(0,t,t*.88*lr(gt)),Hi.set(0,0,0),$t.lookAt(Hi),$e.loadout=[...Z.players[gt].skills],Vn(),document.activeElement?.blur(),ri("Раунд "+Z.round+" · "+Mn(Z.mapId).name),qu(!0)}}}function qu(i=!1){const e=Z.players[gt],t=e.skills.join(",");(i||ne("skill-slots").dataset.loadout!==t)&&(ne("skill-slots").dataset.loadout=t,ne("skill-slots").innerHTML=e.skills.map((n,s)=>{const r=Zt(n);return`<button class="active-skill" data-cast="${s}" style="--skill-color:${r.color}"><i class="cooldown-mask"></i><kbd>${s+1}</kbd><b>${r.name}</b><small>Готово</small></button>`}).join(""),document.querySelectorAll("[data-cast]").forEach(n=>n.onclick=()=>{nn.cast(Number(n.dataset.cast)),n.blur()})),document.querySelectorAll("[data-cast]").forEach(n=>{const s=Number(n.dataset.cast),r=e.skillCooldowns[s]||0,a=Zt(e.skills[s]);n.disabled=r>0||!!e.cast||Z.phase!=="fight",n.classList.toggle("ready",r<=0),n.querySelector("small").textContent=e.cast?.slot===s?{preparation:"Подготовка",active:"Применение",recovery:"Завершение"}[e.cast.phase]:r>0?r.toFixed(1)+" с":"Готово",n.querySelector(".cooldown-mask").style.height=Math.min(100,r/a.cooldown*100)+"%"})}function tc(){nn.clear(),Tt==="guest"&&Xt({type:"input",input:{...nn.read(!1),angle:Z.players[gt].angle},reset:!0})}function nc(){return Tt!=="menu"&&Z.phase==="fight"&&ne("modal").hidden&&!document.hidden}addEventListener("keydown",i=>{!nc()||["INPUT","SELECT","TEXTAREA","BUTTON"].includes(i.target.tagName)||nn.down(i.code,i.repeat)&&i.preventDefault()});addEventListener("keyup",i=>nn.up(i.code));addEventListener("blur",tc);document.addEventListener("visibilitychange",()=>{document.hidden&&tc()});addEventListener("pointermove",i=>{ku.set(i.clientX/innerWidth*2-1,1-i.clientY/innerHeight*2),i.buttons&1||(nn.fire=!1)});ne("world").addEventListener("pointerdown",i=>{i.button===0&&nc()&&(nn.fire=!0)});addEventListener("pointerup",()=>{nn.fire=!1});addEventListener("pointercancel",()=>{nn.fire=!1});function tv(){const i=Z.players[gt];return Ch.constant=-(i.y+.8),Rh.setFromCamera(ku,$t),Rh.ray.intersectPlane(Ch,Js),{...ef(nn.read(nc()),gt),angle:Math.atan2(Js.x-i.x,Js.z-i.z),aimX:Js.x,aimZ:Js.z}}function nv(i,e,t){const n=t.width-2,s=t.depth-2,r=-t.width/2+1.5,a=-t.depth/2+1.5,o=p=>({x:Math.max(0,Math.min(n-1,Math.round(p.x-r))),z:Math.max(0,Math.min(s-1,Math.round(p.z-a)))}),c=o(i),l=o(e),u=p=>p.z*n+p.x,h=new Map([[u(c),-1]]),d=[c];let f=c,_=1/0;for(let p=0;p<d.length;p++){const x=d[p],M=Math.hypot(x.x-l.x,x.z-l.z);if(M<_&&(f=x,_=M),M===0)break;for(const[v,T]of[[1,0],[-1,0],[0,1],[0,-1]]){const w={x:x.x+v,z:x.z+T},R=u(w);if(w.x<0||w.x>=n||w.z<0||w.z>=s||h.has(R))continue;const C=w.x+r,S=w.z+a;t.obstacles.some(y=>y.height>i.y+.01&&Eu(C,S,.67,y))||(h.set(R,u(x)),d.push(w))}}const g=[];let m=u(f);for(;m!==u(c)&&m!==-1&&g.length<n*s;)g.unshift({x:m%n+r,z:Math.floor(m/n)+a}),m=h.get(m)??-1;return g}function iv(i){Vi-=i;const e=Z.players[1],t=Z.players[0],n=Mn(Z.mapId),s=t.x-e.x,r=t.z-e.z,a=Math.hypot(s,r),o=Ds(e,t,n.obstacles,e.y+.65);if(Vi<=0){Vi=.35,(!o||a>8)&&(Ln=nv(e,t,n));let c=0,l=0;if(o&&a<=8){const d=a<4?-1:a>6?1:0;c=s/(a||1)*d+Math.cos(Z.time*.8)*.45,l=r/(a||1)*d+Math.sin(Z.time*.8)*.45}else{for(;Ln.length&&Math.hypot(e.x-Ln[0].x,e.z-Ln[0].z)<.65;)Ln.shift();Ln[0]&&(c=Ln[0].x-e.x,l=Ln[0].z-e.z)}Math.abs(e.x)>n.width/2-2&&(c=-Math.sign(e.x)),Math.abs(e.z)>n.depth/2-2&&(l=-Math.sign(e.z));const u=Z.bullets.some(d=>d.owner===0&&Math.hypot(d.x-e.x,d.z-e.z)<3),h=e.skills.map((d,f)=>{const _=Zt(d);return(e.skillCooldowns[f]||0)<=0&&Math.random()<.45&&(["heal","bubble"].includes(d)&&e.hp<75||!["heal","bubble"].includes(d)&&a<_.range+1)});bo={x:c,z:l,skills:h,angle:Math.atan2(s,r)+(Math.random()-.5)*.075,fire:o,jump:u&&Math.random()<.4,shield:u}}return bo.angle=Math.atan2(s,r),bo}let Dh=performance.now();function Yu(i){requestAnimationFrame(Yu);const e=Math.min((i-Dh)/1e3,.1);Dh=i;let t;if(Tt!=="menu"){if(t=tv(),Tt==="guest")i-sa>30&&(Xt({type:"input",input:t}),nn.consumeCasts(),sa=i);else{fa+=e;let g=!1;for(;fa>=1/60;)Ru(Z,[t,Tt==="bot"?iv(1/60):Fs.read(i)],1/60),fa-=1/60,g=!0;g&&(nn.consumeCasts(),Fs.consumeCasts()),Tt==="host"&&i-sa>40&&(Ih(),Xt({type:"state",game:Z}),sa=i)}Ih(),it.observe(Z.players,gt,Z.phase==="fight");for(let g=0;g<2;g++){const m=Z.players[cc(g,gt)];ne("hp"+g).style.width=Math.max(0,m.hp/m.max*100)+"%",ne("hp"+g).style.background=m.look.color,ne("cards"+g).textContent=m.skills.map(p=>Zt(p)?.symbol).join("  ")+(m.stun>0?" · Оглушён":m.pull?.type==="tongue"?" · Язык притягивает":m.charm>0?" · Обаяние: можно сопротивляться":m.slow>0?" · Замедлен":""),ws[cc(g,gt)].outfit(m.look)}ne("score").textContent=Z.players[gt].score+" : "+Z.players[1-gt].score,ne("round").textContent="РАУНД "+Z.round,ne("map-name").textContent=Mn(Z.mapId).name,qu()}Tt==="menu"&&Bu.render(i);const n=Tt==="menu",s=Mn(n?$e.mapId:Z.mapId);Ql.show(s.id);const r=$t.aspect<1.1,a=Math.max(s.depth*1.65,s.width/$t.aspect*1.13),o=!n&&Z.phase==="celebration",c=Z.players[Z.winner]||Z.players[0],l=Tt==="guest"?Math.min(.1,Math.max(0,(i-zu)/1e3)):0,u=Z.time+l,h=(Z.celebration?.elapsed||0)+(Z.celebration?.emote?l:0),d=Math.max(...s.obstacles.map(g=>g.height))+.8,f=o?new L(c.x,d+.85,c.z):n?new L(r?-2:-8,0,0):new L(0,0,0),_=o?f.clone().add(new L(4.4,3.1,6.8)):n?new L(r?15:29,r?38:34,r?48:44):new L(0,a,a*.88*lr(gt));if(o){const g=1-Math.exp(-Math.max(0,u-(Z.celebration.startedAt??u))*3.5);$t.position.copy(new L(0,a,a*.88*lr(gt)).lerp(_,g)),Hi.copy(f)}else $t.position.lerp(_,1-Math.exp(-e*5)),Hi.lerp(f,1-Math.exp(-e*5));$t.lookAt(Hi),Zi.visible=o,Zi.position.set(c.x,d,c.z),Da.rotation.z=i*.001,o&&Z.celebration?.emote&&(ne("emote-progress").querySelector("i").style.width=Math.min(100,h/On*100)+"%"),it.setEmote(n&&Dn?.emote?Dn.emote:o?Z.celebration?.emote:null,n&&Dn?.emote?Dn.elapsed(performance.now()):h),o&&Z.celebration?.emote&&(ne("emote-caption").textContent=(ti.find(g=>g.id===Z.celebration.emote)?.name||"Победная эмоция")+" · "+it.recordings.caption(Z.celebration.emote));for(let g=0;g<2;g++){const m=Z.players[g],p=ws[g];if(p.group.visible=!o||g===Z.winner,!n&&!o){const v=new L(m.x,m.y,m.z);er[g].distanceTo(v)>3||Z.phase!=="fight"?er[g].copy(v):er[g].lerp(v,1-Math.exp(-e*24)),p.group.position.copy(er[g])}else p.group.position.set(n?g?6:8:m.x,o?d:0,n?g?-7:-2:m.z);const x=o?Math.atan2(4.4,6.8):n?g?.2:.4:m.cast?.aim??m.angle,M=Math.atan2(Math.sin(x-p.group.rotation.y),Math.cos(x-p.group.rotation.y));p.group.rotation.y+=M*(1-Math.exp(-e*24)),n&&(wr(p,{mode:"idle",time:i/1e3}),p.shield.visible=!1)}n||Du(ws,Z,e,{time:u,castSnapshotAge:l,poseOnly:!0}),n||o?Sl.clear():Sl.update(Z,e,{time:u,smooth:Tt==="guest"}),Qi.render(Hn,$t),Dn?.render(i),ya?.render(i)}requestAnimationFrame(Yu);
