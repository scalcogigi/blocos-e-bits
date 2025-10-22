import * as Blockly from 'blockly';

const storageKey = 'jsonGeneratorWorkspace';

export function save(workspace) {
  try {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToText(xml);
    localStorage.setItem(storageKey, xmlText);
  } catch (e) {
    console.warn('Failed to save workspace', e);
  }
}

export function load(workspace) {
  try {
    const xmlText = localStorage.getItem(storageKey);
    if (xmlText) {
      const xml = Blockly.Xml.textToDom(xmlText);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  } catch (e) {
    console.warn('Failed to load workspace', e);
  }
}
