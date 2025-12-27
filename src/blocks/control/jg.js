import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["jg"] = {
  init: function () {
    this.appendValueInput("REG").setCheck([TYPES.REG]).appendField("jg");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("JNE: desvia para o endereço em %A se o registrador for maior que zero.");
  },
};

