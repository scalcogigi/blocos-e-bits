import * as Blockly from 'blockly/core';

Blockly.Blocks['reg'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("registrador")
      .appendField(
        new Blockly.FieldDropdown([
          ["%A", "%A"],
          ["%D", "%D"]
        ]),
        "VALUE"
      );
    this.setOutput(true, "reg");
    this.setColour(180);
    this.setTooltip("Registradores da arquitetura Z01: %A ou %D.");
  }
};

// Prevents students from typing invalid registers and standardizes operators
// registers %A, %D