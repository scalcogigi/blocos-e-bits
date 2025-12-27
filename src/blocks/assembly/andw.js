import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["andw"] = {
  init: function () {
    this.appendValueInput("A")
      .setCheck([TYPES.ALU_SRC_REG, TYPES.ALU_SRC_MEM])
      .appendField("andw");

    this.appendValueInput("B")
      .setCheck([TYPES.ALU_SRC_REG])
      .appendField(",");

    this.appendValueInput("DEST")
      .setCheck([TYPES.ALU_DEST])
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip(
      "ANDW: operação lógica AND entre A e B. Não aceita imediatos e não permite mem AND mem."
    );
  },
};
