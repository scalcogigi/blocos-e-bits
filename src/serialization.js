import * as Blockly from 'blockly';

const storageKey = 'jsonGeneratorWorkspace';

export function load(workspace) {
  try {
    const data = localStorage.getItem(storageKey);
    if (!data) return;

    const state = JSON.parse(data);
    Blockly.serialization.workspaces.load(state, workspace);
  } catch (e) {
    console.warn('Failed to load workspace', e);
  }
}


export function save(workspace) {
  try {
    const state = Blockly.serialization.workspaces.save(workspace);
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save workspace', e);
  }
}

