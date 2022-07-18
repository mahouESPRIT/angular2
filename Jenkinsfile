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
            withKubeConfig([credentialsId: 'kubeconfig']) {
                sh 'kubectl apply -f deploy.yaml'
                }
                }
                }
        
}
   environment {
        EMAIL_TO = 'madmen1910@gmail.com'
    }
  post {
        failure {
            emailext body: 'Check console output at $BUILD_URL to view the results. \n\n ${CHANGES} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
                    to: "${EMAIL_TO}", 
                    subject: 'Build failed in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
        }
}
}
