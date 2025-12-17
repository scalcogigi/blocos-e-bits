import * as Blockly from "blockly/core";

Blockly.Blocks["je"] = {
  init: function () {
    this.appendValueInput("REG").setCheck(["reg"]).appendField("je");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
  },
};
