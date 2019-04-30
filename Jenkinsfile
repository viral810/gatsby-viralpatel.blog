pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
apt install nodejs npm
&& npm run build'''
      }
    }
  }
}