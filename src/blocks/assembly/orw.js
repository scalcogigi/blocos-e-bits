import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["orw"] = {
  init: function () {
    this.appendValueInput("A")
      .setCheck(["reg", "mem"])
      .appendField("orw");

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
      "ORW: operação lógica OR. Não aceita imediatos e não permite mem OR mem."
    );
  },

  validate: function (_, output) {
    const a = this.getInputTargetBlock("A");
    const b = this.getInputTargetBlock("B");

    if (!a || !b) return;

    const aType = a.outputConnection.check_[0];
    const bType = b.outputConnection.check_[0];

    if (aType === "mem" && bType === "mem") {
      reportError(this, "orw não permite memória OR memória.", output);
      return true;
    }

    return false;
  },
};
