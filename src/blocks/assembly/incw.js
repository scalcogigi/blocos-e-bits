import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["incw"] = {
  init: function () {
    this.appendValueInput("REG").setCheck([TYPES.REG_NO_A]).appendField("incw");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  },
};
