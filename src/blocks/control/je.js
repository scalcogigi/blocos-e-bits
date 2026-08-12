import Blockly from '../../blockly.js';
import { TYPES } from "../core/types.js";

Blockly.Blocks["je"] = {
  init: function () {
    this.appendDummyInput().appendField("pula se igual a zero");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("JE: desvia para o endereço em %A se o registrador for igual a zero.");
  },
};