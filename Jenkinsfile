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
			  
			    remote.host = '172.20.16.132'
			    remote.user = 'root'
			    remote.password = '12'
			    whoami
			   }
		
            }
        }
	    
    }
}
