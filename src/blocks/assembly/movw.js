import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["movw"] = {
  init: function () {
    this.appendValueInput("SRC")
      .setCheck(["reg", "mem", "im"])
      .appendField("movw");

    this.appendValueInput("DEST")
      .setCheck(["reg", "mem"])
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);

    this.setTooltip("Copia SRC para DEST. Não permite im → im ou mem → mem.");
  },

  validate: function (workspace, output) {
    const src = this.getInputTargetBlock("SRC");
    const dest = this.getInputTargetBlock("DEST");

    if (!src || !dest) return;

    const srcType = src.outputConnection.check_[0];
    const destType = dest.outputConnection.check_[0];

    if (srcType === "mem" && destType === "mem") {
      reportError(this, "movw não permite memória → memória.", output);
      return true;
    }

    return false;
  },
};
