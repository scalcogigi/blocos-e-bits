import Blockly from '../../blockly.js';
import { TYPES } from "../core/types.js";

Blockly.Blocks["jle"] = {
  init: function () {
    this.appendDummyInput().appendField("pula se menor ou igual a zero");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("JLE: desvia para o endereço em %A se o registrador for menor ou igual a zero.");
  },
};


