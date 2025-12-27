import * as Blockly from 'blockly/core';
import { reportError } from "../utils/error.js";

const jsonGenerator = new Blockly.Generator('JSON');
const Order = { ATOMIC: 0 };

// auxiliares
function value(block, name) {
  const tuple = jsonGenerator.valueToCode(block, name, Order.ATOMIC);
  if (!tuple) return null;
  if (Array.isArray(tuple)) return tuple[0];
  return tuple;
}

function flattenWorkspace(workspace) {
  const top = workspace.getTopBlocks(false);
  const all = [];

  function collect(block) {
    all.push(block);
    block.getChildren(false).forEach((child) => collect(child));
  }

  top.forEach((b) => collect(b));
  return all;
}

function instr(op, args) {
  return { op, args };
}

// terminais
jsonGenerator["im"] = function(block) {
  return [block.getFieldValue("VALUE"), Order.ATOMIC];
};

jsonGenerator["reg"] = function(block) {
  return [block.getFieldValue("VALUE"), Order.ATOMIC];
};

jsonGenerator["mem"] = function(block) {
  return ["(%A)", Order.ATOMIC];
};


// operações
jsonGenerator["leaw"] = function (block) {
  const c = value(block, "CONST");
  return JSON.stringify(instr("leaw", [c, "%A"]));
};

jsonGenerator["movw"] = function (block) {
  const src = value(block, "SRC");
  const dest = value(block, "DEST");
  return JSON.stringify(instr("movw", [src, dest]));
};

jsonGenerator["addw"] = function (block) {
  return JSON.stringify(
    instr("addw", [
      value(block, "A"),
      value(block, "B"),
      value(block, "DEST"),
    ])
  );
};

jsonGenerator["subw"] = function (block) {
  return JSON.stringify(
    instr("subw", [
      value(block, "A"),
      value(block, "B"),
      value(block, "DEST"),
    ])
  );
};

jsonGenerator["rsubw"] = function (block) {
  return JSON.stringify(
    instr("rsubw", [
      value(block, "A"),
      value(block, "B"),
      value(block, "DEST"),
    ])
  );
};

jsonGenerator["incw"] = function (block) {
  return JSON.stringify(instr("incw", [value(block, "REG")]));
};

jsonGenerator["decw"] = function (block) {
  return JSON.stringify(instr("decw", [value(block, "REG")]));
};

jsonGenerator["notw"] = function (block) {
  return JSON.stringify(instr("notw", [value(block, "REG")]));
};

jsonGenerator["negw"] = function (block) {
  return JSON.stringify(instr("negw", [value(block, "REG")]));
};

jsonGenerator["andw"] = function (block) {
  return JSON.stringify(
    instr("andw", [
      value(block, "A"),
      value(block, "B"),
      value(block, "DEST"),
    ])
  );
};

jsonGenerator["orw"] = function (block) {
  return JSON.stringify(
    instr("orw", [
      value(block, "A"),
      value(block, "B"),
      value(block, "DEST"),
    ])
  );
};

jsonGenerator["label"] = function (block) {
  const name = block.getFieldValue("NAME");
  return JSON.stringify(instr("label", [name]));
};

// jump
jsonGenerator["jmp"] = function () {
  return JSON.stringify(instr("jmp", []));
};

jsonGenerator["je"] = function (block) {
  return JSON.stringify(instr("je", [value(block, "REG")]));
};

jsonGenerator["jne"] = function (block) {
  return JSON.stringify(instr("jne", [value(block, "REG")]));
};

jsonGenerator["jg"] = function (block) {
  return JSON.stringify(instr("jg", [value(block, "REG")]));
};

jsonGenerator["jge"] = function (block) {
  return JSON.stringify(instr("jge", [value(block, "REG")]));
};

jsonGenerator["jl"] = function (block) {
  return JSON.stringify(instr("jl", [value(block, "REG")]));
};

jsonGenerator["jle"] = function (block) {
  return JSON.stringify(instr("jle", [value(block, "REG")]));
};


// workspace
jsonGenerator.workspaceToCode = function (workspace) {
  const blocks = flattenWorkspace(workspace);

  const exec = blocks.filter(
    (b) =>
      typeof jsonGenerator[b.type] === "function" &&
      !b.isInFlyout &&
      !b.isShadow() &&
      !["program", "start", "comment", "object", "member"].includes(b.type)
  );

  exec.sort((a, b) => a.y - b.y);

  const instructions = exec.map((b) =>
    JSON.parse(jsonGenerator.blockToCode(b))
  );

  return JSON.stringify({ instructions }, null, 2);
};

export default jsonGenerator;