import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["movw_reg"] = {
  init: function () {
    this.appendValueInput("SRC")
      .setCheck([
        TYPES.REG,
        TYPES.MEM,
        TYPES.IMM
      ])
      .appendField("movw");

    this.appendValueInput("DEST")
      .setCheck(TYPES.ALU_DEST)
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Copia registrador, memória ou imediato para registrador.");
  },
};
