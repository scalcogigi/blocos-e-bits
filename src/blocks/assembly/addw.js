import * as Blockly from "blockly/core";
import { reportError } from "../../utils/error.js";

Blockly.Blocks["addw"] = {
  init: function () {
    this.appendValueInput("A")
      .setCheck(["reg", "mem", "im"])
      .appendField("addw");

    this.appendValueInput("B")
      .setCheck(["reg", "mem", "im"])
      .appendField(",");

    this.appendValueInput("DEST")
      .setCheck(["reg", "mem"])
      .appendField(",");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
  },

  validate: function (_, output) {
    const a = this.getInputTargetBlock("A");
    const b = this.getInputTargetBlock("B");
    const dest = this.getInputTargetBlock("DEST");

    if (!a || !b || !dest) return;

    const aType = a.outputConnection.check_[0];
    const bType = b.outputConnection.check_[0];

    if (aType === "mem" && bType === "mem") {
      reportError(this, "addw não permite mem + mem.", output);
      return true;
    }

    return false;
  },
};
