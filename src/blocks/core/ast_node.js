import * as Blockly from 'blockly/core';

Blockly.Blocks['ast_node'] = {
  init: function() {
    this.setOutput(true, "ast");
    this.setColour(0);
    this.setTooltip("Nó interno da AST.");
    this.setStyle('logic_blocks'); 
    this.setDeletable(false);
    this.setMovable(false);
  }
};


// base para validações