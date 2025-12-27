import * as Blockly from 'blockly/core';
import { reportError } from "../utils/error.js";

const assemblyGenerator = new Blockly.Generator('Assembly');

const Order = { ATOMIC: 0 };

// Auxiliares
function value(block, name) {
  return assemblyGenerator.valueToCode(block, name, Order.ATOMIC) || null;
}

// coletar blocos
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


// validação de labels
function collectLabels(blocks) {
  const labels = new Set();
  for (const block of blocks) {
    if (block.type === "label") {
      const name = block.getFieldValue("NAME");
      if (labels.has(name)) return { error: `Label duplicada: ${name}` };
      labels.add(name);
    }
  }
  return { labels };
}

// valida jumps
function validateJumps(blocks, labels) {
  for (const block of blocks) {
    if (
      ["je", "jne", "jg", "jge", "jl", "jle"].includes(block.type)
    ) {
      const regBlock = block.getInputTargetBlock("REG");
      if (value(block, "REG") === null)
      if (!block.getInputTargetBlock("REG")) {
        return `Jump sem registrador em ${block.type}`;
    }
      if (!regBlock) return `Jump sem registrador em ${block.type}`;
      continue;
    }
    if (block.type === "jmp") {
      continue;
    }
  }
  return null;
}

// instruções
assemblyGenerator['leaw'] = function (block) {
  const c = value(block, 'CONST');
  return `leaw ${c}, %A\n`;
};

assemblyGenerator['movw_reg'] = assemblyGenerator['movw_mem'] = function(block) {
  return `movw ${value(block,"SRC")}, ${value(block,"DEST")}\n`;
};

assemblyGenerator['addw'] = function(block) {
  return `addw ${value(block,"A")}, ${value(block,"B")}, ${value(block,"DEST")}\n`;
};

assemblyGenerator["subw"] = function (block) {
  return `subw ${value(block,"A")}, ${value(block,"B")}, ${value(block,"DEST")}\n`;

};

assemblyGenerator["rsubw"] = function (block) {
  return `rsubw ${value(block,"A")}, ${value(block,"B")}, ${value(block,"DEST")}\n`;

};

assemblyGenerator['incw'] = function(block) {
  const reg = value(block, 'REG');
  return `incw ${reg}\n`;
};

assemblyGenerator["decw"] = function (block) {
  const r = value(block, "REG");
  return `decw ${r}\n`;
};

assemblyGenerator["notw"] = function (block) {
  const r = value(block, "REG");
  return `notw ${r}\n`;
};

assemblyGenerator["negw"] = function (block) {
  const r = value(block, "REG");
  return `negw ${r}\n`;
};

assemblyGenerator["andw"] = function (block) {
  const a = value(block, "A");
  const b = value(block, "B");
  const dest = value(block, "DEST");

  return `andw ${a}, ${b}, ${dest}\n`;
};

assemblyGenerator["orw"] = function (block) {
  const a = value(block, "A");
  const b = value(block, "B");
  const dest = value(block, "DEST");

  return `orw ${a}, ${b}, ${dest}\n`;
};

assemblyGenerator['label'] = function(block) {
  const name = block.getFieldValue('NAME');
  return `${name}:\n`;
};

// jump labels
assemblyGenerator["jmp"] = () => `jmp\n`;
assemblyGenerator["je"] = (block) => `je ${value(block, "REG")}\n`;
assemblyGenerator["jne"] = (block) => `jne ${value(block, "REG")}\n`;
assemblyGenerator["jg"] = (block) => `jg ${value(block, "REG")}\n`;
assemblyGenerator["jge"] = (block) => `jge ${value(block, "REG")}\n`;
assemblyGenerator["jl"] = (block) => `jl ${value(block, "REG")}\n`;
assemblyGenerator["jle"] = (block) => `jle ${value(block, "REG")}\n`;

// terminais
assemblyGenerator["im"] = function(block) {
  const val = block.getFieldValue("VALUE");
  return [val, Order.ATOMIC];
};

assemblyGenerator["mem"] = function(block) {
  return ["(%A)", Order.ATOMIC];
};


// workspace
assemblyGenerator.workspaceToCode = function (workspace) {
  assemblyGenerator.outputPanel = document.getElementById("output");

  const blocks = flattenWorkspace(workspace);

  const labelInfo = collectLabels(blocks);
  if (labelInfo.error) {
    reportError(blocks[0], labelInfo.error, this.outputPanel);
    return "";
  }

  const jumpError = validateJumps(blocks, labelInfo.labels);
  if (jumpError) {
    reportError(blocks[0], jumpError, this.outputPanel);
    return "";
  }

  const executable = blocks.filter(b =>
    typeof assemblyGenerator[b.type] === "function" &&
    !b.isInFlyout &&
    !b.isShadow() &&
    b.type !== "program" &&
    b.type !== "start" &&
    b.type !== "comment" &&
    b.type !== "object" &&
    b.type !== "member"
  );

  executable.sort((a, b) => a.y - b.y);

  return executable.map(b => this.blockToCode(b)).join("");
};


export default assemblyGenerator;