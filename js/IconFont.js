/**
 * IconFont icon set component.
 * Usage: <IconFont name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  "unie67e": 58880,
  "unie714": 58881,
  "unie715": 58882,
  "unie719": 58883,
  "untitled7": 58884,
  "unie91b": 58885,
  "unie92d": 58886,
  "unie915": 58887,
  "untitled13": 58888,
  "untitled14": 58889
};

let IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;
