import * as Blockly from 'blockly/core';

Blockly.Blocks['im'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("imediato")
      .appendField(
        new Blockly.FieldDropdown([
          ["$1", "$1"],
          ["$0", "$0"],
          ["$-1", "$-1"]
        ]),
        "VALUE"
      );
    this.setOutput(true, "im");
    this.setColour(160);
    this.setTooltip("Valores imediatos permitidos pela ISA ($1, $0 e $-1).");
  }
};

// ISA doesn't accept arbitrary immediates, addw/subw/movw no longer break
// and it removes the risk of writing something impossible
// immediates valids $1, $0, $-1