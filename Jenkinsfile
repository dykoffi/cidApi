pipeline{
    agent any
    environment {
        SERVER_NAME "planetServer"
    }
    stages{
        stage("A"){
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps{
                sh "npm i -g ciql" //installer ciql pour le deploiement
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