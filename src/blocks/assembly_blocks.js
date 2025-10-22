import * as Blockly from 'blockly/core';

// MOVW
Blockly.Blocks['movw'] = {
  init: function() {
    this.appendValueInput("SRC")
        .setCheck("String")
        .appendField("movw");
    this.appendValueInput("DEST")
        .setCheck("String")
        .appendField(",");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Copia o valor da origem para o destino.");
  }
};

// ADDW
Blockly.Blocks['addw'] = {
  init: function() {
    this.appendValueInput("A").setCheck("String").appendField("addw");
    this.appendValueInput("B").setCheck("String").appendField(",");
    this.appendValueInput("DEST").setCheck("String").appendField(",");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Soma dois valores e armazena no destino.");
  }
};

// INCW
Blockly.Blocks['incw'] = {
  init: function() {
    this.appendValueInput("REG")
        .setCheck("String")
        .appendField("incw");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
  }
};
