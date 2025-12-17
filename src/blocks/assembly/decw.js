import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["decw"] = {
  init: function () {
    this.appendValueInput("REG")
      .setCheck(["reg"])
      .appendField("decw");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);

    this.setTooltip("DECW: decrementa o registrador em 1. Não aceita memória.");
  },

  validate: function (_, output) {
    const reg = this.getInputTargetBlock("REG");
    if (!reg) return;

    const type = reg.outputConnection.check_[0];
    if (type !== "reg") {
      reportError(this, "decw só pode operar sobre registrador.", output);
      return true;
    }

    return false;
  },
};
