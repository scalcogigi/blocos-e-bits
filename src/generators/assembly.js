import * as Blockly from 'blockly/core';
export const assemblyGenerator = new Blockly.Generator('Assembly');
const Order = { ATOMIC: 0 };

// MOVW
assemblyGenerator['movw'] = function(block) {
  const src = assemblyGenerator.valueToCode(block, 'SRC', Order.ATOMIC) || '0';
  const dest = assemblyGenerator.valueToCode(block, 'DEST', Order.ATOMIC) || '0';
  return `movw ${src}, ${dest}\n`;
};

// ADDW
assemblyGenerator['addw'] = function(block) {
  const a = assemblyGenerator.valueToCode(block, 'A', Order.ATOMIC) || '0';
  const b = assemblyGenerator.valueToCode(block, 'B', Order.ATOMIC) || '0';
  const dest = assemblyGenerator.valueToCode(block, 'DEST', Order.ATOMIC) || '%D';
  return `addw ${a}, ${b}, ${dest}\n`;
};

// INCW
assemblyGenerator['incw'] = function(block) {
  const reg = assemblyGenerator.valueToCode(block, 'REG', Order.ATOMIC) || '%A';
  return `incw ${reg}\n`;
};

// LABEL
assemblyGenerator['label'] = function(block) {
  const name = block.getFieldValue('LABEL_NAME');
  return `${name}:\n`;
};

// JUMP
assemblyGenerator['jump'] = function(block) {
  const target = block.getFieldValue('TARGET');
  return `jmp ${target}\n`;
};

export default assemblyGenerator;