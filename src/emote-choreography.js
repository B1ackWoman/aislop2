import { REFERENCE_POSES as clips } from './emote-reference-poses.js';
import { emoteFrameTime } from './emote-catalog.js';
export const CHOREOGRAPHY_IDS=Object.freeze(Object.keys(clips));
const interpolate=(a,b,q)=>Array.isArray(a)?a.map((v,i)=>interpolate(v,b[i],q)):a+(b-a)*q;
export function sampleEmote(id,time) {
  const clip=clips[id]; if(!clip)return null;
  const t=emoteFrameTime(time), phase=t/clip.step, index=Math.floor(phase)%clip.frames.length;
  const a=clip.frames[index],b=clip.frames[(index+1)%clip.frames.length],f=phase%1,q=f*f*(3-2*f);
  const p={weapon:false,guitar:clip.prop==='guitar',prop:clip.prop||null,scale:[1,1,1],rot:[0,0,0],torsoPos:[0,0,0],face:id==='talking'?.2:0};
  for(const k of ['arms','hands','torso','pos','head'])p[k]=interpolate(a[k],b[k],q);
  p.legs=a.legs?interpolate(a.legs,b.legs,q):[[0,0,0,0],[0,0,0,0]];
  p.footTargets=a.feet?interpolate(a.feet,b.feet,q):null;
  // A fixed floor orientation is a pose, never a time-dependent body spin.
  if(clip.floor){p.rot=[0,0,Math.PI/2];p.floor=true;}
  return p;
}
