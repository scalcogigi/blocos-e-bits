import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["notw"] = {
  init: function () {
    this.appendValueInput("REG")
      .setCheck(["reg"])
      .appendField("notw");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);

    this.setTooltip("NOTW: inverte todos os bits do registrador.");
  },

  validate: function (_, output) {
    const reg = this.getInputTargetBlock("REG");
    if (!reg) return;

    const type = reg.outputConnection.check_[0];
    if (type !== "reg") {
      reportError(this, "notw só funciona com registradores.", output);
      return true;
    }

    return false;
  },
};
