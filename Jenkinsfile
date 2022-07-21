pipeline {
	agent {
		node {
			label '20.16.98'
		}
	}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
	    agent { label 'apache20'}
            steps {
		sh 'ls'
                echo 'Deploying....'
            }
        }
    }
}
