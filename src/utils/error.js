export function clearErrors(workspace) {
  workspace.getAllBlocks().forEach(block => {
    block.setWarningText(null);
    block.removeSelect();
  });
}

export function reportError(block, message, outputElement) {
  block.setWarningText(message);
  block.addSelect(); 
  outputElement.textContent = "Erro: " + message;
}
