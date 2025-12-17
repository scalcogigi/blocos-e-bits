import * as Blockly from "blockly/core";

Blockly.Blocks["jge"] = {
  init: function () {
    this.appendValueInput("REG").setCheck(["reg"]).appendField("je");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("JNE: desvia para o endereço em %A se o registrador for maior ou igual a zero.");
  },
};


