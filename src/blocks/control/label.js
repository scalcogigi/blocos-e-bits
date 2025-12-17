import * as Blockly from "blockly/core";

Blockly.Blocks["label"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("label")
      .appendField(new Blockly.FieldTextInput("LOOP"), "NAME");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip("Define um rótulo.");
  },
};
