import Blockly from '../../blockly.js';
import { TYPES } from "../core/types.js";

Blockly.Blocks["jne"] = {
  init: function () {
    this.appendDummyInput().appendField("pula se diferente de zero");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("JNE: desvia para o endereço em %A se o registrador for diferente de zero.");
  },
};


