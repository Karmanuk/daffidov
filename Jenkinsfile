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
		    script { 
			    def remote = [:]
			    withCredentials([sshUserPrivateKey(credentialsId: 'webserv', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'root')])
			    sshPut remote: remote, from: '*', into: '.'
			   }
		
            }
        }
	    
    }
}
