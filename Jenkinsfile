pipeline {

    stages {
          
        stage("Git Clone"){
         git credentialsId: 'git_hub_cred', url: 'https://github.com/mahouESPRIT/spring-jenkins-test.git'
           }
    
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }    
}
}
