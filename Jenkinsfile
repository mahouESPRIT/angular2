pipeline {
  agent any

  tools {nodejs "NodeJSinstaller"}

  stages {
    stage('Checkout SCM') {
      steps{
      git branch : 'main', url:'https://github.com/mahouESPRIT/angular2.git'
       }
    }
    stage('Install node modules') {
      steps {
        sh 'npm install'
      }
    }
    stage('npm build') {
      steps {
        sh 'npm run build --prod'
      }
    }
  }
}
