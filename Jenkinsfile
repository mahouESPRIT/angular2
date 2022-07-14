node {
    stage("Git Clone"){
        git credentialsId: 'git_hub_cred', url: 'https://github.com/mahouESPRIT/angular2.git'
    }  
    
     stage('npm install') {
       sh 'npm install'
    }
     stage('ng test') {
           sh 'ng test --progress=false --watch false'
        }
    stage('ng lint') {
         sh 'ng lint'
      }
  stage('ng build') {
         sh 'ng build --prod --aot --sm --progress=false'
      }
    
    stage("Docker build"){
        sh 'docker version'
        sh 'docker build -t adactim .'
        sh 'docker image list'
        sh 'docker tag adactim ayoubmahou/adactim:latest'
    }
    withCredentials([string(credentialsId: 'docker-cred', variable: 'PASSWORD')]) {
        sh 'docker login -u ayoubmahou -p $PASSWORD'
    }

    stage("Push Image to Docker Hub"){
        sh 'docker push  ayoubmahou/adactim:latest'
    }
}
