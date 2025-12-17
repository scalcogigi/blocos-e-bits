import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["leaw"] = {
  init: function () {
    this.appendValueInput("CONST")
      .setCheck(["im"])
      .appendField("leaw");

    this.appendDummyInput().appendField(", %A");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);

    this.setTooltip("Carrega imediato em %A. Sempre escreve em %A.");
  },
};
