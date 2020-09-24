
# GEEB3

A guide to colaborate in the project.

## Git

First of all you need to have git installed.
Type the following command in the CMD

```bash
git --version
```

If a number shows up you can continue with the next steps. Else download it form [here](https://git-scm.com/).

## Hub

Hub is a tool to create Pull Requests. You can install it by copying the following commands in a Powert Shell terminal with admin rights.

```bash
Set-ExecutionPolicy AllSigned
```

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

```bash
choco install hub -y
```

Open a new terminal and type the following comand

```bash
hub --version
```

If a number shows up you can continue with the next steps.

## To download the code

If it is your first time working with the code follow this steps.

1. Create a folder and open the CMD in there.
2. Copy the following commands

```bash
git clone https://github.com/Einar-Lop/GEEB3.git
```

```bash
cd GEEB
```

```bash
git init
```

```bash
cd frontend
```

```bash
npm install
```

## Workflow

We will follow the next steps everytime we want to add a new feature.

1. Create a branch
2. Push your branch
3. Make a pull request

### Create a branch

```bash
git branch <Your name>
```

Example:

```bash
git branch Einar
```

### Move to your branch

```bash
git checkout <Your name>
```

Start coding, once you completed the feautre push your branch.

### Push your branch

To push your branch copy the following commands.

```bash
git add --all
```

```bash
git commit -m '<Short explanation of your feature>'
```

Example:

```bash
git commit -m 'New form for login interface'
```

```bash
git push --set-upstream origin <Your name>
```

### Create a Pull Request

```bash
hub pull-request -m "<Main Feature>" -m "<Description of feature>"
```

And that is all. Now all your code is in the repository. Once your branch is merged in to the master you will recive an e-mail.

## After your code has been merged

The fisrt step to start working in a new feauture is deleting your past branch. You will have to do it in the terminal and in the github repository in the website.

1. In the terminal

```bash
git checkout master
```

```bash
git branch -d <Your name>
```

2. In github

Go to this [link](https://github.com/Einar-Lop/GEEB.git).

1. Click on branches
2. Delete your branch with the purple sitcker that says MERGED

### Get the latest version of the code

To get the correct version of the codbase copy the following command.

```bash
git pull
```

```bash
cd frontend
```

```bash
npm install
```

Once you have it you can repeat this steps.

1. Create a branch
2. Push your branch
3. Make a pull request

Node version 12.18.4