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
            withKubeConfig([credentialsId: 'kubernetes']) {
                sh 'kubectl apply -f deploy.yaml'
                }
                }
                }
        
}
}
