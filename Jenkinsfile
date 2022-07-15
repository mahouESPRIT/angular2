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
     stage("Docker build"){
       steps {
        sh 'docker version'
        sh 'docker build -t esprit .'
        sh 'docker image list'
        sh 'docker tag esprit ayoubmahou/esprit:latest'
        
        withCredentials([string(credentialsId: 'docker-cred', variable: 'PASSWORD')]) {
            sh 'docker login -u ayoubmahou -p $PASSWORD'
        }
       }
  }
    stage("Push Image to Docker Hub"){
      steps {
       sh 'docker push  ayoubmahou/esprit:latest'
    }
    }
     stage('Deploying App to Kubernetes') {
       steps {
        withCredentials([
            string(credentialsId: 'kubernetes', variable: 'api_token')
            ]) {
             sh 'kubectl --token $api_token --server https://192.168.59.101:8443 --insecure-skip-tls-verify=true apply -f deploy.yaml '
               }
            
    }
     }
}
}
