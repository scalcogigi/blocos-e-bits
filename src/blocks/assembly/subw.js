import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["subw"] = {
  init: function () {
    this.appendValueInput("A")
      .setCheck(["reg", "mem", "im"])
      .appendField("subw");

    this.appendValueInput("B")
      .setCheck(["reg", "mem", "im"])
      .appendField(",");

    this.appendValueInput("DEST")
      .setCheck(["reg", "mem"])
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip(
      "SUBW: calcula A - B e salva em DEST. Não permite mem - mem."
    );
  },

  validate: function (_, output) {
    const a = this.getInputTargetBlock("A");
    const b = this.getInputTargetBlock("B");

    if (!a || !b) return;

    const aType = a.outputConnection.check_[0];
    const bType = b.outputConnection.check_[0];

    if (aType === "mem" && bType === "mem") {
      reportError(this, "subw não permite memória - memória.", output);
      return true;
    }

    return false;
  },
};
