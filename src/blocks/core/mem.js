import * as Blockly from 'blockly/core';
import { TYPES } from './types';

Blockly.Blocks['mem'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("memória")
      .appendField("(%A)");
    this.setOutput(true, [TYPES.MEM, TYPES.ALU_SRC_MEM]);
    this.setColour(200);
    this.setTooltip("Acesso à memória no endereço %A.");
  }
};

// Memory can only be accessed via %A, eliminating errors that are impossible in hardware
// memorie %A