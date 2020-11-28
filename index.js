const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

// array of questions for user
const questions = () => {
	console.log(`
	===============
	README MARKDOWN
	===============
	`);
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name? (Required)',
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log('Please enter your name!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'github',
			message: 'What is your GitHub username? (Required)',
			validate: gitHubInput => {
				if (gitHubInput) {
					return true;
				} else {
					console.log('Please enter your GitHub username!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is your email address? (Required)',
			validate: emailInput => {
				if (emailInput) {
					return true;
				} else {
					console.log('Please enter your email!');
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmAbout',
			message:
				'Would you like to enter some information about yourself for an "About" section?',
			default: true
		},
		{
			type: 'input',
			name: 'about',
			message: 'Provide some information about yourself:',
			when: ({ confirmAbout }) => {
				if (confirmAbout) {
					return true;
				} else {
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project? (Required)',
			validate: titleInput => {
				if (titleInput) {
					return true;
				} else {
					console.log('Please enter a project name!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'website',
			message: 'Please provide a link to your published website:',
			validate: websiteInput => {
				if (websiteInput) {
					return true;
				} else {
					console.log('Please provide your published website link!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'repository',
			message: 'Please provide a link to your repository:',
			validate: repositoryInput => {
				if (repositoryInput) {
					return true;
				} else {
					console.log('Please provide your repository link!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'description',
			message: 'Please provide a thorough description and usage of your project:',
			validate: descriptionInput => {
				if (descriptionInput) {
					return true;
				} else {
					console.log('Please provide a description!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Describe the intallation process of your project:'
		},
		{
			type: 'checkbox',
			name: 'languages',
			message: 'What languages were used to create this project?',
			choices: ['HTML', 'CSS', 'Javascript', 'Node.js', 'jQuery'],
			validate: languagesInput => {
				if (languagesInput) {
					return true;
				} else {
					console.log('Please all languages that apply!');
					return false;
				}
			}
		},
		{
			type: 'list',
			name: 'licenses',
			message: 'Are there any licenses associated with this project?',
			choices: ['MIT', 'Eclipse', 'GNU', 'IBM', 'Mozilla'],
		},
		{
			type: 'input',
			name: 'contributers',
			message: 'List any contributers to this project:'
		}
	]);
};


questions()
	.then(generateMarkdown)
	.then(data => {
		// const pageMD = generateMarkdown(mData);

		fs.writeFile('./g-readme.md', data, err => {
			if (err) throw new Error(err);
		});
		console.log(
			'Your README is complete! Check it out g-readme.md to see the output!'
		);
	});




// const mData = {
// 	name: 'Nathan',
// 	email: 'nathan.potts41@gmail.com',
// 	github: 'nathan-potts41',
// 	title: 'README Generator',
// 	description:
// 		'Here is where the description of the project will go. It should be as descriptive as can possibly be.',
// 	confirmAbout: true,
// 	about:
// 		'Please feel free to call me Nathan. To share a little about who I am, I will start with my professional life. As a motivated and goal oriented individual I embrace challenges; strive to help others learn and develop; work collaboratively with teams; push myself to further develop my current skill set and expect to succeed. On a more personal note, I am also a husband to an incredible wife and fur-father to an amazing pup. I enjoy days spent on the golf course and continually learning new things.',
// 	languages: ['HTML', 'CSS'],
// 	repository: 'https://github.com/nathan-potts41',
// 	website: 'https://github.com/nathan-potts41',
// 	licenses: ['MIT']
// };