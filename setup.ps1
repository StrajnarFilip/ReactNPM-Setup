function install_node {
    # Invoke-WebRequest "" -OutFile "node_install.ps1"
    # Write-Host "If you'd like to install Node and NPM, you can use 'node_install.ps1' script."
    Write-Host "Error."
}

try {
    npm init -y
    npm install typescript
    npm install express
    npm install @types/node
    npm install @types/react
    npm install @types/react-dom
    npx tsc
    node .\index.js
}
catch {
    install_node
}