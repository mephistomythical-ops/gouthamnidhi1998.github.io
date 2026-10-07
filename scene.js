/* Original GLSL artwork. SDF/raymarching concepts informed by Codrops / Ben McCormick.
   Artistic liquid motion, not a numerical fluid simulation. No third-party runtime. */
(() => {
'use strict';
const vertex = `attribute vec2 position; void main(){gl_Position=vec4(position,0.,1.);}`;
const fragment = `
precision highp float;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uTime;
uniform float uMorph;
uniform vec3 uLayout;
uniform float uPulse;
const float PI=3.14159265;
mat2 rot(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
vec3 transform(vec3 p){
 p.xy=rot(-.38+uPointer.x*.12)*p.xy;
 p.xz=rot(.39+sin(uTime*.12)*.12+uPointer.x*.24)*p.xz;
 p.yz=rot(.32+uPointer.y*.18+sin(uTime*.16)*.12)*p.yz;
 return p;
}
float shape(vec3 p){
 vec3 q=transform(p);
 float a=atan(q.y,q.x);
 float wave=sin(a*3.+uTime*.37)*.075+sin(a*6.-uTime*.24)*.025;
 float r=1.04+wave;
 float thickness=.29+.035*sin(a*3.+uTime*.3)+.012*sin(a*18.+q.z*8.-uTime*.4);
 float torus=length(vec2(length(q.xy)-r,q.z)) - thickness;
 float sphere=length(q*vec3(.92,1.03,1.))-1.04;
 sphere += .08*sin(q.x*3.+uTime*.4)*sin(q.y*3.-uTime*.25)*sin(q.z*3.+1.);
 float split=clamp(uMorph-1.,0.,1.);
 float ring=clamp(abs(uMorph-1.),0.,1.);
 float d=mix(sphere,torus,smoothstep(.08,.92,ring));
 for(int i=0;i<4;i++){
  float fi=float(i);
  float a2=fi*1.5708+uTime*.1;
  float rad=1.32+split*.38+sin(uTime*.3+fi)*.08;
  vec3 c=vec3(cos(a2)*rad,sin(a2)*rad,sin(a2*1.5+uTime*.18)*.35);
  float size=.17+sin(fi*2.5+1.)*.055;
  d=smin(d,length(q-c)-size,.22*(1.-split*.65));
 }
 float ripple=sin(length(q.xy-uPointer*.4)*13.-uPulse*8.)*exp(-uPulse*1.8)*.025;
 return d+ripple;
}
vec3 norm(vec3 p){vec2 e=vec2(.0015,0);return normalize(vec3(shape(p+e.xyy)-shape(p-e.xyy),shape(p+e.yxy)-shape(p-e.yxy),shape(p+e.yyx)-shape(p-e.yyx)));}
vec3 environment(vec3 r){
 vec3 c=mix(vec3(.018,.042,.047),vec3(.19,.32,.31),smoothstep(-.5,.9,r.y));
 float broad=pow(max(0.,dot(r,normalize(vec3(-1.4,1.5,2.2)))),8.);
 float key=pow(max(0.,dot(r,normalize(vec3(-1.6,2.0,1.0)))),45.);
 float band=(r.y-.45*sin(r.x*2.5)-.3)*13.;
 float ribbon=exp(-band*band)*smoothstep(-.8,.8,r.z);
 float strip=pow(max(0.,dot(r,normalize(vec3(1.1,.15,1.3)))),80.);
 float gold=pow(max(0.,dot(r,normalize(vec3(.2,-.9,.8)))),10.);
 c+=vec3(.6,.87,.79)*broad*.85;
 c+=vec3(1.1,1.12,.9)*key*2.3;
 c+=vec3(.6,.82,.72)*ribbon*.6;
 c+=vec3(.9,1.04,.95)*strip*2.8;
 c+=vec3(.77,.54,.21)*gold*.7;
 return c;
}
void main(){
 vec2 uv=(gl_FragCoord.xy-.5*uResolution)/uResolution.y;
 vec2 screen=gl_FragCoord.xy/uResolution;
 vec3 bg=vec3(.019,.038,.047);
 float glow=exp(-length((uv-vec2(uLayout.x,uLayout.y))*vec2(.7,1.))*2.0);
 bg+=vec3(.012,.048,.045)*glow;
 float haze=sin(uv.x*2.+uv.y*3.+uTime*.035)*.5+.5;
 bg+=vec3(.002,.009,.012)*haze;
 vec2 st=(uv-uLayout.xy)/uLayout.z;
 vec3 ro=vec3(0.,0.,5.);
 vec3 rd=normalize(vec3(st*2.3,-4.));
 // Bounding sphere rejects empty pixels before ray marching.
 float b=dot(ro,rd),cc=dot(ro,ro)-4.41,disc=b*b-cc;
 vec3 color=bg;
 if(disc>0.){
  float t=max(0.,-b-sqrt(disc));
  float end=-b+sqrt(disc);
  float d=1.;bool hit=false;
  for(int i=0;i<86;i++){
   vec3 p=ro+rd*t;d=shape(p);
   if(d<.0014){hit=true;break;}
   t+=max(d*.8,.001);
   if(t>end)break;
  }
  if(hit){
   vec3 p=ro+rd*t;vec3 n=norm(p);vec3 v=-rd;vec3 ref=reflect(rd,n);
   float fres=pow(1.-max(dot(n,v),0.),3.);
   float ao=clamp(shape(p+n*.12)/.12,.32,1.);
   vec3 tint=mix(vec3(.18,.37,.30),vec3(.77,.65,.37),smoothstep(-.65,.8,n.y+n.x*.35));
   vec3 env=environment(ref);
   color=env*mix(tint,vec3(.86,.92,.80),fres*.7)*1.7;
   color+=tint*.035;
   color*=.62+.38*ao;
   color+=vec3(.05,.22,.17)*fres*.42;
   color=color/(color+vec3(.8));
  }
 }
 // Very fine film grain, stable in time to avoid flicker.
 vec3 hash=fract(vec3(gl_FragCoord.xyx)*.1031);
 hash+=dot(hash,hash.yzx+33.33);
 float grain=fract((hash.x+hash.y)*hash.z)-.5;
 color+=grain*.009;
 color*=1.-.24*pow(length(screen-.5),1.5);
 gl_FragColor=vec4(pow(max(color,vec3(0.)),vec3(.88)),1.);
}`;
class LivingScene {
 constructor(canvas){
  this.canvas=canvas;this.paused=matchMedia('(prefers-reduced-motion: reduce)').matches;this.active=true;this.pointer=[0,0];this.targetPointer=[0,0];this.time=4;this.last=0;this.pulse=10;this.morph=0;this.targetMorph=0;this.layout=[.64,0,1];this.targetLayout=[.64,0,1];this.dirty=true;this.quality=1;this.frame=0;
  const gl=canvas.getContext('webgl',{alpha:false,antialias:false,depth:false,powerPreference:'low-power'});if(!gl)throw new Error('WebGL unavailable');this.gl=gl;
  const compile=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;};
  this.program=gl.createProgram();const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);gl.attachShader(this.program,vs);gl.attachShader(this.program,fs);gl.linkProgram(this.program);if(!gl.getProgramParameter(this.program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(this.program));gl.deleteShader(vs);gl.deleteShader(fs);gl.useProgram(this.program);
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const pos=gl.getAttribLocation(this.program,'position');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
  this.u={};['uResolution','uPointer','uTime','uMorph','uLayout','uPulse'].forEach(n=>this.u[n]=gl.getUniformLocation(this.program,n));
  this.resize();addEventListener('resize',()=>this.resize(),{passive:true});
  addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;this.targetPointer=[(e.clientX/innerWidth-.5)*2,-(e.clientY/innerHeight-.5)*2];if(!this.paused)this.wake();},{passive:true});
  addEventListener('pointerdown',e=>{if(e.target.closest('a,button,dialog')||this.paused)return;this.pulse=0;this.wake();},{passive:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)this.wake();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.active=false;canvas.classList.remove('ready');document.body.classList.add('webgl-fallback');});
  canvas.addEventListener('webglcontextrestored',()=>location.reload());
  this.wake();canvas.classList.add('ready');
 }
 resize(){const dpr=Math.min(devicePixelRatio||1,innerWidth<700?1:1.25)*this.quality;this.canvas.width=Math.floor(innerWidth*dpr);this.canvas.height=Math.floor(innerHeight*dpr);this.gl.viewport(0,0,this.canvas.width,this.canvas.height);this.dirty=true;this.wake();}
 setState({morph,layout,active}){this.targetMorph=morph;this.targetLayout=layout;this.active=active;this.dirty=true;this.wake();}
 setPaused(value){this.paused=value;this.dirty=true;this.wake();}
 wake(){if(!this.frame&&!document.hidden)this.frame=requestAnimationFrame(t=>this.draw(t));}
 draw(now){this.frame=0;if(document.hidden||!this.active)return;const dt=this.last?Math.min((now-this.last)/1000,.06):.016;this.last=now;
  if(!this.paused){this.time+=dt;this.pulse+=dt;}
  const ease=this.paused?1:.065;this.morph+=(this.targetMorph-this.morph)*ease;
  for(let i=0;i<3;i++)this.layout[i]+=(this.targetLayout[i]-this.layout[i])*ease;
  for(let i=0;i<2;i++)this.pointer[i]+=(this.targetPointer[i]-this.pointer[i])*(this.paused?0:.035);
  const gl=this.gl;gl.useProgram(this.program);gl.uniform2f(this.u.uResolution,this.canvas.width,this.canvas.height);gl.uniform2f(this.u.uPointer,...this.pointer);gl.uniform1f(this.u.uTime,this.time);gl.uniform1f(this.u.uMorph,this.morph);gl.uniform3f(this.u.uLayout,...this.layout);gl.uniform1f(this.u.uPulse,this.pulse);gl.drawArrays(gl.TRIANGLES,0,6);this.dirty=false;
  if(!this.paused)this.frame=requestAnimationFrame(t=>this.draw(t));
 }
}
window.LivingScene=LivingScene;
})();
