import './index.css';
import * as Blockly from 'blockly';
import { toolbox } from './toolbox';
import { blocks as jsonBlocks } from './blocks/json';
import { jsonGenerator } from './generators/json';
import { load, save } from './serialization';

// Register block definitions
Blockly.common.defineBlocks(jsonBlocks);

// Create workspace
const workspace = Blockly.inject(document.getElementById('root'), {
  toolbox: toolbox,
  renderer: 'geras',
  collapse: true,
  comments: true,
  zoom: { wheel: true, startScale: 1 }
});

// Load saved workspace (if any)
load(workspace);

// Add a simple UI: a run button and code output panel
const controls = document.createElement('div');
controls.style.position = 'absolute';
controls.style.right = '8px';
controls.style.top = '8px';
controls.style.zIndex = '999';
controls.style.background = 'rgba(255,255,255,0.9)';
controls.style.padding = '8px';
controls.style.borderRadius = '6px';

const runBtn = document.createElement('button');
runBtn.textContent = 'Generate JSON';
controls.appendChild(runBtn);

const output = document.createElement('pre');
output.style.whiteSpace = 'pre-wrap';
output.style.maxHeight = '70vh';
output.style.overflow = 'auto';
output.style.marginTop = '8px';
output.style.padding = '6px';
output.style.border = '1px solid #ddd';

controls.appendChild(output);
document.body.appendChild(controls);

runBtn.addEventListener('click', () => {
  try {
    const code = jsonGenerator.workspaceToCode(workspace);
    output.textContent = code;
  } catch (e) {
    output.textContent = 'Error: ' + (e && e.message ? e.message : String(e));
    console.error(e);
  }
});

// Save workspace on change
workspace.addChangeListener(() => {
  save(workspace);
});
