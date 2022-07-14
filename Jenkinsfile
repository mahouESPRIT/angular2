pipeline {
    agent {
         stage("Git Clone"){
        git credentialsId: 'git_hub_cred', url: 'https://github.com/mahouESPRIT/spring-jenkins-test.git'
    }  
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
