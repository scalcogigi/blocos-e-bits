import * as Blockly from 'blockly';

const storageKey = 'jsonGeneratorWorkspace';

export function load(workspace) {
  try {
    const data = localStorage.getItem(storageKey);
    if (!data) return;

    if (data.trim().startsWith("<")) {
      console.warn("Workspace antigo em XML ignorado");
      localStorage.removeItem(storageKey);
      return;
    }

    const state = JSON.parse(data);
    Blockly.serialization.workspaces.load(state, workspace);
  } catch (e) {
    console.warn('Failed to load workspace', e);
    localStorage.removeItem(storageKey);
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

