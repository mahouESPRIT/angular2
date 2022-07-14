node {
  tools {nodejs "NodeJSinstaller"}
      stage('Checkout SCM'){
           git branch : 'main', url:'https://github.com/mahouESPRIT/angular2.git'
      }
      
      stage('Install node modules'){
             sh "npm install"
      }
      stage("Build"){
             sh "npm run build --prod"
      }
      
}
