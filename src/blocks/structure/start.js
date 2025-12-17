import * as Blockly from 'blockly/core';

Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput().appendField("Início");
    this.appendStatementInput("BODY")
      .setCheck(null)
      .appendField("Código");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip("Ponto inicial do programa.");
  }
};