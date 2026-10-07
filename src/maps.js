const box = (x, z, w, d, height, kind = 'crate') => ({ x, z, w, d, height, kind });
export const MAPS = [
  {
    id: 'cloud', name: 'Облачный двор', subtitle: 'Площадки, укрытия и длинные прострелы',
    width: 28, depth: 18, floor: '#a9c7a0', tile: '#bad4ae', trim: '#526d79', box: '#efdcb6', accent: '#d5ef68',
    spawns: [{ x: -10, z: 5 }, { x: 10, z: -5 }],
    obstacles: [box(0, 0, 3, 3, 2), box(-6, -4, 3, 2, 1.65), box(6, 4, 3, 2, 1.65), box(5, -3, 2, 2, .85), box(-5, 3, 2, 2, .85), box(0, -6, 4, 1.4, 1.15), box(0, 6, 4, 1.4, 1.15,'bench'), box(-11,-7,2,2,1.6,'planter'),box(11,7,2,2,1.6,'planter'),box(-11,7,1.4,1.3,1.8,'arcade'),box(11,-7,1.4,1.3,1.8,'arcade')]
  },
  {
    id: 'candy', name: 'Сахарный переполох', subtitle: 'Цветные блоки и обходы по флангам',
    width: 32, depth: 22, floor: '#aa8cae', tile: '#caa9c3', trim: '#675378', box: '#f5b6b9', accent: '#f9dc83',
    spawns: [{ x: -12, z: 7 }, { x: 12, z: -7 }],
    obstacles: [box(-3, 0, 2, 7, 2.2, 'wall'), box(3, 0, 2, 7, 2.2, 'wall'), box(0, -6, 5, 2, .85), box(0, 6, 5, 2, .85), box(-9, -5, 3, 3, 1.6), box(9, 5, 3, 3, 1.6), box(-9, 5, 3, 2, .9), box(9, -5, 3, 2, .9),box(-13,-9.2,2,2,1.35,'gift'),box(13,9.2,2,2,1.35,'gift'),box(-13,9.2,2,2,1.6,'planter'),box(13,-9.2,2,2,1.6,'planter')]
  },
  {
    id: 'harbor', name: 'Порт игрушек', subtitle: 'Самая большая арена с контейнерами',
    width: 36, depth: 24, floor: '#739cad', tile: '#a0c2c7', trim: '#41627a', box: '#f0b67d', accent: '#8ee5e1',
    spawns: [{ x: -14, z: 8 }, { x: 14, z: -8 }],
    obstacles: [box(-6, -5, 6, 2.5, 2.4, 'wall'), box(6, 5, 6, 2.5, 2.4, 'wall'), box(0, 0, 2.5, 5, 1.8), box(-10, 4, 3, 3, 1), box(10, -4, 3, 3, 1), box(1, -8, 4, 2, .85), box(-1, 8, 4, 2, .85), box(-13, -7, 2, 2, 1.8), box(13, 7, 2, 2, 1.8),box(-15,0,1.8,1.6,1.9,'terminal'),box(15,0,1.8,1.6,1.9,'terminal'),box(-3,-10,2,1.5,1.2,'bench'),box(3,10,2,1.5,1.2,'bench')]
  }
];
export function getMap(id) { return MAPS.find(map => map.id === id) || MAPS[0]; }
export const COLORS = ['#79cbff', '#ff8875', '#d5ef68', '#c8a3ff', '#ffb6da', '#ffce75', '#83e0c0', '#f3efe5'];
export const HATS = [{ id: 'none', name: 'Без шапки' }, { id: 'beanie', name: 'Шапочка' }, { id: 'crown', name: 'Корона' }, { id: 'antenna', name: 'Антенна' }, { id: 'starshades', name: 'Звёздные очки' }, { id: 'headphones', name: 'Наушники' }, { id: 'visor', name: 'Козырёк' }];
export const FACES = [{ id: 'happy', name: 'Весельчак' }, { id: 'angry', name: 'Серьёзный' }, { id: 'goofy', name: 'Чудак' }];
export function cleanLook(look = {}, index = 0) {
  return { color: COLORS.includes(look?.color) ? look.color : COLORS[index % 2], hat: HATS.some(h => h.id === look?.hat) ? look.hat : 'none', face: FACES.some(f => f.id === look?.face) ? look.face : 'happy' };
}

// Reference outfits use the same editable appearance schema as ordinary looks.
export const LOOK_PRESETS = [
 {id:'sky',name:'Бластер',color:'#79cbff',hat:'beanie',face:'happy'},
 {id:'pink',name:'Принцесса',color:'#ffb6da',hat:'crown',face:'goofy'},
 {id:'mint',name:'Пришелец',color:'#83e0c0',hat:'antenna',face:'angry'},
 {id:'sun',name:'Звезда',color:'#ffce75',hat:'starshades',face:'happy'},
 {id:'lilac',name:'Рокер',color:'#c8a3ff',hat:'headphones',face:'happy'},
 {id:'peach',name:'Капитан',color:'#ff8875',hat:'visor',face:'angry'}
];
