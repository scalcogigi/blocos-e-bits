import { clearErrors, reportError } from './error.js';

export function addValidationListener(workspace) {
  workspace.addChangeListener(() => {
    clearErrors(workspace);

    const blocks = workspace.getAllBlocks(false);

    for (const block of blocks) {
      if (typeof block.validate === 'function') {
        const error = block.validate(workspace, output);
        if (error) break; 
      }
    }
  });
}
