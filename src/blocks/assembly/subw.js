import * as Blockly from "blockly/core";
import { TYPES } from "../core/types.js";

Blockly.Blocks["subw"] = {
  init: function () {
    this.appendValueInput("A")
      .setCheck([TYPES.ALU_SRC_REG, TYPES.ALU_SRC_MEM])
      .appendField("subw");

    this.appendValueInput("B")
      .setCheck(TYPES.ALU_SRC_REG)
      .appendField(",");

    this.appendValueInput("DEST")
      .setCheck(TYPES.ALU_DEST)
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip(
      "SUBW: calcula A - B e salva em DEST. Não permite mem - mem."
    );
  },
};
