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
			    remote.name = 'apache20'
			    remote.host = '172.20.16.132'
			    remote.user = 'root'
			    remote.password = '12'
			    remote.allowAnyHosts = true
			    sshPut remote: remote, from: 'araj.css', into: '.'
			    sh 'whoami'
			   }
		
            }
        }
	    
    }
}
