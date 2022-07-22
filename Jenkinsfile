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
            steps {
		sh 'ls'
                echo 'Deploying....'
            }
        }
	    node {
			def remote = [:]
			remote.name = 'root'
			remote.host = '172.20.16.132'
			remote.password = '12'
			remote.allowAnyHosts = true
			stage(test) {
			
			}
		}
    }
}
