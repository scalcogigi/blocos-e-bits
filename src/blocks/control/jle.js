import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["jle"] = {
  init: function () {
    this.appendValueInput("REG").setCheck([TYPES.REG]).appendField("jle");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("JNE: desvia para o endereço em %A se o registrador for menor ou igual a zero.");
  },
};


