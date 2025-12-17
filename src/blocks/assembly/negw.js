import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["negw"] = {
  init: function () {
    this.appendValueInput("REG")
      .setCheck(["reg"])
      .appendField("negw");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);

    this.setTooltip("NEGW: aplica negação aritmética (valor → -valor).");
  },

  validate: function (_, output) {
    const reg = this.getInputTargetBlock("REG");
    if (!reg) return;

    const type = reg.outputConnection.check_[0];
    if (type !== "reg") {
      reportError(this, "negw só funciona com registradores.", output);
      return true;
    }

    return false;
  },
};
