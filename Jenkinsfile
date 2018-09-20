// pipeline {
//     agent any
//     // agent {
//     //     docker {
//     //         image 'node:6-alpine'
//     //         args '-p 3000:3000 -p 5000:5000'
//     //     }
//     // }
//     environment {
//         CI = 'true'
//     }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh './scripts/test.sh'
//                 // sh './jenkins/scripts/test.sh'
//             }
//         }
//         stage('Deliver for development') {
//             when {
//                 branch 'develop'
//             }
//             steps {
//                 sh './scripts/develop.sh'
//                 // sh './jenkins/scripts/deliver-for-development.sh'
//                 // input message: 'Finished using the web site? (Click "Proceed" to continue)'
//                 // sh './jenkins/scripts/kill.sh'
//             }
//         }
//         stage('Deploy for production') {
//             when {
//                 branch 'master'
//             }
//             steps {
//                 sh './scripts/production.sh'
//                 // sh './jenkins/scripts/deploy-for-production.sh'
//                 // input message: 'Finished using the web site? (Click "Proceed" to continue)'
//                 // sh './jenkins/scripts/kill.sh'
//             }
//         }
//     }
// }

pipeline {
    stages {
        stage('Build') {
            node {
                checkout scm
            }
        }

        stage('Static Code Analysis') {
            node() {
                sh "echo 'Run Static Code Analysis'"
            }
        }

        stage('Unit Tests') {
            node() {
                sh "echo 'Run Tests'"
            }
        }

        stage('Acceptance Tests') {
            node() {
                sh "echo 'Run Acceptance Tests'"
            }
        }
    }
}