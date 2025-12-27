import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["movw_mem"] = {
  init: function () {
    this.appendValueInput("SRC")
      .setCheck([
        TYPES.REG,
        TYPES.IMM
      ])
      .appendField("movw");

    this.appendValueInput("DEST")
      .setCheck(TYPES.MEM)
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Copia registrador ou imediato para memória.");
  },
};
