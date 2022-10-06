import { Terminal } from 'xterm'
import { WebglAddon } from 'xterm-addon-webgl';
import { CanvasAddon } from 'xterm-addon-canvas';
import "xterm/css/xterm.css";

var term = new Terminal({ allowProposedApi: true});
term.open(document.getElementById('terminal'));
term.loadAddon(new CanvasAddon());
// term.loadAddon(new WebglAddon());
term.resize(2500, 40);

setInterval(() => {
  let text = new Array(20).fill(new Date().toISOString()).join(' ');
  term.writeln(text)
}, 1000);