pipeline {
    agent any
    environment {
        DEPLOY_DIR = 'C:\\inetpub\\wwwroot' // IIS web root
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning Simon Says repo from GitHub...'
                git branch: 'main', url: 'https://github.com/username/simon-says-game.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Build Step: Verify workspace files'
                bat 'dir'
            }
        }
        stage('Test') {
            steps {
                echo 'Validate HTML syntax'
                bat 'tidy -q -e index.html'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying Simon Says game to IIS folder"
                bat "xcopy /Y index.html ${DEPLOY_DIR}\\"
                bat "xcopy /Y style.css ${DEPLOY_DIR}\\"
                bat "xcopy /Y app.js ${DEPLOY_DIR}\\"
            }
        }
    }
    post {
        success {
            echo 'Pipeline finished successfully! Visit: http://localhost/index.html'
        }
        failure {
            echo 'Pipeline failed! Check build logs.'
        }
    }
}
