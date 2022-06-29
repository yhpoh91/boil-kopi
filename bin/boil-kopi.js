#! /usr/bin/env node

'use strict';

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get Project Name
const getProjectName = () => {
  if (process.argv.length < 3) {
    console.log('Please provide a name for your project');
    process.exit(1);
  }
  const projectName = process.argv[2];
  console.log(`Project Name: ${projectName}`);
  return projectName;
}

// Get Project Path
const getProjectPath = (projectName) => {
  const currentPath = process.cwd();
  const projectPath = path.join(currentPath, projectName);
  console.log(`Project Path: ${projectPath}`);
  return projectPath;
}


// Create Project Directory
const createProjectDirectory = (projectName, projectPath) => {
  try {
    console.log(`Creating project directory...`);
    fs.mkdirSync(projectPath);
  } catch (error) {
    if (error.code === 'EEXIST') {
      console.error(`There is already a file or project with name ${projectName} in the current directory`);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}


// Download files
const downloadFromRepo = async (projectName) => {
  try {
    const gitRepo = 'https://github.com/yhpoh91/boil-kopi.git';
    console.log('Downloading...');
    execSync(`git clone ${gitRepo} ${projectName}`);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

// Modify project
const modifyProject = (projectPath, projectName) => {
  console.log('Modifying project...');
  const filePath = path.join(projectPath, 'package.json');

  // Read package.json
  const packageBuffer = fs.readFileSync(filePath);
  const packageJson = JSON.parse(packageBuffer);

  packageJson.name = projectName;
  packageJson.version = '1.0.0';
  delete packageJson.bin;

  fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));
}

// Install dependencies
const installDependencies = async (projectPath) => {
  try {
    console.log('Installing dependencies...');
    execSync('npm install');
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

// Clean directory
const cleanDirectory = (projectPath) => {
  console.log('Cleaning project directory...');
  execSync('npx rimraf ./.git');
  fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true });
}

async function main() {
  try {
    const projectName = getProjectName();
    const projectPath = getProjectPath(projectName);
    createProjectDirectory(projectName, projectPath);
    await downloadFromRepo(projectName);

    // Go into project directory
    process.chdir(projectPath);
    
    modifyProject(projectPath, projectName);
    await installDependencies();
    cleanDirectory(projectPath);

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

main();
