import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["andw"] = {
  init: function () {
    this.appendValueInput("A")
      .setCheck(["reg", "mem"])
      .appendField("andw");

    this.appendValueInput("B")
      .setCheck(["reg", "mem"])
      .appendField(",");

    this.appendValueInput("DEST")
      .setCheck(["reg", "mem"])
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip(
      "ANDW: operação lógica AND entre A e B. Não aceita imediatos e não permite mem AND mem."
    );
  },

  validate: function (_, output) {
    const a = this.getInputTargetBlock("A");
    const b = this.getInputTargetBlock("B");

    if (!a || !b) return;

    const aType = a.outputConnection.check_[0];
    const bType = b.outputConnection.check_[0];

    if (aType === "mem" && bType === "mem") {
      reportError(this, "andw não permite memória AND memória.", output);
      return true;
    }

    return false;
  },
};
