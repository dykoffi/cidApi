pipeline{
     agent {
        docker {
            image 'node'
        }
    }
    environment {
        SERVER_NAME "planetServer"
    }
    stages{
        stage("Install ciql in gloab mode"){
            steps{
                sh "npm i -g ciql" //installer ciql pour le deploiement
            }
        }

        stage("Deploy projet in ciql host"){
            steps{
                sh "ciql code publish $SERVER_NAME" //deployer sur le serveur ciql
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            
        }
    }
}