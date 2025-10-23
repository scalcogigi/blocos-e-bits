import * as Blockly from 'blockly';
import 'blockly/blocks.js';
import './blocks/json.js';
import './blocks/assembly_blocks.js';
import { jsonGenerator } from './generators/json.js';
import { assemblyGenerator } from './generators/assembly.js'
import { toolbox } from './toolbox.js';
import { load, save } from './serialization.js';
import './style/main.css';

// create workspace
const workspace = Blockly.inject(document.getElementById('blocklyDiv'), {
  toolbox: toolbox,
  renderer: 'geras',
  collapse: true,
  comments: true,
  zoom: { wheel: true, startScale: 1 }
});

// Load saved workspace (if any)
load(workspace);

// a run button and code output panel
const controls = document.createElement('div');
controls.style.position = 'absolute';
controls.style.right = '8px';
controls.style.top = '8px';
controls.style.zIndex = '999';
controls.style.background = 'rgba(255,255,255,0.9)';
controls.style.padding = '10px';
controls.style.borderRadius = '8px';
controls.style.display = 'flex';
controls.style.flexDirection = 'column';
controls.style.gap = '8px';

// button - generate json
const runBtn = document.createElement('button');
runBtn.textContent = 'Gerar JSON';
controls.appendChild(runBtn);

// assembly - generate assembly
const btnASM = document.createElement('button');
btnASM.textContent = 'Gerar Assembly';
controls.appendChild(btnASM);

// output
const output = document.createElement('pre');
output.id = 'output';
output.style.whiteSpace = 'pre-wrap';
output.style.height = '60vh';
output.style.overflow = 'auto';
output.style.marginTop = '8px';
output.style.padding = '8px';
output.style.border = '1px solid #ddd';
controls.appendChild(output);

document.body.appendChild(controls);

// -------------------- buttons ---------------------------
runBtn.addEventListener('click', () => {
  try {
    const code = jsonGenerator.workspaceToCode(workspace);
    output.textContent = code;
  } catch (e) {
    output.textContent = 'Erro JSON: ' + e.message;
    console.error(e);
  }
});

btnASM.addEventListener('click', () => {
  try {
    const code = assemblyGenerator.workspaceToCode(workspace);
    output.textContent = code;
  } catch (e) {
    output.textContent = 'Erro Assembly: ' + e.message;
    console.error(e);
  }
});

// auto-save
workspace.addChangeListener(() => {
  save(workspace);
});