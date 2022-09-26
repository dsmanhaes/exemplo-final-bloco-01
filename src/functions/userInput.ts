import PromptSync = require('prompt-sync');

function userInput (message: string): string {
  const prompt = PromptSync();
  
  return prompt(message);
}

export { userInput };
