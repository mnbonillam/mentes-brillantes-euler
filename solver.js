(function(root){
'use strict';
function exact(t,p){const a=p.T/p.m-p.g,b=p.k/p.m;if(b===0)return {v:p.v0+a*t,y:p.y0+p.v0*t+a*t*t/2};const q=-Math.expm1(-b*t),w=a/b;return {v:p.v0+(w-p.v0)*q,y:p.y0+w*t+(p.v0-w)*q/b};}
function solve(p,method='Euler'){
if(![p.m,p.T,p.g,p.k,p.v0,p.y0,p.tf,p.h].every(Number.isFinite)||p.m<=0||p.T<0||p.g<0||p.k<0||p.tf<=0||p.h<=0||Math.ceil(p.tf/p.h)>20000)throw Error('Revisa los valores: masa, tiempo y paso positivos; máximo 20.000 pasos.');
const f=([y,v])=>[v,p.T/p.m-p.g-p.k*v/p.m];const add=(s,k,h)=>s.map((x,i)=>x+h*k[i]);let s=[p.y0,p.v0],t=0,out=[];
function row(){const e=exact(t,p);out.push({t,y:s[0],v:s[1],ye:e.y,ve:e.v,ey:Math.abs(s[0]-e.y),ev:Math.abs(s[1]-e.v)});}row();
while(t<p.tf-1e-10){const h=Math.min(p.h,p.tf-t),a=f(s);if(method==='Heun'){const b=f(add(s,a,h));s=s.map((x,i)=>x+h*(a[i]+b[i])/2);}else if(method==='RK4'){const b=f(add(s,a,h/2)),c=f(add(s,b,h/2)),d=f(add(s,c,h));s=s.map((x,i)=>x+h*(a[i]+2*b[i]+2*c[i]+d[i])/6);}else s=add(s,a,h);t=Math.min(p.tf,t+h);if(!s.every(Number.isFinite))throw Error('El cálculo desbordó. Reduce el paso.');row();}return out;
}
const api={exact,solve};if(typeof module!=='undefined')module.exports=api;root.RocketMath=api;
})(typeof window!=='undefined'?window:globalThis);
