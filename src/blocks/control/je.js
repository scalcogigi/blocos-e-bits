import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["je"] = {
  init: function () {
    this.appendValueInput("REG").setCheck([TYPES.REG]).appendField("je");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
  },
};
