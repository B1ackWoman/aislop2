// Front-facing, hand-authored adaptations of the supplied Nullscape recordings.
// Names/origins checked against https://wikiwiki.jp/nulljp/:Cosmetic_Emote.
// Hand positions are in upper-body space; short round-character arms retain
// their original continuous sleeves, with no automatic collision projection.
const rest=[[-.68,-.43,.08],[.68,-.43,.08]];
const chest=[[-.43,-.03,.62],[.43,-.03,.62]];
const wide=[[-1.13,.10,.06],[1.13,.10,.06]];
const up=[[-.91,.65,.12],[.91,.65,.12]];
const face=[[-.62,.42,.46],[.62,.42,.46]];
const feet=[[-.20,.09,.07],[.20,.09,.07]];
const step=(side,height=.22,forward=.16)=>feet.map((p,i)=>i===side?[p[0],height,forward]:[...p]);
const pose=(hands=rest,lean=0,foot=feet,bounce=0,pitch=0)=>({
 hands,arms:[[0,0,-.15,-.12,0],[0,0,.15,-.12,0]],
 torso:[pitch,0,lean],feet:foot,pos:[0,bounce,0],head:[0,0,-lean*.25],legs:null
});
const clip=(bpm,frames,prop=null)=>({step:60/bpm/2,frames,prop});
export const REFERENCE_POSES={
 // PBJ: alternating low bounce, outstretched arms and overhead cheer.
 pbj:clip(120,[pose(rest,-.10,step(0)),pose(wide,-.04),pose(up,.07),pose(wide,.03),pose(rest,.10,step(1)),pose(wide,.04),pose(up,-.07),pose(wide,-.03)]),
 // Tenna's showman march: asymmetric conducting gestures and heel lifts.
 tenna:clip(120,[pose([up[0],rest[1]],-.09,step(0,.24)),pose([wide[0],chest[1]],-.03),pose(chest,.07,step(1,.23)),pose([rest[0],wide[1]],.09),pose([rest[0],up[1]],.09,step(1,.24)),pose([chest[0],wide[1]],.03),pose(chest,-.07,step(0,.23)),pose(wide,-.09)],'cane'),
 die:clip(110,[pose(chest,-.08,feet,-.045,.12),pose(face,-.04,step(0,.13),-.02,.08),pose([face[0],chest[1]],.07,feet,-.04,.13),pose(chest,.04,feet,-.02,.08),pose(chest,.08,feet,-.045,.12),pose(face,.04,step(1,.13),-.02,.08),pose([chest[0],face[1]],-.07,feet,-.04,.13),pose(chest,-.04,feet,-.02,.08)]),
 // Pizza Tower taunt: planted sideways floor scissor; no turntable spin.
 paranoid:{...clip(128,Array.from({length:8},(_,i)=>{
 const s=Math.sin(i*Math.PI/4);return {...pose([[-1.1,.3,.10],[.82,-.38,.15]],0,null,.65),legs:[[s*.7,0,-.70,.15],[-s*.7,0,.70,.15]]};
 })),floor:true},
 sickriff:clip(132,[pose(chest,-.09,feet,-.02,.08),pose(chest,-.03,step(0,.13),0,.03),pose(chest,.07,feet,-.03,.15),pose(chest,.03,feet,0,.02),pose(chest,.09,feet,-.02,.08),pose(chest,.03,step(1,.13),0,.03),pose(chest,-.07,feet,-.03,.15),pose(chest,-.03,feet,0,.02)],'guitar'),
 // Ochame Kinou: restrained left/right sway with little open-hand flicks.
 teto:clip(130,[pose(rest,-.09,step(0,.14)),pose([[-.79,-.28,.20],[.79,-.28,.20]],-.04),pose(rest,.09,step(1,.14)),pose([[-.79,-.28,.20],[.79,-.28,.20]],.04)]),
 boom:clip(120,[pose([chest[0],wide[1]],-.08,step(0)),pose([[-.57,.04,.63],[1.15,.12,.12]],-.03),pose([wide[0],chest[1]],.08,step(1)),pose([[-1.15,.12,.12],[.57,.04,.63]],.03),pose(up,-.04,feet,.055),pose(wide,.04),pose(chest,-.08,feet,-.045,.10),pose(rest,.04)]),
 qualified:clip(112,[pose([face[0],rest[1]],-.08,step(0,.16)),pose([chest[0],wide[1]],-.03),pose([rest[0],face[1]],.08,step(1,.16)),pose([wide[0],chest[1]],.03),pose(wide,-.08),pose([up[0],chest[1]],-.02),pose(wide,.08),pose([chest[0],up[1]],.02)]),
 // Griddy: heel lift, forward tap, low hand swing, then eye gesture.
 griddy:clip(140,[pose(chest,-.04,step(0,.23,-.10),-.025,.13),pose([[-.65,-.23,.42],[.65,-.23,.42]],0,step(0,.12,.29),0,.12),pose(rest,.03,feet,.01,.08),pose(face,0,feet,-.01,.06),pose(chest,.04,step(1,.23,-.10),-.025,.13),pose([[-.65,-.23,.42],[.65,-.23,.42]],0,step(1,.12,.29),0,.12),pose(rest,-.03,feet,.01,.08),pose(face,0,feet,-.01,.06)]),
 // Metro Man: big opposing arm arcs, without rotating the character.
 metroswing:clip(120,[pose([up[0],wide[1]],-.08,step(0,.17)),pose([[-1.06,.31,.30],[.88,-.23,.25]],-.04),pose([wide[0],rest[1]],0),pose([chest[0],wide[1]],.04),pose([wide[0],up[1]],.08,step(1,.17)),pose([[-.88,-.23,.25],[1.06,.31,.30]],.04),pose([rest[0],wide[1]],0),pose([wide[0],chest[1]],-.04)]),
 talking:clip(110,[pose([chest[0],chest[1]],-.04),pose([wide[0],chest[1]],0),pose([up[0],chest[1]],.06,step(0,.15)),pose([wide[0],chest[1]],.03),pose([chest[0],chest[1]],.04),pose([[-.93,-.12,.35],chest[1]],0),pose([rest[0],chest[1]],-.06,step(1,.15)),pose([wide[0],chest[1]],-.03)],'mic'),
 kazotsky:clip(130,[pose(chest,-.03,[[-.21,.10,.36],[.21,.09,-.04]],-.22,.04),pose(chest,0,[[-.21,.23,.22],[.21,.09,-.04]],-.16),pose(chest,.03,[[-.21,.09,-.04],[.21,.10,.36]],-.22,.04),pose(chest,0,[[-.21,.09,-.04],[.21,.23,.22]],-.16),pose(wide,-.05,[[-.21,.10,.36],[.21,.09,-.04]],-.22),pose(chest,0,feet,-.16),pose(wide,.05,[[-.21,.09,-.04],[.21,.10,.36]],-.22),pose(chest,0,feet,-.16)]),
 down:clip(128,[pose(up,-.04,feet,.06),pose(wide,.04,step(0)),pose(chest,-.08,feet,-.075,.12),pose(rest,-.04,feet,-.03),pose([chest[0],up[1]],.08,step(1)),pose(wide,.04),pose(chest,.08,feet,-.075,.12),pose(rest,.04)]),
 shuba:clip(120,[pose(rest,-.10,step(0,.16)),pose([[-.82,-.28,.08],[.82,-.28,.08]],-.04),pose(rest,.10,step(1,.16)),pose([[-.82,-.28,.08],[.82,-.28,.08]],.04),pose(wide,-.10,step(0,.16)),pose([up[0],wide[1]],-.04),pose(wide,.10,step(1,.16)),pose([wide[0],up[1]],.04)],'buddy'),
 friends:clip(120,[pose(chest,-.08,feet,-.08,.06),pose(rest,-.03,feet,.025),pose([chest[0],wide[1]],.08,step(0)),pose(wide,.03),pose(chest,.08,feet,-.08,.06),pose(rest,.03,feet,.025),pose([wide[0],chest[1]],-.08,step(1)),pose(wide,-.03)]),
 aura:clip(110,[pose(wide,-.06,step(0,.33,.27),.04),pose(wide,-.02,feet),pose(wide,.06,step(1,.33,.27),.04),pose(wide,.02,feet),pose(chest,-.06,step(0,.27,.30)),pose(wide,-.02,feet),pose(chest,.06,step(1,.27,.30)),pose(wide,.02,feet)]),
 jackpot:clip(135,[pose(up,-.09,step(0,.22)),pose(up,-.03),pose(up,.09,step(1,.22)),pose(up,.03),pose([wide[0],up[1]],-.08),pose(face,-.03,feet,-.03,.06),pose([up[0],wide[1]],.08),pose(wide,.03)])
};
