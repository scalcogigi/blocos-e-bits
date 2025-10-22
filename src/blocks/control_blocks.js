import * as Blockly from 'blockly/core';

// LABEL
Blockly.Blocks['label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("label")
        .appendField(new Blockly.FieldTextInput("LOOP"), "LABEL_NAME");
    this.setNextStatement(true);
    this.setColour(180);
  }
};

// JUMP
Blockly.Blocks['jump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("jump to")
        .appendField(new Blockly.FieldTextInput("END"), "TARGET");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }
};
