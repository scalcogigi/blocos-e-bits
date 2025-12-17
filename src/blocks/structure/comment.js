import * as Blockly from 'blockly/core';

Blockly.Blocks['comment'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("#")
      .appendField(new Blockly.FieldTextInput("comentário"), "TEXT");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(40);
    this.setTooltip("Comentário no código.");
  }
};
