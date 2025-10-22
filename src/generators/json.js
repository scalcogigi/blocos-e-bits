import * as Blockly from 'blockly/core';
import 'blockly/blocks.js'; 

export const jsonGenerator = new Blockly.Generator('JSON');

jsonGenerator.INDENT = jsonGenerator.INDENT || '  ';
const Order = { ATOMIC: 0 };

// ----------------- Helpers -----------------
function valueOrNull(gen, block, name) {
  const code = gen.valueToCode(block, name, Order.ATOMIC);
  return (code && code !== '') ? code : 'null';
}

function normalizeBlockToCode(gen, block) {
  const res = gen.blockToCode(block);
  if (Array.isArray(res)) return res[0];
  return res || '';
}

// ----------------- Value blocks -----------------
jsonGenerator['logic_null'] = function(block) {
  return ['null', Order.ATOMIC];
};

jsonGenerator['text'] = function(block) {
  const textValue = block.getFieldValue('TEXT') || '';
  const escaped = textValue.replace(/"/g, '\\"');
  return [`"${escaped}"`, Order.ATOMIC];
};

jsonGenerator['math_number'] = function(block) {
  const code = String(block.getFieldValue('NUM') || '0');
  return [code, Order.ATOMIC];
};

jsonGenerator['logic_boolean'] = function(block) {
  const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
  return [code, Order.ATOMIC];
};

// ----------------- Array -----------------
jsonGenerator['lists_create_with'] = function(block) {
  const generator = jsonGenerator;
  const count = (typeof block.itemCount_ === 'number') ? block.itemCount_ : 0;
  const values = [];
  for (let i = 0; i < count; i++) {
    const v = valueOrNull(generator, block, 'ADD' + i);
    values.push(v);
  }
  if (values.length === 0) return ['[]', Order.ATOMIC];

  const joined = values.join(',\n');
  const indented = generator.prefixLines(joined, generator.INDENT);
  const code = '[\n' + indented + '\n]';
  return [code, Order.ATOMIC];
};

// ----------------- Member -----------------
jsonGenerator['member'] = function(block) {
  const generator = jsonGenerator;
  const name = block.getFieldValue('MEMBER_NAME') || '';
  const valueCode = valueOrNull(generator, block, 'MEMBER_VALUE');
  const line = `"${name}": ${valueCode}`;
  return generator.prefixLines(line, generator.INDENT);
};

// ----------------- Object -----------------
jsonGenerator['object'] = function(block) {
  const generator = jsonGenerator;
  const members = generator.statementToCode(block, 'MEMBERS') || '';
  const code = '{\n' + members + '\n}';
  return [code, Order.ATOMIC];
};

// ----------------- scrub_  -----------------
jsonGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    const nextCode = normalizeBlockToCode(this, nextBlock);
    if (nextCode && nextCode.trim() !== '') {
      return code + ',\n' + nextCode;
    }
  }
  return code;
};

export default jsonGenerator;