#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');

console.log('Vault Profile Switcher');

const homeDir = process.env['HOME']
const defaultProfileChoice = 'default';

const promptProfileChoice = (data) => {
  const profiles = Object.keys(data);
  const count = profiles.length;

  if (count == 0) {
    console.log('No profiles found.');

    return;
  }

  if (process.argv[2]) {
    const choice = { 'profile': process.argv[2] }
    return Promise.all([choice, data])
  }
  else {
    const profileChoice = [
      {
        type: 'list',
        name: 'profile',
        message: 'Choose a profile',
        choices: profiles,
        default: process.env.AWS_PROFILE || defaultProfileChoice
      }
    ];

    return Promise.all([inquirer.prompt(profileChoice), data]);
  }
}

const readProfiles = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${homeDir}/.vault/config`, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const writeToConfig = (result) => {
  const profileChoice = result[0]['profile'];
  const profiles = result[1];
  if (!profiles[profileChoice]) {
    console.log(`Profile [${profileChoice}] not found.`);
    return
  }
  const profileValue = `${profileChoice} ${profiles[profileChoice]['address'].trim()} ${profiles[profileChoice]['token'].trim()}`;

  console.log(`Change profile [${profileChoice}]`);
  return new Promise((resolve, reject) => {
    fs.writeFile(`${homeDir}/.vaultp`, profileValue, { flag: 'w' }, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

readProfiles()
  .then(promptProfileChoice)
  .then(writeToConfig)
  .catch(error => {
    console.log('Error:', error);
    process.exit(1);
  });
