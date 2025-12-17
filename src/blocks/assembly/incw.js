import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["incw"] = {
  init: function () {
    this.appendValueInput("REG").setCheck(["reg"]).appendField("incw");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  },
};
