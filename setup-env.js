#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    name: 'SP_API_CLIENT_ID',
    message: 'Enter your SP-API Client ID:'
  },
  {
    name: 'SP_API_CLIENT_SECRET',
    message: 'Enter your SP-API Client Secret:'
  },
  {
    name: 'AWS_ACCESS_KEY_ID',
    message: 'Enter your AWS Access Key ID:'
  },
  {
    name: 'AWS_SECRET_ACCESS_KEY',
    message: 'Enter your AWS Secret Access Key:'
  },
  {
    name: 'SP_API_REFRESH_TOKEN',
    message: 'Enter your SP-API Refresh Token:'
  }
];

let envContent = '';

function askQuestion(index) {
  if (index >= questions.length) {
    writeFileSync('.env', envContent);
    console.log('\nEnvironment variables have been saved to .env file');
    rl.close();
    return;
  }

  const question = questions[index];
  rl.question(`${question.message} `, (answer) => {
    envContent += `${question.name}=${answer}\n`;
    askQuestion(index + 1);
  });
}

console.log('Setting up environment variables for Amazon SP-API...\n');
askQuestion(0);
