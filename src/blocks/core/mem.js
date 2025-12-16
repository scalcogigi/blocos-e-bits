import * as Blockly from 'blockly/core';

Blockly.Blocks['mem'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("memória")
      .appendField("(%A)");
    this.setOutput(true, "mem");
    this.setColour(200);
    this.setTooltip("Acesso à memória no endereço armazenado em %A. A Z01 só permite (%A).");
  }
};

// Memory can only be accessed via %A, eliminating errors that are impossible in hardware
// memorie %A