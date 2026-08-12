import Blockly from '../../blockly.js';
import { TYPES } from "../core/types.js";

Blockly.Blocks["jl"] = {
  init: function () {
    this.appendDummyInput().appendField("pula se menor que zero");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("JL: desvia para o endereço em %A se o registrador for menor que zero.");
  },
};


