pipeline {
    stages { 
        stage("Git Clone"){
            git credentialsId: 'git-cred', url: 'https://github.com/mahouESPRIT/angular2.git'
           }
      stage('Build'){
                sh 'npm install'
            
        }    
    }
}
